import { useState } from "react";
import Hero from "./components/Hero";
import ToneSelector from "./components/ToneSelector";
import type { Tone } from "./types";
import MultiStepForm from './components/form/MultiStepForm';

export default function App() {
  const [selectedTone, setSelectedTone] = useState<Tone | null>(null);

  return (
    <main className="bg-zinc-900 min-h-screen text-white">
      <Hero />
      <ToneSelector selectedTone={selectedTone} setSelectedTone={setSelectedTone} />
      <MultiStepForm />
    </main>
  );
}