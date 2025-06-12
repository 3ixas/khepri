type ReviewStepProps = {
    formData: {
      goals: string[];
      equipment: string[];
      timePerSession: number | null;
      primaryGoal: string | null;
      fitnessLevel: string | null;
      schedule: string[];
    };
    onSubmit: () => void;
  };
  
  export default function ReviewStep({ formData, onSubmit }: ReviewStepProps) {
    const formatList = (items: string[]) =>
      items.length > 0 ? items.join(", ") : "None selected";
  
    return (
      <div className="space-y-6 text-sm sm:text-base text-zinc-200">
        <h3 className="text-xl font-bold text-white mb-4 text-center">Review Your Plan</h3>
  
        <div className="bg-zinc-800 p-4 rounded-lg border border-zinc-700 space-y-4">
          <div>
            <span className="font-semibold text-white">Fitness Goals:</span>{" "}
            {formatList(formData.goals)}
          </div>
          <div>
            <span className="font-semibold text-white">Available Equipment:</span>{" "}
            {formatList(formData.equipment)}
          </div>
          <div>
            <span className="font-semibold text-white">Time Per Session:</span>{" "}
            {formData.timePerSession ? `${formData.timePerSession} minutes` : "Not specified"}
          </div>
          <div>
            <span className="font-semibold text-white">Primary Focus:</span>{" "}
            {formData.primaryGoal ? formData.primaryGoal : "No primary focus (balanced blend)"}
          </div>
          <div>
            <span className="font-semibold text-white">Fitness Level:</span>{" "}
            {formData.fitnessLevel ?? "Not specified"}
          </div>
          <div>
            <span className="font-semibold text-white">Weekly Training Days:</span>{" "}
            {formatList(formData.schedule)}
          </div>
        </div>
  
        <div className="text-center">
          <button
            onClick={onSubmit}
            className="mt-6 px-6 py-2 bg-green-600 hover:bg-green-700 transition rounded-lg text-white font-semibold"
          >
            Submit Plan
          </button>
        </div>
      </div>
    );
  }  