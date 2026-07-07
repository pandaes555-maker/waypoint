import { redirect } from "next/navigation";
import { createClient } from "@/lib/supabase/server";

import AppShell from "@/components/dashboard/app-shell";
import TopNav from "@/components/dashboard/top-nav";
import EmptyLibrary from "@/components/dashboard/empty-library";

export default async function DashboardPage() {
  const supabase = await createClient();

  const {
    data: { user },
  } = await supabase.auth.getUser();

  if (!user) {
    redirect("/");
  }

  return (
    <AppShell>
      <TopNav email={user.email ?? ""} />

      <main className="flex flex-1 bg-gray-50">
        <EmptyLibrary />
      </main>
    </AppShell>
  );
}