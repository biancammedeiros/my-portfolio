/** As seis etapas do carrossel "Como eu levo um produto do problema à entrega". */
export interface Etapa {
  numero: string
  eyebrow: string
  titulo: string
  descricao: string
  tags: string[]
}

export const etapas: Etapa[] = [
  {
    numero: '01',
    eyebrow: 'Discovery',
    titulo: 'Pesquisa & entendimento do problema',
    descricao:
      'Mergulho no contexto: converso com stakeholders, levanto e modelo requisitos, mapeio dores e objetivos de negócio. Antes de desenhar telas, entendo qual é o problema certo a resolver.',
    tags: ['Levantamento de requisitos', 'Stakeholders', 'Jornadas de usuário'],
  },
  {
    numero: '02',
    eyebrow: 'Arquitetura',
    titulo: 'Estrutura & fluxos de navegação',
    descricao:
      'Organizo a informação e desenho os fluxos do sistema, traduzindo regras de negócio em caminhos intuitivos. É aqui que a lógica do produto ganha forma navegável.',
    tags: ['Arquitetura de informação', 'Fluxos', 'Mapa de navegação'],
  },
  {
    numero: '03',
    eyebrow: 'Concepção',
    titulo: 'Wireframes & exploração',
    descricao:
      'Esboço em baixa fidelidade para validar estrutura e prioridades rápido - testando hipóteses de layout e hierarquia antes de investir em UI refinada.',
    tags: ['Wireframing', 'Design Thinking', 'Hierarquia visual'],
  },
  {
    numero: '04',
    eyebrow: 'UI & Protótipo',
    titulo: 'Alta fidelidade no Figma',
    descricao:
      'Construo interfaces multiplataforma (web & mobile) com base em Design System - componentes consistentes, responsivos e protótipos navegáveis que comunicam a experiência real.',
    tags: ['Figma', 'Design System', 'Prototipagem', 'Responsivo'],
  },
  {
    numero: '05',
    eyebrow: 'Handoff',
    titulo: 'Documentação & viabilidade técnica',
    descricao:
      'Preparo specs detalhadas e alinho diretamente com o time de desenvolvimento para validar a viabilidade e garantir fidelidade na implementação - minha base de dev faz a ponte entre design e código.',
    tags: ['Handoff', 'Documentação técnica', 'Padronização'],
  },
  {
    numero: '06',
    eyebrow: 'Entrega',
    titulo: 'Implementação & acompanhamento',
    descricao:
      'Acompanho (e quando preciso, codifico) a implementação em Flutter / HTML / CSS, validando a experiência no produto final e iterando com base no que aparece na prática.',
    tags: ['Flutter', 'Front-end', 'QA visual', 'Iteração'],
  },
]
