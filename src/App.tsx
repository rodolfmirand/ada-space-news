import './App.css'
import NewsCardsArray from './components/NewsCardsArray'
import type { NewsCardType } from './types/news';

const newsMock: NewsCardType[] = [
  {
    id: 1,
    title: 'NASA revela novas imagens de Júpiter com o telescópio James Webb',
    summary: 'As imagens mostram auroras e tempestades gigantescas com detalhes sem precedentes, ajudando os cientistas a entender melhor a atmosfera do planeta.',
    reference: 'NASA'
  },
  {
    id: 2,
    title: 'SpaceX lança com sucesso mais 60 satélites Starlink',
    summary: 'O lançamento marca mais um passo na construção da mega constelação de satélites que promete levar internet de alta velocidade para todo o globo.',
    reference: 'SpaceX'
  },
  {
    id: 3,
    title: 'Descoberto exoplaneta potencialmente habitável a 31 anos-luz',
    summary: 'O planeta, apelidado de "Wolf 1069 b", tem massa semelhante à da Terra e orbita sua estrela em uma zona onde a água líquida pode existir.',
    reference: 'Instituto Max Planck'
  }
];

function App() {
  return (
    <div>
      <h1>Notícias do Espaço</h1>
      <NewsCardsArray news={newsMock} />
    </div>
  )
}

export default App;