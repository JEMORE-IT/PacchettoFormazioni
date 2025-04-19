// pages/index.js

import Hero from "./components/hero";
import SubHero from "./components/subHero";


export default function Home() {
  return (
    <div className="min-h-screen bg-white flex flex-col justify-between">
      {/* Hero Section */}
      <Hero
        title="Benvenuto nel mio sito!"
        subtitle="Scopri i nostri fantastici prodotti e servizi."
      />

      {/* SubHero Section */}
      <SubHero
        title="Perché sceglierci?"
        content="Offriamo soluzioni innovative e personalizzate per soddisfare le tue esigenze. La nostra missione è garantire qualità e affidabilità."
      />

      {/* SubHero Section */}
      <SubHero
        title="Di cosa ci occupiamo"
        content="OCi occupiamo di sviluppare soluzioni digitali moderne, scalabili e su misura, combinando tecnologia avanzata con un design intuitivo.
Il nostro obiettivo è aiutare privati, startup e aziende a trasformare idee in prodotti digitali concreti, funzionali e accattivanti."
      />

    </div>
  );
}