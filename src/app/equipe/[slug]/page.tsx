import type { Metadata } from "next";
import { notFound } from "next/navigation";
import Image from "next/image";
import { Check } from "lucide-react";
import { buildMetadata } from "@/lib/metadata";
import { getBreadcrumbSchema } from "@/lib/schema";
import { SITE } from "@/lib/site";
import { EQUIPE, getMembroBySlug } from "@/content/equipe";
import { JsonLd } from "@/components/seo/json-ld";
import { PageHero } from "@/components/sections/page-hero";
import { CtaFinal } from "@/components/sections/cta-final";
import { SectionCanvas } from "@/components/shared/section-canvas";
import { WhatsAppCta } from "@/components/shared/whatsapp-cta";
import { Reveal } from "@/components/motion/reveal";

type Params = { slug: string };

export function generateStaticParams(): Params[] {
  return EQUIPE.map((m) => ({ slug: m.slug }));
}

export async function generateMetadata({
  params,
}: {
  params: Promise<Params>;
}): Promise<Metadata> {
  const { slug } = await params;
  const m = getMembroBySlug(slug);
  if (!m) return {};
  return buildMetadata({
    title: `${m.name} — ${m.role}`,
    description: `${m.name}, ${m.oab}. ${m.bio[0]}`,
    path: `/equipe/${slug}`,
    type: "article",
  });
}

export default async function MembroPage({
  params,
}: {
  params: Promise<Params>;
}) {
  const { slug } = await params;
  const m = getMembroBySlug(slug);
  if (!m) notFound();

  return (
    <>
      <JsonLd
        data={getBreadcrumbSchema([
          { name: "Início", url: "/" },
          { name: "Equipe", url: "/equipe" },
          { name: m.name, url: `/equipe/${slug}` },
        ])}
        id="ld-breadcrumb"
      />

      <PageHero
        eyebrow={m.role}
        title={m.name}
        intro={m.oab}
        crumbs={[
          { label: "Início", href: "/" },
          { label: "Equipe", href: "/equipe" },
          { label: m.name },
        ]}
      />

      <section className="relative isolate overflow-hidden bg-ivory py-16 md:py-24">
        <SectionCanvas curves="top-left" glow={["sand-tl"]} />
        <div className="container-luxe grid gap-12 lg:grid-cols-12 lg:gap-16">
          {/* Retrato + contato */}
          <div className="lg:col-span-4">
            <div className="lg:sticky lg:top-32">
              <Reveal>
                <div className="relative aspect-[4/5] bg-cream">
                  <span aria-hidden className="absolute inset-0 -translate-x-4 -translate-y-4 border border-gold/40" />
                  <Image
                    src={m.photo}
                    alt={m.photoAlt}
                    fill
                    sizes="(min-width: 1024px) 30vw, 100vw"
                    className="object-cover object-top"
                  />
                  <div aria-hidden className="pointer-events-none absolute inset-0 bg-gold/10 mix-blend-multiply" />
                </div>
              </Reveal>
              <div className="mt-8 border border-gold/25 bg-paper p-6">
                <p className="text-[0.6875rem] font-medium uppercase tracking-luxe text-gold-deep">
                  Áreas de atuação
                </p>
                <p className="mt-3 text-sm leading-relaxed text-slate">{m.areas.join(" · ")}</p>
                <WhatsAppCta label="Falar no WhatsApp" size="sm" className="mt-5 w-full" />
              </div>
            </div>
          </div>

          {/* Bio + formação */}
          <div className="lg:col-span-8">
            <div className="space-y-6">
              {m.bio.map((p, i) => (
                <Reveal
                  key={i}
                  as="p"
                  delay={i * 0.06}
                  className="text-base leading-relaxed text-slate [&:not(:first-child)]:text-justify first:font-display first:text-xl first:text-ink first:italic md:text-lg md:first:text-2xl"
                >
                  {p}
                </Reveal>
              ))}
            </div>

            <Reveal delay={0.2} className="mt-10 hairline-gold pt-6">
              <p className="font-display text-2xl italic text-gold-deep">{m.signature}</p>
              <p className="mt-2 text-sm text-slate">— {m.name} · {m.oab}</p>
            </Reveal>

            <div className="mt-12">
              <h2 className="text-[0.6875rem] font-medium uppercase tracking-luxe text-gold-deep">
                Formação e trajetória
              </h2>
              <ul className="mt-6 grid gap-4 sm:grid-cols-2">
                {m.credentials.map((c) => (
                  <li key={c} className="flex gap-3 text-[0.9375rem] leading-relaxed text-slate">
                    <Check aria-hidden strokeWidth={2} className="mt-0.5 size-4 shrink-0 text-gold-dark" />
                    {c}
                  </li>
                ))}
              </ul>
              <p className="mt-8 text-xs leading-relaxed text-slate/70">
                {SITE.legalName} · CNPJ {SITE.cnpj} · Sociedade {SITE.oabSociedade}
              </p>
            </div>
          </div>
        </div>
      </section>

      <CtaFinal />
    </>
  );
}
