/**
 * Fonte única de verdade do site institucional — Assunção & Santos Advogados.
 *
 * Dados de marca, contato (NAP), navegação e geo. Reaproveitado por layout,
 * seções, metadata e schema.org. Mantém a identidade da landing page validada
 * da Dra. Fernanda (paleta ivory/dourado/ink, Fraunces) elevada à marca do
 * escritório.
 */

const WHATSAPP_NUMBER = "5511925533716";
const WHATSAPP_MESSAGE =
  "Olá! Vim pelo site do Assunção & Santos Advogados e gostaria de contar o meu caso.";

export const SITE = {
  name: "Assunção & Santos Advogados",
  shortName: "Assunção & Santos",
  legalName: "Assunção Santos Sociedade Individual de Advocacia",
  cnpj: "24.185.338/0001-23",
  oabSociedade: "OAB/SP 68.676",
  tagline: "Advocacia previdenciária, cível, bancária e imobiliária na Mooca",
  description:
    "Escritório de advocacia na Mooca, São Paulo, com atuação em Direito Previdenciário (INSS, aposentadorias, BPC/LOAS), Civil, Bancário e Imobiliário. Atendimento humano, presencial em São Paulo e online em todo o Brasil.",
  url: "https://assuncaoesantos.com.br",
  ogImage: "/og.png",
  locale: "pt-BR",
  city: "São Paulo",
  region: "Mooca",
  state: "SP",
  founded: 2011,

  /** Faixa de autoridade do hero. Apenas dados factuais e já validados. */
  stats: [
    { label: "Anos em Direito Previdenciário", value: 10, suffix: "+", display: null },
    { label: "Áreas do Direito", value: 4, suffix: "", display: null },
    { label: "Atendimento online", value: 0, suffix: "", display: "Nacional" },
  ],

  // Advogada responsável (firma individual)
  lawyer: {
    name: "Dra. Fernanda Assunção",
    shortName: "Fernanda Assunção",
    firstName: "Fernanda",
    oab: "OAB/SP 262.227",
    role: "Sócia-fundadora",
    focus: "Direito Previdenciário",
    slug: "fernanda-assuncao",
  },

  contact: {
    phoneDisplay: "(11) 92553-3716",
    phoneE164: "+5511925533716",
    whatsapp: WHATSAPP_NUMBER,
    whatsappUrl: `https://wa.me/${WHATSAPP_NUMBER}?text=${encodeURIComponent(WHATSAPP_MESSAGE)}`,
    landlineDisplay: "(11) 2604-8915",
    landlineE164: "+551126048915",
    email: "contato@assuncaoesantos.com.br",
  },

  address: {
    street: "Rua Fernando Falcão, 1111 — sala 304",
    neighborhood: "Mooca",
    city: "São Paulo",
    state: "SP",
    zip: "03180-003",
    country: "BR",
    full: "Rua Fernando Falcão, 1111 — sala 304, Mooca, São Paulo/SP, CEP 03180-003",
    mapsUrl:
      "https://www.google.com/maps/search/?api=1&query=Rua+Fernando+Falc%C3%A3o,+1111,+Mooca,+S%C3%A3o+Paulo+-+SP,+03180-003",
    mapsEmbed:
      "https://www.google.com/maps/embed?origin=mfe&pb=!1m3!2m1!1sRua+Fernando+Falc%C3%A3o,+1111,+Mooca,+S%C3%A3o+Paulo+-+SP,+03180-003!6i16",
  },

  // Coordenadas aproximadas da Mooca (confirmar com o endereço exato)
  geo: { latitude: -23.5546, longitude: -46.6011 },

  hours: {
    label: "Segunda a sexta · 08:30 às 17:30",
    schemaFormat: "Mo-Fr 08:30-17:30",
    days: [
      { day: "Segunda-feira", open: "08:30", close: "17:30" },
      { day: "Terça-feira", open: "08:30", close: "17:30" },
      { day: "Quarta-feira", open: "08:30", close: "17:30" },
      { day: "Quinta-feira", open: "08:30", close: "17:30" },
      { day: "Sexta-feira", open: "08:30", close: "17:30" },
      { day: "Sábado", open: null, close: null },
      { day: "Domingo", open: null, close: null },
    ],
  },

  social: {
    instagram: "https://instagram.com/assuncaoesantosadvs/",
    instagramHandle: "@assuncaoesantosadvs",
    instagramLawyer: "https://instagram.com/advfernandaassuncao/",
    instagramLawyerHandle: "@advfernandaassuncao",
  },

  // Alcance geográfico — zona leste de São Paulo + atendimento online nacional
  citiesServed: [
    "Mooca",
    "Tatuapé",
    "Brás",
    "Belém",
    "Ipiranga",
    "Água Rasa",
    "São Paulo",
  ],

  nav: [
    { label: "Início", href: "/", hasMega: false },
    { label: "Sobre", href: "/sobre", hasMega: false },
    { label: "Atuação", href: "/atuacao", hasMega: true },
    { label: "Equipe", href: "/equipe", hasMega: false },
    { label: "Blog", href: "/blog", hasMega: false },
    { label: "Contato", href: "/contato", hasMega: false },
  ],

  whatsappMessage: WHATSAPP_MESSAGE,
} as const;

export type Site = typeof SITE;

/** Aviso legal padrão — conformidade OAB (Provimento 205/2021 + Código de Ética). */
export const LEGAL_NOTICE =
  "Este conteúdo tem caráter meramente informativo, em conformidade com o Provimento nº 205/2021 e o Código de Ética e Disciplina da OAB. As informações aqui apresentadas não constituem oferta de serviços, aconselhamento jurídico específico nem promessa de resultado. Cada caso deve ser analisado individualmente.";

/** Monta um link de WhatsApp com mensagem pré-preenchida (OAB-safe, sem "orçamento"). */
export function whatsappLink(message?: string): string {
  const text = message ?? SITE.whatsappMessage;
  return `https://wa.me/${SITE.contact.whatsapp}?text=${encodeURIComponent(text)}`;
}
