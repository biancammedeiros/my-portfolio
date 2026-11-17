import { PALCO_CONTATO, adesivosContato } from '../data/adesivos'
import { PalcoAdesivos } from './PalcoAdesivos'

const contatos = [
  {
    rotulo: 'biancamedeiroswork@gmail.com',
    href: 'mailto:biancamedeiroswork@gmail.com',
    descricao: 'Enviar e-mail',
    icone: (
      <>
        <rect x="2" y="4" width="16" height="12" rx="2" />
        <path d="M2.5 5.5 10 11l7.5-5.5" />
      </>
    ),
  },
  {
    rotulo: '/in/biancammedeiros',
    href: 'https://www.linkedin.com/in/biancammedeiros/',
    descricao: 'Perfil no LinkedIn',
    icone: (
      <>
        <rect x="2.5" y="2.5" width="15" height="15" rx="2.5" />
        <path d="M6 8.5v6M6 5.6v.1M10 14.5v-6M10 10.5c0-1.4 4-1.6 4 .5v3.5" />
      </>
    ),
  },
]

export function Contato() {
  return (
    <section id="contato" className="relative overflow-hidden bg-mata py-20 lg:py-24">
      <PalcoAdesivos adesivos={adesivosContato} palco={PALCO_CONTATO} />

      <div className="pointer-events-none relative z-10 mx-auto w-full px-6 lg:w-[61.46%] lg:max-w-[1180px] lg:px-7">
        <div className="pointer-events-auto flex flex-col gap-5">
          <h2 className="max-w-[min(903px,74%)] font-titulo text-[clamp(36px,4.17vw,80px)] leading-[1.04] font-medium tracking-[-0.02em] text-creme-suave">
            Vamos construir algo juntos?
          </h2>

          <p className="max-w-[min(553px,62%)] font-corpo text-[clamp(16px,0.96vw,18.4px)] leading-[1.55] text-linho/70">
            Estou em busca de oportunidades como Product e UI/UX Designer. Se o que você viu faz sentido
            pro seu time, adoraria conversar.
          </p>

          <div className="flex max-w-[760px] flex-col gap-4 pt-5 sm:flex-row">
            {contatos.map((contato) => (
              <a
                key={contato.href}
                href={contato.href}
                aria-label={contato.descricao}
                {...(contato.href.startsWith('http')
                  ? { target: '_blank', rel: 'noreferrer' }
                  : {})}
                className="flex flex-1 items-center gap-[18px] rounded-[16px] border border-linho/16 bg-linho/6 px-6 py-[22px] transition-colors hover:bg-linho/12"
              >
                <span className="flex size-11 shrink-0 items-center justify-center rounded-[12px] bg-linho/10">
                  <svg
                    viewBox="0 0 20 20"
                    className="size-5 stroke-creme-suave"
                    fill="none"
                    strokeWidth="1.5"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    aria-hidden
                  >
                    {contato.icone}
                  </svg>
                </span>
                <span className="font-corpo text-[16.3px] font-medium break-all text-creme-suave">
                  {contato.rotulo}
                </span>
              </a>
            ))}
          </div>
        </div>
      </div>
    </section>
  )
}