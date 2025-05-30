import { useState } from "react";

const equipmentOptions = [
  { id: "none", label: "Bodyweight Only" },
  { id: "dumbbells", label: "Dumbbells" },
  { id: "barbell", label: "Barbell + Plates" },
  { id: "kettlebells", label: "Kettlebells" },
  { id: "resistance_bands", label: "Resistance Bands" },
  { id: "pullup_bar", label: "Pull-Up Bar" },
  { id: "gym_machine", label: "Gym Machines" },
  { id: "treadmill", label: "Treadmill" },
  { id: "track", label: "Track/Field Access" },
];

export default function EquipmentStep() {
  const [selected, setSelected] = useState<string[]>([]);

  const toggleEquipment = (id: string) => {
    setSelected((prev) =>
      prev.includes(id) ? prev.filter((e) => e !== id) : [...prev, id]
    );
  };

  return (
    <section className="py-16 px-4 bg-zinc-900 text-white">
      <h2 className="text-3xl font-bold text-center mb-4">
        What Equipment Do You Have Access To?
      </h2>
      <p className="text-center text-zinc-400 mb-10">
        Select everything you currently have access to – not just your favourites.
      </p>
      <div className="grid sm:grid-cols-2 md:grid-cols-3 gap-4 max-w-5xl mx-auto">
        {equipmentOptions.map((item) => {
          const isActive = selected.includes(item.id);
          return (
            <button
              key={item.id}
              onClick={() => toggleEquipment(item.id)}
              className={`w-full py-4 px-6 rounded-xl text-left border-2 transition ${
                isActive
                  ? "bg-blue-600 border-blue-400 text-white"
                  : "bg-zinc-800 border-zinc-700 hover:border-zinc-500"
              }`}
            >
              {item.label}
            </button>
          );
        })}
      </div>
    </section>
  );
}