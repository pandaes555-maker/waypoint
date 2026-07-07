import Link from "next/link";

export default function Sidebar() {
  return (
    <aside className="flex h-screen w-72 flex-col border-r border-gray-200 bg-white">
      {/* Logo */}
      <div className="border-b border-gray-200 px-6 py-6">
        <h1 className="text-3xl font-bold text-gray-900">
          Waypoint
        </h1>

        <p className="mt-1 text-sm text-gray-600">
          AI Progress Memory
        </p>
      </div>

      {/* Navigation */}
      <nav className="flex-1 p-4">
        <ul className="space-y-2">

          <li>
            <Link
              href="/dashboard"
              className="flex items-center gap-3 rounded-xl bg-gray-900 px-4 py-3 font-medium text-white transition"
            >
              <span>🏠</span>
              <span>Home</span>
            </Link>
          </li>

          <li>
            <Link
              href="/dashboard/library"
              className="flex items-center gap-3 rounded-xl px-4 py-3 font-medium text-gray-700 transition hover:bg-gray-100"
            >
              <span>📚</span>
              <span>Library</span>
            </Link>
          </li>

          <li>
            <Link
              href="/dashboard/favorites"
              className="flex items-center gap-3 rounded-xl px-4 py-3 font-medium text-gray-700 transition hover:bg-gray-100"
            >
              <span>⭐</span>
              <span>Favorites</span>
            </Link>
          </li>

          <li>
            <Link
              href="/dashboard/settings"
              className="flex items-center gap-3 rounded-xl px-4 py-3 font-medium text-gray-700 transition hover:bg-gray-100"
            >
              <span>⚙️</span>
              <span>Settings</span>
            </Link>
          </li>

        </ul>
      </nav>

      {/* Footer */}
      <div className="border-t border-gray-200 px-6 py-6">
        <p className="font-semibold text-gray-800">
          Mission #004
        </p>

        <p className="text-sm text-gray-500">
          MVP v0.1
        </p>
      </div>
    </aside>
  );
}