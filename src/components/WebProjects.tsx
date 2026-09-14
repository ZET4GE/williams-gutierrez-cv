import { Section } from "@/components/Section";
import { getContent } from "@/lib/content";

export async function WebProjects() {
  const { webProjects, otherWebProjects } = await getContent();

  return (
    <Section id="desarrollo" index="03" title="Proyectos de desarrollo web">
      <p className="mb-6 max-w-2xl text-sm leading-relaxed text-muted">
        Desarrollo asistido por IA (Claude Code, con prompts por fases y memoria de
        proyecto) — no desde programación tradicional escrita a mano. Levantar y operar
        estas apps en producción es el mérito real; la asistencia de IA es la herramienta.
      </p>

      <div className="flex flex-col gap-5">
        {webProjects.map((project) => (
          <article
            key={project.name}
            className="rounded-lg border border-border bg-surface p-5"
          >
            {project.image && (
              // eslint-disable-next-line @next/next/no-img-element
              <img
                src={project.image}
                alt={`Vista previa de ${project.name}`}
                className="mb-4 w-full rounded-md border border-border object-cover"
              />
            )}
            <div className="flex flex-wrap items-baseline justify-between gap-2">
              <h3 className="text-sm font-semibold text-foreground">{project.name}</h3>
              {project.url && (
                <a
                  href={`https://${project.url}`}
                  target="_blank"
                  rel="noreferrer"
                  className="font-mono text-xs text-accent hover:underline"
                >
                  {project.url}
                </a>
              )}
            </div>
            <p className="mt-2 text-sm leading-relaxed text-muted">{project.description}</p>
            {project.disclaimer && (
              <p className="mt-2 text-xs italic text-muted/80">{project.disclaimer}</p>
            )}
            <div className="mt-3 flex flex-wrap gap-2">
              {project.stack.map((tech) => (
                <span
                  key={tech}
                  className="rounded border border-border px-2 py-0.5 font-mono text-[11px] text-muted"
                >
                  {tech}
                </span>
              ))}
            </div>
          </article>
        ))}
      </div>

      <div className="mt-8">
        <p className="mb-3 font-mono text-xs uppercase tracking-wide text-muted">
          Otros proyectos
        </p>
        <div className="grid gap-3 sm:grid-cols-2">
          {otherWebProjects.map((project) => (
            <div key={project.name} className="rounded-lg border border-border/70 p-4">
              <h4 className="text-sm font-medium text-foreground">{project.name}</h4>
              <p className="mt-1 text-xs leading-relaxed text-muted">{project.description}</p>
            </div>
          ))}
        </div>
      </div>
    </Section>
  );
}
