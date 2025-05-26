const tones = [
    { id: "coach", label: "Coach", emoji: "🧢", description: "Calm, clear, motivating" },
    { id: "buddy", label: "Workout Buddy", emoji: "🎧", description: "Friendly and upbeat" },
    { id: "drill", label: "Drill Sergeant", emoji: "💣", description: "Tough love intensity" },
  ];
  
  export default function ToneSelector() {
    return (
      <section className="py-16 px-4 bg-zinc-900 text-white">
        <h2 className="text-3xl font-bold text-center mb-10">Choose Your Tone</h2>
        <div className="grid md:grid-cols-3 gap-6 max-w-5xl mx-auto">
          {tones.map((tone) => (
            <div
              key={tone.id}
              className="bg-zinc-800 rounded-xl p-6 text-center shadow hover:shadow-xl transition"
            >
              <div className="text-4xl mb-2">{tone.emoji}</div>
              <h3 className="text-xl font-semibold mb-1">{tone.label}</h3>
              <p className="text-zinc-400">{tone.description}</p>
            </div>
          ))}
        </div>
      </section>
    );
  }  