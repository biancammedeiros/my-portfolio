import { nda, projetos } from '../data/projetos'
import { CardProjeto } from './CardProjeto'
import { Secao, TituloSecao } from './Secao'

export function Projetos() {
  return (
    <Secao id="trabalho" className="bg-pinheiro py-20 lg:py-24">
      <div className="flex flex-col gap-[18px]">
        <TituloSecao escuro>
          Projetos que saíram <em className="text-menta italic">do Figma para a tela.</em>
        </TituloSecao>

        <p className="max-w-[595px] font-corpo text-[15.6px] leading-[1.55] text-linho/65">
          Uma seleção de trabalhos autorizados para exibição pública.
        </p>
      </div>

      <div className="mt-8">
        {projetos.map((projeto, i) => (
          <CardProjeto key={projeto.id} projeto={projeto} primeiro={i === 0} />
        ))}
      </div>

      <div className="flex flex-col gap-4 rounded-[18px] border border-linho/25 bg-mata px-7 py-6 lg:flex-row lg:items-center lg:justify-between lg:gap-10">
        <div className="flex max-w-[620px] flex-col gap-1.5">
          <h3 className="font-titulo text-[18px] font-bold text-creme-suave">{nda.titulo}</h3>
          <p className="font-corpo text-[14px] leading-[1.5] text-linho/60">{nda.descricao}</p>
        </div>

        <ul className="flex flex-wrap gap-2">
          {nda.itens.map((item) => (
            <li
              key={item}
              className="rounded-full border border-linho/25 px-3.5 py-1.5 font-corpo text-[12.5px] whitespace-nowrap text-linho/75"
            >
              {item}
            </li>
          ))}
        </ul>
      </div>
    </Secao>
  )
}
