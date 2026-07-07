import CTAButtons from "./cta-buttons";

export default function HeroContent() {
  return (
    <>
      <h1 className="text-6xl font-bold">Waypoint</h1>

      <h2 className="mt-6 text-3xl font-semibold">
        AI-powered Progress Memory
      </h2>

      <p className="mt-10 max-w-3xl text-center text-lg text-gray-600">
        Remember everything worth remembering.
      </p>

      <p className="mt-4 max-w-4xl text-center text-lg text-gray-600">
        Save anything from the web and let Waypoint transform it into
        AI-searchable knowledge you can use forever.
      </p>

      <CTAButtons />
    </>
  );
}