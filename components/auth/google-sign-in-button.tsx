// components/auth/google-sign-in-button.tsx

"use client";

import { createClient } from "@/lib/supabase/client";

export default function GoogleSignInButton() {
  const handleSignIn = async () => {
    const supabase = createClient();

    await supabase.auth.signInWithOAuth({
      provider: "google",
      options: {
        redirectTo: `${window.location.origin}/auth/callback`,
      },
    });
  };

  return (
    <button
      onClick={handleSignIn}
      className="rounded-lg bg-black px-6 py-3 text-white transition hover:bg-gray-800"
    >
      Continue with Google
    </button>
  );
}