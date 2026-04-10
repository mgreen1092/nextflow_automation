export function FinalCtaSection({ onScheduleClick }) {
  return (
    <section id="book-demo" className="scroll-mt-24 section-divider py-16 sm:py-20">
      <div className="section-wrap">
        <div className="card p-8 text-center sm:p-12">
          <h2 className="mx-auto max-w-3xl text-balance text-2xl font-extrabold tracking-tight text-ink sm:text-3xl md:text-4xl">
            Stop letting revenue leak out of your schedule and collections process
          </h2>
          <p className="mx-auto mt-5 max-w-2xl text-slate">
            Book a short demo and we&apos;ll walk through how revenue recovery workflows
            and outbound calling could fit your practice—without a rip-and-replace of how
            you already operate.
          </p>
          <div className="mt-8 flex flex-col items-center justify-center gap-3 sm:flex-row sm:gap-4">
            <button type="button" onClick={onScheduleClick} className="cta-btn min-w-[200px]">
              Book a demo
            </button>
            <a href="#contact" className="secondary-btn min-w-[200px]">
              Talk to us
            </a>
          </div>
        </div>
      </div>
    </section>
  );
}
