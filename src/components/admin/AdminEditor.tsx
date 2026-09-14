"use client";

import { useRef, useState } from "react";
import { useRouter } from "next/navigation";
import type {
  Experience,
  InfraProject,
  WebProject,
  StackGroup,
  PortfolioContent,
} from "@/lib/content";

type OtherWebProject = PortfolioContent["otherWebProjects"][number];
type LanguageItem = PortfolioContent["languages"][number];
type EducationItem = PortfolioContent["education"][number];
type CertificationItem = PortfolioContent["certifications"][number];

const emptyExperience: Experience = { company: "", location: "", role: "", period: "", highlights: [] };
const emptyInfraProject: InfraProject = { name: "", description: "", tags: [] };
const emptyWebProject: WebProject = { name: "", description: "", stack: [] };
const emptyOtherWebProject: OtherWebProject = { name: "", description: "", stack: [] };
const emptyStackGroup: StackGroup = { label: "", items: [] };
const emptyLanguage: LanguageItem = { language: "", level: "" };
const emptyEducation: EducationItem = { title: "", institution: "", period: "" };
const emptyCertification: CertificationItem = { name: "", year: "", url: "" };

function cleanArr(arr: string[]): string[] {
  return arr.map((s) => s.trim()).filter(Boolean);
}

function sanitizeContent(c: PortfolioContent): PortfolioContent {
  return {
    ...c,
    experience: c.experience.map((e) => ({
      ...e,
      highlights: cleanArr(e.highlights),
      scope: e.scope ? cleanArr(e.scope) : e.scope,
    })),
    infraProjects: c.infraProjects.map((p) => ({ ...p, tags: cleanArr(p.tags) })),
    webProjects: c.webProjects.map((p) => ({ ...p, stack: cleanArr(p.stack) })),
    otherWebProjects: c.otherWebProjects.map((p) => ({ ...p, stack: cleanArr(p.stack) })),
    stackGroups: c.stackGroups.map((g) => ({ ...g, items: cleanArr(g.items) })),
    learning: cleanArr(c.learning),
  };
}

function Field({
  label,
  value,
  onChange,
  mono,
}: {
  label: string;
  value: string;
  onChange: (v: string) => void;
  mono?: boolean;
}) {
  return (
    <label className="block">
      <span className="mb-1 block text-xs font-medium text-muted">{label}</span>
      <input
        type="text"
        value={value}
        onChange={(e) => onChange(e.target.value)}
        className={`w-full rounded-md border border-border bg-background px-3 py-2 text-sm text-foreground outline-none focus:border-accent ${mono ? "font-mono" : ""}`}
      />
    </label>
  );
}

function TextArea({
  label,
  value,
  onChange,
  rows = 3,
}: {
  label: string;
  value: string;
  onChange: (v: string) => void;
  rows?: number;
}) {
  return (
    <label className="block">
      <span className="mb-1 block text-xs font-medium text-muted">{label}</span>
      <textarea
        value={value}
        onChange={(e) => onChange(e.target.value)}
        rows={rows}
        className="w-full rounded-md border border-border bg-background px-3 py-2 text-sm text-foreground outline-none focus:border-accent"
      />
    </label>
  );
}

function LinesField({
  label,
  value,
  onChange,
}: {
  label: string;
  value: string[];
  onChange: (v: string[]) => void;
}) {
  return (
    <label className="block">
      <span className="mb-1 block text-xs font-medium text-muted">{label} <span className="text-muted/60">(una por línea)</span></span>
      <textarea
        value={value.join("\n")}
        onChange={(e) => onChange(e.target.value.split("\n"))}
        rows={Math.max(3, value.length + 1)}
        className="w-full rounded-md border border-border bg-background px-3 py-2 text-sm text-foreground outline-none focus:border-accent"
      />
    </label>
  );
}

