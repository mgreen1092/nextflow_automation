const benefitBullets = [
  "Recover missed production from no-shows, recall, and pending treatment",
  "Reduce no-shows and follow-up gaps with consistent outreach",
  "Integrate with your existing PMS, phones, and team workflow",
];

export function HeroSection({ onScheduleClick }) {
  return (
    <section id="top" className="scroll-mt-24 section-dark py-20 sm:py-24">
      <div className="aurora-layer" aria-hidden="true" />
      <div className="section-wrap relative z-10">
        <div className="grid gap-12 lg:grid-cols-[1.2fr_1fr] lg:items-center">
          <div>
            <p className="mb-4 inline-flex rounded-full border border-border bg-white px-3 py-1 text-xs font-semibold uppercase tracking-wide text-slate">
              Dental revenue recovery
            </p>
            <h1 className="text-balance text-4xl font-extrabold tracking-tight text-white sm:text-5xl">
              Recover lost dental revenue without hiring more staff
            </h1>
            <p className="mt-5 max-w-2xl text-lg leading-relaxed text-light-gray">
              NextFlow installs revenue recovery systems for dental offices: insurance
              follow-up, missed-appointment recovery, patient reactivation, treatment
              follow-up, HIPAA-conscious documentation support—and an{" "}
              <strong className="font-semibold text-white">AI outbound phone agent</strong>{" "}
              that fills the schedule and pursues balances without burying your front desk.
            </p>
            <p className="mt-4 max-w-2xl text-base font-medium text-light-gray">
              We don&apos;t just show you where revenue is leaking. We help recover it
              for you.
            </p>
            <div className="mt-8 flex flex-col gap-3 sm:flex-row">
              <button onClick={onScheduleClick} className="cta-btn" type="button">
                Book a demo
              </button>
              <a href="#how-it-works" className="hero-secondary-btn">
                See how it works
              </a>
            </div>
            <ul className="mt-8 space-y-3">
              {benefitBullets.map((point) => (
                <li key={point} className="flex items-start gap-3 text-sm text-white">
                  <span
                    className="mt-1 inline-block h-2.5 w-2.5 shrink-0 rounded-full bg-accent"
                    aria-hidden="true"
                  />
                  <span>{point}</span>
                </li>
              ))}
            </ul>
          </div>
          <div className="card p-6 sm:p-8">
            <h2 className="text-lg font-bold text-ink">What we implement</h2>
            <p className="mt-2 text-sm text-slate">
              Done-for-you workflows and calling—scoped to your practice, not a generic
              template.
            </p>
            <ul className="mt-6 space-y-3 text-sm leading-relaxed text-slate">
              <li className="rounded-xl border border-border bg-mist px-4 py-3">
                <span className="font-semibold text-ink">Insurance revenue recovery</span>
                — aging claims, eligibility gaps, and follow-up your team never gets to.
              </li>
              <li className="rounded-xl border border-border bg-mist px-4 py-3">
                <span className="font-semibold text-ink">Schedule recovery</span>
                — no-shows, recall, and unscheduled treatment with phone + SMS paths.
              </li>
              <li className="rounded-xl border border-border bg-mist px-4 py-3">
                <span className="font-semibold text-ink">Outbound phone agent</span>
                — practical calling that hands off warm leads to your staff.
              </li>
            </ul>
          </div>
        </div>
      </div>
    </section>
  );
}
