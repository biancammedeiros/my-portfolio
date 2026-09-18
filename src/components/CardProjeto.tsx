import type { Projeto } from '../data/projetos'
import { Moldura } from './Moldura'

interface CardProjetoProps {
  projeto: Projeto
  /** O primeiro card não leva a linha divisória em cima. */
  primeiro: boolean
}

export function CardProjeto({ projeto, primeiro }: CardProjetoProps) {
  const {
    categoria,
    titulo,
    subtitulo,
    descricao,
    destaques,
    tags,
    acao,
    href,
    imagens,
    moldura,
    ladoDaImagem,
  } = projeto

  const imagemNaEsquerda = ladoDaImagem === 'esquerda'

  const texto = (
    <div
      className={`flex flex-col gap-3 lg:w-[47%] lg:shrink-0 ${
        imagemNaEsquerda ? 'lg:order-2' : 'lg:order-1'
      }`}
    >
      <p className="font-display text-[10.9px] tracking-[0.12em] text-menta uppercase">
        {categoria}
      </p>

      <div className="flex flex-col gap-1">
        <h3 className="font-titulo text-[clamp(24px,1.7vw,32px)] leading-[1.1] font-bold text-creme-suave">
          {titulo}
        </h3>
        <p className="font-corpo text-[14px] text-linho/50">{subtitulo}</p>
      </div>

      <p className="font-corpo text-[15.6px] leading-[1.6] text-linho/72">{descricao}</p>

      <ul className="flex flex-col gap-2 pt-1">
        {destaques.map((item) => (
          <li key={item} className="flex gap-2.5 font-corpo text-[15px] leading-[1.5] text-linho/82">
            <span aria-hidden className="text-menta">
              →
            </span>
            {item}
          </li>
        ))}
      </ul>

      <ul className="flex flex-wrap gap-2 pt-2">
        {tags.map((tag) => (
          <li
            key={tag}
            className="rounded-full border border-linho/16 bg-linho/6 px-3 py-1.5 font-corpo text-[12.5px] text-linho/70"
          >
            {tag}
          </li>
        ))}
      </ul>

      <a
        href={href ?? '#contato'}
        {...(href ? { target: '_blank', rel: 'noreferrer' } : {})}
        className="mt-2 inline-flex w-fit items-center gap-2 rounded-full bg-menta/15 px-5 py-2.5 font-titulo text-[13.4px] tracking-[0.03em] text-creme-suave transition-colors hover:bg-menta/25"
      >
        {acao}
        <span aria-hidden>↗</span>
      </a>
    </div>
  )

  const visual = (
    <div
      className={`flex min-w-0 flex-1 flex-col gap-4 ${
        imagemNaEsquerda ? 'lg:order-1' : 'lg:order-2'
      }`}
    >
      {imagens.map((arquivo) => (
        <Moldura key={arquivo} arquivo={arquivo} alt={`Tela do projeto ${titulo}`} tipo={moldura} />
      ))}
    </div>
  )

  return (
    <article
      className={`flex flex-col gap-10 py-14 lg:flex-row lg:items-center lg:gap-16 ${
        primeiro ? '' : 'border-t border-linho/12'
      }`}
    >
      {/*
        Os dois blocos são irmãos diretos do flex: a alternância acontece por
        `order`, não por wrappers. Envolver cada um num div quebrava a conta de
        largura - o `lg:w-[47%]` do texto passava a medir o wrapper, e o mockup
        ficava com uma fatia mínima.
      */}
      {texto}
      {visual}
    </article>
  )
}
