const faqs = [
  {
    question: "Do I need to change the tools I already use?",
    answer:
      "Usually not. Most projects are built around your current forms, storage tools, and communication stack.",
  },
  {
    question: "How quickly can we get this running?",
    answer:
      "Most first implementations launch in 2–3 weeks, depending on scope and tool access.",
  },
  {
    question: "Is this secure?",
    answer:
      "Yes. Workflows are designed with secure access controls and practical data-handling safeguards.",
  },
  {
    question: "What does ‘AI’ do in these workflows?",
    answer:
      "AI helps summarize, structure, and route information so repetitive admin tasks are handled automatically.",
  },
  {
    question: "What does it cost?",
    answer:
      "Projects are scoped clearly upfront. Most implementations range from $2K to $10K based on complexity.",
  },
  {
    question: "Do you offer ongoing support?",
    answer:
      "Yes. Optional monthly support is available for maintenance, updates, and additional automations.",
  },
];

export function FaqSection() {
  return (
    <section id="faq" className="scroll-mt-24 py-16">
      <div className="section-wrap">
        <h2 className="text-3xl font-bold tracking-tight text-ink">FAQ</h2>
        <div className="mt-8 space-y-4">
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
              <p className="mt-3 text-slate">{faq.answer}</p>
            </details>
          ))}
        </div>
      </div>
    </section>
  );
}
