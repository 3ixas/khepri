type Props = {
  selectedDays: string[];
  setSelectedDays: (days: string[]) => void;
};

const days = [
  { id: "mon", label: "Mon" },
  { id: "tue", label: "Tue" },
  { id: "wed", label: "Wed" },
  { id: "thu", label: "Thu" },
  { id: "fri", label: "Fri" },
  { id: "sat", label: "Sat" },
  { id: "sun", label: "Sun" },
];

export default function ScheduleStep({ selectedDays, setSelectedDays }: Props) {
  const toggleDay = (dayId: string) => {
    if (selectedDays.includes(dayId)) {
      setSelectedDays(selectedDays.filter((d) => d !== dayId));
    } else {
      setSelectedDays([...selectedDays, dayId]);
    }
  };

  return (
    <div>
      <p className="text-zinc-400 mb-4 text-center">
        Which days can you realistically train on each week?
      </p>
      <div className="grid grid-cols-4 sm:grid-cols-7 gap-3 max-w-md mx-auto">
        {days.map((day) => {
          const isActive = selectedDays.includes(day.id);
          return (
            <button
              key={day.id}
              onClick={() => toggleDay(day.id)}
              className={`rounded-lg py-2 px-4 font-semibold border-2 transition ${
                isActive
                  ? "bg-blue-600 border-blue-400 text-white"
                  : "bg-zinc-800 border-zinc-700 hover:border-zinc-500"
              }`}
            >
              {day.label}
            </button>
          );
        })}
      </div>
    </div>
  );
}