import { grupos, idiomas } from '../data/competencias'
import { Secao, TituloSecao } from './Secao'

export function Competencias() {
  return (
    <Secao id="competencias" className="bg-creme-suave py-20 lg:py-24">
      <div className="flex flex-col gap-9">
        <TituloSecao>
          Competências <em className="text-pinheiro italic">&amp; ferramentas.</em>
        </TituloSecao>

        <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-3">
          {grupos.map((grupo) => (
            <div
              key={grupo.titulo}
              className="flex flex-col gap-4 rounded-[18px] border border-linha bg-creme p-7"
            >
              <div
                className={`flex size-[42px] items-center justify-center rounded-[11px] font-corpo text-[17px] text-creme-suave ${grupo.corDoIcone}`}
                aria-hidden
              >
                {grupo.icone}
              </div>

              <h3 className="font-titulo text-[21.6px] leading-[1.04] font-bold tracking-[-0.01em] text-breu">
                {grupo.titulo}
              </h3>

              <ul className="flex flex-wrap gap-2">
                {grupo.itens.map((item) => (
                  <li
                    key={item}
                    className="rounded-lg border border-linha bg-nevoa px-3 py-1.5 font-display text-[12.5px] text-grafite"
                  >
                    {item}
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>

        <div className="flex flex-wrap items-center gap-x-8 gap-y-3 border-t border-linha pt-7">
          {idiomas.map(({ idioma, nivel }) => (
            <p key={idioma} className="flex items-baseline gap-3">
              <span className="font-titulo text-[20.8px] font-bold text-breu">{idioma}</span>
              <span className="font-display text-[12.5px] tracking-[0.06em] text-mata">
                {nivel}
              </span>
            </p>
          ))}
        </div>
      </div>
    </Secao>
  )
}
