const DATE_FMT = new Intl.DateTimeFormat("pt-BR", {
  day: "numeric",
  month: "long",
  year: "numeric",
});

/** Formata "2026-06-30" → "30 de junho de 2026". */
export function formatDatePt(iso: string): string {
  const [y, m, d] = iso.split("-").map(Number);
  return DATE_FMT.format(new Date(y, (m ?? 1) - 1, d ?? 1));
}
