const services = [
  {
    name: "Insurance revenue recovery",
    description:
      "Workflows that track aging claims, flag denials and missing info, and queue follow-up so money does not stall in AR.",
    outcome: "Cleaner AR, fewer write-offs from neglect, more predictable cash flow.",
  },
  {
    name: "Missed appointment recovery",
    description:
      "Automated outreach after no-shows and cancellations—by phone and text—so openings get filled instead of stacking up.",
    outcome: "Higher chair utilization and less idle provider time.",
  },
  {
    name: "Patient reactivation campaigns",
    description:
      "Structured campaigns for inactive and overdue recall patients, aligned with how your office already segments lists.",
    outcome: "Patients return to hygiene and comprehensive care instead of quietly lapsing.",
  },
  {
    name: "Treatment plan follow-up",
    description:
      "Persistent, respectful follow-up on presented treatment that has not been scheduled—without relying on memory alone.",
    outcome: "More accepted care and production from work you already diagnosed.",
  },
  {
    name: "AI outbound phone agent",
    description:
      "Outbound calling for no-shows, unscheduled treatment, recall, and balances—with voicemail and SMS paths your team approves.",
    outcome: "Schedule and collections motion that keeps running when the front desk is slammed.",
    featured: true,
  },
  {
    name: "HIPAA-compliant note support",
    description:
      "Documentation assistance and structured note workflows designed with healthcare handling in mind—supporting consistency without cutting corners.",
    outcome: "Less charting drag and fewer incomplete records at end of day.",
  },
];

export function ServicesSection({ onScheduleClick }) {
  return (
    <section id="services" className="scroll-mt-24 border-t border-border bg-mist py-20 sm:py-24">
      <div className="section-wrap">
        <div className="mb-10 flex flex-col gap-4 sm:flex-row sm:flex-wrap sm:items-end sm:justify-between">
          <div className="max-w-2xl">
            <h2 className="text-3xl font-extrabold tracking-tight text-ink sm:text-4xl">
              A revenue recovery system built for dental practices
            </h2>
            <p className="mt-4 text-slate">
              Six pillars we deploy together or in priority order—always grounded in your
              PMS, phones, and how your team actually works.
            </p>
          </div>
          <button onClick={onScheduleClick} className="secondary-btn shrink-0 self-start" type="button">
            Book a demo
          </button>
        </div>
        <div className="grid gap-5 md:grid-cols-2 lg:grid-cols-3">
          {services.map((service) => (
            <article
              key={service.name}
              className={`card p-6 ${service.featured ? "ring-2 ring-accent/25 shadow-lg" : ""}`}
            >
              {service.featured && (
                <p className="mb-2 text-xs font-bold uppercase tracking-widest text-accent">
                  Featured
                </p>
              )}
              <h3 className="text-xl font-semibold text-ink">{service.name}</h3>
              <p className="mt-3 text-sm leading-relaxed text-slate">{service.description}</p>
              <p className="mt-5 border-t border-border pt-4 text-sm font-medium text-ink">
                <span className="text-slate font-normal">Outcome: </span>
                {service.outcome}
              </p>
            </article>
          ))}
        </div>
        <p className="mt-10 text-center text-sm text-slate">
          Want detail on the phone agent?{" "}
          <a href="#ai-phone-agent" className="font-semibold text-accent hover:text-accent-dark">
            Jump to AI outbound phone agent
          </a>
          .
        </p>
      </div>
    </section>
  );
}
