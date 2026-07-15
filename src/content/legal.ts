/**
 * Textos legais — Política de Privacidade (LGPD) e Termos de Uso.
 * Conteúdo base para revisão jurídica final. PENDENTE: validar com a advogada
 * e indicar o encarregado/DPO e a data de vigência.
 */

export type LegalBlock = { h2: string; body: string[] };

export const PRIVACIDADE: LegalBlock[] = [
  {
    h2: "1. Controlador dos dados",
    body: [
      "Este site é mantido pelo Assunção & Santos Advogados (Assunção Santos Sociedade Individual de Advocacia, CNPJ 24.185.338/0001-23), com sede na Rua Fernando Falcão, 1111 — sala 304, Mooca, São Paulo/SP. Para assuntos relativos a dados pessoais, entre em contato pelo e-mail recepcaoassuncaoesantosadv@gmail.com.",
    ],
  },
  {
    h2: "2. Quais dados coletamos",
    body: [
      "Coletamos apenas os dados que você fornece voluntariamente ao entrar em contato — como nome, telefone, e-mail e a mensagem que você escreve. O formulário de contato deste site não armazena dados em servidor: ao enviar, a sua mensagem é composta e aberta diretamente no WhatsApp, sob seu controle.",
      "Podemos coletar dados de navegação estritamente necessários ao funcionamento e à segurança do site.",
    ],
  },
  {
    h2: "3. Finalidade e base legal",
    body: [
      "Os dados de contato são utilizados exclusivamente para responder à sua solicitação e para eventual prestação de serviços advocatícios, com base no seu consentimento e no legítimo interesse de atendê-lo, nos termos da Lei nº 13.709/2018 (LGPD).",
    ],
  },
  {
    h2: "4. Compartilhamento",
    body: [
      "Não vendemos nem cedemos os seus dados. Eventual compartilhamento ocorre apenas quando necessário à prestação do serviço ou por exigência legal, sempre com respeito ao sigilo profissional inerente à advocacia.",
    ],
  },
  {
    h2: "5. Direitos do titular",
    body: [
      "Você pode, a qualquer momento, solicitar confirmação de tratamento, acesso, correção, anonimização, portabilidade ou exclusão dos seus dados, bem como revogar o consentimento, entrando em contato pelo e-mail indicado acima.",
    ],
  },
  {
    h2: "6. Segurança e retenção",
    body: [
      "Adotamos medidas técnicas e organizacionais para proteger os dados. As informações são mantidas apenas pelo tempo necessário às finalidades acima ou conforme prazos legais aplicáveis.",
    ],
  },
  {
    h2: "7. Alterações desta política",
    body: [
      "Esta política pode ser atualizada para refletir melhorias ou mudanças legais. A versão vigente estará sempre disponível nesta página.",
    ],
  },
];

export const TERMOS: LegalBlock[] = [
  {
    h2: "1. Aceitação",
    body: [
      "Ao acessar e utilizar este site, você concorda com estes Termos de Uso. Caso não concorde, pedimos que não utilize o site.",
    ],
  },
  {
    h2: "2. Caráter informativo",
    body: [
      "O conteúdo deste site tem finalidade meramente informativa, em conformidade com o Provimento nº 205/2021 e o Código de Ética e Disciplina da OAB. Não constitui oferta de serviços, aconselhamento jurídico específico nem promessa de resultado. Cada caso deve ser analisado individualmente por um advogado.",
    ],
  },
  {
    h2: "3. Propriedade intelectual",
    body: [
      "Os textos, a identidade visual e os demais elementos deste site são de titularidade do Assunção & Santos Advogados, sendo vedada a reprodução sem autorização prévia.",
    ],
  },
  {
    h2: "4. Links e conteúdos de terceiros",
    body: [
      "O site pode conter links para páginas externas (como WhatsApp, Instagram e Google Maps). Não nos responsabilizamos pelo conteúdo ou pelas políticas de privacidade desses serviços de terceiros.",
    ],
  },
  {
    h2: "5. Limitação de responsabilidade",
    body: [
      "Empregamos esforços para manter as informações corretas e atualizadas, mas não garantimos que o site estará sempre disponível ou livre de erros. Decisões tomadas com base no conteúdo do site são de responsabilidade do usuário.",
    ],
  },
  {
    h2: "6. Foro",
    body: [
      "Estes Termos são regidos pela legislação brasileira. Fica eleito o foro da comarca de São Paulo/SP para dirimir eventuais controvérsias.",
    ],
  },
];
