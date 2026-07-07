export default function InstallExtensionCard() {
  return (
    <div className="rounded-2xl border border-gray-200 bg-white p-10 shadow-sm">
      <div className="mx-auto max-w-2xl text-center">
        <h2 className="text-3xl font-bold text-gray-900">
          Install the Chrome Extension
        </h2>

        <p className="mt-4 text-lg text-gray-600">
          Capture articles, videos, websites, and resources with a single click.
          Waypoint will automatically organize everything into your personal AI
          Knowledge Library.
        </p>

        <button
          disabled
          className="mt-8 cursor-not-allowed rounded-xl bg-black px-8 py-4 font-semibold text-white opacity-70"
        >
          Chrome Extension (Coming Soon)
        </button>

        <p className="mt-4 text-sm text-gray-500">
          Extension support will be added in Mission #006.
        </p>
      </div>
    </div>
  );
}