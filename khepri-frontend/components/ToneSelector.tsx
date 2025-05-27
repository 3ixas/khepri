import type { Tone } from "../src/types";

interface ToneSelectorProps {
  selectedTone: Tone | null;
  setSelectedTone: (tone: Tone) => void;
}

const tones: { id: Tone; label: string; emoji: string; description: string }[] = [
  { id: "coach", label: "Coach", emoji: "🧢", description: "Calm, clear, motivating" },
  { id: "buddy", label: "Workout Buddy", emoji: "🎧", description: "Friendly and upbeat" },
  { id: "drill", label: "Drill Sergeant", emoji: "💣", description: "Tough love intensity" },
];

export default function ToneSelector({ selectedTone, setSelectedTone }: ToneSelectorProps) {
  return (
    <section className="py-16 px-4 bg-zinc-900 text-white">
      <h2 className="text-3xl font-bold text-center mb-10">Choose Your Tone</h2>
      <div className="grid md:grid-cols-3 gap-6 max-w-5xl mx-auto">
        {tones.map((tone) => {
          const isSelected = selectedTone === tone.id;
          return (
            <button
              key={tone.id}
              onClick={() => setSelectedTone(tone.id)}
              className={`rounded-xl p-6 text-center transition border-2 ${
                isSelected
                  ? "bg-blue-600 border-blue-400"
                  : "bg-zinc-800 border-transparent hover:border-zinc-600"
              }`}
            >
              <div className="text-4xl mb-2">{tone.emoji}</div>
              <h3 className="text-xl font-semibold mb-1">{tone.label}</h3>
              <p className="text-zinc-400">{tone.description}</p>
            </button>
          );
        })}
      </div>
    </section>
  );
}