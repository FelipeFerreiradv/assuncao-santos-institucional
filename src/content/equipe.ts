/**
 * Equipe — Assunção & Santos é uma sociedade individual de advocacia:
 * a Dra. Fernanda Assunção é a advogada responsável e sócia-fundadora.
 * Bio e formação validadas na landing page da Dra. Fernanda.
 * PENDENTE: confirmar bio/formação e foto profissional atualizada com a cliente.
 */

export type Membro = {
  slug: string;
  name: string;
  role: string;
  oab: string;
  focus: string;
  photo: string;
  photoAlt: string;
  areas: string[];
  bio: string[];
  credentials: string[];
  signature: string;
  instagram?: string;
};

export const EQUIPE: Membro[] = [
  {
    slug: "fernanda-assuncao",
    name: "Dra. Fernanda Assunção",
    role: "Sócia-fundadora · Advogada responsável",
    oab: "OAB/SP 262.227",
    focus: "Direito Previdenciário",
    photo: "/images/fernanda-retrato.jpg",
    photoAlt:
      "Dra. Fernanda Assunção, advogada previdenciária e sócia-fundadora do Assunção & Santos Advogados, na Mooca, São Paulo",
    areas: ["Previdenciário", "Civil", "Bancário", "Imobiliário"],
    bio: [
      "Sou Fernanda Assunção, advogada com 10 anos de dedicação ao Direito Previdenciário e sócia-fundadora do Assunção & Santos Advogados.",
      "Sempre enxerguei o Direito não apenas como um conjunto de regras, mas como uma ferramenta viva para transformar a realidade das pessoas. Quando escolhi a área previdenciária, entendi que ali estava o meu propósito: trabalhar com Previdência não é apenas dar entrada em processos; é cuidar da dignidade, reconhecer o esforço de uma vida inteira de trabalho e ajudar famílias reais a terem segurança e tranquilidade para o futuro.",
      "É esse mesmo cuidado que orienta o escritório em todas as áreas em que atua — Previdenciário, Civil, Bancário e Imobiliário: técnica apurada, atendimento humano e proximidade com quem confia o seu caso a nós.",
    ],
    credentials: [
      "Atuação exclusiva em Direito Previdenciário há 10 anos",
      "Graduada em Direito (Universidade Cruzeiro do Sul)",
      "Pós-graduada em Direito Previdenciário (Universidade Cruzeiro do Sul)",
      "Especialização continuada em Previdenciário (IEPREV, Faprev e Legale)",
      "Atendimento presencial na Mooca, São Paulo, e online para todo o Brasil",
      "Sócia-fundadora do Assunção & Santos Advogados",
    ],
    signature: "Simplificando o Direito para você.",
    instagram: "https://instagram.com/advfernandaassuncao/",
  },
];

export function getMembroBySlug(slug: string): Membro | undefined {
  return EQUIPE.find((m) => m.slug === slug);
}
