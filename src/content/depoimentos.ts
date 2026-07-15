/**
 * Depoimentos — avaliações reais e verificadas do Google, atribuídas e
 * limitadas à experiência de atendimento (sem estrelas, notas ou menção a
 * resultados), em conformidade com a OAB. Reaproveitados da landing page
 * validada da Dra. Fernanda.
 * PENDENTE: a cliente enviará depoimentos adicionais para ampliar esta lista.
 */

export type Depoimento = {
  quote: string;
  author: string;
  context: string;
};

export const GOOGLE_REVIEWS_URL = "https://share.google/El0AvYeg9cCG705B9";

export const DEPOIMENTOS: Depoimento[] = [
  {
    quote:
      "Uma profissional incrível que, além de exercer sua profissão com competência, transmite segurança, atenção e humanidade em cada detalhe.",
    author: "Rosimeire S.",
    context: "Google · Avaliação verificada",
  },
  {
    quote:
      "Dra. Fernanda, minha advogada há anos. Não troco e indico de olhos fechados.",
    author: "Alessandra K.",
    context: "Google · Avaliação verificada",
  },
  {
    quote:
      "Trabalho excelente e atendimento humanizado — o que mais precisamos ao ser atendidos. Indicação total.",
    author: "Edson C.",
    context: "Google · Local Guide",
  },
  {
    quote:
      "Maravilhoso, excelente profissional e ótima pessoa, extremamente competente. Eu indico.",
    author: "Naira P. F.",
    context: "Google · Avaliação verificada",
  },
];
