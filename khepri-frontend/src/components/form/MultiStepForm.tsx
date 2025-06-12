import { useState } from "react";
import FitnessGoalsStep from './steps/FitnessGoalsStep';
import EquipmentStep from './steps/EquipmentStep';
import TimeAvailabilityStep from './steps/TimeAvailabilityStep';
import PrimaryGoalStep from './steps/PrimaryGoalStep';
import FitnessLevelStep from './steps/FitnessLevelStep';
import ScheduleStep from './steps/ScheduleStep';
import ReviewStep from './steps/ReviewStep';

const steps = [
  "Fitness Goals",
  "Available Equipment",
  "Time Available Weekly",
  "Primary Focus",
  "Fitness Level",
  "Schedule",
  "Review & Submit",
];

export default function MultiStepForm() {
  const [step, setStep] = useState(0);

  const [formData, setFormData] = useState({
    goals: [] as string[],
    equipment: [] as string[],
    timePerSession: null as number | null,
    primaryGoal: null as string | null,
    fitnessLevel: null as string | null,
    schedule: [] as string[],
  });

  const goNext = () => setStep((prev) => Math.min(prev + 1, steps.length - 1));
  const goBack = () => setStep((prev) => Math.max(prev - 1, 0));

  return (
    <section className="py-16 px-4 bg-zinc-950 text-white">
      <div className="max-w-3xl mx-auto">
        <h2 className="text-2xl font-bold mb-6 text-center">{steps[step]}</h2>

        {/* Step Content */}
        <div className="min-h-[200px] bg-zinc-900 p-6 rounded-lg border border-zinc-700">
          {step === 0 && (
            <FitnessGoalsStep
              selectedGoals={formData.goals}
              setSelectedGoals={(goals) =>
                setFormData((prev) => ({ ...prev, goals }))
              }
            />
          )}
          {step === 1 && (
            <EquipmentStep
              selectedEquipment={formData.equipment}
              setSelectedEquipment={(equipment) =>
                setFormData((prev) => ({ ...prev, equipment }))
              }
            />
          )}
          {step === 2 && (
            <TimeAvailabilityStep
              timePerSession={formData.timePerSession}
              setTimePerSession={(timePerSession) =>
                setFormData((prev) => ({ ...prev, timePerSession }))
              }
            />
          )}
          {step === 3 && (
            <PrimaryGoalStep
              selectedGoal={formData.primaryGoal}
              setSelectedGoal={(primaryGoal) =>
                setFormData((prev) => ({ ...prev, primaryGoal }))
              }
            />
          )}
          {step === 4 && (
            <FitnessLevelStep
              selectedLevel={formData.fitnessLevel}
              setSelectedLevel={(fitnessLevel) =>
                setFormData((prev) => ({ ...prev, fitnessLevel }))
              }
            />
          )}
          {step === 5 && (
            <ScheduleStep
              selectedDays={formData.schedule}
              setSelectedDays={(schedule) =>
                setFormData((prev) => ({ ...prev, schedule }))
              }
            />
          )}
          {step === 6 && (
            <ReviewStep
              formData={formData}
              onSubmit={() => {
                console.log("Final form data submitted:", formData); // Replace with API call in next phase
              }}
            />
          )}
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