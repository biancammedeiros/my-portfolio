const links = [
  { rotulo: 'Sobre', href: '#sobre' },
  { rotulo: 'Processo', href: '#processo' },
  { rotulo: 'Trabalho', href: '#trabalho' },
  { rotulo: 'Experiência', href: '#experiencia' },
]

export function Nav() {
  return (
    <nav className="relative z-30 bg-mata">
      <div className="mx-auto flex w-full max-w-[1180px] flex-wrap items-center justify-between gap-6 px-6 py-[18px] lg:px-0">
        <a
          href="#inicio"
          className="font-display text-[18.9px] leading-[29.26px] font-black tracking-[-0.189px] text-breu"
        >
          Bianca Medeiros
        </a>

        <ul className="hidden items-center gap-[30px] md:flex">
          {links.map((link) => (
            <li key={link.href}>
              <a
                href={link.href}
                className="font-corpo text-[14.4px] leading-[22.32px] font-medium text-creme transition-opacity hover:opacity-70"
              >
                {link.rotulo}
              </a>
            </li>
          ))}
        </ul>

        <div className="flex items-center gap-3">

          <a
            href="#contato"
            className="rounded-full bg-pinheiro px-4 pt-[8.5px] pb-[8.84px] font-titulo text-[12.5px] leading-[19.34px] tracking-[0.499px] text-creme transition-opacity hover:opacity-90"
          >
            Vamos conversar
          </a>
        </div>
      </div>
    </nav>
  )
}
