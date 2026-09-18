import { PALCO_HERO, adesivosHero } from '../data/adesivos'
import { base } from '../lib/asset'
import { PalcoAdesivos } from './PalcoAdesivos'

/*
  No Figma o hero é um palco de 1920×798 com tudo posicionado em coordenadas
  absolutas: texto em x=420 (21,875%) e foto em x=1097 (57,14%). A partir de lg
  reproduzo essas posições em porcentagem, para os adesivos manterem a mesma
  relação com o texto em qualquer largura. Abaixo de lg vira empilhado.
*/

export function Hero() {
  return (
    <section id="inicio" className="relative overflow-hidden bg-mata">
      <div className="relative mx-auto w-full max-w-[1920px] lg:h-[700px]">
        {/* Brilho difuso no canto inferior esquerdo (Gradient+Blur, nó 15:635). */}
        <div
          aria-hidden
          className="pointer-events-none absolute -bottom-[180px] -left-[140px] size-[440px] rounded-full opacity-70 blur-[90px]"
          style={{
            background:
              'radial-gradient(circle at 50% 50%, rgba(122, 204, 173, 0.75), rgba(46, 126, 102, 0) 70%)',
          }}
        />

        <PalcoAdesivos adesivos={adesivosHero} palco={PALCO_HERO} />

        {/*
          lg:h-full é necessário: com os filhos absolutos este bloco colapsaria
          para altura 0 e o `top: 50%` deles resolveria contra zero. Como aí ele
          passa a cobrir o hero inteiro, fica transparente a cliques - só o texto
          e a foto voltam a receber ponteiro, senão bloqueariam os adesivos.
        */}
        <div className="relative z-10 flex flex-col items-start gap-10 px-6 pt-28 pb-20 lg:pointer-events-none lg:block lg:h-full lg:p-0">
          <div className="pointer-events-auto flex flex-col items-start gap-[18px] lg:absolute lg:top-[calc(50%+80.81px)] lg:left-[21.875%] lg:w-[34.375%] lg:-translate-y-1/2 lg:gap-[0.94vw]">
            <h1 className="font-display text-[clamp(46px,5vw,96px)] leading-[1.04] tracking-[-0.03em] text-creme">
              Bianca <span className="text-pinheiro">Medeiros</span>
            </h1>

            <p className="font-titulo text-[clamp(20px,1.55vw,29.6px)] leading-[1.28] text-creme">
              Desenho produtos digitais claros e intuitivos -{' '}
              <em className="font-bold text-breu italic">do discovery ao handoff.</em>
            </p>

            <p className="font-corpo text-[clamp(14.5px,0.87vw,16.6px)] leading-[1.55] text-creme">
              Product Designer com base em desenvolvimento. Conduzo o ciclo completo de produto:
              pesquisa, arquitetura de informação, prototipagem de alta fidelidade no Figma e
              entrega técnica para o time de desenvolvimento - garantindo viabilidade e impacto real
              para web e mobile.
            </p>

            <div className="flex flex-wrap items-center gap-[14px] pt-3">
              <a
                href="#trabalho"
                className="inline-flex h-[48.83px] w-[168.13px] items-center justify-between rounded-full bg-pinheiro pr-[26px] pl-6 font-titulo text-[13.4px] leading-[20.83px] tracking-[0.403px] text-creme-suave transition-transform hover:-translate-y-0.5"
              >
                Ver trabalho
                <span className="font-display" aria-hidden>
                  ↗
                </span>
              </a>

              <a
                href="#contato"
                className="inline-flex items-center rounded-full border border-creme px-6 py-[13px] font-titulo text-[13.4px] leading-[20.83px] tracking-[0.403px] text-creme transition-colors hover:bg-creme/10"
              >
                Falar comigo
              </a>
            </div>
          </div>

          <img
            src={`${base}fotos/bianca.png`}
            alt="Bianca Medeiros"
            className="pointer-events-auto w-[280px] rounded-[42px] object-cover lg:absolute lg:top-[30.58%] lg:left-[57.135%] lg:w-[18.4375%]"
            style={{ aspectRatio: '354 / 472' }}
          />
        </div>
      </div>
    </section>
  )
}
