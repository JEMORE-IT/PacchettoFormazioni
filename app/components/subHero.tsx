// app/components/subHero.tsx
import React from "react";

// ========================================================
// TODO: Reusable Component with Props & TypeScript
// 1. Define the 'SubHeroProps' interface:
//    - title: string
//    - content: string
// 2. Accept props in SubHero (destructure { title, content }).
// 3. Render the dynamic `title` inside <h2> and `content` inside <p>.
// Hint: Look at app/components/hero.tsx as a reference!
// ========================================================

const SubHero = () => {
  return (
    <div className="bg-gray-100 text-gray-800 py-16 px-6 mb-3">
      <div className="container mx-auto text-center">
        <h2 className="text-3xl font-semibold mb-4">"Aggiungi informazioni sul tuo post."</h2>
        <p className="text-lg">"Inserisci i dati del tuo post."</p>
      </div>
    </div>
  );
};

export default SubHero;