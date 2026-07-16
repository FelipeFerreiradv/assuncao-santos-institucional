import { LEGAL_NOTICE } from "@/lib/site";
import type { LegalBlock } from "@/content/legal";
import { SectionCanvas } from "@/components/shared/section-canvas";

export function LegalContent({ blocks }: { blocks: LegalBlock[] }) {
  return (
    <section className="relative isolate overflow-hidden bg-ivory py-16 md:py-24">
      <SectionCanvas curves="top-right" />
      <div className="container-wide max-w-3xl">
        <div className="space-y-10">
          {blocks.map((b) => (
            <div key={b.h2}>
              <h2 className="font-display text-xl font-medium tracking-tight text-ink md:text-2xl">
                {b.h2}
              </h2>
              <div className="mt-4 space-y-3">
                {b.body.map((p, i) => (
                  <p key={i} className="text-[0.9375rem] leading-relaxed text-slate text-justify">
                    {p}
                  </p>
                ))}
              </div>
            </div>
          ))}
        </div>

        <p className="mt-14 border-t border-ink/10 pt-8 text-xs leading-relaxed text-slate/70">
          {LEGAL_NOTICE}
        </p>
      </div>
    </section>
  );
}
