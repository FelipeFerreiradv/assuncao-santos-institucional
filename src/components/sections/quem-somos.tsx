import Image from "next/image";
import Link from "next/link";
import { ArrowRight } from "lucide-react";
import { quemSomos, fraseSintese, valores } from "@/content/institucional";
import { SITE } from "@/lib/site";
import { SectionCanvas } from "@/components/shared/section-canvas";
import { SectionHeading } from "@/components/shared/section-heading";
import { Icon } from "@/components/shared/icon";
import { Reveal } from "@/components/motion/reveal";
import { ParallaxImage } from "@/components/motion/parallax";

/** Três pilares em destaque — recorte dos valores já validados do escritório. */
const PILARES = valores.slice(0, 3);

export function QuemSomos() {
  return (
    <section id="sobre" className="relative isolate overflow-hidden bg-canvas py-28 lg:py-40">
      <SectionCanvas curves="top-left" glow={["sand-tl"]} />
      <div className="container-wide">
        <div className="grid items-center gap-16 lg:grid-cols-12 lg:gap-20">
          {/* ————— Retrato ————— */}
          <div className="lg:col-span-5">
            <Reveal y={40} duration={1.2}>
              <div className="relative mx-auto aspect-[4/5] max-w-md">
                <span aria-hidden className="absolute -inset-4 border border-gold/40" />
                <span aria-hidden className="absolute -bottom-6 -right-6 size-32 bg-sand" />
                <ParallaxImage className="relative h-full w-full bg-cream">
                  <Image
                    src="/images/fernanda-retrato.jpg"
                    alt={`${SITE.lawyer.name}, sócia-fundadora do ${SITE.name}`}
                    fill
                    sizes="(min-width: 1024px) 40vw, 100vw"
                    className="object-cover"
                  />
                  <div
                    aria-hidden
                    className="pointer-events-none absolute inset-0 bg-gold/10 mix-blend-multiply"
                  />
                </ParallaxImage>
              </div>
            </Reveal>
          </div>

          {/* ————— Texto institucional ————— */}
          <div className="lg:col-span-7">
            <SectionHeading
              number={quemSomos.number}
              eyebrow={quemSomos.eyebrow}
              title={quemSomos.title}
            />

            <div className="mt-8 space-y-5">
              {quemSomos.paragraphs.map((p, i) => (
                <Reveal
                  key={i}
                  as="p"
                  delay={0.1 + i * 0.08}
                  className="max-w-xl text-base leading-relaxed text-slate text-justify md:text-lg"
                >
                  {p}
                </Reveal>
              ))}
            </div>

            {/* Pilares */}
            <Reveal delay={0.25} className="mt-12 grid gap-8 sm:grid-cols-3">
              {PILARES.map((p) => (
                <div key={p.name} className="space-y-3">
                  <span className="flex size-11 items-center justify-center rounded-full bg-ink text-gold">
                    <Icon name={p.icon} className="size-[18px]" />
                  </span>
                  <h3 className="font-sans text-[0.8125rem] font-medium uppercase tracking-wide-plus text-ink">
                    {p.name}
                  </h3>
                  <p className="text-sm leading-relaxed text-slate text-justify">{p.text}</p>
                </div>
              ))}
            </Reveal>

            <Reveal delay={0.35} className="hairline-gold mt-12 pt-6">
              <p className="font-display text-2xl italic text-gold-deep md:text-3xl">
                {fraseSintese}
              </p>
            </Reveal>

            <Reveal delay={0.45}>
              <Link
                href="/sobre"
                className="group mt-9 inline-flex items-center gap-3 text-[0.8125rem] font-medium uppercase tracking-wide-plus text-ink transition-colors duration-500 hover:text-gold-deep"
              >
                {quemSomos.cta}
                <ArrowRight
                  aria-hidden
                  strokeWidth={1.75}
                  className="size-4 transition-transform duration-500 group-hover:translate-x-1"
                />
              </Link>
            </Reveal>
          </div>
        </div>
      </div>
    </section>
  );
}
