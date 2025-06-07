type Props = {
  timePerSession: number | null;
  setTimePerSession: (time: number) => void;
};

const timeOptions = [20, 30, 45, 60];

export default function TimeAvailabilityStep({ timePerSession, setTimePerSession }: Props) {
  return (
    <div>
      <h2 className="text-3xl font-bold text-center mb-4">
        How Often Can You Train Each Week?
      </h2>
      <p className="text-center text-zinc-400 mb-10">
        Let us know your typical weekly availability so your workout plan fits your life.
      </p>
      <div className="grid grid-cols-2 sm:grid-cols-4 gap-4 max-w-md mx-auto">
        {timeOptions.map((minutes) => {
          const isActive = timePerSession === minutes;
          return (
            <button
              key={minutes}
              onClick={() => setTimePerSession(minutes)}
              className={`rounded-xl py-3 px-4 font-semibold border-2 transition ${
                isActive
                  ? "bg-blue-600 border-blue-400 text-white"
                  : "bg-zinc-800 border-zinc-700 hover:border-zinc-500"
              }`}
            >
              {minutes} min
            </button>
          );
        })}
      </div>
    </div>
  );
}
