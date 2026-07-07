import AppShell from "@/components/dashboard/app-shell";
import TopNav from "@/components/dashboard/top-nav";

export default function LibraryPage() {
  return (
    <AppShell>
      <TopNav email="Coming Soon" />

      <main className="flex flex-1 items-center justify-center bg-gray-50">
        <div className="text-center">
          <h1 className="text-5xl font-bold text-gray-900">
            Library
          </h1>

          <p className="mt-4 text-lg text-gray-600">
            This section will display all your saved Knowledge Objects.
          </p>
        </div>
      </main>
    </AppShell>
  );
}