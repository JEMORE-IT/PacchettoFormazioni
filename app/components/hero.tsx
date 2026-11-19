// app/components/hero.tsx
import React from "react";

// ============================================================================
// TODO: Defining and using Props in React with TypeScript
// ----------------------------------------------------------------------------
// Props (short for "properties") allow you to pass dynamic data from a parent
// component down to a child component, making your components reusable.
//
// 1. Define the 'HeroProps' TypeScript interface:
//    - title: string
//    - subtitle: string
//
// 2. Accept props in the Hero component by destructuring: ({ title, subtitle }: HeroProps)
//
// 3. Render dynamic values inside JSX:
//    - <h1>{title}</h1>
//    - <p>{subtitle}</p>
// ============================================================================

const Hero = () => {
  return (
    <div className="bg-[#0000FF] text-white py-20 px-6">
      <div className="container mx-auto text-center">
        <h1 className="text-5xl font-bold mb-4">{"INSERT PROPS HERE"}</h1>
        <p className="text-xl text-gray-300">{"INSERT PROPS HERE"}</p>
      </div>
    </div>
  );
};

export default Hero;