const faqs = [
  {
    question: "Do we have to replace our practice management software?",
    answer:
      "No. We design around the systems you already use—PMS, phones, texting—and connect automation and calling without a rip-and-replace project.",
  },
  {
    question: "How does the AI outbound phone agent sound to patients?",
    answer:
      "Scripts and call flows are yours to approve. The goal is practical, professional outreach that matches your office—not a gimmicky experience.",
  },
  {
    question: "Is this HIPAA-conscious?",
    answer:
      "We structure workflows with healthcare-appropriate handling, minimum necessary access, and clear data paths. Specific BAA and vendor requirements are addressed during onboarding.",
  },
  {
    question: "What does implementation look like?",
    answer:
      "We start from your real lists and bottlenecks, then deploy workflows and calling in phases—typically on the order of a few weeks depending on scope and integrations.",
  },
  {
    question: "What kind of results can we expect?",
    answer:
      "Outcomes vary by practice size, payer mix, and how lists are maintained. We focus on measurable motion: booked visits, follow-up completion, and AR follow-through—not vague promises.",
  },
  {
    question: "Do you provide ongoing support?",
    answer:
      "Yes. After launch we can keep workflows tuned, expand lists, and adjust scripts as your practice evolves.",
  },
];

export function FaqSection() {
  return (
    <section id="faq" className="scroll-mt-24 border-t border-border bg-mist py-20 sm:py-24">
      <div className="section-wrap">
        <h2 className="text-3xl font-extrabold tracking-tight text-ink sm:text-4xl">FAQ</h2>
        <p className="mt-4 max-w-2xl text-slate">
          Straight answers on how revenue recovery automation and outbound calling fit real
          dental operations.
        </p>
        <div className="mt-10 space-y-4">
          {faqs.map((faq) => (
            <details key={faq.question} className="card group p-5">
              <summary className="cursor-pointer list-none pr-7 text-lg font-semibold text-ink">
                {faq.question}
                <span
                  aria-hidden="true"
                  className="float-right text-slate transition group-open:rotate-45"
                >
                  +
                </span>
              </summary>
              <p className="mt-3 text-sm leading-relaxed text-slate">{faq.answer}</p>
            </details>
          ))}
        </div>
      </div>
    </section>
  );
}
