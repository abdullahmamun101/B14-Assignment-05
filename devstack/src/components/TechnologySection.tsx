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

type TechnologySectionProps = {
  technologies: Tech[];
  stack: Tech[];
  addToStack: (tech: Tech) => void;
  removeFromStack: (id: string) => void;
  removeAll: () => void;
};

import TechnologyCard from "./TechnologyCard";
import YourStack from "./yourstack";

function TechnologySection({ technologies, stack, addToStack, removeFromStack, removeAll }: TechnologySectionProps) {
  return (
    <section className="max-w-7xl mx-auto px-6 py-16">
      <h2 className="text-3xl font-bold mb-2">
        Explore the <span className="text-pink-600">Technologies</span>
      </h2>
      <p className="text-slate-500 mb-8">Pick one technology per category to build your ideal stack.</p>

      <div className="grid grid-cols-1 lg:grid-cols-4 gap-6">
        {/* left cards */}
        <div className="lg:col-span-3 grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-6">
          {technologies.map((tech) => {
            const isAdded = stack.some((item) => item.id === tech.id);
            return (
              <TechnologyCard
                key={tech.id}
                tech={tech}
                isAdded={isAdded}
                onAdd={() => addToStack(tech)}
              />
            );
          })}
        </div>

        {/* right card */}
        <YourStack stack={stack} onRemove={removeFromStack} onRemoveAll={removeAll} />
      </div>
    </section>
  );
}

export default TechnologySection;