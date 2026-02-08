export default function SkillBadge({ label }: { label: string }) {
  return (
    <span className="mr-2 mb-2 inline-flex items-center rounded-full border border-neutral-200 bg-white/80 px-2.5 py-1 text-xs font-medium text-neutral-700 shadow-sm transition-colors hover:border-neutral-300 hover:bg-white hover:text-accent">
      {label}
    </span>
  );
}
