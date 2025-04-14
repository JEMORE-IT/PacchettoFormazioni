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
        content="Offriamo soluzioni innovative e personalizzate per soddisfare le tue esigenze. La nostra missione è garantire qualità e affidabilità."
      />

    </div>
  );
}