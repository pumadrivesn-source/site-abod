export function TimelineItem({
  org,
  role,
  period,
  bullets,
}: {
  org: string;
  role: string;
  period: string;
  bullets: string[];
}) {
  return (
    <article className="rounded-3xl border border-neutral-200/70 bg-white/70 p-6 shadow-sm backdrop-blur transition-all hover:-translate-y-0.5 hover:border-neutral-300 hover:shadow-lg">
      <div className="flex flex-col gap-1 sm:flex-row sm:items-baseline sm:justify-between">
        <h3 className="font-semibold tracking-tight text-neutral-900">
          {role} <span className="text-neutral-500">— {org}</span>
        </h3>
        <div className="text-xs text-neutral-500">{period}</div>
      </div>
      <ul className="mt-3 list-disc space-y-1 pl-5 text-sm text-neutral-700">
        {bullets.map((b, i) => (
          <li key={i}>{b}</li>
        ))}
      </ul>
    </article>
  );
}
