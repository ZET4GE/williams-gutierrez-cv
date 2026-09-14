"use client";

import { useState } from "react";
import { useRouter } from "next/navigation";
import { signInWithEmailAndPassword } from "firebase/auth";
import { auth } from "@/lib/firebase-client";

export function LoginForm() {
  const router = useRouter();
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [error, setError] = useState<string | null>(null);
  const [loading, setLoading] = useState(false);

  async function handleSubmit(e: React.FormEvent) {
    e.preventDefault();
    setError(null);
    setLoading(true);
    try {
      const cred = await signInWithEmailAndPassword(auth, email, password);
      const idToken = await cred.user.getIdToken();
      const res = await fetch("/api/admin/session", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ idToken }),
      });
      if (!res.ok) {
        const data = await res.json().catch(() => ({}));
        throw new Error(data.error ?? "No se pudo iniciar sesión");
      }
      router.push("/admin");
      router.refresh();
    } catch (err) {
      setError(err instanceof Error ? err.message : "Credenciales inválidas");
    } finally {
      setLoading(false);
    }
  }

  return (
    <div className="flex min-h-screen items-center justify-center bg-background px-6">
      <form
        onSubmit={handleSubmit}
        className="w-full max-w-sm rounded-lg border border-border bg-surface p-8"
      >
        <h1 className="mb-1 text-lg font-semibold text-foreground">Panel de administración</h1>
        <p className="mb-6 text-sm text-muted">ZET4GE — acceso restringido</p>

        <label className="mb-1 block text-xs font-medium text-muted">Email</label>
        <input
          type="email"
          required
          value={email}
          onChange={(e) => setEmail(e.target.value)}
          className="mb-4 w-full rounded-md border border-border bg-background px-3 py-2 text-sm text-foreground outline-none focus:border-accent"
        />

        <label className="mb-1 block text-xs font-medium text-muted">Contraseña</label>
        <input
          type="password"
          required
          value={password}
          onChange={(e) => setPassword(e.target.value)}
          className="mb-4 w-full rounded-md border border-border bg-background px-3 py-2 text-sm text-foreground outline-none focus:border-accent"
        />

        {error && <p className="mb-4 text-xs text-red-400">{error}</p>}

        <button
          type="submit"
          disabled={loading}
          className="w-full rounded-md bg-accent px-4 py-2 text-sm font-medium text-background transition-opacity hover:opacity-90 disabled:opacity-50"
        >
          {loading ? "Ingresando…" : "Ingresar"}
        </button>
      </form>
    </div>
  );
}
