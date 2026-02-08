export default function Section({
  title,
  children,
}: {
  title: string;
  children: React.ReactNode;
}) {
  return (
    <section className="py-10">
      <div className="flex items-end justify-between gap-6">
        <h2 className="text-xl font-semibold tracking-tight text-neutral-900">
          {title}
        </h2>
        <div className="hidden h-px flex-1 bg-neutral-200 sm:block" />
      </div>
      <div className="mt-4 space-y-3">{children}</div>
    </section>
  );
}
