import { useState } from "react";

const levels = [
  { id: "beginner", label: "Beginner", description: "New or returning to training" },
  { id: "intermediate", label: "Intermediate", description: "Consistent with moderate ability" },
  { id: "advanced", label: "Advanced", description: "Strong foundation and high capability" },
];

export default function FitnessLevelStep() {
  const [selected, setSelected] = useState<string | null>(null);

  return (
    <div className="grid gap-4">
      {levels.map((level) => {
        const isActive = selected === level.id;
        return (
          <button
            key={level.id}
            onClick={() => setSelected(level.id)}
            className={`w-full py-4 px-6 rounded-xl text-left border-2 transition ${
              isActive
                ? "bg-blue-600 border-blue-400 text-white"
                : "bg-zinc-800 border-zinc-700 hover:border-zinc-500"
            }`}
          >
            <h3 className="text-lg font-semibold mb-1">{level.label}</h3>
            <p className="text-zinc-400">{level.description}</p>
          </button>
        );
      })}
    </div>
  );
}
