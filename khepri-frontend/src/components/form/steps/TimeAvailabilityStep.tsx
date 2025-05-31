import { useState } from "react";

const availabilityOptions = [
  { id: "1", label: "1 Day / Week", description: "Just getting started or very limited time" },
  { id: "2-3", label: "2–3 Days / Week", description: "Manageable routine for busy schedules" },
  { id: "4-5", label: "4–5 Days / Week", description: "Great for consistent progress" },
  { id: "6+", label: "6+ Days / Week", description: "All in — training is a priority" },
];

export default function TimeAvailabilityStep() {
  const [selected, setSelected] = useState<string | null>(null);

  return (
    <section className="py-16 px-4 bg-zinc-900 text-white">
      <h2 className="text-3xl font-bold text-center mb-4">
        How Often Can You Train Each Week?
      </h2>
      <p className="text-center text-zinc-400 mb-10">
        Let us know your typical weekly availability so your workout plan fits your life.
      </p>
      <div className="grid sm:grid-cols-2 md:grid-cols-3 gap-4 max-w-5xl mx-auto">
        {availabilityOptions.map((option) => {
          const isActive = selected === option.id;
          return (
            <button
              key={option.id}
              onClick={() => setSelected(option.id)}
              className={`w-full py-6 px-4 rounded-xl text-left border-2 transition ${
                isActive
                  ? "bg-blue-600 border-blue-400 text-white"
                  : "bg-zinc-800 border-zinc-700 hover:border-zinc-500"
              }`}
            >
              <h3 className="text-xl font-semibold mb-1">{option.label}</h3>
              <p className="text-zinc-400">{option.description}</p>
            </button>
          );
        })}
      </div>
    </section>
  );
}