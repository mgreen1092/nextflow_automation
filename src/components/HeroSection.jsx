const credibilityPoints = [
  "Save 5–10 hours/week on admin work",
  "Simple, secure setups using tools you already use",
  "Clear scope, fast turnaround (typically 2–3 weeks)",
];

export function HeroSection({ onScheduleClick }) {
  return (
    <section id="top" className="scroll-mt-24 section-dark py-20 sm:py-24">
      <div className="aurora-layer" aria-hidden="true" />
      <div className="section-wrap relative z-10">
        <div className="grid gap-12 lg:grid-cols-[1.2fr_1fr] lg:items-center">
          <div>
            <p className="mb-4 inline-flex rounded-full border border-border bg-white px-3 py-1 text-xs font-semibold uppercase tracking-wide text-slate">
              Workflow Automation Specialist
            </p>
            <h1 className="text-balance text-4xl font-extrabold tracking-tight text-white sm:text-5xl">
              AI Workflow Automation for Therapy Practices &amp; Professional
              Service Firms
            </h1>
            <p className="mt-5 max-w-2xl text-lg leading-relaxed text-light-gray">
              Reduce paperwork, streamline onboarding, and automate
              documentation—so you can get hours back every week.
            </p>
            <div className="mt-8 flex flex-col gap-3 sm:flex-row">
              <button onClick={onScheduleClick} className="cta-btn" type="button">
                Schedule a Free Workflow Review
              </button>
              <a href="#services" className="hero-secondary-btn">
                See Services
              </a>
            </div>
            <ul className="mt-8 space-y-3">
              {credibilityPoints.map((point) => (
                <li key={point} className="flex items-start gap-3 text-sm text-white">
                  <span
                    className="mt-1 inline-block h-2.5 w-2.5 rounded-full bg-accent"
                    aria-hidden="true"
                  />
                  <span>{point}</span>
                </li>
              ))}
            </ul>
          </div>
          <div className="card p-6 sm:p-8">
            <h2 className="text-lg font-bold text-ink">What You Can Expect</h2>
            <ul className="mt-5 space-y-4 text-sm leading-relaxed text-slate">
              <li className="rounded-xl border border-border bg-mist p-4">
                Focus on practical automation, not complex platform overhauls.
              </li>
              <li className="rounded-xl border border-border bg-mist p-4">
                Clear implementation plans tied to your real workflow bottlenecks.
              </li>
              <li className="rounded-xl border border-border bg-mist p-4">
                Secure systems built around your existing tools and processes.
              </li>
            </ul>
          </div>
        </div>
      </div>
    </section>
  );
}
