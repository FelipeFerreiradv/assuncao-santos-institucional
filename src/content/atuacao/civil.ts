import type { ExtendedArea } from "./index";

/**
 * PENDENTE: conteúdo expandido a partir do briefing — validar com a advogada
 * antes de publicar. Conformidade OAB: informativo, sem promessa de resultado.
 */
export const civil: ExtendedArea = {
  slug: "civil",
  seoTitle: "Advogado de Direito Civil na Mooca | Assunção & Santos Advogados",
  seoDescription:
    "Advocacia cível na Mooca, São Paulo: contratos, responsabilidade civil, indenizações, direito do consumidor e resolução de conflitos. Presencial e online.",
  keywords: [
    "advogado civil Mooca",
    "direito civil São Paulo",
    "indenização",
    "revisão de contrato",
    "responsabilidade civil",
  ],
  h1: "Direito Civil na Mooca — Contratos, Indenizações e Conflitos",
  lead: [
    "O Direito Civil é a espinha dorsal das relações privadas: contratos, propriedade, responsabilidade e reparação de danos. Atuamos na defesa dos seus direitos patrimoniais e pessoais, com leitura técnica apurada e visão estratégica.",
    "Buscamos a solução mais eficiente — seja pela via consensual, seja pela via judicial quando necessário — sempre com comunicação transparente e expectativas realistas.",
  ],
  sections: [
    {
      id: "contratos",
      h2: "Contratos e responsabilidade civil",
      body: [
        "Elaboramos e revisamos contratos para dar segurança às suas relações, prevenindo conflitos antes que eles surjam. Quando o dano já ocorreu, atuamos na responsabilização e na reparação — material e moral.",
        "Cada caso recebe análise documental rigorosa e fundamentação técnica, com riscos mapeados e estratégia clara antes de qualquer decisão.",
      ],
    },
    {
      id: "consumidor-e-conflitos",
      h2: "Direito do consumidor e resolução de conflitos",
      body: [
        "Defendemos consumidores em relações desequilibradas — cobranças indevidas, produtos e serviços defeituosos, negativação irregular — buscando a reparação cabível.",
        "Sempre que possível, priorizamos a via consensual (negociação e acordo), reservando o caminho judicial firme para quando ele é realmente necessário.",
      ],
    },
  ],
  faq: [
    {
      question: "Tenho direito a indenização por danos morais?",
      answer:
        "Depende da situação concreta — é preciso demonstrar o dano e o nexo com a conduta da outra parte. Na conversa inicial, analisamos o seu caso e explicamos, com clareza, se e como a reparação pode ser buscada, sem promessa de valores.",
    },
    {
      question: "Vale a pena resolver por acordo ou entrar com ação?",
      answer:
        "As duas vias têm vantagens conforme o caso. Avaliamos custos, prazos e riscos de cada caminho e apresentamos a estratégia mais adequada ao seu objetivo — a decisão é sempre sua, de forma informada.",
    },
    {
      question: "Vocês atendem online?",
      answer:
        "Sim. Além do atendimento presencial na Mooca, atendemos por videochamada e WhatsApp, com envio de documentos por meio digital.",
    },
  ],
};
