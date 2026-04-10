const capabilities = [
  {
    title: "No-shows and last-minute openings",
    body: "Reach patients who missed appointments and get them back on the schedule.",
  },
  {
    title: "Unscheduled treatment",
    body: "Follow up on diagnosed treatment that never got booked—without adding front desk hours.",
  },
  {
    title: "Overdue hygiene and recall",
    body: "Contact patients who are due or past due for hygiene visits with a consistent cadence.",
  },
  {
    title: "Simple scheduling conversations",
    body: "Handle straightforward reschedule and booking flows so your team gets warm handoffs.",
  },
  {
    title: "Voicemail and SMS handoff",
    body: "Leave clear voicemails and trigger text follow-ups when that fits your office workflow.",
  },
];

const flowSteps = [
  {
    step: "1",
    title: "We pull a patient follow-up list",
    detail: "Synced from your priorities: no-shows, unscheduled treatment, recall, balances—how your practice already thinks about the work.",
  },
  {
    step: "2",
    title: "The agent calls patients automatically",
    detail: "Outbound calls run on a defined schedule and script your team approves. No surprise outreach.",
  },
  {
    step: "3",
    title: "Appointments and handoffs",
    detail: "Booked visits land on the calendar; everything else is routed so staff only handles real conversations.",
  },
];

const whyCare = [
  "More filled chairs without proportional calling time",
  "Less manual dialing and voicemail tag for front desk",
  "Follow-up that actually happens every week",
  "Production and collections opportunities surfaced consistently",
];

export function PhoneAgentSection() {
  return (
    <section id="ai-phone-agent" className="scroll-mt-24 section-divider py-16 sm:py-20">
      <div className="section-wrap">
        <div className="mx-auto max-w-3xl text-center">
          <p className="text-xs font-bold uppercase tracking-widest text-accent">
            Core service
          </p>
          <h2 className="mt-3 text-balance text-3xl font-extrabold tracking-tight text-ink sm:text-4xl">
            AI outbound phone agent for dental offices
          </h2>
          <p className="mt-5 text-lg leading-relaxed text-slate">
            A practical outbound layer for the follow-up work that already should be
            happening—so revenue stops stalling in the &ldquo;we&apos;ll call them
            later&rdquo; pile.
          </p>
        </div>

        <div className="mt-12 grid gap-4 sm:grid-cols-2 lg:grid-cols-3">
          {capabilities.slice(0, 3).map((c) => (
            <article key={c.title} className="card p-6">
              <h3 className="text-lg font-semibold text-ink">{c.title}</h3>
              <p className="mt-2 text-sm leading-relaxed text-slate">{c.body}</p>
            </article>
          ))}
        </div>
        <div className="mt-4 grid gap-4 sm:grid-cols-2">
          {capabilities.slice(3).map((c) => (
            <article key={c.title} className="card p-6">
              <h3 className="text-lg font-semibold text-ink">{c.title}</h3>
              <p className="mt-2 text-sm leading-relaxed text-slate">{c.body}</p>
            </article>
          ))}
        </div>

        <div className="mt-16 rounded-3xl border border-border bg-white p-8 shadow-card sm:p-10">
          <h3 className="text-center text-xl font-bold text-ink sm:text-2xl">
            What it looks like
          </h3>
          <ol className="mt-10 grid gap-8 md:grid-cols-3 md:gap-6">
            {flowSteps.map((s, i) => (
              <li key={s.step} className="relative text-center md:text-left">
                {i < flowSteps.length - 1 && (
                  <div
                    className="absolute left-1/2 top-10 hidden h-px w-full bg-gradient-to-r from-accent/40 to-transparent md:block md:left-[60%] md:w-[80%]"
                    aria-hidden
                  />
                )}
                <span className="inline-flex h-12 w-12 items-center justify-center rounded-2xl bg-accent text-lg font-extrabold text-white shadow-lg shadow-accent/25">
                  {s.step}
                </span>
                <h4 className="mt-4 text-lg font-semibold text-ink">{s.title}</h4>
                <p className="mt-2 text-sm leading-relaxed text-slate">{s.detail}</p>
              </li>
            ))}
          </ol>
        </div>

        <div className="section-dark mt-12 overflow-hidden rounded-3xl px-8 py-10 sm:px-10">
          <h3 className="text-lg font-bold text-white sm:text-xl">Why practices care</h3>
          <ul className="mt-6 grid gap-3 sm:grid-cols-2">
            {whyCare.map((line) => (
              <li key={line} className="flex items-start gap-3 text-sm text-light-gray">
                <span
                  className="mt-1.5 h-2 w-2 shrink-0 rounded-full bg-accent"
                  aria-hidden
                />
                {line}
              </li>
            ))}
          </ul>
        </div>
      </div>
    </section>
  );
}
