import { PALCO_SOBRE, adesivosSobre } from '../data/adesivos'
import { PalcoAdesivos } from './PalcoAdesivos'
import { TituloSecao } from './Secao'

export function Sobre() {
  return (
    <section id="sobre" className="relative overflow-hidden bg-nevoa py-20 lg:py-24">
      <PalcoAdesivos adesivos={adesivosSobre} palco={PALCO_SOBRE} />

      <div className="pointer-events-none relative z-10 mx-auto w-full max-w-[1180px] px-6 lg:px-7">
        <div className="pointer-events-auto flex flex-col gap-12">
          <TituloSecao>
            Uma designer que <em className="text-pinheiro italic">fala a língua</em> de quem
            constrói.
          </TituloSecao>

        
          <div className="flex flex-col gap-[18px]">
            <p className="max-w-[min(820px,58vw)] font-titulo text-[clamp(19px,1.25vw,24px)] leading-[1.32] text-breu">
              Graduanda em Tecnologia da Informação (UFRN), atuo na fronteira entre{' '}
              <em className="text-mata italic">design e desenvolvimento</em>.
            </p>

            <p className="max-w-[min(760px,56vw)] font-corpo text-[clamp(15.5px,0.93vw,17.9px)] leading-[1.6] text-breu">
              Tenho experiência sólida criando protótipos e fluxos de usuário no Figma para
              aplicações web e mobile, participando ativamente desde o Product Discovery até a
              entrega final. Meu diferencial é a base técnica: uso meu conhecimento de
              desenvolvimento para garantir a viabilidade dos projetos e construir um handoff que
              os times de desenvolvimento realmente conseguem implementar.
            </p>

            <p className="max-w-[min(760px,56vw)] font-corpo text-[clamp(15.5px,0.93vw,17.9px)] leading-[1.6] text-breu">
              Aplico metodologias ágeis no dia a dia para transformar requisitos complexos em
              interfaces visuais claras e acessíveis - e trago bagagem de ensino, comunicação
              visual e inclusão digital que me ajuda a manter as pessoas no centro de cada
              decisão.
            </p>
          </div>
        </div>
      </div>
    </section>
  )
}