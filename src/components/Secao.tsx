import type { ReactNode } from 'react'

interface SecaoProps {
  id?: string
  /** Classes da faixa inteira - normalmente o fundo e o espaçamento vertical. */
  className?: string
  /** Classes do contêiner interno de 1180px. */
  classeInterna?: string
  children: ReactNode
}

/**
 * Faixa de página com o contêiner do Figma: 1180px de largura máxima com
 * 28px de padding interno, o que dá os 1124px de conteúdo usados em todas as
 * seções.
 */
export function Secao({ id, className = '', classeInterna = '', children }: SecaoProps) {
  return (
    <section id={id} className={className}>
      <div className={`mx-auto w-full max-w-[1180px] px-6 lg:px-7 ${classeInterna}`}>
        {children}
      </div>
    </section>
  )
}

interface TituloSecaoProps {
  children: ReactNode
  /** Sobre fundo escuro o título vira creme. */
  escuro?: boolean
}

/** O "Heading 2" das seções: Montserrat Medium 54,4px com trecho em itálico. */
export function TituloSecao({ children, escuro = false }: TituloSecaoProps) {
  return (
    <h2
      className={`max-w-[860px] font-titulo text-[clamp(32px,2.83vw,54.4px)] leading-[1.04] font-medium tracking-[-0.01em] ${
        escuro ? 'text-creme-suave' : 'text-breu'
      }`}
    >
      {children}
    </h2>
  )
}
