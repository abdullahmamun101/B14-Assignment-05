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

import { useState, useEffect } from "react";
import HeroSection from "./components/hero";
import Navbar from "./components/navbar";
import TechnologySection from "./components/TechnologySection";
import technologiesData from "./data/technologies.json";
import Footer from "./components/footer";

function App() {
  const [stack, setStack] = useState<Tech[]>([]);
  const [isLoading, setIsLoading] = useState(true);
  const [technologies, setTechnologies] = useState<Tech[]>([]);

  useEffect(() => {
    setTimeout(() => {
      setTechnologies(technologiesData);
      setIsLoading(false);
    }, 500);
  }, []);

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
    {isLoading ? (
      <p className="text-center py-20 text-slate-400">Loading technologies...</p>
    ) : (
      <TechnologySection
        technologies={technologies}
        stack={stack}
        addToStack={addToStack}
        removeFromStack={removeFromStack}
        removeAll={removeAll}
      />
    )}
    <Footer />
  </>
);
}

export default App;