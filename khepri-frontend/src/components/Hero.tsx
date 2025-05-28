export default function Hero() {
    return (
      <section className="text-center py-20 px-4 bg-gradient-to-b from-zinc-900 to-zinc-800">
        <h1 className="text-4xl md:text-6xl font-bold mb-4 text-white">
          Get a Personalised Workout Plan
        </h1>
        <p className="text-lg md:text-xl text-zinc-300 mb-8">
          Tailored to your goals. Powered by AI. No signup required.
        </p>
        <button className="bg-blue-600 hover:bg-blue-700 text-white px-6 py-3 rounded-2xl text-lg transition">
          Build My Plan
        </button>
      </section>
    );
  }  