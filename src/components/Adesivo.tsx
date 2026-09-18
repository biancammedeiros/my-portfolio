import { useRef, useState, type CSSProperties, type PointerEvent } from 'react'
import { adesivoSrc } from '../lib/asset'
import type { Adesivo as DadosAdesivo, Palco } from '../data/adesivos'

/** Contador global: quem foi arrastado por último fica por cima. */
let topoAtual = 10

/**
 * Inclinação de repouso do hover, derivada do número do adesivo - alterna o
 * lado e varia o ângulo para as peças não girarem todas igual. É
 * determinístico de propósito: com valor aleatório o ângulo mudaria a cada
 * render.
 */
function giroDe(n: number): number {
  const lado = n % 2 === 0 ? 1 : -1
  return lado * (2.4 + (n % 3) * 0.9)
}

interface AdesivoProps {
  dados: DadosAdesivo
  palco: Palco
}

export function Adesivo({ dados, palco }: AdesivoProps) {
  const { n, x, y, w, h, ext, mobile, mx, my } = dados

  const [deslocamento, setDeslocamento] = useState({ dx: 0, dy: 0 })
  const [arrastando, setArrastando] = useState(false)
  const [z, setZ] = useState(1)
  const inicio = useRef({ px: 0, py: 0, dx: 0, dy: 0 })

  // Centro da arte em porcentagem do palco, para escalar junto com a seção.
  const centroX = ((x + w / 2) / palco.largura) * 100
  const centroY = ((y + h / 2) / palco.altura) * 100
  const larguraPct = (w / palco.largura) * 100

  function aoPegar(e: PointerEvent<HTMLDivElement>) {
    e.currentTarget.setPointerCapture(e.pointerId)
    inicio.current = {
      px: e.clientX,
      py: e.clientY,
      dx: deslocamento.dx,
      dy: deslocamento.dy,
    }
    setArrastando(true)
    setZ(++topoAtual)
  }

  function aoMover(e: PointerEvent<HTMLDivElement>) {
    if (!arrastando) return
    setDeslocamento({
      dx: inicio.current.dx + (e.clientX - inicio.current.px),
      dy: inicio.current.dy + (e.clientY - inicio.current.py),
    })
  }

  function aoSoltar(e: PointerEvent<HTMLDivElement>) {
    if (!arrastando) return
    e.currentTarget.releasePointerCapture(e.pointerId)
    setArrastando(false)
  }

  const estilo = {
    '--x': `${centroX}%`,
    '--y': `${centroY}%`,
    ...(mx ? { '--mx': mx } : {}),
    ...(my ? { '--my': my } : {}),
    '--pct': `${larguraPct}%`,
    aspectRatio: `${w} / ${h}`,
    zIndex: z,
    '--dx': `${deslocamento.dx}px`,
    '--dy': `${deslocamento.dy}px`,
    '--giro': `${giroDe(n)}deg`,
  } as CSSProperties

  return (
    <div
      className={`adesivo${mobile ? ' adesivo--mobile' : ''}`}
      style={estilo}
      data-arrastando={arrastando}
      data-adesivo={n}
      onPointerDown={aoPegar}
      onPointerMove={aoMover}
      onPointerUp={aoSoltar}
      onPointerCancel={aoSoltar}
    >
      <img className="adesivo__arte" src={adesivoSrc(n, ext)} alt="" />
    </div>
  )
}
