const problems = [
  {
    title: "Underworked insurance claims",
    details:
      "Claims sit in limbo, attachments are missing, and follow-up does not keep pace with production.",
    icon: (
      <svg viewBox="0 0 24 24" className="h-5 w-5" aria-hidden="true">
        <path
          fill="currentColor"
          d="M19 3H5c-1.1 0-2 .9-2 2v14c0 1.1.9 2 2 2h14c1.1 0 2-.9 2-2V5c0-1.1-.9-2-2-2zm-7 14H7v-2h5v2zm5-4H7v-2h10v2zm0-4H7V7h10v2z"
        />
      </svg>
    ),
  },
  {
    title: "No-shows that never get rebooked",
    details:
      "Openings go unfilled because outbound calling is the first thing cut when the front desk is underwater.",
    icon: (
      <svg viewBox="0 0 24 24" className="h-5 w-5" aria-hidden="true">
        <path
          fill="currentColor"
          d="M11.99 2C6.47 2 2 6.48 2 12s4.47 10 9.99 10C17.52 22 22 17.52 22 12S17.52 2 11.99 2zM12 20c-4.42 0-8-3.58-8-8s3.58-8 8-8s8 3.58 8 8s-3.58 8-8 8zm.5-13H11v6l5.25 3.15l.75-1.23l-4.5-2.67z"
        />
      </svg>
    ),
  },
  {
    title: "Unscheduled treatment plans",
    details:
      "Diagnosed care stays in the chart while patients need a clear, persistent nudge to book.",
    icon: (
      <svg viewBox="0 0 24 24" className="h-5 w-5" aria-hidden="true">
        <path
          fill="currentColor"
          d="M14 2H6c-1.1 0-1.99.9-1.99 2L4 20c0 1.1.89 2 1.99 2H18c1.1 0 2-.9 2-2V8l-6-6zm2 16H8v-2h8v2zm0-4H8v-2h8v2zm-3-5V3.5L18.5 9H13z"
        />
      </svg>
    ),
  },
  {
    title: "Inactive patients who drift away",
    details:
      "Recall lists grow while reactivation campaigns never get past good intentions.",
    icon: (
      <svg viewBox="0 0 24 24" className="h-5 w-5" aria-hidden="true">
        <path
          fill="currentColor"
          d="M16 11c1.66 0 2.99-1.34 2.99-3S17.66 5 16 5s-3 1.34-3 3s1.34 3 3 3zm-8 0c1.66 0 2.99-1.34 2.99-3S9.66 5 8 5S5 6.34 5 8s1.34 3 3 3zm0 2c-2.33 0-7 1.17-7 3.5V19h14v-2.5c0-2.33-4.67-3.5-7-3.5zm8 0c-.29 0-.62.02-.97.05c1.16.84 1.97 1.97 1.97 3.45V19h6v-2.5c0-2.33-4.67-3.5-7-3.5z"
        />
      </svg>
    ),
  },
  {
    title: "Front desk overloaded with follow-up",
    details:
      "Phones, check-in, and insurance calls crowd out the outbound list that drives production.",
    icon: (
      <svg viewBox="0 0 24 24" className="h-5 w-5" aria-hidden="true">
        <path
          fill="currentColor"
          d="M6.62 10.79c1.44 2.83 3.76 5.14 6.59 6.59l2.2-2.2c.27-.27.67-.36 1.02-.24c1.12.37 2.33.57 3.57.57c.55 0 1 .45 1 1V20c0 .55-.45 1-1 1c-9.39 0-17-7.61-17-17c0-.55.45-1 1-1h3.5c.55 0 1 .45 1 1c0 1.25.2 2.45.57 3.57c.11.35.03.74-.25 1.02l-2.2 2.2z"
        />
      </svg>
    ),
  },
  {
    title: "Outstanding balances not consistently pursued",
    details:
      "Statements go out, but friendly, steady outreach—call, voicemail, text—is hard to sustain.",
    icon: (
      <svg viewBox="0 0 24 24" className="h-5 w-5" aria-hidden="true">
        <path
          fill="currentColor"
          d="M11.8 10.9c-2.27-.59-3-1.2-3-2.15c0-1.09 1.01-1.85 2.7-1.85c1.78 0 2.44.85 2.5 2.1h2.21c-.07-1.72-1.12-3.3-3.21-3.81V3h-3v2.16c-1.94.42-3.5 1.68-3.5 3.61c0 2.31 1.91 3.46 4.7 4.13c2.5.6 3 1.48 3 2.41c0 .69-.49 1.79-2.7 1.79c-2.06 0-2.87-.92-2.98-2.1h-2.2c.12 2.19 1.76 3.42 3.68 3.83V21h3v-2.15c1.95-.37 3.5-1.5 3.5-3.55c0-2.84-2.43-3.81-4.7-4.4z"
        />
      </svg>
    ),
  },
];

export function ProblemsSection() {
  return (
    <section id="problems" className="scroll-mt-24 py-20 sm:py-24">
      <div className="section-wrap">
        <h2 className="max-w-3xl text-3xl font-extrabold tracking-tight text-ink sm:text-4xl">
          Revenue slips through the cracks in dental practices every day
        </h2>
        <p className="mt-4 max-w-2xl text-lg text-slate">
          These are the patterns we hear from owners and office managers—not edge cases,
          but everyday leaks that add up across the schedule and the ledger.
        </p>
        <div className="mt-12 grid gap-5 sm:grid-cols-2 lg:grid-cols-3">
          {problems.map((problem) => (
            <article key={problem.title} className="card p-6">
              <div className="inline-flex rounded-xl bg-accent/10 p-2.5 text-accent">
                {problem.icon}
              </div>
              <h3 className="mt-4 text-lg font-semibold text-ink">{problem.title}</h3>
              <p className="mt-3 text-sm leading-relaxed text-slate">{problem.details}</p>
            </article>
          ))}
        </div>
      </div>
    </section>
  );
}
