const allPosts = [
  {
    published: '2022-11-18T21:28:59.469Z',
    updated: '2022-11-18T21:28:59.469Z',
    id: 1,
    title: 'Unicório assalta loja de doces',
    content:
      'Em protesto ao esteriótipo de que unicórnios devem ser sempre a representação do que é puro e bom, Rainbow Dreamer, unicórnio de 28 anos, resolveu infringir legislação vigente e roubar vários itens da Planeta Doceria, a loja especializada em chacolates trufados na Fantasy Land.',
    userId: 1,
  },
  {
    published: '2022-11-18T22:28:59.469Z',
    updated: '2022-11-18T22:28:59.469Z',
    id: 2,
    title: 'Coelho da páscoa quer "Auxílio ovos coloridos"',
    content:
      'Enquanto os bunnies trabalham ao longo do ano na confecção dos ovos de páscoa, o Coelho da Páscoa, CEO da ilha da fantasia, expressa a necessidade de investimento em matéira prima: "Todos os anos meus funcionários e eu trabalhamos duramente para seguir existindo em um mercado cada vez mais competitivo; apenas ovos bonitos não bastam atualmente, eles tem que ser chocolatudos, estar em boa quantidade e oferecer brindes. Precisamos de um incentivo de estado, algo como um Auxílio ovos coloridos, que nos permita investir em um diferencial para nossos ovos!"',
    userId: 1,
  },
  {
    published: '2022-11-18T21:30:59.469Z',
    updated: '2022-11-18T21:28:30.469Z',
    id: 3,
    title: 'Fadas entram em greve exigindo seguro de vôo',
    content:
      'Após anos seguindo os mesmos princípios de vôo, quase sem acidentes, as fadas voadoras reclamam que o número cada vez maior de voadores de temporada tem causado sérios problemas ao longo de suas viagens; as fadas dizem que, como os planos de vôo mudaram e elas não são as únicas detentoras do espaço aéreo, elas não devem ser as únicas a voarem desprotegidas. A greve se pauta no fato de que, enquanto outras categorias, como borboletas, abelhas, pássaros e vagalumes, possuem em seu contrato um forte seguro de vôo para cobertura de imprevistos, a categoria das fadas voadoras não conta com essa cobertura de contrato. De acordo com Sparkling, representante da cetegoria, a decisão se pauta em simples preconceito: "Não querem incluir nossa categoria nos planos de cobertura de vôo sob o pretesto de que fadas são criaturas fictícias, mas isso é absurdo, seria o mesmo que excluir as abelhas por serem amarelas".',
    userId: 1,
  },
  {
    published: '2022-11-18T15:28:59.469Z',
    updated: '2022-11-18T15:28:59.469Z',
    id: 4,
    title:
      'Elfos acreditam que separar crianças em "lista dos bonzinhos" e "lista dos danadinhos" representa falha moral',
    content:
      'Os elfos da Ilha do Natal trouxeram a atenção da sociedade em geral um dilema moral que já foi dado como certo ao longo do tempo. De acordo com os elfos que se manifestaram, a divisão das crianças entre bonzinhos e danadinhos minimiza a dicotomia existente em qualquer ser humano e não é justo para a profundidade da personalidade das crianças.',
    userId: 1,
  },
  {
    published: '2022-11-18T12:28:59.469Z',
    updated: '2022-11-18T12:28:59.469Z',
    id: 5,
    title: 'Bruxa do João e Maria reclama de esteriótipo da bruxa',
    content:
      'De acordo Suzanne, também conhecida como "Bruxa do João e Maria", a invasão dos irmãos a sua casa seria mal vista em qualquer outro lugar, mas por ser bruxa e morar na floresta, ela nunca pôde processá-los. Suzanne ainda afirma: "O próprio fato de sempre contarem a história referindo-se a mim enquanto Bruxa do João e Maria demonstra como o esteriótipo embasa a situação, visto que nunca lembram do meu nome".',
    userId: 2,
  },
  {
    published: '2022-11-18T21:05:38.469Z',
    updated: '2022-11-18T21:05:38.469Z',
    id: 6,
    title: 'Lobo da Chapeuzinho aponta ambiguidade do conceito de mau',
    content:
      'O Lobo da história da Chapéuzinho vermelho, também conhecido como Lobo Mau, resolveu falar sobre como, no seu caso, mau envolvia seguir seus próprios instintos. Citando Nietzsche ao criticar a moral cristã no ocidente o Lobo apontou que, considerando que Chapeuzinho estava levando para a avó uma torta de carne, é o cúmulo da hipocrisia acusá-lo por seguir a cadeia alimentar.',
    userId: 1,
  },
  {
    published: '2022-11-18T17:28:59.469Z',
    updated: '2022-11-18T17:28:59.469Z',
    id: 7,
    title: 'Calipso afirma que nunca pediu para Ulisses morar com ela',
    content:
      'Calipso, conhecida pelo seu papel na Odisseia como a ninfa que, quando Ulisses naufragou na sua ilha após ter ficado a deriva em mar aberto, acolheu-o e por ele se apaixonou; de acordo com a história passava os dias a tecer e a fiarenquanto tentava seduzi-lo com juventude eterna e a imortalidade se aceitasse ficar com ela para sempre. Acontece que Capipso apresentou seu lado da história, esclarecendo que: "Olha, eu deixei ele ficar porque não ia deixá-lo morrer na praia, mas daí a me apaixonar e querer seduzi-lo para que morasse comigo, isso nunca aconteceu. Inclusive devo apontar que tinha mais o que fazer, meu trabalho original era como deusa findadeira, apocalipse, por exemplo, só existe porque Calipso existiu antes".',
    userId: 1,
  },
];

