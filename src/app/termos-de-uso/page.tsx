import type { Metadata } from "next";
import { buildMetadata } from "@/lib/metadata";
import { TERMOS } from "@/content/legal";
import { PageHero } from "@/components/sections/page-hero";
import { LegalContent } from "@/components/sections/legal-content";

export const metadata: Metadata = buildMetadata({
  title: "Termos de Uso",
  description:
    "Termos de Uso do site do Assunção & Santos Advogados. Conteúdo informativo em conformidade com a OAB.",
  path: "/termos-de-uso",
});

export default function TermosPage() {
  return (
    <>
      <PageHero
        eyebrow="Termos"
        title="Termos de Uso"
        intro="As condições de uso deste site."
        crumbs={[{ label: "Início", href: "/" }, { label: "Termos de Uso" }]}
      />
      <LegalContent blocks={TERMOS} />
    </>
  );
}
