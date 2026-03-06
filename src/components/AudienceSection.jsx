const audienceItems = [
  "Private therapy practices",
  "Small clinics",
  "Consultants and small agencies",
  "Accounting / legal offices",
  "Other professional services with repetitive paperwork",
];

export function AudienceSection() {
  return (
    <section className="scroll-mt-24 py-16">
      <div className="section-wrap">
        <div className="card p-7 sm:p-10">
          <h2 className="text-3xl font-bold tracking-tight text-ink">
            Built for Busy Practices &amp; Professional Service Teams
          </h2>
          <ul className="mt-6 grid gap-3 text-slate sm:grid-cols-2">
            {audienceItems.map((item) => (
              <li key={item} className="rounded-xl border border-border bg-mist px-4 py-3">
                {item}
              </li>
            ))}
          </ul>
        </div>
      </div>
    </section>
  );
}
