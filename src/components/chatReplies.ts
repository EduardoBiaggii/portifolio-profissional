const DEFAULT_REPLY =
  'Posso te responder sobre o Paulo Eduardo, o Plix App, experiencia comercial, familia, tecnologia e formas de contato. Se quiser falar direto, use WhatsApp, LinkedIn ou email na secao Contato.';

const REPLIES = [
  {
    terms: ['quem', 'voce', 'paulo', 'eduardo', 'biagi', 'perfil'],
    answer:
      'Sou o Paulo Eduardo, vendedor, pai e construtor de produtos digitais. Tenho perfil comercial, foco em resultado e estou construindo o Plix App a partir de problemas reais que vivi em vendas.',
  },
  {
    terms: ['plix', 'app', 'produto', 'projeto', 'comissao', 'vendas'],
    answer:
      'O Plix App e uma ferramenta de gestao de vendas e calculo de comissao para vendedores de loja. A ideia nasceu da pratica: simplificar controle, meta e comissao para quem vive venda no dia a dia.',
  },
  {
    terms: ['contato', 'whatsapp', 'linkedin', 'email', 'falar', 'conversar'],
    answer:
      'Voce pode falar com o Paulo pela secao Contato. La tem WhatsApp, LinkedIn e email para uma conversa direta.',
  },
  {
    terms: ['familia', 'filho', 'pai', 'eduardo levi', 'leivi'],
    answer:
      'A familia e uma base importante para o Paulo. Ele e pai do Eduardo Levi e trata essa responsabilidade como uma das principais motivacoes para construir produtos e buscar novos caminhos profissionais.',
  },
  {
    terms: ['tecnologia', 'stack', 'react', 'typescript', 'firebase', 'css'],
    answer:
      'Neste portfolio e no Plix, a stack passa por React, TypeScript, Firebase, CSS e Vite. O foco e criar interfaces simples, uteis e publicaveis.',
  },
] as const;

function normalize(text: string) {
  return text
    .toLowerCase()
    .normalize('NFD')
    .replace(/[\u0300-\u036f]/g, '');
}

export function getChatReply(input: string) {
  const normalizedInput = normalize(input);
  const match = REPLIES.find(({ terms }) =>
    terms.some((term) => normalizedInput.includes(normalize(term)))
  );

  return match?.answer ?? DEFAULT_REPLY;
}
