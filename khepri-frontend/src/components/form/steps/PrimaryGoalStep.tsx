import { useState } from "react";

const primaryGoalOptions = [
  { id: "hypertrophy", label: "Hypertrophy", description: "Build muscle and size" },
  { id: "calisthenics", label: "Calisthenics Strength", description: "Master bodyweight strength" },
  { id: "distance", label: "Distance Running", description: "Improve endurance and aerobic fitness" },
  { id: "sprinting", label: "Sprinting", description: "Explosive speed and power" },
  { id: "mobility", label: "Mobility", description: "Improve range of motion and flexibility" },
  { id: "general", label: "General Fitness", description: "Balanced overall conditioning" },
];

export default function PrimaryGoalStep() {
  const [selected, setSelected] = useState<string | null>(null);

  return (
    <div className="space-y-4">
      <p className="text-sm text-zinc-400 mb-4 text-center">
        Pick one <span className="text-white font-medium">primary focus</span> (optional)
      </p>

      <div className="grid sm:grid-cols-2 gap-4">
        {primaryGoalOptions.map((goal) => {
          const isActive = selected === goal.id;
          return (
            <button
              key={goal.id}
              onClick={() => setSelected(goal.id === selected ? null : goal.id)}
              className={`w-full py-4 px-6 rounded-xl text-left border-2 transition ${
                isActive
                  ? "bg-blue-600 border-blue-400 text-white"
                  : "bg-zinc-800 border-zinc-700 hover:border-zinc-500"
              }`}
            >
              <div className="text-lg font-semibold">{goal.label}</div>
              <p className="text-sm text-zinc-400">{goal.description}</p>
            </button>
          );
        })}
      </div>
    </div>
  );
}