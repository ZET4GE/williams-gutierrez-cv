const links = [
  { href: "#experiencia", label: "Experiencia" },
  { href: "#infraestructura", label: "Infraestructura" },
  { href: "#desarrollo", label: "Desarrollo" },
  { href: "#stack", label: "Stack" },
  { href: "#formacion", label: "Formación" },
  { href: "#contacto", label: "Contacto" },
];

export function Nav() {
  return (
    <header className="sticky top-0 z-50 border-b border-border/80 bg-background/85 backdrop-blur">
      <div className="mx-auto flex max-w-4xl items-center justify-between px-6 py-4">
        <a href="#top" className="font-mono text-sm font-semibold text-accent">
          ZET4GE
        </a>
        <nav className="hidden gap-6 text-sm text-muted md:flex">
          {links.map((link) => (
            <a
              key={link.href}
              href={link.href}
              className="transition-colors hover:text-foreground"
            >
              {link.label}
            </a>
          ))}
        </nav>
        <a
          href="/cv"
          className="rounded-md border border-accent/40 px-3 py-1.5 text-xs font-medium text-accent transition-colors hover:bg-accent-soft"
        >
          CV (PDF)
        </a>
      </div>
    </header>
  );
}
