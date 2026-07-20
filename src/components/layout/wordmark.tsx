import Image from "next/image";
import { cn } from "@/lib/utils";

/**
 * Marca do escritório — monograma "A&S" oficial (recortado com fundo
 * transparente a partir da arte da cliente) + wordmark "Assunção & Santos
 * Advogados", em Fraunces. O dourado do monograma tem contraste suficiente
 * tanto sobre o ivory quanto sobre o hero escuro, então a arte é a mesma nos
 * dois tons — só o texto ao lado inverte.
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
      <Image
        src="/images/logo-as-monograma.png"
        alt=""
        aria-hidden
        width={392}
        height={320}
        priority
        className="h-9 w-auto shrink-0 md:h-10"
      />
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
