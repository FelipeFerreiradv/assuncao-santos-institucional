import type { Metadata } from "next";
import { buildMetadata } from "@/lib/metadata";
import { PRIVACIDADE } from "@/content/legal";
import { PageHero } from "@/components/sections/page-hero";
import { LegalContent } from "@/components/sections/legal-content";

export const metadata: Metadata = buildMetadata({
  title: "Política de Privacidade",
  description:
    "Política de Privacidade do Assunção & Santos Advogados — como tratamos os seus dados, em conformidade com a LGPD (Lei nº 13.709/2018).",
  path: "/politica-de-privacidade",
  noIndex: false,
});

export default function PoliticaPage() {
  return (
    <>
      <PageHero
        eyebrow="Privacidade"
        title="Política de Privacidade"
        intro="Como tratamos os seus dados pessoais, em conformidade com a LGPD."
        crumbs={[{ label: "Início", href: "/" }, { label: "Política de Privacidade" }]}
      />
      <LegalContent blocks={PRIVACIDADE} />
    </>
  );
}
