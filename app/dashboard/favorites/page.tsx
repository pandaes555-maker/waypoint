import AppShell from "@/components/dashboard/app-shell";
import TopNav from "@/components/dashboard/top-nav";

export default function FavoritesPage() {
  return (
    <AppShell>
      <TopNav email="Coming Soon" />

      <main className="flex flex-1 items-center justify-center bg-gray-50">
        <div className="text-center">
          <h1 className="text-5xl font-bold text-gray-900">
            Favorites
          </h1>

          <p className="mt-4 text-lg text-gray-600">
            Your favorite Knowledge Objects will appear here.
          </p>
        </div>
      </main>
    </AppShell>
  );
}