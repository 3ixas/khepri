import { useState } from "react";

export default function CurrentVsTargetStep() {
  const [current, setCurrent] = useState(5);
  const [target, setTarget] = useState(7);

  return (
    <div className="space-y-8">
      <div>
        <h3 className="text-lg font-semibold mb-2 text-center">Current Fitness Level</h3>
        <p className="text-sm text-zinc-400 text-center mb-4">
          1 = Just getting started · 10 = Elite athlete
        </p>
        <input
          type="range"
          min={1}
          max={10}
          value={current}
          onChange={(e) => setCurrent(parseInt(e.target.value))}
          className="w-full accent-blue-500"
        />
        <p className="text-center mt-2 text-blue-400 text-lg font-medium">{current}</p>
      </div>

      <div>
        <h3 className="text-lg font-semibold mb-2 text-center">Target Fitness Level</h3>
        <p className="text-sm text-zinc-400 text-center mb-4">
          Where would you like to be in the next 3–6 months?
        </p>
        <input
          type="range"
          min={1}
          max={10}
          value={target}
          onChange={(e) => setTarget(parseInt(e.target.value))}
          className="w-full accent-blue-500"
        />
        <p className="text-center mt-2 text-blue-400 text-lg font-medium">{target}</p>
      </div>
    </div>
  );
}