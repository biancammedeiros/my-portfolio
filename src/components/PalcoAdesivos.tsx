import { Adesivo } from './Adesivo'
import type { Adesivo as DadosAdesivo, Palco } from '../data/adesivos'

interface PalcoAdesivosProps {
  adesivos: DadosAdesivo[]
  palco: Palco
}

/**
 * Camada de adesivos de uma seção. É decoração, por isso fica escondida de
 * leitores de tela: interação só-de-arrastar não tem equivalente por teclado.
 */
export function PalcoAdesivos({ adesivos, palco }: PalcoAdesivosProps) {
  return (
    <div className="palco-adesivos" aria-hidden="true">
      {adesivos.map((dados) => (
        <Adesivo key={`${dados.n}-${dados.x}-${dados.y}`} dados={dados} palco={palco} />
      ))}
    </div>
  )
}
