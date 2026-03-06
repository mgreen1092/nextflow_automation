const steps = [
  {
    title: "Free Workflow Review (20 minutes)",
    description: "Identify 1–2 high-impact automations.",
  },
  {
    title: "Build & Configure (2–3 weeks)",
    description: "Implement with existing tools.",
  },
  {
    title: "Launch + Support",
    description: "Test, train, optional monthly support.",
  },
];

export function HowItWorksSection() {
  return (
    <section id="how-it-works" className="scroll-mt-24 section-divider py-16">
      <div className="section-wrap">
        <h2 className="text-3xl font-bold tracking-tight text-ink">How It Works</h2>
        <div className="mt-8 grid gap-5 md:grid-cols-3">
          {steps.map((step, index) => (
            <article key={step.title} className="card p-6">
              <p className="flex items-center gap-3 text-xs font-bold uppercase tracking-wide text-accent">
                <span className="flex h-7 w-7 items-center justify-center rounded-full bg-accent text-[11px] text-white">
                  {index + 1}
                </span>
                <span>Step {index + 1}</span>
              </p>
              <h3 className="mt-2 text-xl font-semibold text-ink">{step.title}</h3>
              <p className="mt-3 text-slate">{step.description}</p>
            </article>
          ))}
        </div>
      </div>
    </section>
  );
}
