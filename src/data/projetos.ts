/**
 * Projetos da seção "Projetos que saíram do Figma para a tela".
 *
 * `imagens` são arquivos em `public/imagens/`. `moldura` escolhe o mockup:
 * 'navegador' desenha a barra com os três pontinhos, 'celular' desenha o
 * aparelho. `ladoDaImagem` alterna a composição - no Figma os cards
 * intercalam texto e imagem.
 */
export interface Projeto {
  id: string
  categoria: string
  titulo: string
  subtitulo: string
  descricao: string
  destaques: string[]
  tags: string[]
  acao: string
  href?: string
  imagens: string[]
  moldura: 'navegador' | 'celular'
  ladoDaImagem: 'direita' | 'esquerda'
}

export const projetos: Projeto[] = [
  {
    id: 'geoped',
    categoria: 'Institucional · Agronegócio',
    titulo: 'GEOPED - Soluções Geoambientais',
    subtitulo: 'Web design responsivo · Landing institucional',
    descricao:
      'Site para uma consultoria geoambiental do agronegócio. Foco em transmitir credibilidade e expertise técnica, com hierarquia visual clara e conversão para contato com especialistas.',
    destaques: [
      'Estrutura e narrativa visual da home e páginas internas',
      'Sistema de seções consistente e responsivo',
      'Hierarquia de conteúdo orientada à conversão',
    ],
    tags: ['UI', 'Responsivo', 'Landing page'],
    acao: 'Acesse o site',
    href: 'https://geoped.com.br', 
    imagens: ['geoped.jpg'],
    moldura: 'navegador',
    ladoDaImagem: 'direita',
  },
  {
    id: 'bernardo',
    categoria: 'Marca pessoal · Jornalismo',
    titulo: 'Portfólio - Bernardo Mello',
    subtitulo: 'Jornalista · Site pessoal do design à publicação',
    descricao:
      'Site de uma página para um jornalista em início de carreira reunir suas reportagens de TV. Conduzi do layout à publicação, com uma decisão guiando o projeto: ele precisava conseguir atualizar o site sozinho, sem saber programar.',
    destaques: [
      'Identidade e estrutura da página, do hero à vitrine de reportagens',
      'Grid de reportagens com filtro por veículo e cards que abrem a matéria',
      'Conteúdo desacoplado do código, para o cliente publicar sem intermediário',
    ],
    tags: ['Marca pessoal', 'Front-end', 'Handoff'],
    acao: 'Acesse o site',
    href: 'https://bernardoovm.github.io/portfolio/',
    imagens: ['Bernardo.png'],
    moldura: 'navegador',
    ladoDaImagem: 'esquerda',
  },
  {
    id: 'detran',
    categoria: 'Governo digital · Web',
    titulo: 'Portal de Serviços - DETRAN-RN',
    subtitulo: 'Estágio UI/UX & Front-end · Redesign',
    descricao:
      'Redesenho de um portal de serviços públicos com dezenas de jornadas (habilitação, veículo, infração, agendamentos). O desafio: tornar um sistema denso e burocrático realmente navegável para o cidadão.',
    destaques: [
      'Arquitetura de informação dos serviços e categorias',
      'Prototipagem de fluxos e telas no Figma, com foco em usabilidade',
    ],
    tags: ['Design centrado no usuário', 'React',],
    acao: 'Acesse o site',
    href:  'https://portal.detran.rn.gov.br/',
    imagens: ['detran.jpg'],
    moldura: 'navegador',
    ladoDaImagem: 'direita',
  },
  {
    id: 'artesanato',
    categoria: 'E-commerce · Marketplace',
    titulo: 'Artesanato Potiguar',
    subtitulo: 'Marketplace de artesanato local · Web',
    descricao:
      'Plataforma que conecta artesãos do Rio Grande do Norte a compradores. Desenhei a jornada completa de e-commerce - da descoberta de produtos e artesãos à página de compra - valorizando o ofício local.',
    destaques: [
      'Arquitetura de catálogo, busca e navegação por categorias',
      'Páginas de produto e de perfil do artesão',
      'Fluxo de compra com foco em confiança e descoberta',
    ],
    tags: ['E-commerce', 'UX', 'Catálogo'],
    acao: 'Acesse o protótipo',
    href:  'https://www.figma.com/proto/pTVy6P7AVxhsOe3opbWk4k/artesanatoPotiguar?node-id=7-204&t=rbBvlKF1il9g0M3M-1&scaling=contain&content-scaling=fixed&page-id=0%3A1&starting-point-node-id=7%3A204',
    imagens: ['artesanato.jpg'],
    moldura: 'navegador',
    ladoDaImagem: 'esquerda',
  },
  {
    id: 'daniella',
    categoria: 'Marca pessoal · Saúde',
    titulo: 'Landing Page - Daniella Falbo',
    subtitulo: 'Psicóloga clínica · Identidade & landing editorial',
    descricao:
      'Landing page editorial e acolhedora para uma psicóloga clínica. O tom - humano e sereno - guiou cada escolha de tipografia, ritmo e cor, conduzindo o visitante até o agendamento de consulta.',
    destaques: [
      'Direção visual e tom de voz da marca pessoal',
      'Estrutura de conteúdo orientada ao agendamento',
      'Layout responsivo com forte identidade editorial',
    ],
    tags: ['Landing page', 'Branding', 'UX writing'],
    acao: 'Acesse o protótipo',
    href:  'https://www.figma.com/proto/EqzPxucaTEGHE0aYnx15IX/Daniella-Falbo?node-id=1-2&viewport=191%2C165%2C0.3&t=GEIRAZZVRRumMomy-1&scaling=min-zoom&content-scaling=fixed&page-id=0%3A1',
    imagens: ['daniella.jpg'],
    moldura: 'navegador',
    ladoDaImagem: 'direita',
  },
  {
    id: 'maiscarga',
    categoria: 'Aplicativo · Energia',
    titulo: 'App - MaisCarga Mobile',
    subtitulo: 'Banco de kWh · Identidade & landing editorial',
    descricao:
      'Desenvolvimento de um aplicativo móvel para gerenciamento de energia, focado na criação de um "Banco de kWh". A interface intuitiva e a experiência do usuário foram projetadas para facilitar o controle e a otimização do consumo de energia, promovendo a sustentabilidade e a economia.',
    destaques: [
      'Concepção e design da experiência do usuário (UX) para o Banco de kWh',
      'Desenvolvimento da identidade visual e elementos de interface (UI)',
    ],
    tags: ['Aplicativo Mobile', 'Gestão de Energia', 'UX/UI Design'],
    acao: 'Acesse o protótipo',
    href: 'https://www.figma.com/proto/pS1Sa3w7M6EyHpwSOlbNkv/MaisCargaMobile?node-id=141-83&viewport=1393%2C113%2C0.26&t=UthV2F2XYuxNQhNZ-1&scaling=scale-down&content-scaling=fixed&starting-point-node-id=141%3A83&show-proto-sidebar=1&page-id=0%3A1',
    imagens: ['maiscarga-app.png'],
    moldura: 'celular',
    ladoDaImagem: 'esquerda',
  },
]

/** Bloco final da seção: os projetos que não podem ser detalhados. */
export const nda = {
  titulo: 'Outros projetos sob NDA',
  descricao:
    'Projetos desenvolvidos em bolsa e estágio permanecem sob Acordo de Confidencialidade e não podem ser detalhados publicamente. Posso falar sobre processo e aprendizados em uma conversa.',
  itens: ['IMD · Projeto ACER', 'IMD · EcomSmart', 'LANCE · MaisCarga Web'],
}
