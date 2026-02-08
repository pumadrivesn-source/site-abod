import { profile } from "@/data/profile";

export default function Footer() {
  return (
    <footer className="mt-14 border-t border-neutral-200">
      <div className="mx-auto max-w-5xl px-4 py-8 text-sm text-neutral-600">
        © {new Date().getFullYear()} {profile.name}
      </div>
    </footer>
  );
}
