import type { Metadata } from "next";
import Link from "next/link";
import Image from "next/image";
import { ArrowRight } from "lucide-react";
import { buildMetadata } from "@/lib/metadata";
import { getBreadcrumbSchema } from "@/lib/schema";
import { EQUIPE } from "@/content/equipe";
import { JsonLd } from "@/components/seo/json-ld";
import { PageHero } from "@/components/sections/page-hero";
import { CtaFinal } from "@/components/sections/cta-final";
import { SectionCanvas } from "@/components/shared/section-canvas";
import { Reveal } from "@/components/motion/reveal";

export const metadata: Metadata = buildMetadata({
  title: "Equipe",
  description:
    "Conheça a advogada responsável pelo Assunção & Santos Advogados, na Mooca, São Paulo: Dra. Fernanda Assunção, OAB/SP 262.227.",
  path: "/equipe",
});

export default function EquipePage() {
  return (
    <>
      <JsonLd
        data={getBreadcrumbSchema([
          { name: "Início", url: "/" },
          { name: "Equipe", url: "/equipe" },
        ])}
        id="ld-breadcrumb"
      />
      <PageHero
        eyebrow="Equipe"
        title="Quem conduz cada caso pessoalmente."
        intro="O Assunção & Santos é uma sociedade individual de advocacia: você é atendido diretamente pela advogada responsável, sem intermediários."
        crumbs={[{ label: "Início", href: "/" }, { label: "Equipe" }]}
      />

      <section className="relative isolate overflow-hidden bg-ivory py-20 md:py-28">
        <SectionCanvas curves="bottom-right" glow={["gold-br"]} />
        <div className="container-wide">
          <div className="grid gap-8 md:grid-cols-2 lg:gap-12">
            {EQUIPE.map((m) => (
              <Reveal key={m.slug}>
                <Link
                  href={`/equipe/${m.slug}`}
                  className="group flex h-full flex-col border border-stone-300/30 bg-paper transition-all duration-500 ease-out-expo hover:-translate-y-1.5 hover:border-gold/60"
                >
                  <div className="relative aspect-[4/3] overflow-hidden bg-cream">
                    <Image
                      src={m.photo}
                      alt={m.photoAlt}
                      fill
                      sizes="(min-width: 768px) 45vw, 100vw"
                      className="object-cover object-top transition-transform duration-700 ease-out-expo group-hover:scale-105"
                    />
                    <div aria-hidden className="pointer-events-none absolute inset-0 bg-gold/10 mix-blend-multiply" />
                  </div>
                  <div className="flex flex-1 flex-col p-8">
                    <h2 className="font-display text-2xl font-medium tracking-tight text-ink">
                      {m.name}
                    </h2>
                    <p className="mt-2 text-sm font-medium text-gold-deep">{m.role}</p>
                    <p className="mt-1 text-[0.6875rem] uppercase tracking-wide-plus text-slate/70">
                      {m.oab}
                    </p>
                    <p className="mt-5 flex-1 text-[0.9375rem] leading-relaxed text-slate text-justify">
                      {m.bio[0]}
                    </p>
                    <span className="mt-6 inline-flex items-center gap-3 text-[0.8125rem] font-medium uppercase tracking-wide-plus text-ink">
                      Ver perfil
                      <ArrowRight
                        aria-hidden
                        strokeWidth={1.75}
                        className="size-4 text-gold-dark transition-transform duration-500 group-hover:translate-x-1"
                      />
                    </span>
                  </div>
                </Link>
              </Reveal>
            ))}
          </div>
        </div>
      </section>

      <CtaFinal />
    </>
  );
}
