const trustItems = [
  "Built for dental practices",
  "HIPAA-conscious workflows",
  "Revenue recovery focused",
  "Works alongside your existing systems",
];

export function TrustBarSection() {
  return (
    <section
      className="border-y border-border bg-white py-5"
      aria-label="Trust and credibility"
    >
      <div className="section-wrap">
        <ul className="flex flex-wrap items-center justify-center gap-x-10 gap-y-3 text-center sm:justify-between">
          {trustItems.map((item) => (
            <li
              key={item}
              className="text-sm font-semibold tracking-tight text-ink sm:flex-1 sm:text-center"
            >
              <span className="inline-flex items-center gap-2">
                <span
                  className="hidden h-1.5 w-1.5 shrink-0 rounded-full bg-accent sm:inline-block"
                  aria-hidden
                />
                {item}
              </span>
            </li>
          ))}
        </ul>
      </div>
    </section>
  );
}
