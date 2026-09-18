import { useRef } from 'react'
import { etapas } from '../data/processo'
import { TituloSecao } from './Secao'

export function Processo() {
  const pista = useRef<HTMLDivElement>(null)

  /** Rola uma "página" de cards - a largura visível menos uma sobra, para o
   *  card seguinte já aparecer parcialmente e sinalizar que há mais. */
  function rolar(direcao: 1 | -1) {
    const el = pista.current
    if (!el) return
    el.scrollBy({ left: direcao * (el.clientWidth * 0.8), behavior: 'smooth' })
  }

  return (
    <section id="processo" className="bg-creme-suave py-20 lg:py-24">
      <div className="mx-auto w-full max-w-[1180px] px-6 lg:px-7">
        <div className="flex flex-col gap-[17px]">
          <TituloSecao>
            Como eu levo um produto{' '}
            <em className="text-pinheiro italic">do problema à entrega.</em>
          </TituloSecao>

          <p className="max-w-[805px] font-corpo text-[clamp(15px,0.9vw,17.3px)] leading-[1.55] text-grafite">
            Um processo end-to-end, conduzido em ciclos ágeis. Cada etapa é colaborativa -
            produto, usuários e desenvolvimento caminham juntos do início ao fim.
          </p>
        </div>
      </div>

      {/* A pista sangra até as bordas da janela de propósito: mostra que o
          carrossel continua para fora do contêiner de 1180px. */}
      <div
        ref={pista}
        className="mt-14 flex snap-x snap-mandatory gap-6 overflow-x-auto scroll-smooth scroll-pl-6 px-6 pb-4 lg:scroll-pl-[max(28px,calc((100vw-1124px)/2))] lg:px-[max(28px,calc((100vw-1124px)/2))] [scrollbar-width:none] [&::-webkit-scrollbar]:hidden"
      >
        {etapas.map((etapa) => (
          <article
            key={etapa.numero}
            className="flex w-[300px] shrink-0 snap-start flex-col gap-5 rounded-[18px] border border-linha bg-creme px-6 py-[26px] sm:w-[370px]"
          >
            <div className="flex size-[60px] items-center justify-center rounded-[30px] border-2 border-mata bg-creme font-titulo text-[20.8px] font-bold text-mata">
              {etapa.numero}
            </div>

            <div className="flex flex-col gap-[7px]">
              <p className="font-display text-[10.9px] tracking-[0.12em] text-mata uppercase">
                {etapa.eyebrow}
              </p>
              <h3 className="font-titulo text-[20.8px] leading-[1.04] font-bold tracking-[-0.01em] text-breu">
                {etapa.titulo}
              </h3>
            </div>

            <p className="font-corpo text-[15.2px] leading-[1.55] text-grafite">
              {etapa.descricao}
            </p>

            <ul className="mt-auto flex flex-wrap gap-2 pt-1">
              {etapa.tags.map((tag) => (
                <li
                  key={tag}
                  className="rounded-full border border-linha bg-creme-suave px-3 pt-1 pb-1.5 font-display text-[11.5px] tracking-[0.02em] text-grafite"
                >
                  {tag}
                </li>
              ))}
            </ul>
          </article>
        ))}
      </div>

      <div className="mx-auto flex w-full max-w-[1180px] justify-end gap-2.5 px-6 lg:px-7">
        <button
          type="button"
          onClick={() => rolar(-1)}
          aria-label="Etapa anterior"
          className="flex size-11 cursor-pointer items-center justify-center rounded-[22px] border border-breu font-corpo text-[20.8px] text-breu transition-colors hover:bg-breu hover:text-creme"
        >
          ‹
        </button>
        <button
          type="button"
          onClick={() => rolar(1)}
          aria-label="Próxima etapa"
          className="flex size-11 cursor-pointer items-center justify-center rounded-[22px] border border-breu font-corpo text-[20.8px] text-breu transition-colors hover:bg-breu hover:text-creme"
        >
          ›
        </button>
      </div>
    </section>
  )
}
