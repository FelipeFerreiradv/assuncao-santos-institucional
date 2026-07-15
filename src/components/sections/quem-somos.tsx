import Image from "next/image";
import Link from "next/link";
import { ArrowRight } from "lucide-react";
import { quemSomos, fraseSintese } from "@/content/institucional";
import { SITE } from "@/lib/site";
import { SectionCanvas } from "@/components/shared/section-canvas";
import { SectionHeading } from "@/components/shared/section-heading";
import { Reveal } from "@/components/motion/reveal";
import { ParallaxImage } from "@/components/motion/parallax";

export function QuemSomos() {
  return (
    <section id="sobre" className="relative isolate overflow-hidden bg-canvas py-24 md:py-36 lg:py-44">
      <SectionCanvas curves="top-left" glow={["sand-tl"]} />
      <div className="container-luxe">
        <div className="grid items-center gap-14 lg:grid-cols-12 lg:gap-16">
          {/* Retrato */}
          <div className="relative lg:col-span-5">
            <Reveal y={40} duration={1.2}>
              <span
                aria-hidden
                className="pointer-events-none absolute -bottom-5 -left-5 h-40 w-40 bg-sand/60"
              />
              <span
                aria-hidden
                className="pointer-events-none absolute inset-0 -translate-x-4 -translate-y-4 border border-gold/40"
              />
              <ParallaxImage className="relative aspect-[4/5] bg-cream">
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
            </Reveal>
          </div>

          {/* Texto */}
          <div className="lg:col-span-7">
            <SectionHeading
              number={quemSomos.number}
              eyebrow={quemSomos.eyebrow}
              title={quemSomos.title}
            />
            <div className="mt-8 space-y-6">
              {quemSomos.paragraphs.map((p, i) => (
                <Reveal key={i} as="p" delay={0.1 + i * 0.08} className="max-w-2xl text-base leading-relaxed text-slate md:text-lg">
                  {p}
                </Reveal>
              ))}
            </div>

            <Reveal delay={0.3} className="mt-10 hairline-gold pt-6">
              <p className="font-display text-2xl italic text-gold-deep md:text-3xl">
                {fraseSintese}
              </p>
            </Reveal>

            <Reveal delay={0.4}>
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
