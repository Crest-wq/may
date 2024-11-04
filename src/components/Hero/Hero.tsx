import Link from "next/link";

const Hero: React.FC = () => {
  return (
    <section className="relative w-full h-screen bg-[url('/canvabg.webp')] bg-cover bg-center flex items-center justify-center text-white">
      <div className="text-center px-4">
        <h1 className="text-4xl md:text-6xl font-bold">Introducing StableOx</h1>
        <p className="mt-4 text-lg md:text-xl max-w-lg mx-auto">
          Your ultimate solution for troubleshooting wallet issues in the
          blockchain world.
        </p>

        <div className="mt-6">
          <a
            href="/solutions"
            className="border-[2px] text-green-500 px-6 py-3 rounded-[25px] hover:text-white border-green-500 hover:bg-green-600 transition-all"
          >
            Explore Solution
          </a>
        </div>
      </div>
    </section>
  );
};

export default Hero;
