/**
 * Posições dos adesivos, em pixels das coordenadas do Figma, relativas ao
 * palco (a seção) onde cada grupo vive. `n` é o número do arquivo em
 * `public/adesivos/adesivo-NN.svg`.
 *
 * Os valores viram porcentagem no componente, para os adesivos acompanharem a
 * seção em qualquer largura mantendo a mesma relação com o texto.
 */
export interface Palco {
  largura: number
  altura: number
}

export interface Adesivo {
  n: number
  x: number
  y: number
  w: number
  h: number
  /** Extensão do arquivo: o hero veio em SVG, o Sobre em PNG. */
  ext?: 'svg' | 'png'
  /**
   * Continua visível abaixo de 1024px. Só três adesivos do hero ganham isso:
   * abaixo de lg o layout empilha numa coluna única e as posições do Figma
   * deixam de ter margem, então o resto cairia sobre o texto.
   *
   * `mx`/`my` são a posição própria de mobile, em % da seção: no empilhado o
   * mapa do Figma põe esses três em cima do título, então eles ganham um lugar
   * na faixa reservada no topo do hero.
   */
  mobile?: boolean
  mx?: string
  my?: string
}

/* ---------- HERO (frame 15:633) ---------- */

export const PALCO_HERO: Palco = { largura: 1920, altura: 797.89 }

export const adesivosHero: Adesivo[] = [
  { n: 1, x: 81, y: 101, w: 146.65, h: 151.38, mobile: true, mx: '15%', my: '6%' },
  { n: 2, x: 342.02, y: 141.1, w: 124.97, h: 59.07  },
  { n: 3, x: 606, y: 104, w: 132.39, h: 127.65  },
  { n: 4, x: 1493, y: 256, w: 101.64, h: 151.06  },
  { n: 5, x: 1271, y: 115, w: 72.84, h: 68.3  },
  { n: 6, x: 253, y: 299, w: 103.62, h: 104.19  },
  { n: 7, x: 80, y: 393, w: 97.64, h: 97.64 },
  { n: 9, x: 1610, y: 136, w: 63.26, h: 90.08  },
  { n: 10, x: 853, y: 103, w: 107.22, h: 98.93, mobile: true, mx: '50%', my: '5.2%' },
  { n: 11, x: 1030, y: 126, w: 60.26, h: 59.08  },
  { n: 12, x: 259, y: 230, w: 55.01, h: 56.68  },
  { n: 13, x: 1642, y: 680, w: 97.52, h: 100.09 },
  { n: 14, x: 212.01, y: 415.7, w: 46.63, h: 52.52  },
  { n: 15, x: 84, y: 288, w: 133.44, h: 57.71 },
  { n: 16, x: 115, y: 529, w: 135.4, h: 112.5  },
  { n: 17, x: 1390, y: 101, w: 146.31, h: 123.22, mobile: true, mx: '85%', my: '6%' },
  { n: 18, x: 1635, y: 305, w: 55.35, h: 60.78  },
  { n: 19, x: 1742, y: 560, w: 101.09, h: 116.88  },
  { n: 20, x: 1738, y: 318, w: 78.39, h: 118.75 },
  { n: 21, x: 1677, y: 489, w: 47.67, h: 50.66  },
  { n: 22, x: 241, y: 529, w: 51.94, h: 49.96 },
  { n: 23, x: 1493, y: 529, w: 154.27, h: 58.09  },
  { n: 24, x: 1499, y: 634, w: 105.4, h: 102.42 },
  { n: 25, x: 1590, y: 413, w: 57.02, h: 59.45  },
  { n: 26, x: 111, y: 674, w: 101.82, h: 88.09 },
  { n: 27, x: 267, y: 646, w: 83.86, h: 119.93  },
]

/* ---------- SOBRE (frame 15:661) ---------- */

export const PALCO_SOBRE: Palco = { largura: 1920, altura: 770 }

/*
  Só adesivos da direita: os dois brilhos que ficavam à esquerda (31 e 37)
  saíram para a coluna de texto poder começar na mesma linha das outras seções.
*/
export const adesivosSobre: Adesivo[] = [
  { n: 32, x: 1640, y: 432, w: 73.99, h: 79.45, ext: 'png' },
  { n: 34, x: 1263, y: 383, w: 272.11, h: 270.88, ext: 'png' },
  { n: 35, x: 1627, y: 63, w: 219.78, h: 291.19, ext: 'png' },
  { n: 36, x: 1382, y: 282, w: 70.95, h: 75.32, ext: 'png' },
  { n: 38, x: 1524, y: 190, w: 71.13, h: 77.82, ext: 'png' },
  { n: 39, x: 1595, y: 599, w: 59.34, h: 66.53, ext: 'png' },
]

/* ---------- CONTATO (frame 15:1177) ----------
   Reaproveita a arte do hero: nenhum arquivo novo. */

export const PALCO_CONTATO: Palco = { largura: 1920, altura: 533 }

export const adesivosContato: Adesivo[] = [
  { n: 5, x: 1448, y: 352, w: 72.84, h: 68.3 },
  { n: 6, x: 109, y: 314, w: 103.62, h: 104.19 },
  { n: 7, x: 219, y: 176, w: 97.64, h: 97.64 },
  { n: 9, x: 1750, y: 202, w: 63.26, h: 90.08 },
  { n: 10, x: 1341, y: 161, w: 107.22, h: 98.93 },
  { n: 11, x: 137, y: 91, w: 60.26, h: 59.08 },
  { n: 16, x: 1531, y: 192, w: 135.4, h: 112.5 },
  { n: 21, x: 269, y: 383, w: 47.67, h: 50.66 },
  { n: 25, x: 1649, y: 93, w: 57.02, h: 59.45 },
]