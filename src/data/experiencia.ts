/** Linhas da timeline de experiência. `agora` marca o cargo atual com o selo. */
export interface Cargo {
  periodo: string
  agora?: boolean
  titulo: string
  organizacao: string
  descricao: string
}

export const cargos: Cargo[] = [
  {
    periodo: 'Dez 2025 - Atual',
    agora: true,
    titulo: 'Designer UI/UX Jr.',
    organizacao: 'IMD - Projeto ACER',
    descricao:
      'Design de interface baseado em Design System, handoff e documentação técnica para desenvolvedores, e padronização de interfaces em larga escala com foco em consistência e integridade da marca.',
  },
  {
    periodo: 'Nov 2025 - Jan 2026',
    titulo: 'Designer UI/UX Jr.',
    organizacao: 'LANCE - Projeto MaisCarga',
    descricao:
      'Protótipos de alta fidelidade web & mobile no Figma, arquitetura de informação e discovery, e alinhamento técnico direto com o time de desenvolvimento para validar viabilidade e preparar a implementação.',
  },
  {
    periodo: 'Mar 2025 - Nov 2025',
    titulo: 'Estagiária em Dev. de Software (UI/UX & Front-end)',
    organizacao: 'DETRAN-RN',
    descricao:
      'Prototipagem de fluxos e telas no Figma, desenvolvimento de interfaces funcionais e responsivas em Flutter, modelagem de sistemas web internos e aplicação de princípios de design centrado no usuário.',
  },
  {
    periodo: 'Mar 2023 - Dez 2025',
    titulo: 'Designer Gráfica Freelancer',
    organizacao: 'Planeta Corpo · Blumenau',
    descricao:
      'Responsável pelo design e conteúdo visual da empresa para redes e campanhas, definição de guidelines de identidade visual, atendimento ao cliente e gestão de projetos.',
  },
  {
    periodo: 'Mar 2023 - Ago 2025',
    titulo: 'Professora de Cursos de Tecnologia',
    organizacao: 'Qualifica RN (SETHAS/UFRN) · ProEIDI - Inclusão Digital p/ Idosos (UFRN)',
    descricao:
      'Ministrei cursos de capacitação tecnológica voltados à inclusão digital e empregabilidade, desenvolvi conteúdos didáticos práticos e coordenei aulas avaliando resultados.',
  },
]

/** Os três cards de formação embaixo da timeline. */
export interface Formacao {
  eyebrow: string
  titulo: string
  instituicao: string
  periodo: string
}

export const formacoes: Formacao[] = [
  {
    eyebrow: 'Graduação',
    titulo: 'Tecnologia da Informação',
    instituicao: 'UFRN - Universidade Federal do Rio Grande do Norte',
    periodo: 'Mar 2023 - cursando',
  },
  {
    eyebrow: 'Curso',
    titulo: 'Mini-Curso de UI/UX',
    instituicao: 'Cubos Academy',
    periodo: 'Set 2025',
  },
  {
    eyebrow: 'Ensino médio',
    titulo: 'High School Diploma (EUA)',
    instituicao: 'Otto-Eldred High School',
    periodo: 'Ago 2021 - Jun 2022',
  },
]
