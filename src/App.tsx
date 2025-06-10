import './App.css'
import NewsCardsArray from './components/NewsCardsArray'
import type { NewsCardType } from './types/news';

const newsMock: NewsCardType[] = [
  {
    id: 1,
    imagePath:'../src/assets/rocket.png',
    title: 'Long March 9 Rocket Will Be a Game-changer for China’s Space Program',
    summary: 'SpaceX’s Starship spacecraft and super heavy rocket – the gleaming stainless steel rocket envisioned as a “fully reusable transportation system” – dominates the global news landscape. Starship has a lift capacity of 150 metric tonnes to low earth orbit (LEO) in its reusable version, and 250 metric tonnes in its expendable version.',
    subject: 'Space and Universe'
  },
  {
    id: 2,
    imagePath:'../src/assets/astronaut01.png',
    title: 'A Day in the Life of an Astronaut: Humanity’s Open Window to Space',
    summary: 'Astronauts frequently use the definition of freedom related to space, yet their experiences not only give them a sense of being a speck in the universe but also offer the opportunity to witness breathtaking views. Astronauts who experience this actually live in a small space within a spacecraft or the International Space Station (ISS).',
    subject: 'Space and Universe'
  },
  {
    id: 3,
    imagePath:'../src/assets/astronaut02.png',
    title: 'Q&A: Life Exists Outside of Earth With Astronaut Matthias Maurer | Euronews Tech Talks Podcast',
    summary: 'In this episode, we conclude our three-part series investigating the impact of space technology on humanity with a Q&A featuring ESA astronaut Matthias Maurer about life beyond planet Earth.',
    subject: 'Space and Universe'
  },
  {
    id: 4,
    imagePath:'../src/assets/plane.png',
    title: "Off-Duty Pilot Accused of Trying to Cut the Engines on an Alaska Airlines Flight",
    summary: "The flight was diverted to Portland, Ore., because of a “credible security threat” inside the cockpit, the airline said. An off-duty pilot was charged with attempted murder.",
    subject: 'Technology'
  },
  {
    id: 5,
    imagePath:'../src/assets/antenna.png',
    title: "Astronomers Link “Starquakes” to Mysterious Radio Signals From Space",
    summary: "Fast radio bursts (FRBs), intense radio energy bursts, are a perplexing astronomical enigma. The University of Tokyo’s recent research has found similarities between FRBs and earthquakes",
    subject: 'Space and Universe'
  }
];

function App() {
  return (
    <div>
      <h1>Latest News Around The World</h1>
      <NewsCardsArray news={newsMock} />
    </div>
  )
}

export default App;