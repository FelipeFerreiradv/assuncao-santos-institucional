import Link from "next/link";
import { ChevronRight } from "lucide-react";

export type Crumb = { label: string; href?: string };

/** Trilha de navegação visual (o JSON-LD BreadcrumbList é emitido pela página). */
export function Breadcrumb({
  items,
  tone = "light",
}: {
  items: Crumb[];
  tone?: "light" | "dark";
}) {
  const dark = tone === "dark";
  return (
    <nav aria-label="Trilha de navegação" className="mb-8">
      <ol className="flex flex-wrap items-center gap-1.5 text-[0.6875rem] font-medium uppercase tracking-wide-plus">
        {items.map((item, i) => {
          const last = i === items.length - 1;
          return (
            <li key={`${item.label}-${i}`} className="flex items-center gap-1.5">
              {item.href && !last ? (
                <Link
                  href={item.href}
                  className={
                    dark
                      ? "text-ivory/55 transition-colors hover:text-gold"
                      : "text-slate/70 transition-colors hover:text-gold-deep"
                  }
                >
                  {item.label}
                </Link>
              ) : (
                <span className={dark ? "text-gold" : "text-gold-deep"} aria-current="page">
                  {item.label}
                </span>
              )}
              {!last && (
                <ChevronRight
                  aria-hidden
                  strokeWidth={1.75}
                  className={dark ? "size-3 text-ivory/30" : "size-3 text-slate/40"}
                />
              )}
            </li>
          );
        })}
      </ol>
    </nav>
  );
}
