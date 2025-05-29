import { useState } from "react";

const goals = [
  { id: "hypertrophy", label: "Hypertrophy" },
  { id: "calisthenics", label: "Calisthenics Strength" },
  { id: "distance", label: "Distance Running" },
  { id: "sprinting", label: "Sprinting" },
  { id: "mobility", label: "Mobility" },
  { id: "fatloss", label: "Fat Loss" },
  { id: "general", label: "General Fitness" },
];

export default function FitnessGoalsStep() {
  const [selected, setSelected] = useState<string[]>([]);

  const toggleGoal = (goalId: string) => {
    setSelected((prev) =>
      prev.includes(goalId) ? prev.filter((id) => id !== goalId) : [...prev, goalId]
    );
  };

  return (
    <div className="grid sm:grid-cols-2 gap-4">
      {goals.map((goal) => {
        const isActive = selected.includes(goal.id);
        return (
          <button
            key={goal.id}
            onClick={() => toggleGoal(goal.id)}
            className={`w-full py-4 px-6 rounded-xl text-left border-2 transition ${
              isActive
                ? "bg-blue-600 border-blue-400 text-white"
                : "bg-zinc-800 border-zinc-700 hover:border-zinc-500"
            }`}
          >
            {goal.label}
          </button>
        );
      })}
    </div>
  );
}
