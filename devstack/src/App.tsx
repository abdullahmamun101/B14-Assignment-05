type Tech = {
  id: string;
  name: string;
  category: string;
  description: string;
  icon: string;
  rating: number;
  difficulty: string;
  badge: string;
};

import { useState } from "react";
import HeroSection from "./components/hero";
import Navbar from "./components/navbar";
import TechnologySection from "./components/TechnologySection";
import technologiesData from "./data/technologies.json";

function App() {
  const [stack, setStack] = useState<Tech[]>([]);

  const addToStack = (tech: Tech) => {
    const alreadyAdded = stack.find((item) => item.id === tech.id);
    if (alreadyAdded) {
      alert("This technology is already in your stack!");
      return;
    }
    setStack([...stack, tech]);
  };

  const removeFromStack = (id: string) => {
    setStack(stack.filter((item) => item.id !== id));
  };

  const removeAll = () => {
    setStack([]);
  };

  return (
    <>
      <Navbar />
      <HeroSection />
      <TechnologySection
        technologies={technologiesData}
        stack={stack}
        addToStack={addToStack}
        removeFromStack={removeFromStack}
        removeAll={removeAll}
      />
    </>
  );
}

export default App;