
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

type YourStackProps = {
  stack: Tech[];
  onRemove: (id: string) => void;
  onRemoveAll: () => void;
};

function YourStack({ stack, onRemove, onRemoveAll }: YourStackProps) {
  return (
    <div className="border rounded-xl p-5 bg-white shadow-sm h-fit">
      <h3 className="font-bold text-lg mb-1">Your Stack</h3>
      <p className="text-sm text-slate-500 mb-4">
        {stack.length} Technology Selected
      </p>

      {stack.length === 0 ? (
        <p className="text-sm text-slate-400">Your Stack is empty.</p>
      ) : (
        <div className="flex flex-col gap-3 mb-4">
          {stack.map((item) => (
            <div key={item.id} className="flex items-center justify-between border rounded-lg px-3 py-2">
              <div className="flex items-center gap-2">
                <img src={item.icon} alt={item.name} className="w-6 h-6" />
                <div>
                  <p className="text-sm font-medium">{item.name}</p>
                  <p className="text-xs text-slate-400">{item.category}</p>
                </div>
              </div>
              <button onClick={() => onRemove(item.id)} className="text-slate-400 hover:text-red-500">
                ✕
              </button>
            </div>
          ))}
        </div>
      )}

      {stack.length > 0 && (
        <button
          onClick={onRemoveAll}
          className="w-full py-2 rounded-lg border border-red-300 text-red-500 hover:bg-red-50"
        >
          Remove All
        </button>
      )}
    </div>
  );
}

export default YourStack;