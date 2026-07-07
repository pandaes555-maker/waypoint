import GoogleSignInButton from "@/app/auth/google-sign-in-button";

export default function CTAButtons() {
  return (
    <div className="mt-10 flex gap-4">
      <button className="rounded-lg bg-black px-6 py-3 text-white transition hover:bg-gray-800">
        Get Early Access
      </button>

      <GoogleSignInButton />
    </div>
  );
}