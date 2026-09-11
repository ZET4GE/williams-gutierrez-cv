import type { Metadata } from "next";
import {
  certifications,
  education,
  experience,
  identity,
  stackGroups,
} from "@/data/profile";
import { PrintButton } from "./PrintButton";

export const metadata: Metadata = {
  title: "CV — Williams Gutiérrez",
};

export default function CvPage() {
  return (
    <div className="mx-auto w-full max-w-3xl bg-white px-8 py-12 text-black print:px-0 print:py-0">
      <div className="mb-6 flex justify-end print:hidden">
        <PrintButton />
      </div>

      <header className="mb-8 border-b border-black/20 pb-6">
        <h1 className="text-2xl font-bold">{identity.name}</h1>
        <p className="mt-1 text-sm text-black/70">
          Infraestructura de Redes &amp; Sistemas — en transición a DevOps / SRE / Cloud
        </p>
        <p className="mt-3 text-xs text-black/70">
          {identity.location} · {identity.email} · {identity.phone} · {identity.linkedin}
        </p>
      </header>

      <section className="mb-8">
        <h2 className="mb-2 text-xs font-semibold uppercase tracking-wide text-black/60">
          Resumen
        </h2>
        <p className="text-sm leading-relaxed">{identity.summary}</p>
      </section>

      <section className="mb-8">
        <h2 className="mb-3 text-xs font-semibold uppercase tracking-wide text-black/60">
          Experiencia
        </h2>
        <div className="flex flex-col gap-5">
          {experience.map((job) => (
            <div key={job.company} className="break-inside-avoid">
              <div className="flex flex-wrap items-baseline justify-between gap-x-3">
                <h3 className="text-sm font-semibold">
                  {job.company} — {job.role}
                </h3>
                <span className="text-xs text-black/60">{job.period}</span>
              </div>
              <p className="text-xs text-black/60">{job.location}</p>
              <ul className="mt-2 flex flex-col gap-1">
                {job.highlights.map((item) => (
                  <li key={item} className="text-xs leading-relaxed">
                    • {item}
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>
      </section>

      <section className="mb-8">
        <h2 className="mb-3 text-xs font-semibold uppercase tracking-wide text-black/60">
          Stack
        </h2>
        <div className="flex flex-col gap-1.5">
          {stackGroups.map((group) => (
            <p key={group.label} className="text-xs leading-relaxed">
              <span className="font-semibold">{group.label}:</span> {group.items.join(", ")}
            </p>
          ))}
        </div>
      </section>

      <section className="mb-2 grid grid-cols-2 gap-8">
        <div>
          <h2 className="mb-2 text-xs font-semibold uppercase tracking-wide text-black/60">
            Formación
          </h2>
          {education.map((item) => (
            <p key={item.title} className="text-xs leading-relaxed">
              {item.title} — {item.institution} ({item.period})
            </p>
          ))}
        </div>
        <div>
          <h2 className="mb-2 text-xs font-semibold uppercase tracking-wide text-black/60">
            Certificaciones
          </h2>
          {certifications.slice(0, 4).map((cert) => (
            <p key={cert.name} className="text-xs leading-relaxed">
              {cert.name} ({cert.year})
            </p>
          ))}
        </div>
      </section>
    </div>
  );
}
