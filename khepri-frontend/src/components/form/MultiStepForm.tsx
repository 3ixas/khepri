import { useState } from "react";
import FitnessGoalsStep from './steps/FitnessGoalsStep';
import EquipmentStep from './steps/EquipmentStep';
import TimeAvailabilityStep from './steps/TimeAvailabilityStep';
import PrimaryGoalStep from './steps/PrimaryGoalStep';
import FitnessLevelStep from './steps/FitnessLevelStep';
import ScheduleStep from './steps/ScheduleStep';

const steps = [
  "Fitness Goals",
  "Available Equipment",
  "Time Available Weekly",
  "Primary Focus",
  "Fitness Level",
  "Schedule",
  "Current vs Target"
];

export default function MultiStepForm() {
  const [step, setStep] = useState(0);

  const goNext = () => setStep((prev) => Math.min(prev + 1, steps.length - 1));
  const goBack = () => setStep((prev) => Math.max(prev - 1, 0));

  return (
    <section className="py-16 px-4 bg-zinc-950 text-white">
      <div className="max-w-3xl mx-auto">
        <h2 className="text-2xl font-bold mb-6 text-center">{steps[step]}</h2>

        {/* Render the step content */}
        <div className="min-h-[200px] bg-zinc-900 p-6 rounded-lg border border-zinc-700">
            {step === 0 && <FitnessGoalsStep />}
            {step === 1 && <EquipmentStep />}
            {step === 2 && <TimeAvailabilityStep />}
            {step === 3 && <PrimaryGoalStep />}
            {step === 4 && <FitnessLevelStep />}
            {step === 5 && <ScheduleStep />}
        </div>


        {/* Navigation */}
        <div className="mt-8 flex justify-between">
          <button
            onClick={goBack}
            disabled={step === 0}
            className="px-4 py-2 rounded bg-zinc-700 disabled:opacity-40"
          >
            Back
          </button>
          <button
            onClick={goNext}
            disabled={step === steps.length - 1}
            className="px-4 py-2 rounded bg-blue-600"
          >
            Next
          </button>
        </div>
      </div>
    </section>
  );
}
