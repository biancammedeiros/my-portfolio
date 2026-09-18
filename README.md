# Portfólio - Bianca Medeiros

Página completa convertida do Figma
[Portfolio](https://www.figma.com/design/aQ1qgdiYGIFA0dReTQhV45/Portfolio?node-id=15-623)
(frame `1920w light`, nó `15:623`).

**Stack:** Vite + React 19 + TypeScript + Tailwind CSS v4.

```bash
npm install
npm run dev      # http://localhost:5173
npm run build    # gera dist/
```

## Estrutura

```
public/
├── adesivos/          26 do hero + 8 do Sobre (o Contato reusa os do hero)
├── logos/             8 logos da faixa
├── imagens/           6 prints de projeto
└── fotos/bianca.png   foto do hero

src/
├── App.tsx            ordem das seções
├── index.css          tokens do Figma + CSS dos adesivos + CSS da faixa
├── lib/asset.ts       caminhos de public/ (respeita o BASE_URL)
├── data/              todo o conteúdo - é aqui que se edita texto
│   ├── adesivos.ts    posições dos 43 adesivos, por seção
│   ├── logos.ts       empresas da faixa
│   ├── processo.ts    as 6 etapas do carrossel
│   ├── projetos.ts    os 5 projetos + o bloco de NDA
│   ├── experiencia.ts 5 cargos + 3 formações
│   └── competencias.ts 3 grupos de skills + idiomas
└── components/
    ├── Nav · Hero · FaixaLogos · Sobre · Processo
    ├── Projetos → CardProjeto → Moldura
    ├── Experiencia · Competencias · Contato · Rodape
    ├── Secao.tsx        contêiner de 1180px + o Heading 2 das seções
    └── Adesivo.tsx · PalcoAdesivos.tsx
```

Nenhum texto de conteúdo vive no JSX: tudo em `src/data/`.

## Os adesivos

43 no total - 26 no hero, 8 no Sobre, 9 no Contato (estes reaproveitam a arte
do hero, sem arquivo novo). Posições em `src/data/adesivos.ts`, em coordenadas
do Figma relativas à seção, convertidas para porcentagem no componente.

**Hover:** o SVG sobe 8px, inclina e cresce 6%. A sombra é um `drop-shadow`
aplicado ao próprio SVG, então segue o contorno do desenho em vez de desenhar
um retângulo. O ângulo vem do número do adesivo (`giroDe`), alternando lado
entre 2,4° e 4,2°, para as peças não girarem todas iguais.

**Arrastar:** `pointer` events. O adesivo capturado sobe no empilhamento e
**volta ao lugar ao recarregar**. Desligado em telas de toque
(`@media (pointer: coarse)`): 43 alvos com `touch-action: none` atrapalhariam a
rolagem. A camada é `aria-hidden` - é decoração, e arrastar não tem equivalente
por teclado.

**Tamanho e encaixe:** os adesivos são dimensionados em % da seção, então
acompanham a janela e nenhum é cortado em nenhuma largura. Para que isso não
os jogue sobre o texto, os contêineres do **Hero, Sobre e Contato** são
proporcionais (`61.46%` = 1180/1920) em vez de travados em 1180px: assim a
faixa de margem onde os adesivos vivem existe em qualquer largura. As outras
seções, que não têm adesivos, seguem com `max-w-[1180px]`.

Nas seções com adesivos a medida do texto também tem teto em % (por exemplo
`max-w-[min(760px,72%)]` no Sobre), porque o adesivo grande da direita começa
em 65,8% da página e o texto não pode alcançá-lo.

**No mobile:** abaixo de 1024px o layout empilha numa coluna única e as
coordenadas do Figma perdem a faixa de margem - qualquer adesivo cai sobre o
texto. Então lá sobrevivem **3 dos 26** do hero, com posição própria de mobile
(`mx`/`my` nos dados) numa fileira no topo, acima do título, e com piso de 56px
para o rabisco ser reconhecível. Sobre e Contato ficam sem adesivos no mobile.

Há um teste de colisão em `checa.mjs` (na raiz, fora do projeto) que mede as
caixas de linha do texto contra cada adesivo em 1920 / 1600 / 1280 / 1024 /
768 / 390 - hoje passa zerado nas seis larguras.

## A faixa de logos

`src/components/FaixaLogos.tsx` + o bloco `FAIXA DE LOGOS` no `index.css`.

A pista contém **duas cópias** da lista e a animação a desloca -50%: no
instante em que a primeira cópia acaba de sair, a segunda está exatamente onde
a primeira começou, então o laço não tem emenda. A cópia extra é `aria-hidden`
para o leitor de tela não ler os logos duas vezes.

- Velocidade: `--duracao` no componente (42s por volta).
- Passar o mouse pausa, para dar tempo de ler um logo.
- Com `prefers-reduced-motion` a animação para e a faixa vira rolagem manual.
- Para adicionar empresa: um item em `src/data/logos.ts` e o SVG em
  `public/logos/`.

## Outras interações

- **Carrossel do Processo:** rolagem horizontal com `scroll-snap` e as setas do
  design; cada clique avança 80% da largura visível, então o card seguinte já
  aparece parcialmente e sinaliza que há mais.
- **Nav:** âncoras para cada seção. Os botões de tema e idioma são visuais e
  ainda não trocam nada.

## Tokens

Do Figma, em `src/index.css` (`@theme`). O arquivo não tem *variables*
publicadas, então vieram dos hexes brutos:

| Token | Valor | Onde |
| --- | --- | --- |
| `mata` | `#2e7e66` | fundo do nav, hero e contato |
| `adesivo` | `#1e8767` | corpo dos adesivos |
| `pinheiro` | `#16463a` | seção de projetos, botão primário |
| `breu` | `#102220` | logo, itálicos e rodapé |
| `creme` | `#fafbf4` | fundo das seções claras e texto sobre verde |
| `creme-suave` | `#edf3f1` | cards e texto sobre escuro |
| `menta` | `#8ddfc6` | acento sobre os fundos escuros |
| `linho` | `#f4efe6` | creme quente, usado com opacidade (`text-linho/70`) |
| `grafite` · `cinza` | `#3e524e` · `#6b7d79` | texto de apoio e datas |
| `nevoa` | `#e0e9e7` | fundo do Sobre e da Experiência, chips |
| `linha` | `rgb(16 34 32 / .14)` | divisórias |

### Cores das seções

As faixas se separam por cor, alternando entre os dois tons claros:

| Seção | Fundo |
| --- | --- |
| Nav + Hero | `mata` `#2e7e66` |
| Faixa de logos | `creme-suave` `#edf3f1` |
| Sobre | `nevoa` `#e0e9e7` |
| Processo | `creme-suave` `#edf3f1` |
| Projetos | `pinheiro` `#16463a` |
| Experiência | `nevoa` `#e0e9e7` |
| Competências | `creme-suave` `#edf3f1` |
| Contato | `mata` `#2e7e66` |
| Rodapé | `breu` `#102220` |

Onde a seção passou a ser `#edf3f1` ou `#e0e9e7`, os cards dentro dela subiram
para `creme` `#fafbf4` - antes tinham a mesma cor do fundo novo e desapareciam.

Fontes: Londrina Solid, Montserrat, Lora e Inter - auto-hospedadas via
Fontsource, sem requisição ao Google Fonts.

## ⚠️ O que ainda é placeholder

Só os **6 prints de projeto** em `public/imagens/` (retângulos escuros com o
nome do arquivo). Exporte do Figma em PNG 2x e substitua mantendo os nomes:

| Arquivo | Layer no Figma |
| --- | --- |
| `geoped-home.png` | `Geoped Home` |
| `geoped-sobre-nos.png` | `Geoped Sobre Nós` |
| `artesanato-potiguar-home.png` | `Artesanato Potiguar Home` |
| `daniella-falbo.png` | `Landing Page Daniella Falbo` |
| `detran-portal.png` | `image 22` (dentro do card do DETRAN) |
| `maiscarga-app.png` | `image` (dentro do card do MaisCarga) |

Adesivos, logos e a foto do hero já são os arquivos reais.

### Sobre os exports que chegaram

Vieram em **1x**, no tamanho de exibição. Em tela retina isso fica levemente
macio - a foto do hero (354×473) é onde mais aparece. Se quiser nitidez, é só
reexportar em 2x e substituir mantendo os nomes; nada no código muda.

Os logos foram **recortados na sobra transparente** que vinha no export (o
`Group 30` exporta cada logo dentro da caixa que ele ocupa no layout, não
colado no desenho). Sem isso as alturas iam de 44 a 177px e a faixa ficava
visualmente desalinhada.

## Publicando

`base: './'` e caminhos relativos: o build roda em qualquer subcaminho,
incluindo GitHub Pages.
