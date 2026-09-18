/**
 * Logos das empresas na faixa que corre horizontalmente entre o hero e o
 * "Sobre".
 *
 * Os arquivos ficam em `public/logos/`, já recortados na sobra transparente
 * que vinha do export. O tamanho de exibição é resolvido no CSS
 * (`.faixa__logo`), por teto de altura e de largura - não vale a pena fixar
 * medida por logo. Para adicionar uma empresa: um item aqui e o arquivo lá.
 */
export interface Logo {
  arquivo: string
  /** Vira o texto alternativo da imagem. */
  nome: string
}

export const logos: Logo[] = [
  { arquivo: 'metropole-digital.png', nome: 'Metrópole Digital' },
  { arquivo: 'acer.png', nome: 'Acer' },
  { arquivo: 'ufrn.png', nome: 'UFRN' },
  { arquivo: 'lance.png', nome: 'LANCE' },
  { arquivo: 'geoped.png', nome: 'GEOped Consultoria Geoambiental' },
  { arquivo: 'detran-rn.png', nome: 'DETRAN-RN' },
  { arquivo: 'proeidi.png', nome: 'ProEIDI - Inclusão Digital para Pessoa Idosa' },
  { arquivo: 'qualifica-rn.png', nome: 'Qualifica RN' },
]
