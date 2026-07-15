import { cn } from "@/lib/utils";

/**
 * Marca do escritório — monograma "A&S" (dourado) + wordmark "Assunção & Santos
 * Advogados", em Fraunces. Fiel à logo A&S da cliente, sem depender do arquivo
 * rasterizado (que tem fundo marmorizado).
 * PENDENTE: substituir o monograma por um PNG/SVG do logo com fundo transparente.
 */
export function Wordmark({
  tone = "light",
  className,
}: {
  tone?: "light" | "dark";
  className?: string;
}) {
  const dark = tone === "dark";
  return (
    <span className={cn("flex items-center gap-3", className)}>
      <span
        aria-hidden
        className={cn(
          "flex size-10 shrink-0 items-center justify-center rounded-full border font-display text-sm font-semibold tracking-tight",
          dark ? "border-gold/50 text-gold" : "border-gold-dark/45 text-gold-deep"
        )}
      >
        A&amp;S
      </span>
      <span className="flex flex-col">
        <span
          className={cn(
            "font-display text-lg font-medium leading-none tracking-tight",
            dark ? "text-ivory" : "text-ink"
          )}
        >
          Assunção &amp; Santos
        </span>
        <span
          className={cn(
            "mt-1 text-[0.5625rem] font-medium uppercase tracking-luxe",
            dark ? "text-gold" : "text-gold-deep"
          )}
        >
          Advogados
        </span>
      </span>
    </span>
  );
}
