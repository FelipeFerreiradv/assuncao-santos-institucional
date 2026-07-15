import Link from "next/link";
import { Check } from "lucide-react";
import type { ExtendedArea } from "@/content/atuacao";
import { AREAS, type Area } from "@/content/areas";
import { SectionCanvas } from "@/components/shared/section-canvas";
import { WhatsAppCta } from "@/components/shared/whatsapp-cta";
import { Reveal } from "@/components/motion/reveal";

export function AreaDetail({ area, meta }: { area: ExtendedArea; meta: Area }) {
  const others = AREAS.filter((a) => a.slug !== meta.slug);

  return (
    <section className="relative isolate overflow-hidden bg-ivory py-20 md:py-28">
      <SectionCanvas curves="top-left" />
      <div className="container-luxe">
        {/* Lead */}
        <div className="max-w-3xl space-y-6">
          {area.lead.map((p, i) => (
            <Reveal
              key={i}
              as="p"
              delay={i * 0.08}
              className="text-lg leading-relaxed text-slate text-pretty first:font-display first:text-xl first:text-ink first:italic md:first:text-2xl"
            >
              {p}
            </Reveal>
          ))}
        </div>

        <div className="mt-16 grid gap-12 lg:grid-cols-12 lg:gap-16">
          {/* Conteúdo long-form */}
          <div className="lg:col-span-8">
            <div className="space-y-14">
              {area.sections.map((s) => (
                <article key={s.id} id={s.id} className="scroll-mt-32">
                  <h2 className="hairline-gold pt-6 font-display text-2xl font-medium tracking-tight text-ink md:text-3xl">
                    {s.h2}
                  </h2>
                  <div className="mt-5 space-y-4">
                    {s.body.map((p, i) => (
                      <p key={i} className="text-base leading-relaxed text-slate text-pretty">
                        {p}
                      </p>
                    ))}
                  </div>
                </article>
              ))}
            </div>
          </div>

          {/* Aside */}
          <aside className="lg:col-span-4">
            <div className="lg:sticky lg:top-32 lg:space-y-6">
              <div className="border border-gold/25 bg-paper p-7">
                <h2 className="text-[0.6875rem] font-medium uppercase tracking-luxe text-gold-deep">
                  Como podemos ajudar
                </h2>
                <ul className="mt-5 space-y-3">
                  {meta.bullets.map((b) => (
                    <li key={b} className="flex gap-3 text-sm leading-relaxed text-slate">
                      <Check aria-hidden strokeWidth={2} className="mt-0.5 size-4 shrink-0 text-gold-dark" />
                      {b}
                    </li>
                  ))}
                </ul>
                <WhatsAppCta
                  label="Falar sobre o meu caso"
                  size="sm"
                  className="mt-6 w-full"
                  message={`Olá! Vim pelo site do Assunção & Santos e gostaria de falar sobre ${meta.name}.`}
                />
              </div>

              <div className="mt-6 border border-stone-300/30 bg-ivory p-7 lg:mt-0">
                <h2 className="text-[0.6875rem] font-medium uppercase tracking-luxe text-gold-deep">
                  Outras áreas
                </h2>
                <ul className="mt-5 space-y-3 text-sm">
                  {others.map((a) => (
                    <li key={a.slug}>
                      <Link
                        href={`/atuacao/${a.slug}`}
                        className="text-ink transition-colors duration-300 hover:text-gold-deep"
                      >
                        {a.name}
                      </Link>
                    </li>
                  ))}
                </ul>
              </div>
            </div>
          </aside>
        </div>
      </div>
    </section>
  );
}
