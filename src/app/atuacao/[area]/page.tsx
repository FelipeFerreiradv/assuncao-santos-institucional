import type { Metadata } from "next";
import { notFound } from "next/navigation";
import { buildMetadata } from "@/lib/metadata";
import {
  getBreadcrumbSchema,
  getFaqSchema,
  getServiceSchema,
} from "@/lib/schema";
import { AREAS, getAreaBySlug } from "@/content/areas";
import { getExtendedAreaBySlug } from "@/content/atuacao";
import { JsonLd } from "@/components/seo/json-ld";
import { PageHero } from "@/components/sections/page-hero";
import { AreaDetail } from "@/components/sections/area-detail";
import { FaqSection } from "@/components/sections/faq-section";
import { CtaFinal } from "@/components/sections/cta-final";

type Params = { area: string };

export function generateStaticParams(): Params[] {
  return AREAS.map((a) => ({ area: a.slug }));
}

export async function generateMetadata({
  params,
}: {
  params: Promise<Params>;
}): Promise<Metadata> {
  const { area: slug } = await params;
  const ext = getExtendedAreaBySlug(slug);
  const meta = getAreaBySlug(slug);
  if (!ext || !meta) return {};
  return buildMetadata({
    title: ext.seoTitle,
    description: ext.seoDescription,
    path: `/atuacao/${slug}`,
    keywords: ext.keywords,
    type: "article",
  });
}

export default async function AreaPage({
  params,
}: {
  params: Promise<Params>;
}) {
  const { area: slug } = await params;
  const ext = getExtendedAreaBySlug(slug);
  const meta = getAreaBySlug(slug);
  if (!ext || !meta) notFound();

  return (
    <>
      <JsonLd data={getServiceSchema(meta)} id="ld-service" />
      <JsonLd
        data={getBreadcrumbSchema([
          { name: "Início", url: "/" },
          { name: "Atuação", url: "/atuacao" },
          { name: meta.name, url: `/atuacao/${slug}` },
        ])}
        id="ld-breadcrumb"
      />
      <JsonLd data={getFaqSchema(ext.faq)} id="ld-faq" />

      <PageHero
        eyebrow={meta.name}
        title={ext.h1}
        crumbs={[
          { label: "Início", href: "/" },
          { label: "Atuação", href: "/atuacao" },
          { label: meta.shortName },
        ]}
      />
      <AreaDetail area={ext} meta={meta} />
      <FaqSection
        title="Perguntas frequentes sobre esta área"
        eyebrow="Dúvidas"
        items={ext.faq}
        id="faq-area"
      />
      <CtaFinal />
    </>
  );
}
