"use client";

import { useState } from "react";
import Link from "next/link";
import { motion } from "framer-motion";
import { ArrowUpRight } from "lucide-react";
import { AREAS } from "@/content/areas";
import { SectionCanvas } from "@/components/shared/section-canvas";
import { SectionHeading } from "@/components/shared/section-heading";
import { OrganicCurves } from "@/components/shared/organic-curves";
import { Icon } from "@/components/shared/icon";
import { cn } from "@/lib/utils";

const EASE_LUXE = [0.16, 1, 0.3, 1] as const;

/**
 * Áreas de atuação em formato editorial institucional: lista numerada à
 * esquerda (a linha ativa expande a descrição) e um painel de destaque sticky
 * à direita. Substitui o grid de cards — leitura mais corporativa e hierárquica.
 */
export function AreasEditorial() {
  const [active, setActive] = useState<string>(AREAS[0].slug);
  const activeArea = AREAS.find((a) => a.slug === active) ?? AREAS[0];

  return (
    <section id="areas" className="relative isolate overflow-hidden bg-paper py-28 lg:py-40">
      <SectionCanvas curves="bottom-right" glow={["gold-br"]} />
      <div className="container-wide">
        <SectionHeading
          number="03"
          eyebrow="Áreas de atuação"
          title="Soluções jurídicas para o que é importante na sua vida."
          intro="Atuação consultiva e contenciosa, com o Direito Previdenciário como carro-chefe do escritório."
          className="mb-16 lg:mb-20"
        />

        <div className="grid gap-12 lg:grid-cols-12 lg:gap-16">
          {/* ————— Lista editorial ————— */}
          <div className="lg:col-span-7">
            <ul className="border-t border-stone-300/40">
              {AREAS.map((area) => {
                const isActive = area.slug === active;
                return (
                  <li key={area.slug} className="border-b border-stone-300/40">
                    <Link
                      href={`/atuacao/${area.slug}`}
                      onMouseEnter={() => setActive(area.slug)}
                      onFocus={() => setActive(area.slug)}
                      className="group grid grid-cols-12 items-center gap-4 py-7 lg:py-8"
                    >
                      <span
                        aria-hidden
                        className={cn(
                          "col-span-2 font-display text-3xl transition-colors duration-500 lg:text-4xl",
                          isActive ? "text-gold-deep" : "text-stone-400"
                        )}
                      >
                        {area.number}
                      </span>

                      <div className="col-span-9">
                        <h3
                          className={cn(
                            "font-display text-2xl font-medium tracking-tight transition-colors duration-500 lg:text-3xl",
                            isActive ? "text-ink" : "text-slate"
                          )}
                        >
                          {area.name}
                        </h3>
                        <motion.div
                          initial={false}
                          animate={{
                            height: isActive ? "auto" : 0,
                            opacity: isActive ? 1 : 0,
                            marginTop: isActive ? 12 : 0,
                          }}
                          transition={{ duration: 0.5, ease: EASE_LUXE }}
                          className="overflow-hidden"
                        >
                          <p className="max-w-md text-sm leading-relaxed text-slate text-justify">
                            {area.shortDescription}
                          </p>
                          <span className="mt-3 inline-block text-[0.6875rem] uppercase tracking-wide-plus text-gold-deep">
                            {area.tagline}
                          </span>
                        </motion.div>
                      </div>

                      <span
                        aria-hidden
                        className={cn(
                          "col-span-1 flex size-11 items-center justify-center rounded-full border transition-all duration-500",
                          isActive
                            ? "border-gold-deep bg-gold-deep text-ivory"
                            : "border-stone-300/60 text-stone-400 group-hover:border-ink group-hover:text-ink"
                        )}
                      >
                        <ArrowUpRight strokeWidth={1.75} className="size-4" />
                      </span>
                    </Link>
                  </li>
                );
              })}
            </ul>
          </div>

          {/* ————— Painel de destaque sticky ————— */}
          <div className="hidden lg:col-span-5 lg:block">
            <div className="sticky top-32">
              <motion.div
                key={activeArea.slug}
                initial={{ opacity: 0, scale: 0.97 }}
                animate={{ opacity: 1, scale: 1 }}
                transition={{ duration: 0.6, ease: EASE_LUXE }}
                className="relative flex aspect-[4/5] flex-col justify-end overflow-hidden bg-ink p-8 lg:p-10"
              >
                <OrganicCurves variant="diagonal-dark" tone="dark" />
                <div aria-hidden className="grain absolute inset-0 opacity-[0.06]" />

                <span
                  aria-hidden
                  className="relative flex size-12 items-center justify-center rounded-full border border-gold/40 text-gold"
                >
                  <Icon name={activeArea.icon} className="size-5" />
                </span>

                <span
                  aria-hidden
                  className="section-number relative mt-8 text-[6rem] leading-none"
                  style={{ WebkitTextStroke: "1px rgba(201,163,107,0.55)" }}
                >
                  {activeArea.number}
                </span>

                <h3 className="relative mt-3 font-display text-3xl font-medium tracking-tight text-ivory">
                  {activeArea.name}
                </h3>
                <p className="relative mt-2 font-display text-lg italic text-gold">
                  {activeArea.tagline}
                </p>

                <ul className="relative mt-7 space-y-2.5 border-t border-ivory/10 pt-6">
                  {activeArea.bullets.slice(0, 4).map((b) => (
                    <li key={b} className="flex gap-2.5 text-xs leading-relaxed text-ivory/70">
                      <span aria-hidden className="mt-1.5 size-1 shrink-0 rounded-full bg-gold" />
                      {b}
                    </li>
                  ))}
                </ul>
              </motion.div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