const postToInsert = {
  title: 'Duendes, gnomos e anões iniciam campanha de conscientização',
  content:
    'Durante todo o mês vigente anões, gnomos e duendes estarão indo às ruas, oferecendo palestras e conduzindo mesas de discussão a respeito do que os diferencia enquanto criaturas místicas. Deree, representante dos anões, explica como se notou a importância de investir em conscientização: "É muito comum que humanos, e até outras criaturas fantásticas, considerem que duendes, gnomos e anões são as mesmas criaturas, o que, além de não ser verdade, é altamente ofensivo, considerando que na Guerra dos dez exércitos anões, gnomos e duendes estiveram lutando em exércitos opostos.',
  userId: 2,
};

const insertedPost = {
  published: '2022-11-18T18:28:59.469Z',
  updated: '2022-11-18T18:28:59.469Z',
  id: 8,
  title: 'Duendes, gnomos e anões iniciam campanha de conscientização',
  content:
    'Durante todo o mês vigente anões, gnomos e duendes estarão indo às ruas, oferecendo palestras e conduzindo mesas de discussão a respeito do que os diferencia enquanto criaturas místicas. Deree, representante dos anões, explica como se notou a importância de investir em conscientização: "É muito comum que humanos, e até outras criaturas fantásticas, considerem que duendes, gnomos e anões são as mesmas criaturas, o que, além de não ser verdade, é altamente ofensivo, considerando que na Guerra dos dez exércitos anões, gnomos e duendes estiveram lutando em exércitos opostos.',
  userId: 2,
};

const postsByUser = [
  {
    published: '2022-11-18T12:28:59.469Z',
    updated: '2022-11-18T12:28:59.469Z',
    id: 5,
    title: 'Bruxa do João e Maria reclama de esteriótipo da bruxa',
    content:
      'De acordo Suzanne, também conhecida como "Bruxa do João e Maria", a invasão dos irmãos a sua casa seria mal vista em qualquer outro lugar, mas por ser bruxa e morar na floresta, ela nunca pôde processá-los. Suzanne ainda afirma: "O próprio fato de sempre contarem a história referindo-se a mim enquanto Bruxa do João e Maria demonstra como o esteriótipo embasa a situação, visto que nunca lembram do meu nome".',
    userId: 2,
  },
  {
    published: '2022-11-18T18:28:59.469Z',
    updated: '2022-11-18T18:28:59.469Z',
    id: 8,
    title: 'Duendes, gnomos e anões iniciam campanha de conscientização',
    content:
      'Durante todo o mês vigente anões, gnomos e duendes estarão indo às ruas, oferecendo palestras e conduzindo mesas de discussão a respeito do que os diferencia enquanto criaturas místicas. Deree, representante dos anões, explica como se notou a importância de investir em conscientização: "É muito comum que humanos, e até outras criaturas fantásticas, considerem que duendes, gnomos e anões são as mesmas criaturas, o que, além de não ser verdade, é altamente ofensivo, considerando que na Guerra dos dez exércitos anões, gnomos e duendes estiveram lutando em exércitos opostos.',
    userId: 2,
  },
];

const singlePost = {
  published: '2022-11-18T17:28:59.469Z',
  updated: '2022-11-18T17:28:59.469Z',
  id: 7,
  title: 'Calipso afirma que nunca pediu para Ulisses morar com ela',
  content:
    'Calipso, conhecida pelo seu papel na Odisseia como a ninfa que, quando Ulisses naufragou na sua ilha após ter ficado a deriva em mar aberto, acolheu-o e por ele se apaixonou; de acordo com a história passava os dias a tecer e a fiarenquanto tentava seduzi-lo com juventude eterna e a imortalidade se aceitasse ficar com ela para sempre. Acontece que Capipso apresentou seu lado da história, esclarecendo que: "Olha, eu deixei ele ficar porque não ia deixá-lo morrer na praia, mas daí a me apaixonar e querer seduzi-lo para que morasse comigo, isso nunca aconteceu. Inclusive devo apontar que tinha mais o que fazer, meu trabalho original era como deusa findadeira, apocalipse, por exemplo, só existe porque Calipso existiu antes".',
  userId: 1,
};

module.exports = {
  allPosts,
  postToInsert,
  insertedPost,
  postsByUser,
  singlePost,
};
