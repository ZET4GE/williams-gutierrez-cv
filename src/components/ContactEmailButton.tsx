"use client";

import { useCallback, useState } from "react";

export function ContactEmailButton() {
  const [email, setEmail] = useState<string | null>(null);
  const [loading, setLoading] = useState(false);

  const reveal = useCallback(() => {
    if (email || loading) return;
    setLoading(true);
    fetch("/api/contact-email")
      .then((res) => res.json())
      .then((data: { email?: string }) => {
        if (data.email) setEmail(data.email);
      })
      .finally(() => setLoading(false));
  }, [email, loading]);

  const handleClick = (e: React.MouseEvent<HTMLAnchorElement>) => {
    if (!email) {
      e.preventDefault();
      reveal();
    }
  };

  return (
    <a
      href={email ? `mailto:${email}` : undefined}
      onMouseEnter={reveal}
      onFocus={reveal}
      onClick={handleClick}
      className="cursor-pointer rounded-md bg-accent px-4 py-2 text-sm font-medium text-background transition-opacity hover:opacity-90"
    >
      {email ?? (loading ? "Cargando…" : "Contactame ✉")}
    </a>
  );
}
