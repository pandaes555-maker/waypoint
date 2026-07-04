export default function Home() {
  return (
    <main className="flex min-h-screen items-center justify-center bg-white px-6">
      <section className="max-w-3xl text-center">
        <h1 className="text-5xl font-bold tracking-tight text-gray-900">
          Waypoint
        </h1>

        <p className="mt-4 text-2xl font-semibold text-gray-700">
          AI-powered Progress Memory
        </p>

        <p className="mt-6 text-lg leading-8 text-gray-600">
          Remember everything worth remembering.
          <br />
          Save anything from the web and let Waypoint transform it into
          AI-searchable knowledge you can use forever.
        </p>

        <button className="mt-10 rounded-lg bg-black px-6 py-3 text-white transition hover:bg-gray-800">
          Get Early Access
        </button>
      </section>
    </main>
  );
}