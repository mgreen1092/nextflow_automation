export function ExampleWorkflowSection() {
  return (
    <section id="example-automation" className="scroll-mt-24 py-16">
      <div className="section-wrap">
        <h2 className="text-3xl font-bold tracking-tight text-ink">
          Example: Client Intake Automation
        </h2>
        <div className="card mt-8 p-7 sm:p-10">
          <div className="mx-auto max-w-xl rounded-2xl border border-border bg-white p-6 text-center">
            <p className="font-medium text-ink">Client fills out intake form</p>
            <p className="my-3 text-2xl text-accent" aria-hidden="true">
              ↓
            </p>
            <p className="font-medium text-ink">AI summarizes key information</p>
            <p className="my-3 text-2xl text-accent" aria-hidden="true">
              ↓
            </p>
            <p className="font-medium text-ink">Welcome email automatically sent</p>
            <p className="my-3 text-2xl text-accent" aria-hidden="true">
              ↓
            </p>
            <p className="font-medium text-ink">
              Client record created in organized storage
            </p>
          </div>
          <ul className="mx-auto mt-8 grid max-w-3xl gap-3 text-slate sm:grid-cols-3">
            <li className="rounded-xl border border-border bg-white px-4 py-3 text-center">
              No manual copy/paste
            </li>
            <li className="rounded-xl border border-border bg-white px-4 py-3 text-center">
              Faster onboarding
            </li>
            <li className="rounded-xl border border-border bg-white px-4 py-3 text-center">
              Less admin time
            </li>
          </ul>
        </div>
      </div>
    </section>
  );
}
