type Props = {
  selectedGoal: string | null;
  setSelectedGoal: (goal: string) => void;
};

const options = [
  { id: "hypertrophy", label: "Build Muscle" },
  { id: "calisthenics", label: "Master Calisthenics" },
  { id: "distance", label: "Improve Endurance" },
  { id: "sprinting", label: "Improve Speed" },
  { id: "mobility", label: "Move Better" },
  { id: "general", label: "General Fitness" },
];

export default function PrimaryGoalStep({ selectedGoal, setSelectedGoal }: Props) {
  return (
    <div>
      <p className="text-zinc-400 mb-4 text-center">
        Select a primary focus (optional). Leaving this blank will create a balanced plan across your chosen goals.
      </p>
      <div className="grid sm:grid-cols-2 gap-4">
        {options.map((option) => {
          const isActive = selectedGoal === option.id;
          return (
            <button
              key={option.id}
              onClick={() => setSelectedGoal(option.id)}
              className={`w-full py-4 px-6 rounded-xl text-left border-2 transition ${
                isActive
                  ? "bg-blue-600 border-blue-400 text-white"
                  : "bg-zinc-800 border-zinc-700 hover:border-zinc-500"
              }`}
            >
              {option.label}
            </button>
          );
        })}
      </div>
    </div>
  );
}