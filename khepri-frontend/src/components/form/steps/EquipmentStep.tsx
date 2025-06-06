type Props = {
  selectedEquipment: string[];
  setSelectedEquipment: (equipment: string[]) => void;
};

const equipmentOptions = [
  { id: "bodyweight", label: "Bodyweight Only" },
  { id: "dumbbells", label: "Dumbbells" },
  { id: "barbell", label: "Barbell" },
  { id: "kettlebell", label: "Kettlebell" },
  { id: "resistancebands", label: "Resistance Bands" },
  { id: "gymaccess", label: "Full Gym Access" },
];

export default function EquipmentStep({ selectedEquipment, setSelectedEquipment }: Props) {
  const toggleEquipment = (id: string) => {
    if (selectedEquipment.includes(id)) {
      setSelectedEquipment(selectedEquipment.filter((eq) => eq !== id));
    } else {
      setSelectedEquipment([...selectedEquipment, id]);
    }
  };

  return (
    <div>
      <h2 className="text-3xl font-bold text-center mb-4">
        What Equipment Do You Have Access To?
      </h2>
      <p className="text-center text-zinc-400 mb-10">
        Select everything you currently have access to – not just your favourites.
      </p>
      <div className="grid sm:grid-cols-2 gap-4">
        {equipmentOptions.map((eq) => {
          const isActive = selectedEquipment.includes(eq.id);
          return (
            <button
              key={eq.id}
              onClick={() => toggleEquipment(eq.id)}
              className={`w-full py-4 px-6 rounded-xl text-left border-2 transition ${
                isActive
                  ? "bg-blue-600 border-blue-400 text-white"
                  : "bg-zinc-800 border-zinc-700 hover:border-zinc-500"
              }`}
            >
              {eq.label}
            </button>
          );
        })}
      </div>
    </div>
  );
}
