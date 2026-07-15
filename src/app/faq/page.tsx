import type { Metadata } from "next";
import { buildMetadata } from "@/lib/metadata";
import { getBreadcrumbSchema, getFaqSchema } from "@/lib/schema";
import { faqInstitucional } from "@/content/institucional";
import { previdenciario } from "@/content/atuacao/previdenciario";
import { JsonLd } from "@/components/seo/json-ld";
import { PageHero } from "@/components/sections/page-hero";
import { FaqSection } from "@/components/sections/faq-section";
import { CtaFinal } from "@/components/sections/cta-final";

export const metadata: Metadata = buildMetadata({
  title: "Perguntas frequentes",
  description:
    "Perguntas frequentes sobre o atendimento do Assunção & Santos Advogados e sobre Direito Previdenciário — INSS, aposentadoria, BPC/LOAS. Mooca, São Paulo.",
  path: "/faq",
});

const allFaqs = [...faqInstitucional.items, ...previdenciario.faq];

export default function FaqPage() {
  return (
    <>
      <JsonLd
        data={getBreadcrumbSchema([
          { name: "Início", url: "/" },
          { name: "Perguntas frequentes", url: "/faq" },
        ])}
        id="ld-breadcrumb"
      />
      <JsonLd data={getFaqSchema(allFaqs)} id="ld-faq" />

      <PageHero
        eyebrow="Perguntas frequentes"
        title="Dúvidas frequentes, respondidas com clareza."
        intro="Reunimos as perguntas que mais ouvimos sobre o escritório e sobre Direito Previdenciário. Não encontrou a sua? Fale no WhatsApp."
        crumbs={[{ label: "Início", href: "/" }, { label: "FAQ" }]}
      />

      <FaqSection
        number="01"
        eyebrow="Sobre o escritório"
        title="Atendimento e escritório"
        items={faqInstitucional.items}
        id="faq-escritorio"
      />
      <FaqSection
        number="02"
        eyebrow="Direito Previdenciário"
        title="INSS, aposentadoria e benefícios"
        items={previdenciario.faq}
        id="faq-previdenciario"
      />
      <CtaFinal />
    </>
  );
}
