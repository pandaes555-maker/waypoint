import UserMenu from "./user-menu";

interface TopNavProps {
  email: string;
}

export default function TopNav({ email }: TopNavProps) {
  return (
    <header className="flex h-20 items-center justify-between border-b border-gray-200 bg-white px-8">
      <div className="flex flex-col gap-4">
        <div>
          <h2 className="text-2xl font-bold text-gray-900">
            Welcome back 👋
          </h2>

          <p className="text-sm text-gray-500">
            Ready to capture something useful today?
          </p>
        </div>

        <input
          disabled
          placeholder="Search your knowledge..."
          className="w-full max-w-lg rounded-xl border border-gray-300 bg-gray-50 px-5 py-3 text-gray-700 placeholder:text-gray-400 focus:outline-none"
        />
      </div>

      <UserMenu email={email} />
    </header>
  );
}