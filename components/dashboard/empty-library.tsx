import InstallExtensionCard from "./install-extension-card";

export default function EmptyLibrary() {
  return (
    <section className="mx-auto flex h-full w-full max-w-5xl flex-col items-center justify-center px-8">
      <h1 className="text-6xl font-bold text-gray-900">
        Your Knowledge Library
      </h1>

      <p className="mt-6 text-lg text-gray-600">
        Save your first piece of knowledge to start building your personal AI
        memory.
      </p>

      <div className="mt-12 w-full max-w-2xl">
        <InstallExtensionCard />
      </div>
    </section>
  );
}