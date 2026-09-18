import { cargos, formacoes } from '../data/experiencia'
import { Secao, TituloSecao } from './Secao'

export function Experiencia() {
  return (
    <Secao id="experiencia" className="bg-nevoa py-20 lg:py-24">
      <div className="flex flex-col gap-12">
        <TituloSecao>
          Experiência <em className="text-pinheiro italic">&amp; formação.</em>
        </TituloSecao>

        <ol className="flex flex-col">
          {cargos.map((cargo) => (
            <li
              key={`${cargo.titulo}-${cargo.periodo}`}
              className="flex flex-col gap-2 border-t border-linha py-7 lg:flex-row lg:gap-9"
            >
              <div className="flex shrink-0 flex-wrap items-center gap-2 lg:w-[200px] lg:pt-2.5">
                <p className="font-display text-[13.1px] tracking-[0.02em] text-mata">
                  {cargo.periodo}
                </p>
                {cargo.agora && (
                  <span className="rounded-full bg-pinheiro px-2.5 py-0.5 font-display text-[10.6px] tracking-[0.08em] text-creme-suave uppercase">
                    Agora
                  </span>
                )}
              </div>

              <div className="flex flex-col gap-[3px]">
                <h3 className="font-titulo text-[clamp(19px,1.17vw,22.4px)] leading-[1.35] font-bold text-breu">
                  {cargo.titulo}
                </h3>
                <p className="font-corpo text-[15.7px] font-semibold text-mata">
                  {cargo.organizacao}
                </p>
                <p className="max-w-[598px] pt-1.5 font-corpo text-[15.4px] leading-[1.55] text-grafite">
                  {cargo.descricao}
                </p>
              </div>
            </li>
          ))}
        </ol>

        <div className="grid gap-5 sm:grid-cols-2 lg:grid-cols-3">
          {formacoes.map((formacao) => (
            <div
              key={formacao.titulo}
              className="flex flex-col gap-[3px] rounded-[16px] border border-linha bg-creme px-6 pt-7 pb-6"
            >
              <p className="font-display text-[10.9px] tracking-[0.12em] text-mata uppercase">
                {formacao.eyebrow}
              </p>
              <h3 className="pt-2.5 font-titulo text-[19.2px] leading-[1.35] font-bold text-breu">
                {formacao.titulo}
              </h3>
              <p className="font-corpo text-[14.1px] leading-[1.55] text-grafite">
                {formacao.instituicao}
              </p>
              <p className="pt-1 font-display text-[11.8px] text-cinza">{formacao.periodo}</p>
            </div>
          ))}
        </div>
      </div>
    </Secao>
  )
}
