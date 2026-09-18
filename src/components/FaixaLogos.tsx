import { logos } from '../data/logos'
import { logoSrc } from '../lib/asset'

/**
 * Faixa de logos que corre da direita para a esquerda sem parar. A pista tem
 * duas cópias da lista: a animação desloca -50%, então no instante em que a
 * primeira cópia termina de sair a segunda está exatamente onde a primeira
 * começou - o laço reinicia sem salto.
 *
 * Passar o mouse pausa (o CSS cuida disso), para dar tempo de ler um logo.
 */
export function FaixaLogos() {
  const grupo = (
    <div className="faixa__grupo">
      {logos.map((logo) => (
        <img key={logo.arquivo} className="faixa__logo" src={logoSrc(logo.arquivo)} alt={logo.nome} />
      ))}
    </div>
  )

  return (
    <div className="bg-creme-suave py-10">
      <div className="faixa" style={{ '--duracao': '42s' } as React.CSSProperties}>
        <div className="faixa__pista">
          {grupo}
          {/* Cópia só para o laço: escondida de leitores de tela. */}
          <div aria-hidden="true" className="contents">
            {grupo}
          </div>
        </div>
      </div>
    </div>
  )
}
