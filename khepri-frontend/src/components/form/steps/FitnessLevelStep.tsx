type Props = {
  selectedLevel: string | null;
  setSelectedLevel: (level: string) => void;
};

const levels = [
  { id: "beginner", label: "Beginner" },
  { id: "intermediate", label: "Intermediate" },
  { id: "advanced", label: "Advanced" },
];

export default function FitnessLevelStep({ selectedLevel, setSelectedLevel }: Props) {
  return (
    <div>
      <p className="text-zinc-400 mb-4 text-center">What best describes your current fitness level?</p>
      <div className="grid sm:grid-cols-3 gap-4 max-w-lg mx-auto">
        {levels.map((level) => {
          const isActive = selectedLevel === level.id;
          return (
            <button
              key={level.id}
              onClick={() => setSelectedLevel(level.id)}
              className={`w-full py-4 px-6 rounded-xl text-center border-2 transition ${
                isActive
                  ? "bg-blue-600 border-blue-400 text-white"
                  : "bg-zinc-800 border-zinc-700 hover:border-zinc-500"
              }`}
            >
              {level.label}
            </button>
          );
        })}
      </div>
    </div>
  );
}