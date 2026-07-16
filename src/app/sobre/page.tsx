import type { Metadata } from "next";
import Link from "next/link";
import Image from "next/image";
import { ArrowRight } from "lucide-react";
import { buildMetadata } from "@/lib/metadata";
import { getBreadcrumbSchema } from "@/lib/schema";
import { SITE } from "@/lib/site";
import { historia, missao, fraseSintese } from "@/content/institucional";
import { JsonLd } from "@/components/seo/json-ld";
import { PageHero } from "@/components/sections/page-hero";
import { Valores } from "@/components/sections/valores";
import { Diferenciais } from "@/components/sections/diferenciais";
import { CtaFinal } from "@/components/sections/cta-final";
import { SectionCanvas } from "@/components/shared/section-canvas";
import { Reveal } from "@/components/motion/reveal";

export const metadata: Metadata = buildMetadata({
  title: "Sobre o escritório",
  description:
    "Conheça o Assunção & Santos Advogados: história, missão e valores de um escritório na Mooca dedicado a uma advocacia próxima, técnica e humana.",
  path: "/sobre",
});

export default function SobrePage() {
  return (
    <>
      <JsonLd
        data={getBreadcrumbSchema([
          { name: "Início", url: "/" },
          { name: "Sobre", url: "/sobre" },
        ])}
        id="ld-breadcrumb"
      />

      <PageHero
        eyebrow="Sobre o escritório"
        title="Uma advocacia que cuida de histórias de vida."
        intro={fraseSintese}
        crumbs={[{ label: "Início", href: "/" }, { label: "Sobre" }]}
      />

      {/* História + Missão */}
      <section className="relative isolate overflow-hidden bg-ivory py-20 md:py-28">
        <SectionCanvas curves="top-left" glow={["sand-tl"]} />
        <div className="container-wide grid gap-12 lg:grid-cols-12 lg:gap-16">
          <div className="lg:col-span-5">
            <div className="lg:sticky lg:top-32">
              <Reveal>
                <span className="flex items-center gap-4 text-[0.6875rem] font-medium uppercase tracking-luxe text-gold-deep">
                  <span aria-hidden className="h-px w-10 bg-gold/70" />
                  {historia.title}
                </span>
              </Reveal>
              <Reveal delay={0.1} as="p" className="mt-6 font-display text-3xl italic leading-tight text-gold-deep md:text-4xl">
                {fraseSintese}
              </Reveal>
            </div>
          </div>
          <div className="lg:col-span-7">
            <div className="space-y-6">
              {historia.paragraphs.map((p, i) => (
                <Reveal key={i} as="p" delay={i * 0.06} className="text-base leading-relaxed text-slate text-justify md:text-lg">
                  {p}
                </Reveal>
              ))}
            </div>

            <Reveal delay={0.2} className="mt-12 border-l-2 border-gold/50 bg-paper/60 p-8">
              <h2 className="font-display text-2xl font-medium tracking-tight text-ink">
                {missao.title}
              </h2>
              <p className="mt-4 text-base leading-relaxed text-slate text-justify">
                {missao.text}
              </p>
            </Reveal>
          </div>
        </div>
      </section>

      <Valores />
      <Diferenciais />

      {/* Advogada responsável */}
      <section className="relative isolate overflow-hidden bg-canvas py-24 md:py-32">
        <SectionCanvas curves="horizontal" glow={["gold-tr"]} />
        <div className="container-wide grid items-center gap-12 lg:grid-cols-12 lg:gap-16">
          <div className="lg:col-span-5">
            <Reveal>
              <div className="relative aspect-[4/5] max-w-sm bg-cream">
                <span aria-hidden className="absolute inset-0 -translate-x-4 -translate-y-4 border border-gold/40" />
                <Image
                  src={"/images/fernanda-retrato.jpg"}
                  alt={`${SITE.lawyer.name}, sócia-fundadora do ${SITE.name}`}
                  fill
                  sizes="(min-width: 1024px) 32vw, 100vw"
                  className="object-cover"
                />
              </div>
            </Reveal>
          </div>
          <div className="lg:col-span-7">
            <Reveal>
              <span className="flex items-center gap-4 text-[0.6875rem] font-medium uppercase tracking-luxe text-gold-deep">
                <span aria-hidden className="h-px w-10 bg-gold/70" />
                Quem conduz o escritório
              </span>
            </Reveal>
            <Reveal delay={0.1}>
              <h2 className="mt-6 font-display text-3xl font-medium tracking-tight text-ink md:text-4xl">
                {SITE.lawyer.name}
              </h2>
            </Reveal>
            <p className="mt-2 text-sm font-medium text-gold-deep">
              {SITE.lawyer.role} · {SITE.lawyer.oab}
            </p>
            <Reveal delay={0.2} as="p" className="mt-6 max-w-xl text-base leading-relaxed text-slate text-justify md:text-lg">
              Advogada com 10 anos de dedicação ao Direito Previdenciário, à frente de uma
              advocacia próxima e humana — que trata cada cliente como pessoa antes de tratar
              como processo.
            </Reveal>
            <Reveal delay={0.3}>
              <Link
                href={`/equipe/${SITE.lawyer.slug}`}
                className="group mt-8 inline-flex items-center gap-3 text-[0.8125rem] font-medium uppercase tracking-wide-plus text-ink transition-colors duration-500 hover:text-gold-deep"
              >
                Conhecer a trajetória
                <ArrowRight aria-hidden strokeWidth={1.75} className="size-4 transition-transform duration-500 group-hover:translate-x-1" />
              </Link>
            </Reveal>
          </div>
        </div>
      </section>

      <CtaFinal />
    </>
  );
}
