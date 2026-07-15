/**
 * Áreas de atuação — cards e índice.
 *
 * Previdenciário é o carro-chefe (página aprofundada em content/atuacao/).
 * As descrições vêm do briefing validado, reescritas na voz do escritório e
 * em conformidade com a OAB (sem "garantimos", sem promessa de resultado).
 * As áreas Civil, Bancária e Imobiliária estão marcadas para aprovação final
 * da advogada (ver PENDENTE).
 */

export type Area = {
  slug: string;
  number: string;
  /** Nome do ícone lucide-react (mapeado no componente). */
  icon: string;
  name: string;
  shortName: string;
  tagline: string;
  /** Usada em meta description e cards. */
  shortDescription: string;
  longDescription: string[];
  bullets: string[];
  responsavel: string;
  keywords: string[];
  /** Área de destaque com página long-form dedicada. */
  flagship?: boolean;
};

export const AREAS: Area[] = [
  {
    slug: "previdenciario",
    number: "01",
    icon: "ShieldCheck",
    name: "Direito Previdenciário",
    shortName: "Previdenciário",
    tagline: "Aposentadoria, INSS e benefícios com estratégia e cuidado",
    shortDescription:
      "Advocacia previdenciária na Mooca, São Paulo: aposentadoria negada pelo INSS, aposentadoria especial, BPC/LOAS, revisões e planejamento. Presencial e online.",
    longDescription: [
      "O Direito Previdenciário é a área principal do escritório. Atuamos na proteção dos direitos de segurados do INSS, com soluções em aposentadorias, benefícios por incapacidade, pensão por morte, BPC/LOAS, revisões e planejamento previdenciário.",
      "O sistema previdenciário brasileiro é cheio de regras de transição, requisitos cumulativos e particularidades que mudam a cada reforma. Nosso trabalho começa antes do pedido: análise completa do CNIS (Cadastro Nacional de Informações Sociais), simulação de cenários e escolha do melhor caminho para o seu caso.",
      "Quando o INSS nega, atrasa ou paga a menos do que é devido, conduzimos o pedido administrativo, o recurso ao Conselho de Recursos da Previdência Social (CRPS) e a ação judicial, sempre com fundamentação técnica. Atendimento presencial na Mooca e online para todo o Brasil.",
    ],
    bullets: [
      "Aposentadoria negada pelo INSS",
      "Aposentadoria por idade, tempo de contribuição e especial",
      "Auxílio-doença e auxílio-acidente",
      "BPC/LOAS — benefício assistencial (deficiência, autismo e idoso)",
      "Pensão por morte",
      "Revisões de benefício, recursos administrativos e ações judiciais",
    ],
    responsavel: "Dra. Fernanda Assunção",
    keywords: [
      "advogada previdenciária Mooca",
      "advogado INSS Mooca",
      "aposentadoria negada pelo INSS",
      "aposentadoria especial",
      "BPC LOAS São Paulo",
      "revisão de benefício INSS",
    ],
    flagship: true,
  },
  {
    slug: "civil",
    number: "02",
    icon: "Scale",
    name: "Direito Civil",
    shortName: "Civil",
    tagline: "Defesa dos seus direitos patrimoniais e pessoais",
    // PENDENTE: texto expandido a partir do briefing — validar com a advogada.
    shortDescription:
      "Advocacia cível na Mooca, São Paulo: contratos, responsabilidade civil, indenizações e resolução de conflitos, com estratégia e comunicação clara.",
    longDescription: [
      "Atuamos na defesa dos direitos patrimoniais e pessoais, com soluções estratégicas em contratos, responsabilidade civil, indenizações e resolução de conflitos.",
      "Cada caso recebe análise documental cuidadosa e uma leitura técnica atualizada, buscando o caminho mais eficiente — seja pela via consensual, seja pela via judicial quando necessário. Nosso compromisso é traduzir o problema jurídico em uma estratégia clara, com riscos mapeados e expectativas realistas.",
    ],
    bullets: [
      "Elaboração e revisão de contratos",
      "Responsabilidade civil e indenizações",
      "Ações de cobrança e reparação de danos",
      "Direito do consumidor",
      "Resolução de conflitos e acordos",
    ],
    responsavel: "Dra. Fernanda Assunção",
    keywords: [
      "advogado civil Mooca",
      "direito civil São Paulo",
      "indenização",
      "revisão de contrato",
      "responsabilidade civil",
    ],
  },
  {
    slug: "bancario",
    number: "03",
    icon: "Landmark",
    name: "Direito Bancário",
    shortName: "Bancário",
    tagline: "Equilíbrio nas relações com instituições financeiras",
    // PENDENTE: texto expandido a partir do briefing — validar com a advogada.
    shortDescription:
      "Advocacia bancária na Mooca, São Paulo: revisão de contratos, defesa contra abusos de instituições financeiras e proteção do patrimônio.",
    longDescription: [
      "Representamos consumidores e empresas em demandas envolvendo instituições financeiras, buscando corrigir abusos, revisar contratos e proteger o patrimônio de nossos clientes.",
      "Analisamos taxas, encargos e cláusulas para identificar cobranças indevidas e reequilibrar a relação contratual. A atuação combina análise técnica dos contratos com estratégia processual adequada a cada situação.",
    ],
    bullets: [
      "Revisão de contratos bancários e de financiamento",
      "Juros e encargos abusivos",
      "Defesa em cobranças indevidas",
      "Renegociação e superendividamento",
      "Demandas contra instituições financeiras",
    ],
    responsavel: "Dra. Fernanda Assunção",
    keywords: [
      "advogado bancário Mooca",
      "revisão de contrato bancário",
      "juros abusivos",
      "superendividamento",
      "direito bancário São Paulo",
    ],
  },
  {
    slug: "imobiliario",
    number: "04",
    icon: "Building2",
    name: "Direito Imobiliário",
    shortName: "Imobiliário",
    tagline: "Segurança jurídica em cada etapa do seu imóvel",
    // PENDENTE: texto expandido a partir do briefing — validar com a advogada.
    shortDescription:
      "Advocacia imobiliária na Mooca, São Paulo: contratos, regularização de imóveis, locações e conflitos relacionados ao patrimônio imobiliário.",
    longDescription: [
      "Oferecemos segurança jurídica em negociações imobiliárias, contratos, regularização de imóveis, locações e conflitos relacionados ao patrimônio imobiliário.",
      "A atuação preventiva — com análise de documentação, matrícula e situação do imóvel — é o que diferencia uma boa negociação de um problema futuro. Acompanhamos cada etapa com atenção ao detalhe e ao seu patrimônio.",
    ],
    bullets: [
      "Contratos de compra, venda e locação",
      "Regularização de imóveis",
      "Distratos e ações locatícias",
      "Conflitos e disputas patrimoniais",
      "Assessoria em negociações imobiliárias",
    ],
    responsavel: "Dra. Fernanda Assunção",
    keywords: [
      "advogado imobiliário Mooca",
      "direito imobiliário São Paulo",
      "regularização de imóvel",
      "contrato de locação",
      "compra e venda de imóvel",
    ],
  },
];

export function getAreaBySlug(slug: string): Area | undefined {
  return AREAS.find((a) => a.slug === slug);
}
