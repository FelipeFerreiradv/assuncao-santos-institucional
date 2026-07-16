"use client";

import Image from "next/image";
import Link from "next/link";
import {
  motion,
  useMotionValue,
  useReducedMotion,
  useSpring,
} from "framer-motion";
import { SITE } from "@/lib/site";
import { homeHero } from "@/content/institucional";
import { Reveal } from "@/components/motion/reveal";
import { TextReveal } from "@/components/motion/text-reveal";
import { ParallaxImage } from "@/components/motion/parallax";
import { Counter } from "@/components/motion/counter";
import { WhatsAppCta } from "@/components/shared/whatsapp-cta";
import { SectionCanvas } from "@/components/shared/section-canvas";
import { Button } from "@/components/ui/button";

const MAX_PARALLAX_PX = 8;

export function HomeHero() {
  const reduced = useReducedMotion();
  const mx = useMotionValue(0);
  const my = useMotionValue(0);
  const cardX = useSpring(mx, { stiffness: 110, damping: 18, mass: 0.4 });
  const cardY = useSpring(my, { stiffness: 110, damping: 18, mass: 0.4 });

  function handleMouseMove(event: React.MouseEvent<HTMLDivElement>) {
    if (reduced) return;
    const rect = event.currentTarget.getBoundingClientRect();
    const relX = (event.clientX - rect.left) / rect.width - 0.5;
    const relY = (event.clientY - rect.top) / rect.height - 0.5;
    mx.set(relX * MAX_PARALLAX_PX * 2);
    my.set(relY * MAX_PARALLAX_PX * 2);
  }

  function handleMouseLeave() {
    mx.set(0);
    my.set(0);
  }

  return (
    <section className="relative isolate flex min-h-svh flex-col overflow-hidden bg-ivory pt-28 md:pt-32">
      <SectionCanvas curves="top-right" />

      <div className="container-wide flex flex-1 flex-col justify-center pb-16 md:pb-20">
        <div className="grid grid-cols-1 gap-y-16 lg:grid-cols-12 lg:items-center lg:gap-x-14 xl:gap-x-20">
          {/* ————— Apresentação ————— */}
          <div className="relative lg:col-span-7">
            <span
              aria-hidden
              className="section-number absolute -top-2 -left-3 text-[8rem] md:-top-10 md:-left-8 md:text-[13rem]"
            >
              01
            </span>

            <Reveal immediate delay={0.05} y={14} className="relative">
              <p className="flex items-start gap-4 text-xs font-medium uppercase tracking-luxe text-gold-deep">
                <span aria-hidden className="mt-2 h-px w-12 shrink-0 bg-gold" />
                <span className="flex flex-col gap-0.5 leading-relaxed">
                  <span>{homeHero.eyebrow}</span>
                  <span>{homeHero.eyebrowSub}</span>
                </span>
              </p>
            </Reveal>

            <TextReveal
              as="h1"
              immediate
              text={homeHero.title}
              delay={0.15}
              className="relative mt-8 font-display text-5xl leading-[1.05] font-medium tracking-tight text-balance text-ink md:text-6xl xl:text-7xl"
            />

            <Reveal
              immediate
              delay={0.55}
              as="p"
              className="relative mt-8 max-w-xl text-base leading-relaxed text-slate text-justify md:text-lg"
            >
              {homeHero.subtitle}
            </Reveal>

            <Reveal
              immediate
              delay={0.75}
              className="relative mt-10 flex flex-wrap items-center gap-4"
            >
              <WhatsAppCta label={homeHero.cta} />
              <Button asChild variant="outline">
                <Link href="/atuacao">Conhecer as áreas de atuação</Link>
              </Button>
            </Reveal>

            <Reveal
              immediate
              delay={0.9}
              as="p"
              className="relative mt-6 text-xs leading-relaxed text-slate/80"
            >
              {homeHero.microcopy}
            </Reveal>
          </div>

          {/* ————— Retrato em arco ————— */}
          <div
            className="relative mx-auto w-full max-w-md lg:col-span-5 lg:max-w-none"
            onMouseMove={handleMouseMove}
            onMouseLeave={handleMouseLeave}
          >
            <Reveal immediate delay={0.35} y={44} duration={1.2} className="relative">
              <span
                aria-hidden
                className="pointer-events-none absolute inset-0 translate-x-4 translate-y-4 rounded-t-full border border-gold/40"
              />

              <ParallaxImage className="relative aspect-[4/5] rounded-t-full bg-cream">
                <Image
                  src="/images/fernanda-hero.jpg"
                  alt={homeHero.photoAlt}
                  fill
                  priority
                  sizes="(min-width: 1024px) 38vw, (min-width: 640px) 28rem, 100vw"
                  className="object-cover"
                />
                <div
                  aria-hidden
                  className="pointer-events-none absolute inset-0 bg-gold/10 mix-blend-multiply"
                />
                <div
                  aria-hidden
                  className="pointer-events-none absolute inset-0 bg-gradient-to-t from-ink/20 via-transparent to-transparent"
                />
              </ParallaxImage>

              <motion.div
                style={reduced ? undefined : { x: cardX, y: cardY }}
                className="hairline-gold absolute bottom-8 -left-3 flex flex-col gap-2.5 border border-gold/30 bg-paper/90 px-5 py-4 shadow-[0_18px_50px_-30px_rgba(11,15,25,0.4)] backdrop-blur md:bottom-12 md:-left-8"
              >
                <p className="text-xs font-medium tracking-wide-plus text-ink">
                  {SITE.lawyer.name} · {SITE.lawyer.oab}
                </p>
                <p className="text-[0.6875rem] text-slate">Sócia-fundadora · Previdenciário</p>
              </motion.div>
            </Reveal>
          </div>
        </div>

        {/* ————— Faixa de autoridade ————— */}
        <Reveal
          immediate
          delay={1.05}
          className="mt-16 grid max-w-4xl grid-cols-2 gap-8 border-t border-gold/25 pt-10 sm:grid-cols-3 md:mt-20"
        >
          {SITE.stats.map((stat) => (
            <div key={stat.label} className="flex flex-col">
              <span className="font-display text-4xl leading-none text-gold-deep sm:text-5xl">
                {stat.display !== null ? (
                  <span>{stat.display}</span>
                ) : (
                  <Counter target={stat.value} suffix={stat.suffix} />
                )}
              </span>
              <span className="mt-3 text-[0.6875rem] uppercase tracking-wide-plus text-slate/70">
                {stat.label}
              </span>
            </div>
          ))}
        </Reveal>

        <div
          aria-hidden
          className="pointer-events-none absolute bottom-16 right-0 hidden select-none overflow-hidden lg:block"
        >
          <span className="ghost-word text-[7.5rem] leading-none xl:text-[9rem]">
            ASSUNÇÃO
          </span>
        </div>
      </div>
    </section>
  );
}