function TagsField({
  label,
  value,
  onChange,
}: {
  label: string;
  value: string[];
  onChange: (v: string[]) => void;
}) {
  return (
    <label className="block">
      <span className="mb-1 block text-xs font-medium text-muted">{label} <span className="text-muted/60">(separado por comas)</span></span>
      <input
        type="text"
        value={value.join(", ")}
        onChange={(e) => onChange(e.target.value.split(","))}
        className="w-full rounded-md border border-border bg-background px-3 py-2 text-sm text-foreground outline-none focus:border-accent"
      />
    </label>
  );
}

function ImageField({
  label,
  value,
  onChange,
}: {
  label: string;
  value?: string;
  onChange: (v: string | undefined) => void;
}) {
  const [uploading, setUploading] = useState(false);
  const [error, setError] = useState<string | null>(null);
  const inputRef = useRef<HTMLInputElement>(null);

  async function handleFile(e: React.ChangeEvent<HTMLInputElement>) {
    const file = e.target.files?.[0];
    if (!file) return;
    setUploading(true);
    setError(null);
    try {
      const fd = new FormData();
      fd.append("file", file);
      const res = await fetch("/api/admin/upload", { method: "POST", body: fd });
      const data = await res.json();
      if (!res.ok) throw new Error(data.error ?? "Error al subir la imagen");
      onChange(data.url);
    } catch (err) {
      setError(err instanceof Error ? err.message : "Error al subir la imagen");
    } finally {
      setUploading(false);
      if (inputRef.current) inputRef.current.value = "";
    }
  }

  return (
    <div>
      <span className="mb-1 block text-xs font-medium text-muted">{label}</span>
      {value && (
        // eslint-disable-next-line @next/next/no-img-element
        <img src={value} alt="" className="mb-2 h-32 w-full rounded-md border border-border object-cover" />
      )}
      <div className="flex flex-wrap items-center gap-3">
        <input
          ref={inputRef}
          type="file"
          accept="image/*"
          onChange={handleFile}
          disabled={uploading}
          className="text-xs text-muted"
        />
        {uploading && <span className="text-xs text-muted">Subiendo…</span>}
        {value && (
          <button
            type="button"
            onClick={() => onChange(undefined)}
            className="text-xs text-red-400 hover:underline"
          >
            Quitar
          </button>
        )}
      </div>
      {error && <p className="mt-1 text-xs text-red-400">{error}</p>}
    </div>
  );
}

function ItemCard({
  title,
  onRemove,
  children,
}: {
  title: string;
  onRemove: () => void;
  children: React.ReactNode;
}) {
  return (
    <div className="rounded-lg border border-border p-4">
      <div className="mb-3 flex items-center justify-between gap-2">
        <span className="font-mono text-xs uppercase tracking-wide text-muted">{title || "(sin título)"}</span>
        <button type="button" onClick={onRemove} className="text-xs text-red-400 hover:underline">
          Eliminar
        </button>
      </div>
      <div className="flex flex-col gap-3">{children}</div>
    </div>
  );
}

function AdminSection({
  index,
  title,
  children,
}: {
  index: string;
  title: string;
  children: React.ReactNode;
}) {
  return (
    <details open className="rounded-lg border border-border bg-surface">
      <summary className="cursor-pointer select-none px-5 py-4 text-sm font-semibold text-foreground">
        <span className="mr-2 font-mono text-xs text-accent">{index}</span>
        {title}
      </summary>
      <div className="flex flex-col gap-4 border-t border-border px-5 py-5">{children}</div>
    </details>
  );
}

