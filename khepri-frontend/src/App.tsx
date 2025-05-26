import Hero from "../components/Hero";
import ToneSelector from "../components/ToneSelector";

export default function App() {
  return (
    <main className="bg-zinc-900 min-h-screen text-white">
      <Hero />
      <ToneSelector />
    </main>
  );
}