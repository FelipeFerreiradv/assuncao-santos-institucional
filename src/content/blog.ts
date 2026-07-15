/**
 * Blog institucional — estrutura preparada para SEO (topic clusters).
 *
 * Artigos escritos com foco em SEO previdenciário/local e em conformidade com a
 * OAB (informativos, sem promessa de resultado). Recomenda-se revisão final da
 * advogada sobre o conteúdo jurídico. Para despublicar um artigo, marque
 * `draft: true` (ele sai da indexação e ganha selo "Rascunho"). Não há pipeline
 * de markdown: cada artigo é um array tipado de blocos de conteúdo.
 */

export type BlogBlock =
  | { type: "p"; text: string }
  | { type: "h2"; text: string }
  | { type: "h3"; text: string }
  | { type: "ul"; items: string[] }
  | { type: "quote"; text: string };

export type BlogPost = {
  slug: string;
  title: string;
  description: string;
  category: string;
  categorySlug: string;
  author: string;
  /** ISO date (YYYY-MM-DD). */
  date: string;
  updated?: string;
  readingMinutes: number;
  keywords: string[];
  /** Artigo em rascunho — não indexar/exibir como publicado até aprovação. */
  draft?: boolean;
  featured?: boolean;
  content: BlogBlock[];
};

export const POSTS: BlogPost[] = [
  {
    slug: "aposentadoria-negada-pelo-inss-o-que-fazer",
    title: "Aposentadoria negada pelo INSS: o que fazer?",
    description:
      "Teve a aposentadoria ou o benefício negado pelo INSS? Entenda os motivos mais comuns, os prazos e os caminhos — recurso administrativo e ação judicial.",
    category: "Previdenciário",
    categorySlug: "previdenciario",
    author: "Dra. Fernanda Assunção",
    date: "2026-06-30",
    readingMinutes: 6,
    keywords: [
      "aposentadoria negada pelo INSS",
      "recurso INSS",
      "advogada previdenciária Mooca",
    ],
    featured: true,
    content: [
      {
        type: "p",
        text: "Receber uma negativa do INSS depois de anos de contribuição é frustrante — e assusta. Mas um “não” do INSS raramente é o fim da história. Boa parte dos indeferimentos acontece por questões que podem ser corrigidas.",
      },
      { type: "h2", text: "Por que o INSS nega um benefício" },
      {
        type: "p",
        text: "Antes de qualquer decisão, é preciso entender o motivo do indeferimento. Os mais comuns são:",
      },
      {
        type: "ul",
        items: [
          "Falta de documento ou documentação incompleta",
          "Erro na contagem do tempo de contribuição",
          "Vínculos que não aparecem no CNIS",
          "Perícia médica desfavorável",
          "Falta de qualidade de segurado ou de carência",
        ],
      },
      { type: "h2", text: "Recurso administrativo ou ação judicial?" },
      {
        type: "p",
        text: "A partir do motivo, há dois caminhos principais. O recurso administrativo, com prazo de 30 dias, é apresentado ao Conselho de Recursos da Previdência Social (CRPS) e pode resolver o caso sem processo. Quando não é suficiente, a ação judicial na Justiça Federal é o caminho.",
      },
      {
        type: "quote",
        text: "Em muitos casos, a documentação que faltou no pedido inicial pode ser complementada — e o benefício, obtido sem litígio prolongado.",
      },
      { type: "h2", text: "Não perca prazos" },
      {
        type: "p",
        text: "Os prazos previdenciários são curtos e decisivos. Se você recebeu uma negativa, vale analisar o caso o quanto antes. Cada situação é única e deve ser avaliada individualmente — este conteúdo é informativo e não substitui a análise do seu caso.",
      },
    ],
  },
  {
    slug: "bpc-loas-autismo-quando-a-familia-tem-direito",
    title: "BPC/LOAS e autismo: quando a família tem direito ao benefício",
    description:
      "O BPC/LOAS pode garantir um salário mínimo a pessoas com deficiência, incluindo autismo. Entenda os critérios de renda e de laudo, analisados caso a caso.",
    category: "Previdenciário",
    categorySlug: "previdenciario",
    author: "Dra. Fernanda Assunção",
    date: "2026-06-12",
    readingMinutes: 5,
    keywords: ["BPC LOAS autismo", "benefício assistencial", "BPC deficiência"],
    content: [
      {
        type: "p",
        text: "O BPC/LOAS é um benefício assistencial que garante um salário mínimo mensal a pessoas com deficiência — incluindo o Transtorno do Espectro Autista — e a idosos em situação de baixa renda. Diferente da aposentadoria, ele não exige contribuições ao INSS.",
      },
      { type: "h2", text: "Quais são os critérios" },
      {
        type: "ul",
        items: [
          "Deficiência de longo prazo (avaliada por perícia médica e social)",
          "Situação de vulnerabilidade e baixa renda familiar",
          "Análise da composição e da realidade da família",
        ],
      },
      { type: "h2", text: "A renda da família impede o benefício?" },
      {
        type: "p",
        text: "Existe um critério de renda, mas ele tem detalhes e situações específicas que precisam ser analisados caso a caso — não é uma conta automática. Antes de concluir que “não dá”, vale conversar: cada família tem uma realidade, e é ela que precisa ser olhada de perto.",
      },
      {
        type: "quote",
        text: "A insegurança de não saber como garantir os direitos de quem você ama é pesada. Uma análise atenta traz clareza sobre o que é possível.",
      },
      {
        type: "p",
        text: "Este conteúdo é informativo. Para saber se o seu caso se enquadra, o ideal é uma análise individual da documentação e da realidade familiar.",
      },
    ],
  },
  {
    slug: "aposentadoria-especial-como-provar-exposicao",
    title: "Aposentadoria especial: como provar a exposição a agentes nocivos",
    description:
      "Trabalhou exposto a ruído, calor ou produtos químicos? A aposentadoria especial pode antecipar sua aposentadoria. Veja como provar a exposição com PPP e LTCAT.",
    category: "Previdenciário",
    categorySlug: "previdenciario",
    author: "Dra. Fernanda Assunção",
    date: "2026-05-20",
    readingMinutes: 6,
    keywords: ["aposentadoria especial", "agentes nocivos", "PPP LTCAT"],
    content: [
      {
        type: "p",
        text: "Quem trabalhou exposto a agentes nocivos à saúde pode ter direito a se aposentar mais cedo, pela aposentadoria especial. O grande desafio, quase sempre, é provar essa exposição.",
      },
      { type: "h2", text: "Quais agentes contam" },
      {
        type: "ul",
        items: [
          "Ruído acima dos limites legais",
          "Calor e agentes físicos",
          "Agentes químicos e biológicos",
          "Radiação",
        ],
      },
      { type: "h2", text: "Os documentos que provam a exposição" },
      {
        type: "p",
        text: "A comprovação depende de documentos técnicos, principalmente o PPP (Perfil Profissiográfico Previdenciário) e o LTCAT (Laudo Técnico das Condições Ambientais de Trabalho), além de laudos periciais.",
      },
      {
        type: "quote",
        text: "É exatamente na leitura técnica desses documentos que um olhar cuidadoso faz diferença.",
      },
      {
        type: "p",
        text: "Cada histórico profissional é único. Este texto é informativo; a viabilidade da aposentadoria especial depende da análise da sua documentação.",
      },
    ],
  },
  {
    slug: "advogado-na-mooca-atendimento-presencial-e-online",
    title: "Advogado na Mooca: como funciona o atendimento presencial e online",
    description:
      "Precisa de um advogado na Mooca? Veja como funciona o atendimento do Assunção & Santos — presencial em São Paulo e online para todo o Brasil.",
    category: "Escritório",
    categorySlug: "escritorio",
    author: "Dra. Fernanda Assunção",
    date: "2026-05-05",
    readingMinutes: 4,
    keywords: [
      "advogado na Mooca",
      "escritório de advocacia Mooca",
      "atendimento online advogado",
    ],
    content: [
      {
        type: "p",
        text: "O Assunção & Santos Advogados atende na Mooca, em São Paulo, e também de forma online para clientes de outras regiões. A ideia é simples: proximidade e cuidado, presencialmente ou à distância.",
      },
      { type: "h2", text: "Como começa o atendimento" },
      {
        type: "p",
        text: "O primeiro contato acontece pelo WhatsApp, no seu tempo. A partir dele, agendamos uma conversa inicial — presencial no escritório ou por videochamada — para entender a sua situação e indicar os caminhos possíveis.",
      },
      { type: "h2", text: "Atendimento online com a mesma proximidade" },
      {
        type: "p",
        text: "Para quem prefere ou está em outra cidade, o atendimento online mantém o mesmo cuidado: documentos por meio digital e reuniões por videochamada. Onde você estiver, o seu direito pode ser cuidado.",
      },
      {
        type: "p",
        text: "Atendemos principalmente a Mooca e a região da zona leste de São Paulo — Tatuapé, Brás, Belém, Ipiranga e Água Rasa — além de clientes online em todo o Brasil.",
      },
    ],
  },
];

