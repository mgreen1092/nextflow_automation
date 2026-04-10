const fits = [
  "General dental practices ready to tighten follow-up",
  "Multi-provider offices where coordination breaks down",
  "Practices with frequent no-shows or last-minute openings",
  "Teams with backlogged insurance follow-up or aging claims work",
  "Small to midsize groups that are busy—and still leaking revenue",
  "Offices that want done-for-you implementation, not another DIY tool",
];

export function IdealFitSection() {
  return (
    <section id="ideal-fit" className="scroll-mt-24 border-t border-border bg-mist py-20 sm:py-24">
      <div className="section-wrap">
        <h2 className="text-3xl font-extrabold tracking-tight text-ink sm:text-4xl">
          Who this is for
        </h2>
        <p className="mt-4 max-w-2xl text-slate">
          We work best with owners, office managers, and operations leads who want
          revenue recovery systems installed alongside the tools they already use.
        </p>
        <ul className="mt-10 grid gap-3 sm:grid-cols-2">
          {fits.map((item) => (
            <li
              key={item}
              className="flex items-start gap-3 rounded-2xl border border-border bg-white px-5 py-4 text-sm font-medium text-ink"
            >
              <span
                className="mt-0.5 inline-flex h-6 w-6 shrink-0 items-center justify-center rounded-full bg-accent/10 text-xs font-bold text-accent"
                aria-hidden
              >
                ✓
              </span>
              {item}
            </li>
          ))}
        </ul>
      </div>
    </section>
  );
}
