import type { Metadata } from "next";
import { buildMetadata } from "@/lib/metadata";
import { getBreadcrumbSchema } from "@/lib/schema";
import { JsonLd } from "@/components/seo/json-ld";
import { PageHero } from "@/components/sections/page-hero";
import { AreasGrid } from "@/components/sections/areas-grid";
import { CtaFinal } from "@/components/sections/cta-final";

export const metadata: Metadata = buildMetadata({
  title: "Áreas de atuação",
  description:
    "Áreas de atuação do Assunção & Santos Advogados na Mooca: Direito Previdenciário (carro-chefe), Civil, Bancário e Imobiliário. Presencial e online.",
  path: "/atuacao",
  keywords: ["áreas de atuação advocacia Mooca", "advogado previdenciário", "advogado civil"],
});

export default function AtuacaoPage() {
  return (
    <>
      <JsonLd
        data={getBreadcrumbSchema([
          { name: "Início", url: "/" },
          { name: "Atuação", url: "/atuacao" },
        ])}
        id="ld-breadcrumb"
      />
      <PageHero
        eyebrow="Áreas de atuação"
        title="Como podemos ajudar você e a sua família."
        intro="Atuação consultiva e contenciosa em quatro áreas, com o Direito Previdenciário como carro-chefe do escritório."
        crumbs={[{ label: "Início", href: "/" }, { label: "Atuação" }]}
      />
      <AreasGrid withHeading={false} className="py-16 md:py-24" />
      <CtaFinal />
    </>
  );
}
