import { Competencias } from './components/Competencias'
import { Contato } from './components/Contato'
import { Experiencia } from './components/Experiencia'
import { FaixaLogos } from './components/FaixaLogos'
import { Hero } from './components/Hero'
import { Nav } from './components/Nav'
import { Processo } from './components/Processo'
import { Projetos } from './components/Projetos'
import { Rodape } from './components/Rodape'
import { Sobre } from './components/Sobre'

export default function App() {
  return (
    <>
      <Nav />
      <main>
        <Hero />
        <FaixaLogos />
        <Sobre />
        <Processo />
        <Projetos />
        <Experiencia />
        <Competencias />
        <Contato />
      </main>
      <Rodape />
    </>
  )
}
