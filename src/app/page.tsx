import type { Metadata } from "next";
import { buildMetadata } from "@/lib/metadata";
import { HomeHero } from "@/components/sections/home-hero";
import { QuemSomos } from "@/components/sections/quem-somos";
import { AreasEditorial } from "@/components/sections/areas-editorial";
import { Diferenciais } from "@/components/sections/diferenciais";
import { Processo } from "@/components/sections/processo";
import { Escritorio } from "@/components/sections/escritorio";
import { EquipeHome } from "@/components/sections/equipe-home";
import { Depoimentos } from "@/components/sections/depoimentos";
import { BlogDestaque } from "@/components/sections/blog-destaque";
import { ContatoSection } from "@/components/sections/contato-section";

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

/**
 * Home institucional — percurso: apresentação → sobre → áreas → diferenciais →
 * metodologia → escritório → equipe → depoimentos → conteúdo → contato.
 * A home funciona como vitrine que distribui o leitor para as páginas internas;
 * o FAQ vive em /faq e nas páginas de área (onde o schema FAQPage é emitido).
 */
export default function HomePage() {
  return (
    <>
      <HomeHero />
      <QuemSomos />
      <AreasEditorial />
      <Diferenciais />
      <Processo />
      <Escritorio />
      <EquipeHome />
      <Depoimentos />
      <BlogDestaque />
      <ContatoSection />
    </>
  );
}