export function AdminEditor({ initialContent }: { initialContent: PortfolioContent }) {
  const router = useRouter();
  const [content, setContent] = useState<PortfolioContent>(initialContent);
  const [saving, setSaving] = useState(false);
  const [status, setStatus] = useState<{ type: "success" | "error"; message: string } | null>(null);

  async function handleSave() {
    setSaving(true);
    setStatus(null);
    try {
      const clean = sanitizeContent(content);
      const res = await fetch("/api/admin/content", {
        method: "PUT",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(clean),
      });
      const data = await res.json();
      if (!res.ok) throw new Error(data.error ?? "Error al guardar");
      setContent(clean);
      setStatus({ type: "success", message: "Guardado. Los cambios ya están en el sitio." });
    } catch (err) {
      setStatus({ type: "error", message: err instanceof Error ? err.message : "Error al guardar" });
    } finally {
      setSaving(false);
    }
  }

  async function handleLogout() {
    await fetch("/api/admin/session", { method: "DELETE" });
    router.push("/admin/login");
    router.refresh();
  }

  return (
    <div className="min-h-screen bg-background pb-24">
      <header className="sticky top-0 z-50 flex items-center justify-between border-b border-border bg-background/95 px-6 py-4 backdrop-blur">
        <div>
          <h1 className="text-sm font-semibold text-foreground">Panel de administración</h1>
          {status && (
            <p className={`text-xs ${status.type === "success" ? "text-accent" : "text-red-400"}`}>
              {status.message}
            </p>
          )}
        </div>
        <div className="flex gap-3">
          <a
            href="/"
            target="_blank"
            rel="noreferrer"
            className="rounded-md border border-border px-3 py-1.5 text-xs font-medium text-foreground hover:border-accent/50"
          >
            Ver sitio
          </a>
          <button
            type="button"
            onClick={handleLogout}
            className="rounded-md border border-border px-3 py-1.5 text-xs font-medium text-foreground hover:border-accent/50"
          >
            Cerrar sesión
          </button>
          <button
            type="button"
            onClick={handleSave}
            disabled={saving}
            className="rounded-md bg-accent px-4 py-1.5 text-xs font-medium text-background transition-opacity hover:opacity-90 disabled:opacity-50"
          >
            {saving ? "Guardando…" : "Guardar cambios"}
          </button>
        </div>
      </header>

      <main className="mx-auto flex max-w-3xl flex-col gap-6 px-6 py-8">
        <AdminSection index="00" title="Identidad">
          <Field label="Nombre" value={content.identity.name} onChange={(v) => setContent({ ...content, identity: { ...content.identity, name: v } })} />
          <Field label="Alias" value={content.identity.alias} onChange={(v) => setContent({ ...content, identity: { ...content.identity, alias: v } })} />
          <Field label="Rol / posicionamiento" value={content.identity.role} onChange={(v) => setContent({ ...content, identity: { ...content.identity, role: v } })} />
          <Field label="Ubicación" value={content.identity.location} onChange={(v) => setContent({ ...content, identity: { ...content.identity, location: v } })} />
          <Field label="Reubicación" value={content.identity.relocation} onChange={(v) => setContent({ ...content, identity: { ...content.identity, relocation: v } })} />
          <TextArea label="Resumen (hero)" rows={4} value={content.identity.summary} onChange={(v) => setContent({ ...content, identity: { ...content.identity, summary: v } })} />
          <Field mono label="Email" value={content.identity.email} onChange={(v) => setContent({ ...content, identity: { ...content.identity, email: v } })} />
          <Field mono label="Teléfono" value={content.identity.phone} onChange={(v) => setContent({ ...content, identity: { ...content.identity, phone: v } })} />
          <Field mono label="LinkedIn" value={content.identity.linkedin} onChange={(v) => setContent({ ...content, identity: { ...content.identity, linkedin: v } })} />
        </AdminSection>

        <AdminSection index="01" title="Experiencia profesional">
          {content.experience.map((job, i) => (
            <ItemCard
              key={i}
              title={job.company}
              onRemove={() => setContent({ ...content, experience: content.experience.filter((_, j) => j !== i) })}
            >
              <Field label="Empresa" value={job.company} onChange={(v) => setContent({ ...content, experience: content.experience.map((e, j) => (j === i ? { ...e, company: v } : e)) })} />
              <Field label="Ubicación" value={job.location} onChange={(v) => setContent({ ...content, experience: content.experience.map((e, j) => (j === i ? { ...e, location: v } : e)) })} />
              <Field label="Rol" value={job.role} onChange={(v) => setContent({ ...content, experience: content.experience.map((e, j) => (j === i ? { ...e, role: v } : e)) })} />
              <Field label="Período" value={job.period} onChange={(v) => setContent({ ...content, experience: content.experience.map((e, j) => (j === i ? { ...e, period: v } : e)) })} />
              <TextArea label="Contexto (opcional)" rows={2} value={job.context ?? ""} onChange={(v) => setContent({ ...content, experience: content.experience.map((e, j) => (j === i ? { ...e, context: v } : e)) })} />
              <LinesField label="Logros" value={job.highlights} onChange={(v) => setContent({ ...content, experience: content.experience.map((e, j) => (j === i ? { ...e, highlights: v } : e)) })} />
              <LinesField label="Alcance (opcional)" value={job.scope ?? []} onChange={(v) => setContent({ ...content, experience: content.experience.map((e, j) => (j === i ? { ...e, scope: v } : e)) })} />
              <Field label="Nota (opcional)" value={job.note ?? ""} onChange={(v) => setContent({ ...content, experience: content.experience.map((e, j) => (j === i ? { ...e, note: v } : e)) })} />
            </ItemCard>
          ))}
          <button
            type="button"
            onClick={() => setContent({ ...content, experience: [...content.experience, { ...emptyExperience }] })}
            className="self-start rounded-md border border-dashed border-border px-3 py-1.5 text-xs text-muted hover:border-accent/50 hover:text-accent"
          >
            + Agregar experiencia
          </button>
        </AdminSection>

        <AdminSection index="02" title="Proyectos de infraestructura">
          {content.infraProjects.map((p, i) => (
            <ItemCard
              key={i}
              title={p.name}
              onRemove={() => setContent({ ...content, infraProjects: content.infraProjects.filter((_, j) => j !== i) })}
            >
              <Field label="Nombre" value={p.name} onChange={(v) => setContent({ ...content, infraProjects: content.infraProjects.map((x, j) => (j === i ? { ...x, name: v } : x)) })} />
              <TextArea label="Descripción" rows={3} value={p.description} onChange={(v) => setContent({ ...content, infraProjects: content.infraProjects.map((x, j) => (j === i ? { ...x, description: v } : x)) })} />
              <TagsField label="Tags" value={p.tags} onChange={(v) => setContent({ ...content, infraProjects: content.infraProjects.map((x, j) => (j === i ? { ...x, tags: v } : x)) })} />
              <label className="flex items-center gap-2 text-xs text-muted">
                <input
                  type="checkbox"
                  checked={p.status === "in-progress"}
                  onChange={(e) => setContent({ ...content, infraProjects: content.infraProjects.map((x, j) => (j === i ? { ...x, status: e.target.checked ? "in-progress" : undefined } : x)) })}
                />
                En progreso
              </label>
              <ImageField label="Imagen (opcional)" value={p.image} onChange={(v) => setContent({ ...content, infraProjects: content.infraProjects.map((x, j) => (j === i ? { ...x, image: v } : x)) })} />
            </ItemCard>
          ))}
          <button
            type="button"
            onClick={() => setContent({ ...content, infraProjects: [...content.infraProjects, { ...emptyInfraProject }] })}
            className="self-start rounded-md border border-dashed border-border px-3 py-1.5 text-xs text-muted hover:border-accent/50 hover:text-accent"
          >
            + Agregar proyecto de infraestructura
          </button>
        </AdminSection>

        <AdminSection index="03" title="Proyectos de desarrollo web">
          {content.webProjects.map((p, i) => (
            <ItemCard
              key={i}
              title={p.name}
              onRemove={() => setContent({ ...content, webProjects: content.webProjects.filter((_, j) => j !== i) })}
            >
              <Field label="Nombre" value={p.name} onChange={(v) => setContent({ ...content, webProjects: content.webProjects.map((x, j) => (j === i ? { ...x, name: v } : x)) })} />
              <Field label="URL (opcional)" value={p.url ?? ""} onChange={(v) => setContent({ ...content, webProjects: content.webProjects.map((x, j) => (j === i ? { ...x, url: v } : x)) })} />
              <TextArea label="Descripción" rows={3} value={p.description} onChange={(v) => setContent({ ...content, webProjects: content.webProjects.map((x, j) => (j === i ? { ...x, description: v } : x)) })} />
              <TagsField label="Stack" value={p.stack} onChange={(v) => setContent({ ...content, webProjects: content.webProjects.map((x, j) => (j === i ? { ...x, stack: v } : x)) })} />
              <Field label="Disclaimer (opcional)" value={p.disclaimer ?? ""} onChange={(v) => setContent({ ...content, webProjects: content.webProjects.map((x, j) => (j === i ? { ...x, disclaimer: v } : x)) })} />
              <ImageField label="Imagen del proyecto" value={p.image} onChange={(v) => setContent({ ...content, webProjects: content.webProjects.map((x, j) => (j === i ? { ...x, image: v } : x)) })} />
            </ItemCard>
          ))}
          <button
            type="button"
            onClick={() => setContent({ ...content, webProjects: [...content.webProjects, { ...emptyWebProject }] })}
            className="self-start rounded-md border border-dashed border-border px-3 py-1.5 text-xs text-muted hover:border-accent/50 hover:text-accent"
          >
            + Agregar proyecto web
          </button>

          <p className="mt-2 font-mono text-xs uppercase tracking-wide text-muted">Otros proyectos</p>
          {content.otherWebProjects.map((p, i) => (
            <ItemCard
              key={i}
              title={p.name}
              onRemove={() => setContent({ ...content, otherWebProjects: content.otherWebProjects.filter((_, j) => j !== i) })}
            >
              <Field label="Nombre" value={p.name} onChange={(v) => setContent({ ...content, otherWebProjects: content.otherWebProjects.map((x, j) => (j === i ? { ...x, name: v } : x)) })} />
              <TextArea label="Descripción" rows={2} value={p.description} onChange={(v) => setContent({ ...content, otherWebProjects: content.otherWebProjects.map((x, j) => (j === i ? { ...x, description: v } : x)) })} />
              <TagsField label="Stack" value={p.stack} onChange={(v) => setContent({ ...content, otherWebProjects: content.otherWebProjects.map((x, j) => (j === i ? { ...x, stack: v } : x)) })} />
            </ItemCard>
          ))}
          <button
            type="button"
            onClick={() => setContent({ ...content, otherWebProjects: [...content.otherWebProjects, { ...emptyOtherWebProject }] })}
            className="self-start rounded-md border border-dashed border-border px-3 py-1.5 text-xs text-muted hover:border-accent/50 hover:text-accent"
          >
            + Agregar otro proyecto
          </button>
        </AdminSection>

        <AdminSection index="04" title="Stack y herramientas">
          {content.stackGroups.map((g, i) => (
            <ItemCard
              key={i}
              title={g.label}
              onRemove={() => setContent({ ...content, stackGroups: content.stackGroups.filter((_, j) => j !== i) })}
            >
              <Field label="Categoría" value={g.label} onChange={(v) => setContent({ ...content, stackGroups: content.stackGroups.map((x, j) => (j === i ? { ...x, label: v } : x)) })} />
              <TagsField label="Items" value={g.items} onChange={(v) => setContent({ ...content, stackGroups: content.stackGroups.map((x, j) => (j === i ? { ...x, items: v } : x)) })} />
            </ItemCard>
          ))}
          <button
            type="button"
            onClick={() => setContent({ ...content, stackGroups: [...content.stackGroups, { ...emptyStackGroup }] })}
            className="self-start rounded-md border border-dashed border-border px-3 py-1.5 text-xs text-muted hover:border-accent/50 hover:text-accent"
          >
            + Agregar categoría
          </button>
          <LinesField label="En aprendizaje" value={content.learning} onChange={(v) => setContent({ ...content, learning: v })} />
        </AdminSection>

        <AdminSection index="05" title="Formación y certificaciones">
          <p className="font-mono text-xs uppercase tracking-wide text-muted">Idiomas</p>
          {content.languages.map((l, i) => (
            <ItemCard
              key={i}
              title={l.language}
              onRemove={() => setContent({ ...content, languages: content.languages.filter((_, j) => j !== i) })}
            >
              <Field label="Idioma" value={l.language} onChange={(v) => setContent({ ...content, languages: content.languages.map((x, j) => (j === i ? { ...x, language: v } : x)) })} />
              <Field label="Nivel" value={l.level} onChange={(v) => setContent({ ...content, languages: content.languages.map((x, j) => (j === i ? { ...x, level: v } : x)) })} />
            </ItemCard>
          ))}
          <button
            type="button"
            onClick={() => setContent({ ...content, languages: [...content.languages, { ...emptyLanguage }] })}
            className="self-start rounded-md border border-dashed border-border px-3 py-1.5 text-xs text-muted hover:border-accent/50 hover:text-accent"
          >
            + Agregar idioma
          </button>

          <p className="mt-2 font-mono text-xs uppercase tracking-wide text-muted">Formación</p>
          {content.education.map((e, i) => (
            <ItemCard
              key={i}
              title={e.title}
              onRemove={() => setContent({ ...content, education: content.education.filter((_, j) => j !== i) })}
            >
              <Field label="Título" value={e.title} onChange={(v) => setContent({ ...content, education: content.education.map((x, j) => (j === i ? { ...x, title: v } : x)) })} />
              <Field label="Institución" value={e.institution} onChange={(v) => setContent({ ...content, education: content.education.map((x, j) => (j === i ? { ...x, institution: v } : x)) })} />
              <Field label="Período" value={e.period} onChange={(v) => setContent({ ...content, education: content.education.map((x, j) => (j === i ? { ...x, period: v } : x)) })} />
            </ItemCard>
          ))}
          <button
            type="button"
            onClick={() => setContent({ ...content, education: [...content.education, { ...emptyEducation }] })}
            className="self-start rounded-md border border-dashed border-border px-3 py-1.5 text-xs text-muted hover:border-accent/50 hover:text-accent"
          >
            + Agregar formación
          </button>

          <p className="mt-2 font-mono text-xs uppercase tracking-wide text-muted">Certificaciones</p>
          {content.certifications.map((c, i) => (
            <ItemCard
              key={i}
              title={c.name}
              onRemove={() => setContent({ ...content, certifications: content.certifications.filter((_, j) => j !== i) })}
            >
              <Field label="Nombre" value={c.name} onChange={(v) => setContent({ ...content, certifications: content.certifications.map((x, j) => (j === i ? { ...x, name: v } : x)) })} />
              <Field label="Año" value={c.year} onChange={(v) => setContent({ ...content, certifications: content.certifications.map((x, j) => (j === i ? { ...x, year: v } : x)) })} />
              <Field label="URL (opcional)" value={c.url ?? ""} onChange={(v) => setContent({ ...content, certifications: content.certifications.map((x, j) => (j === i ? { ...x, url: v } : x)) })} />
            </ItemCard>
          ))}
          <button
            type="button"
            onClick={() => setContent({ ...content, certifications: [...content.certifications, { ...emptyCertification }] })}
            className="self-start rounded-md border border-dashed border-border px-3 py-1.5 text-xs text-muted hover:border-accent/50 hover:text-accent"
          >
            + Agregar certificación
          </button>
        </AdminSection>
      </main>
    </div>
  );
}
