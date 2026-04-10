const outcomes = [
  {
    title: "Recover missed opportunities",
    copy: "Turn lists you already maintain—no-shows, pending treatment, recall—into booked visits and cleaner AR.",
  },
  {
    title: "Improve rebooking rates",
    copy: "Consistent outreach beats sporadic front-desk calling when the day gets busy.",
  },
  {
    title: "Support treatment acceptance follow-up",
    copy: "Keep diagnosed care visible with structured follow-up instead of one-off reminders.",
  },
  {
    title: "Reduce admin burden on staff",
    copy: "Automations and calling handle the repetitive work; your team steps in for judgment calls.",
  },
  {
    title: "A steadier patient follow-up engine",
    copy: "Processes run whether or not someone had time to make thirty outbound calls this week.",
  },
];

export function OutcomesSection() {
  return (
    <section
      id="outcomes"
      className="scroll-mt-24 border-t border-border bg-white py-20 sm:py-24"
    >
      <div className="section-wrap">
        <div className="mx-auto max-w-2xl text-center">
          <h2 className="text-3xl font-extrabold tracking-tight text-ink sm:text-4xl">
            Outcomes we design for
          </h2>
          <p className="mt-4 text-slate">
            We frame work around operational results—not abstract &ldquo;AI
            transformation.&rdquo; Every practice is different; these are the kinds
            of improvements we build toward.
          </p>
        </div>
        <ul className="mt-12 grid gap-5 sm:grid-cols-2 lg:grid-cols-3">
          {outcomes.map((o) => (
            <li key={o.title} className="card p-6">
              <h3 className="text-lg font-semibold text-ink">{o.title}</h3>
              <p className="mt-3 text-sm leading-relaxed text-slate">{o.copy}</p>
            </li>
          ))}
        </ul>
      </div>
    </section>
  );
}
