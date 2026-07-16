"use client";

import { useRef } from "react";
import Image from "next/image";
import Link from "next/link";
import { motion, useScroll, useTransform, useReducedMotion } from "framer-motion";
import { Users } from "lucide-react";
import { SITE } from "@/lib/site";
import { homeHero, escritorio } from "@/content/institucional";
import { Counter } from "@/components/motion/counter";
import { OrganicCurves } from "@/components/shared/organic-curves";
import { WhatsAppCta } from "@/components/shared/whatsapp-cta";
import { Button } from "@/components/ui/button";
import { cn } from "@/lib/utils";

const EASE_LUXE = [0.16, 1, 0.3, 1] as const;

/**
 * Hero institucional — composição corporativa (fundo full-bleed escuro, headline
 * editorial com fragmento em itálico dourado, CTAs e faixa de autoridade).
 * O fundo é a foto real do escritório na Mooca, tratada com o ink da marca.
 */
export function HomeHero() {
  const ref = useRef<HTMLElement>(null);
  const reduced = useReducedMotion();
  const { scrollYProgress } = useScroll({
    target: ref,
    offset: ["start start", "end start"],
  });
  const y = useTransform(scrollYProgress, [0, 1], reduced ? [0, 0] : [0, 240]);
  const opacity = useTransform(scrollYProgress, [0, 0.8], [1, 0]);

  return (
    <section
      ref={ref}
      className="relative isolate min-h-svh overflow-hidden bg-ink text-ivory"
    >
      {/* ————— Fundo: escritório real, tratado ————— */}
      <motion.div className="absolute inset-0 -z-10" style={{ y }}>
        <Image
          src={escritorio.photos.ampla.src}
          alt={escritorio.photos.ampla.alt}
          fill
          priority
          sizes="100vw"
          className="object-cover"
        />
        <div
          aria-hidden
          className="absolute inset-0 bg-gradient-to-br from-ink via-ink/90 to-ink/55"
        />
        <div aria-hidden className="grain absolute inset-0 opacity-[0.07]" />
        <OrganicCurves variant="top-right" tone="dark" className="opacity-60" />
      </motion.div>

      <motion.div
        style={{ opacity }}
        className="container-wide relative flex min-h-svh flex-col justify-center pt-32 pb-20"
      >
        {/* ————— Eyebrow ————— */}
        <motion.p
          initial={reduced ? { opacity: 0 } : { opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 1.2, delay: 0.4, ease: EASE_LUXE }}
          className="flex items-start gap-4 text-xs font-medium uppercase tracking-luxe text-gold"
        >
          <span aria-hidden className="mt-2 h-px w-12 shrink-0 bg-gold" />
          <span className="flex flex-col gap-0.5 leading-relaxed">
            <span>{homeHero.eyebrow}</span>
            <span className="text-gold/70">{homeHero.eyebrowSub}</span>
          </span>
        </motion.p>

        {/* ————— Headline ————— */}
        <motion.h1
          initial={
            reduced
              ? { opacity: 0 }
              : { clipPath: "inset(0 100% 0 0)", opacity: 0 }
          }
          animate={{ clipPath: "inset(0 0% 0 0)", opacity: 1 }}
          transition={{ duration: 1.6, delay: 0.7, ease: EASE_LUXE }}
          className="mt-8 max-w-5xl font-display text-5xl leading-[1.02] font-medium tracking-tight text-balance sm:text-6xl lg:text-7xl xl:text-[5.5rem]"
        >
          {homeHero.titleLines.map((line, i) => (
            <span key={i} className="block">
              <span className={cn(line.accent && "italic text-gold")}>{line.text}</span>
            </span>
          ))}
        </motion.h1>

        {/* ————— Subtítulo ————— */}
        <motion.p
          initial={reduced ? { opacity: 0 } : { opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 1.2, delay: 1.3, ease: EASE_LUXE }}
          className="mt-8 max-w-xl text-base leading-relaxed text-ivory/75 text-justify md:text-lg"
        >
          {homeHero.subtitle}
        </motion.p>

        {/* ————— CTAs ————— */}
        <motion.div
          initial={reduced ? { opacity: 0 } : { opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 1.2, delay: 1.6, ease: EASE_LUXE }}
          className="mt-10 flex flex-wrap items-center gap-4"
        >
          <WhatsAppCta label={homeHero.cta} variant="gold" />
          <Button
            asChild
            variant="outline"
            className="border-ivory/30 text-ivory hover:border-gold hover:bg-gold/10"
          >
            <Link href="/equipe">
              <Users aria-hidden strokeWidth={1.75} />
              Conheça o escritório
            </Link>
          </Button>
        </motion.div>

        <motion.p
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 1.2, delay: 1.9, ease: EASE_LUXE }}
          className="mt-6 text-xs leading-relaxed text-ivory/50"
        >
          {homeHero.microcopy}
        </motion.p>

        {/* ————— Faixa de autoridade ————— */}
        <motion.div
          initial={reduced ? { opacity: 0 } : { opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 1.3, delay: 2.1, ease: EASE_LUXE }}
          className="mt-16 grid max-w-4xl grid-cols-2 gap-8 border-t border-gold/25 pt-10 sm:grid-cols-3 md:mt-20"
        >
          {SITE.stats.map((stat) => (
            <div key={stat.label} className="flex flex-col">
              <span className="font-display text-4xl leading-none text-gold sm:text-5xl">
                {stat.display !== null ? (
                  <span>{stat.display}</span>
                ) : (
                  <Counter target={stat.value} suffix={stat.suffix} />
                )}
              </span>
              <span className="mt-3 text-[0.6875rem] uppercase tracking-wide-plus text-ivory/55">
                {stat.label}
              </span>
            </div>
          ))}
        </motion.div>
      </motion.div>

      {/* ————— Marca d'água editorial ————— */}
      <div
        aria-hidden
        className="pointer-events-none absolute bottom-10 right-0 hidden select-none overflow-hidden lg:block"
      >
        <span className="ghost-word text-[7.5rem] leading-none xl:text-[9rem]">
          ASSUNÇÃO
        </span>
      </div>
    </section>
  );
}
