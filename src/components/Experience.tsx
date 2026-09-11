import { Section } from "@/components/Section";
import { experience } from "@/data/profile";

export function Experience() {
  return (
    <Section id="experiencia" index="01" title="Experiencia profesional">
      <div className="flex flex-col gap-12">
        {experience.map((job) => (
          <article key={job.company} className="relative border-l border-border pl-6">
            <div className="absolute -left-[5px] top-1.5 h-2.5 w-2.5 rounded-full bg-accent" />
            <div className="flex flex-wrap items-baseline justify-between gap-x-4 gap-y-1">
              <h3 className="text-base font-semibold text-foreground">{job.company}</h3>
              <span className="font-mono text-xs text-muted">{job.period}</span>
            </div>
            <p className="text-sm text-accent">{job.role}</p>
            <p className="mt-1 text-xs text-muted">{job.location}</p>
            {job.context && <p className="mt-3 text-sm text-muted">{job.context}</p>}

            <ul className="mt-4 flex flex-col gap-2">
              {job.highlights.map((item) => (
                <li key={item} className="flex gap-2 text-sm leading-relaxed text-foreground/90">
                  <span className="mt-1 text-accent">▹</span>
                  <span>{item}</span>
                </li>
              ))}
            </ul>

            {job.scope && (
              <div className="mt-4 flex flex-wrap gap-2">
                {job.scope.map((s) => (
                  <span
                    key={s}
                    className="rounded border border-border bg-surface px-2 py-1 font-mono text-xs text-muted"
                  >
                    {s}
                  </span>
                ))}
              </div>
            )}

            {job.note && <p className="mt-4 text-xs italic text-muted">{job.note}</p>}
          </article>
        ))}
      </div>
    </Section>
  );
}