/** Apenas posts publicáveis (exclui rascunhos). Ative removendo draft: true. */
export const PUBLISHED_POSTS = POSTS.filter((p) => !p.draft);

/** Em produção use PUBLISHED_POSTS; enquanto todo o blog é rascunho de exemplo,
 *  exibimos os rascunhos com selo "Rascunho" para revisão da advogada. */
export const VISIBLE_POSTS = POSTS;

export function getPostBySlug(slug: string): BlogPost | undefined {
  return POSTS.find((p) => p.slug === slug);
}

export function getFeaturedPost(): BlogPost {
  return VISIBLE_POSTS.find((p) => p.featured) ?? VISIBLE_POSTS[0];
}

export type BlogCategory = { slug: string; name: string; count: number };

export function getCategories(): BlogCategory[] {
  const map = new Map<string, BlogCategory>();
  for (const p of VISIBLE_POSTS) {
    const existing = map.get(p.categorySlug);
    if (existing) existing.count += 1;
    else map.set(p.categorySlug, { slug: p.categorySlug, name: p.category, count: 1 });
  }
  return [...map.values()];
}

export function getRelatedPosts(slug: string, limit = 3): BlogPost[] {
  const current = getPostBySlug(slug);
  if (!current) return [];
  const sameCategory = VISIBLE_POSTS.filter(
    (p) => p.slug !== slug && p.categorySlug === current.categorySlug
  );
  const others = VISIBLE_POSTS.filter(
    (p) => p.slug !== slug && p.categorySlug !== current.categorySlug
  );
  return [...sameCategory, ...others].slice(0, limit);
}
