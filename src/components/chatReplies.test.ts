import assert from 'node:assert/strict';

import { getChatReply } from './chatReplies';

assert.match(
  getChatReply('Quem e voce?'),
  /Paulo Eduardo/i,
  'responde perguntas sobre identidade'
);

assert.match(
  getChatReply('Como entro em contato?'),
  /WhatsApp|LinkedIn|email/i,
  'orienta canais de contato'
);

assert.match(
  getChatReply('Me fala do Plix'),
  /Plix/i,
  'responde perguntas sobre o Plix'
);
