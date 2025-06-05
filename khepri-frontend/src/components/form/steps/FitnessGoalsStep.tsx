type Props = {
  selectedGoals: string[];
  setSelectedGoals: (goals: string[]) => void;
};

const goals = [
  { id: "hypertrophy", label: "Hypertrophy" },
  { id: "calisthenics", label: "Calisthenics Strength" },
  { id: "distance", label: "Distance Running" },
  { id: "sprinting", label: "Sprinting" },
  { id: "mobility", label: "Mobility" },
  { id: "general", label: "General Fitness" },
];

export default function FitnessGoalsStep({ selectedGoals, setSelectedGoals }: Props) {
  const toggleGoal = (goalId: string) => {
    if (selectedGoals.includes(goalId)) {
      setSelectedGoals(selectedGoals.filter((id) => id !== goalId));
    } else {
      setSelectedGoals([...selectedGoals, goalId]);
    }
  };

  return (
    <div>
      <h2 className="text-3xl font-bold text-center mb-4">
        What Are Your Fitness Goals?
      </h2>
      <p className="text-center text-zinc-400 mb-10">
        Select all that apply. We’ll use these to customise your workouts across multiple disciplines.
      </p>
      <div className="grid sm:grid-cols-2 gap-4">
        {goals.map((goal) => {
          const isActive = selectedGoals.includes(goal.id);
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
    </div>
  );
}