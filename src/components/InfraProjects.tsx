import { Section } from "@/components/Section";
import { getContent } from "@/lib/content";

export async function InfraProjects() {
  const { infraProjects } = await getContent();

  return (
    <Section id="infraestructura" index="02" title="Proyectos de infraestructura">
      <div className="grid gap-5 sm:grid-cols-2">
        {infraProjects.map((project) => (
          <article
            key={project.name}
            className="flex flex-col gap-3 rounded-lg border border-border bg-surface p-5"
          >
            {project.image && (
              // eslint-disable-next-line @next/next/no-img-element
              <img
                src={project.image}
                alt={`Vista previa de ${project.name}`}
                className="w-full rounded-md border border-border object-cover"
              />
            )}
            <div className="flex items-start justify-between gap-2">
              <h3 className="text-sm font-semibold text-foreground">{project.name}</h3>
              {project.status === "in-progress" && (
                <span className="whitespace-nowrap rounded-full border border-accent/40 px-2 py-0.5 font-mono text-[11px] text-accent">
                  en progreso
                </span>
              )}
            </div>
            <p className="text-sm leading-relaxed text-muted">{project.description}</p>
            <div className="mt-auto flex flex-wrap gap-2 pt-2">
              {project.tags.map((tag) => (
                <span key={tag} className="font-mono text-xs text-muted/80">
                  #{tag.replace(/\s+/g, "")}
                </span>
              ))}
            </div>
          </article>
        ))}
      </div>
    </Section>
  );
}
