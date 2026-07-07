"use client";

import { createClient } from "@/lib/supabase/client";

export default function SignOutButton() {
  const handleSignOut = async () => {
    const supabase = createClient();

    await supabase.auth.signOut();

    window.location.href = "/";
  };

  return (
    <button
      onClick={handleSignOut}
      className="mt-8 rounded-lg bg-red-600 px-6 py-3 text-white transition hover:bg-red-700"
    >
      Sign Out
    </button>
  );
}