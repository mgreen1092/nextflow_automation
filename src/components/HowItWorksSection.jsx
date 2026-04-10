const steps = [
  {
    title: "Identify revenue leaks",
    description:
      "We map where money and visits stall—claims, schedule, treatment acceptance, recall, balances—using your real reports and queues.",
  },
  {
    title: "Deploy workflows and calling",
    description:
      "We build automations and configure the outbound phone agent against lists and rules your team signs off on.",
  },
  {
    title: "Re-engage patients consistently",
    description:
      "Calls, texts, and internal tasks fire on a steady cadence so follow-up is not a whenever-we-get-to-it project.",
  },
  {
    title: "Track recovered opportunities",
    description:
      "Simple visibility into what was attempted, what landed on the schedule, and what still needs a human touch.",
  },
];

export function HowItWorksSection() {
  return (
    <section id="how-it-works" className="scroll-mt-24 border-t border-border bg-white py-20 sm:py-24">
      <div className="section-wrap">
        <div className="mx-auto max-w-2xl text-center">
          <h2 className="text-3xl font-extrabold tracking-tight text-ink sm:text-4xl">
            How it works
          </h2>
          <p className="mt-4 text-slate">
            No complicated change management program—just a focused build that respects
            how your office already runs.
          </p>
        </div>
        <div className="mt-14 grid gap-6 sm:grid-cols-2 lg:grid-cols-4">
          {steps.map((step, index) => (
            <article key={step.title} className="relative card p-6">
              <div className="flex items-center gap-3">
                <span className="flex h-10 w-10 shrink-0 items-center justify-center rounded-xl bg-accent text-sm font-extrabold text-white shadow-md shadow-accent/20">
                  {index + 1}
                </span>
                <span className="text-xs font-bold uppercase tracking-wide text-slate">
                  Step {index + 1}
                </span>
              </div>
              <h3 className="mt-4 text-lg font-semibold text-ink">{step.title}</h3>
              <p className="mt-2 text-sm leading-relaxed text-slate">{step.description}</p>
            </article>
          ))}
        </div>
      </div>
    </section>
  );
}
