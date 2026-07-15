import type { Metadata } from "next";
import { buildMetadata } from "@/lib/metadata";
import { getFaqSchema } from "@/lib/schema";
import { faqInstitucional } from "@/content/institucional";
import { JsonLd } from "@/components/seo/json-ld";
import { HomeHero } from "@/components/sections/home-hero";
import { QuemSomos } from "@/components/sections/quem-somos";
import { AreasGrid } from "@/components/sections/areas-grid";
import { Diferenciais } from "@/components/sections/diferenciais";
import { Processo } from "@/components/sections/processo";
import { Depoimentos } from "@/components/sections/depoimentos";
import { BlogDestaque } from "@/components/sections/blog-destaque";
import { FaqSection } from "@/components/sections/faq-section";
import { CtaFinal } from "@/components/sections/cta-final";

export const metadata: Metadata = buildMetadata({
  title: "Escritório de Advocacia na Mooca, São Paulo",
  description:
    "Assunção & Santos Advogados — advocacia previdenciária, cível, bancária e imobiliária na Mooca, São Paulo. Atendimento humano, presencial e online. Fale no WhatsApp.",
  path: "/",
  keywords: [
    "advogado previdenciário Mooca",
    "advogado Tatuapé",
    "advogado Ipiranga",
    "aposentadoria negada pelo INSS",
    "BPC LOAS",
  ],
});

export default function HomePage() {
  return (
    <>
      <JsonLd data={getFaqSchema(faqInstitucional.items)} id="ld-faq-home" />
      <HomeHero />
      <QuemSomos />
      <AreasGrid />
      <Diferenciais />
      <Processo />
      <Depoimentos />
      <BlogDestaque />
      <FaqSection
        number={faqInstitucional.number}
        eyebrow={faqInstitucional.eyebrow}
        title={faqInstitucional.title}
        items={faqInstitucional.items}
      />
      <CtaFinal />
    </>
  );
}
