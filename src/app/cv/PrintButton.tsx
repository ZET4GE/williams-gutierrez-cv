"use client";

export function PrintButton() {
  return (
    <button
      onClick={() => window.print()}
      className="rounded-md bg-black px-4 py-2 text-sm font-medium text-white hover:opacity-90"
    >
      Guardar como PDF
    </button>
  );
}
