import { imagemSrc } from '../lib/asset'

interface MolduraProps {
  arquivo: string
  alt: string
  tipo: 'navegador' | 'celular'
}

/**
 * Mockup em volta dos prints de projeto: janela de navegador com os três
 * pontinhos, ou o corpo de um celular. As cores vêm do Figma.
 */
export function Moldura({ arquivo, alt, tipo }: MolduraProps) {
  if (tipo === 'celular') {
    return (
      <div className="mx-auto w-full max-w-[300px] overflow-hidden rounded-[34px] border border-linho/16 bg-mockup p-2.5 shadow-[0_24px_50px_-20px_rgb(0_0_0/0.55)]">
        <img
          src={imagemSrc(arquivo)}
          alt={alt}
          loading="lazy"
          className="block w-full rounded-[26px]"
        />
      </div>
    )
  }

  return (
    <div className="overflow-hidden rounded-[14px] border border-linho/16 bg-mockup shadow-[0_24px_50px_-20px_rgb(0_0_0/0.55)]">
      <div className="flex items-center gap-1.5 bg-mockup-barra px-3.5 py-2.5">
        <span className="size-2.5 rounded-full bg-mockup-ponto" />
        <span className="size-2.5 rounded-full bg-mockup-ponto" />
        <span className="size-2.5 rounded-full bg-mockup-ponto" />
      </div>
      <img src={imagemSrc(arquivo)} alt={alt} loading="lazy" className="block w-full" />
    </div>
  )
}
