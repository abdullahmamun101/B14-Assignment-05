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

type TechnologyCardProps = {
  tech: Tech;
  isAdded: boolean;
  onAdd: () => void;
};

function TechnologyCard({ tech, isAdded, onAdd }: TechnologyCardProps) {
  return (
    <div className="border rounded-xl p-5 bg-white shadow-sm">
      <div className="flex justify-between items-start mb-3">
        <img src={tech.icon} alt={tech.name} className="w-8 h-8" />
        <span className="text-xs px-2 py-1 rounded-full bg-slate-100 text-slate-600">
          {tech.badge}
        </span>
      </div>

      <h3 className="font-bold text-lg mb-1">{tech.name}</h3>
      <p className="text-sm text-slate-500 mb-3">{tech.description}</p>

      <div className="flex items-center gap-2 text-xs text-slate-500 mb-4">
        <span className="bg-slate-100 px-2 py-1 rounded">{tech.category}</span>
        <span className="bg-slate-100 px-2 py-1 rounded">{tech.difficulty}</span>
        <span className="flex items-center gap-1">⭐ {tech.rating}</span>
      </div>

      <button
        onClick={onAdd}
        disabled={isAdded}
        className={`w-full py-2 rounded-lg font-medium text-white ${
          isAdded ? "bg-[#e30073] cursor-not-allowed" : "bg-slate-900 hover:bg-slate-800"
        }`}
      >
        {isAdded ? "Added to Stack" : "Add to Stack"}
      </button>
    </div>
  );
}

export default TechnologyCard;