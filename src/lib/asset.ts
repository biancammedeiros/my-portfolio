/**
 * Caminhos dos arquivos em `public/`. O `BASE_URL` garante que tudo continue
 * certo quando o site é publicado num subcaminho, como no GitHub Pages.
 */
export const base = import.meta.env.BASE_URL

/**
 * Os adesivos do hero vieram do Figma como SVG e os do Sobre como PNG, por
 * isso a extensão faz parte dos dados em vez de ser fixa aqui.
 */
export const adesivoSrc = (n: number, ext: 'svg' | 'png' = 'svg') =>
  `${base}adesivos/adesivo-${String(n).padStart(2, '0')}.${ext}`

export const logoSrc = (arquivo: string) => `${base}logos/${arquivo}`

export const imagemSrc = (arquivo: string) => `${base}imagens/${arquivo}`
