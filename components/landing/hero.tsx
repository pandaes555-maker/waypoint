import HeroContent from "./hero-content";

export default function Hero() {
  return (
    <main className="flex min-h-screen items-center justify-center px-6">
      <div className="flex flex-col items-center">
        <HeroContent />
      </div>
    </main>
  );
}