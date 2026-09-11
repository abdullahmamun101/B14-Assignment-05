import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";

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
    toast.warning(`${tech.name} is already in your stack!`);
    return;
  }
  setStack([...stack, tech]);
  toast.success(`${tech.name} added to your stack!`);
};

const removeFromStack = (id: string) => {
  const removedItem = stack.find((item) => item.id === id);
  setStack(stack.filter((item) => item.id !== id));
  if (removedItem) {
    toast.info(`${removedItem.name} removed from your stack.`);
  }
};

const removeAll = () => {
  setStack([]);
  toast.info("All technologies removed from your stack.");
};

  return (
    <>
      <ToastContainer aria-label="Notifications" />
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