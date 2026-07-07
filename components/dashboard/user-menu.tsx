"use client";

import { createClient } from "@/lib/supabase/client";

interface UserMenuProps {
  email: string;
}

export default function UserMenu({ email }: UserMenuProps) {
  const handleSignOut = async () => {
    const supabase = createClient();

    await supabase.auth.signOut();

    window.location.href = "/";
  };

  return (
    <div className="flex items-center gap-4">
      <div className="flex h-10 w-10 items-center justify-center rounded-full bg-black text-white">
        {email.charAt(0).toUpperCase()}
      </div>

      <div className="hidden md:block">
        <p className="text-sm font-semibold text-gray-800">{email}</p>
      </div>

      <button
        onClick={handleSignOut}
        className="rounded-lg bg-red-600 px-4 py-2 text-sm font-medium text-white hover:bg-red-700 transition"
      >
        Sign Out
      </button>
    </div>
  );
}