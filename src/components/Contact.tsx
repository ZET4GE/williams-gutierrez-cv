import { identity } from "@/data/profile";

export function Contact() {
  return (
    <section id="contacto" className="mx-auto w-full max-w-4xl px-6 py-20 sm:py-24">
      <div className="mb-10 flex items-baseline gap-3">
        <span className="font-mono text-sm text-accent">06</span>
        <h2 className="text-xl font-semibold tracking-tight text-foreground sm:text-2xl">
          Contacto
        </h2>
        <div className="h-px flex-1 bg-border" />
      </div>

      <p className="max-w-xl text-sm leading-relaxed text-muted">
        Disponible para roles de infraestructura, redes, y posiciones DevOps / SRE /
        Cloud. {identity.relocation}.
      </p>

      <div className="mt-6 flex flex-wrap gap-4">
        <a
          href={`mailto:${identity.email}`}
          className="rounded-md bg-accent px-4 py-2 text-sm font-medium text-background transition-opacity hover:opacity-90"
        >
          {identity.email}
        </a>
        <a
          href={identity.linkedin}
          target="_blank"
          rel="noreferrer"
          className="rounded-md border border-border px-4 py-2 text-sm font-medium text-foreground transition-colors hover:border-accent/50"
        >
          LinkedIn
        </a>
        <a
          href="/cv"
          className="rounded-md border border-border px-4 py-2 text-sm font-medium text-foreground transition-colors hover:border-accent/50"
        >
          CV (PDF)
        </a>
      </div>

      <p className="mt-6 font-mono text-xs text-muted">{identity.phone}</p>
    </section>
  );
}
