const problems = [
  {
    title: "Too much paperwork",
    details: "PDFs, emailed forms, manual data entry",
    icon: (
      <svg viewBox="0 0 24 24" className="h-5 w-5" aria-hidden="true">
        <path
          fill="currentColor"
          d="M6 2h9l5 5v15a2 2 0 0 1-2 2H6a2 2 0 0 1-2-2V4a2 2 0 0 1 2-2zm8 1.5V8h4.5"
        />
      </svg>
    ),
  },
  {
    title: "Documentation taking hours",
    details: "Notes, summaries, reports",
    icon: (
      <svg viewBox="0 0 24 24" className="h-5 w-5" aria-hidden="true">
        <path
          fill="currentColor"
          d="M12 1a11 11 0 1 1 0 22a11 11 0 0 1 0-22zm1 5h-2v7l6 3l1-1.73l-5-2.52V6z"
        />
      </svg>
    ),
  },
  {
    title: "Documents scattered everywhere",
    details: "Info trapped in PDFs and inboxes",
    icon: (
      <svg viewBox="0 0 24 24" className="h-5 w-5" aria-hidden="true">
        <path
          fill="currentColor"
          d="M10 3h10v10h-2V6.41l-8.29 8.3l-1.42-1.42l8.3-8.29H10V3zM5 5h5v2H7v10h10v-3h2v5H5V5z"
        />
      </svg>
    ),
  },
];

export function ProblemsSection() {
  return (
    <section className="scroll-mt-24 py-16">
      <div className="section-wrap">
        <h2 className="text-3xl font-bold tracking-tight text-ink">
          If Any of This Sounds Familiar…
        </h2>
        <div className="mt-8 grid gap-5 md:grid-cols-3">
          {problems.map((problem) => (
            <article key={problem.title} className="card p-6">
              <div className="inline-flex rounded-lg bg-mist p-2 text-accent">
                {problem.icon}
              </div>
              <h3 className="mt-4 text-xl font-semibold text-ink">{problem.title}</h3>
              <p className="mt-3 text-slate">{problem.details}</p>
            </article>
          ))}
        </div>
        <p className="mt-7 text-lg font-medium text-slate">
          We design automation systems that handle these tasks automatically.
        </p>
      </div>
    </section>
  );
}
