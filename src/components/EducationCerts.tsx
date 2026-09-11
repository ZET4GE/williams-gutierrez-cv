import { Section } from "@/components/Section";
import { certifications, education } from "@/data/profile";

export function EducationCerts() {
  return (
    <Section id="formacion" index="05" title="Formación y certificaciones">
      <div className="grid gap-10 sm:grid-cols-2">
        <div>
          <h3 className="mb-4 font-mono text-xs uppercase tracking-wide text-muted">
            Formación
          </h3>
          <div className="flex flex-col gap-4">
            {education.map((item) => (
              <div key={item.title}>
                <p className="text-sm font-medium text-foreground">{item.title}</p>
                <p className="text-xs text-muted">
                  {item.institution} · {item.period}
                </p>
              </div>
            ))}
          </div>
        </div>

        <div>
          <h3 className="mb-4 font-mono text-xs uppercase tracking-wide text-muted">
            Certificaciones
          </h3>
          <ul className="flex flex-col gap-2.5">
            {certifications.map((cert) => (
              <li key={cert.name} className="flex justify-between gap-4 text-sm">
                <span className="text-foreground/90">{cert.name}</span>
                <span className="whitespace-nowrap font-mono text-xs text-muted">
                  {cert.year}
                </span>
              </li>
            ))}
          </ul>
        </div>
      </div>
    </Section>
  );
}
