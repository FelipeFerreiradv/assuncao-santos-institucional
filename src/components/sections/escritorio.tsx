import Image from "next/image";
import Link from "next/link";
import { ArrowRight, MapPin } from "lucide-react";
import { escritorio } from "@/content/institucional";
import { SITE } from "@/lib/site";
import { SectionCanvas } from "@/components/shared/section-canvas";
import { SectionHeading } from "@/components/shared/section-heading";
import { Reveal } from "@/components/motion/reveal";
import { ParallaxImage } from "@/components/motion/parallax";

/**
 * Estrutura física do escritório — fotos reais do espaço na Mooca.
 * Mosaico editorial: foto ampla em destaque + duas verticais de apoio,
 * com a moldura dourada deslocada da identidade da marca.
 */
export function Escritorio() {
  const { photos } = escritorio;

  return (
    <section className="relative isolate overflow-hidden bg-canvas py-28 lg:py-40">
      <SectionCanvas curves="bottom-left" glow={["sand-tr"]} />
      <div className="container-wide">
        <div className="grid items-center gap-16 lg:grid-cols-12 lg:gap-20">
          {/* ————— Texto ————— */}
          <div className="lg:col-span-5">
            <SectionHeading
              number={escritorio.number}
              eyebrow={escritorio.eyebrow}
              title={escritorio.title}
            />

            <Reveal
              as="p"
              delay={0.15}
              className="mt-8 max-w-xl text-base leading-relaxed text-slate text-justify md:text-lg"
            >
              {escritorio.text}
            </Reveal>

            <Reveal delay={0.25} className="hairline-gold mt-10 pt-6">
              <p className="flex items-start gap-3 text-sm leading-relaxed text-slate">
                <MapPin
                  aria-hidden
                  strokeWidth={1.5}
                  className="mt-0.5 size-4 shrink-0 text-gold-dark"
                />
                <span>
                  {SITE.address.street}
                  <br />
                  {SITE.address.neighborhood} — {SITE.address.city}/{SITE.address.state}
                </span>
              </p>
            </Reveal>

            <Reveal delay={0.35}>
              <Link
                href="/contato"
                className="group mt-8 inline-flex items-center gap-3 text-[0.8125rem] font-medium uppercase tracking-wide-plus text-ink transition-colors duration-500 hover:text-gold-deep"
              >
                {escritorio.cta}
                <ArrowRight
                  aria-hidden
                  strokeWidth={1.75}
                  className="size-4 transition-transform duration-500 group-hover:translate-x-1"
                />
              </Link>
            </Reveal>
          </div>

          {/* ————— Mosaico de fotos ————— */}
          <div className="lg:col-span-7">
            <div className="grid grid-cols-2 gap-4 md:grid-cols-3 md:gap-5">
              {/* Recepção — destaque com a moldura dourada da marca */}
              <Reveal y={40} duration={1.2}>
                <div className="relative">
                  <span
                    aria-hidden
                    className="pointer-events-none absolute -inset-3 border border-gold/40"
                  />
                  <ParallaxImage className="relative aspect-[4/5] bg-cream" scale={1.08}>
                    <Image
                      src={photos.recepcao.src}
                      alt={photos.recepcao.alt}
                      fill
                      sizes="(min-width: 768px) 22vw, 50vw"
                      className="object-cover"
                    />
                    <div
                      aria-hidden
                      className="pointer-events-none absolute inset-0 bg-gold/5 mix-blend-multiply"
                    />
                  </ParallaxImage>
                </div>
              </Reveal>

              {/* Deslocada — assimetria editorial */}
              <Reveal delay={0.12} y={40} className="md:mt-12">
                <div className="relative aspect-[4/5] overflow-hidden bg-cream">
                  <Image
                    src={photos.atendimento.src}
                    alt={photos.atendimento.alt}
                    fill
                    sizes="(min-width: 768px) 22vw, 50vw"
                    className="object-cover transition-transform duration-700 ease-out-expo hover:scale-105"
                  />
                  <div
                    aria-hidden
                    className="pointer-events-none absolute inset-0 bg-gold/5 mix-blend-multiply"
                  />
                </div>
              </Reveal>

              <Reveal delay={0.22} y={40} className="col-span-2 md:col-span-1 md:mt-4">
                <div className="relative aspect-[4/5] overflow-hidden bg-cream">
                  <Image
                    src={photos.sala.src}
                    alt={photos.sala.alt}
                    fill
                    sizes="(min-width: 768px) 22vw, 100vw"
                    className="object-cover transition-transform duration-700 ease-out-expo hover:scale-105"
                  />
                  <div
                    aria-hidden
                    className="pointer-events-none absolute inset-0 bg-gold/5 mix-blend-multiply"
                  />
                </div>
              </Reveal>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
