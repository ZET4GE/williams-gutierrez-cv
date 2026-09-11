import { identity } from "@/data/profile";

export function Hero() {
  return (
    <section id="top" className="mx-auto w-full max-w-4xl px-6 pt-16 pb-20 sm:pt-24 sm:pb-28">
      <p className="font-mono text-sm text-accent">infraestructura de redes &amp; sistemas</p>
      <h1 className="mt-4 text-3xl font-bold tracking-tight text-foreground sm:text-5xl">
        {identity.name}
      </h1>
      <p className="mt-3 max-w-2xl text-lg text-muted">
        8 años operando redes FTTH y sistemas críticos en ISPs y cooperativas.
        Ahora en transición hacia <span className="text-foreground">DevOps / SRE / Cloud Infrastructure</span>.
      </p>
      <p className="mt-6 max-w-2xl text-base leading-relaxed text-muted">
        {identity.summary}
      </p>
      <div className="mt-8 flex flex-wrap items-center gap-x-6 gap-y-2 font-mono text-sm text-muted">
        <span>{identity.location}</span>
        <span className="text-border">/</span>
        <span>{identity.relocation}</span>
      </div>
      <div className="mt-8 flex flex-wrap gap-3">
        <a
          href="#experiencia"
          className="rounded-md bg-accent px-4 py-2 text-sm font-medium text-background transition-opacity hover:opacity-90"
        >
          Ver experiencia
        </a>
        <a
          href="/cv"
          className="rounded-md border border-border px-4 py-2 text-sm font-medium text-foreground transition-colors hover:border-accent/50"
        >
          Descargar CV (PDF)
        </a>
      </div>
    </section>
  );
}
