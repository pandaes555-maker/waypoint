import { redirect } from "next/navigation";
import { createClient } from "@/lib/supabase/server";
import SignOutButton from "@/components/auth/sign-out-button";

export default async function DashboardPage() {
  const supabase = await createClient();

  const {
    data: { user },
  } = await supabase.auth.getUser();

  if (!user) {
    redirect("/");
  }

  return (
    <main className="flex min-h-screen items-center justify-center bg-black text-white">
      <div className="text-center">
        <h1 className="text-5xl font-bold">Welcome to Waypoint</h1>

        <p className="mt-4 text-lg text-gray-400">
          You are successfully signed in.
        </p>

        <p className="mt-6 text-sm text-gray-500">
          {user.email}
        </p>

        <SignOutButton />
      </div>
    </main>
  );
}