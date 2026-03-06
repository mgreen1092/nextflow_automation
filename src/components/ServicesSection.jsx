const services = [
  {
    name: "AI Intake & Client Onboarding Automation",
    description:
      "Automate intake forms, onboarding emails, and client record creation.",
    outcomes: [
      "Save 5–10 hours/week",
      "Fewer manual steps and errors",
      "Better client experience",
    ],
    workflow: "Form → AI summary → welcome email → client record",
    investment: "$2K–$5K implementation",
  },
  {
    name: "AI Documentation & Workflow Automation",
    description:
      "Turn bullet points into structured notes and documentation using AI-powered templates.",
    outcomes: [
      "Save 1–2 hours/day",
      "Consistent, structured documentation",
      "Less burnout",
    ],
    workflow: "Bullets → AI-generated structured note → saved to template",
    investment: "$3K–$7K setup",
  },
  {
    name: "AI Document Processing & Data Extraction",
    description:
      "Extract key fields from PDFs/forms and organize documents automatically.",
    outcomes: [
      "Eliminate manual data entry",
      "Faster processing",
      "Searchable, organized records",
    ],
    workflow: "Upload → extract fields → categorize → store/search",
    investment: "$4K–$10K implementation",
  },
];

export function ServicesSection({ onScheduleClick }) {
  return (
    <section id="services" className="scroll-mt-24 py-16">
      <div className="section-wrap">
        <div className="mb-8 flex flex-wrap items-end justify-between gap-4">
          <h2 className="text-3xl font-bold tracking-tight text-ink">Services</h2>
          <button onClick={onScheduleClick} className="secondary-btn" type="button">
            Schedule a Free Workflow Review
          </button>
        </div>
        <div className="grid gap-6 lg:grid-cols-3">
          {services.map((service) => (
            <article key={service.name} className="card p-6">
              <h3 className="text-xl font-semibold text-ink">{service.name}</h3>
              <p className="mt-3 text-sm leading-relaxed text-slate">
                {service.description}
              </p>
              <h4 className="mt-5 text-xs font-bold uppercase tracking-wide text-slate">
                Outcomes
              </h4>
              <ul className="mt-2 space-y-2 text-sm text-slate">
                {service.outcomes.map((outcome) => (
                  <li key={outcome} className="flex items-start gap-2">
                    <span className="mt-1.5 h-2 w-2 rounded-full bg-accent" />
                    <span>{outcome}</span>
                  </li>
                ))}
              </ul>
              <p className="mt-5 rounded-xl border border-border bg-mist p-3 text-sm text-ink">
                <span className="font-semibold">Sample workflow:</span>{" "}
                {service.workflow}
              </p>
              <p className="mt-4 text-sm font-semibold text-ink">
                Typical investment: {service.investment}
              </p>
            </article>
          ))}
        </div>
      </div>
    </section>
  );
}
