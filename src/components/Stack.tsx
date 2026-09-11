import { Section } from "@/components/Section";
import { learning, stackGroups } from "@/data/profile";

export function Stack() {
  return (
    <Section id="stack" index="04" title="Stack y herramientas">
      <div className="grid gap-6 sm:grid-cols-2">
        {stackGroups.map((group) => (
          <div key={group.label}>
            <h3 className="mb-3 font-mono text-xs uppercase tracking-wide text-accent">
              {group.label}
            </h3>
            <div className="flex flex-wrap gap-2">
              {group.items.map((item) => (
                <span
                  key={item}
                  className="rounded border border-border bg-surface px-2.5 py-1 text-xs text-foreground/90"
                >
                  {item}
                </span>
              ))}
            </div>
          </div>
        ))}
      </div>

      <div className="mt-8">
        <h3 className="mb-3 font-mono text-xs uppercase tracking-wide text-muted">
          En aprendizaje
        </h3>
        <div className="flex flex-wrap gap-2">
          {learning.map((item) => (
            <span
              key={item}
              className="rounded border border-dashed border-border px-2.5 py-1 text-xs text-muted"
            >
              {item}
            </span>
          ))}
        </div>
      </div>
    </Section>
  );
}
