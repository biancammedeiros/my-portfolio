/** Os três cards de "Competências & ferramentas". */
export interface Grupo {
  icone: string
  /** Cor de fundo do quadradinho do ícone. */
  corDoIcone: string
  titulo: string
  itens: string[]
}

export const grupos: Grupo[] = [
  {
    icone: '◆',
    corDoIcone: 'bg-pinheiro',
    titulo: 'Design & UX',
    itens: [
      'Figma',
      'Prototipagem',
      'Wireframing',
      'Design Thinking',
      'Design Systems',
      'Arquitetura de Informação',
      'Modelagem de Requisitos',
      'Canva',
    ],
  },
  {
    icone: '</>',
    corDoIcone: 'bg-mata',
    titulo: 'Desenvolvimento',
    itens: [
      'Flutter',
      'Dart',
      'HTML',
      'CSS',
      'Javascript',
      'React',
      'Java',
      'C++',
      'SQL',
    ],
  },
  {
    icone: '⚙',
    corDoIcone: 'bg-pedra',
    titulo: 'Ferramentas',
    itens: [
      'Git',
      'GitHub',
      'GitLab',
      'VSCode',
      'Intellij',
      'Android Studio',
      'Trello',
      'Notion',
      'Google Workspace',
    ],
  },
]

export const idiomas = [
  { idioma: 'Português', nivel: 'Nativo' },
  { idioma: 'Inglês', nivel: 'Fluente' },
]
