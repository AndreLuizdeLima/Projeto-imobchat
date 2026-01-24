export const INITIAL_MESSAGES = [
  { id: 1, type: 'user', text: 'Oi', visible: true },
  { id: 2, type: 'ai', text: '', visible: false, typing: true }
];

export const CHAT_SEQUENCE = [
  {
    id: 2,
    delay: 1500,
    nextText: 'Olá! 👋 Seja bem-vindo ao ImobChat! Como posso te ajudar hoje?'
  },

  {
    id: 3,
    delay: 3500,
    type: 'user',
    text: 'Quero ver casas em Curitiba'
  },

  {
    id: 4,
    delay: 5000,
    nextText: 'Perfeito! 🏡 Você tem preferência por algum bairro ou faixa de valor?'
  },

  {
    id: 5,
    delay: 6500,
    type: 'user',
    text: 'Algo no Batel, até 2 milhões'
  },

  {
    id: 6,
    delay: 8000,
    nextText: 'Ótima escolha! 🔍 Estou buscando as melhores opções para você...'
  },

  {
    id: 7,
    delay: 10500,
    nextText:
      'Encontrei 3 casas incríveis no Batel que combinam com seu perfil. Quer ver os detalhes?',
    actions: ['Ver imóveis'],
    simulatedClick: 'Ver imóveis'
  },
  {
    id: 8,
    delay: 13000,
    nextText: 'Aqui estão as 3 melhores opções que encontrei para você no Batel:'
  },
  {
    id: 9,
    delay: 14500,
    nextText: 'Opção 1: Casa Batel Premium - 4 suítes, piscina.',
    image: '/casa-curitiba.png'
  },
  {
    id: 10,
    delay: 16000,
    nextText: 'Opção 2: Residência Araucária - Design moderno, ampla área verde.',
    image: '/casa-curitiba-2.png'
  },
  {
    id: 11,
    delay: 17500,
    nextText: 'Opção 3: Mansion Glass - Vista panorâmica e automação total.',
    image: '/casa-curitiba-3.png',
    actions: ['Gostei da primeira!', 'Gostei da segunda!', 'Gostei da terceira!'],
    simulatedClick: 'Gostei da primeira!'
  },
  {
    id: 12,
    delay: 20000,
    nextText:
      'Excelente escolha! ✨ Essa casa possui 4 suítes, piscina privativa e área gourmet.',
  },
  {
    id: 13,
    delay: 22500,
    nextText:
      'O que você gostaria de fazer agora?',
    actions: [
      'Agendar visita',
      'Falar com corretor',
      'Ver outras opções'
    ],
    simulatedClick: 'Agendar visita'
  },
  {
    id: 14,
    delay: 25000,
    nextText:
      'Com certeza! Vou te redirecionar para o corretor responsável pelo Batel agora mesmo. 🚀',
  }
];
