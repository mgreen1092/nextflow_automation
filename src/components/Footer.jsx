export function Footer() {
  return (
    <footer className="border-t border-ink bg-ink py-10">
      <div className="section-wrap flex flex-col gap-6 text-sm text-soft-gray sm:flex-row sm:items-center sm:justify-between">
        <div>
          <p className="font-semibold text-soft-gray">hello@workflowspecialist.com</p>
          <p>Chicago, IL</p>
          <p className="mt-1">Workflow automation for busy professional teams.</p>
        </div>
        <div className="flex gap-4">
          <a href="#" className="text-accent hover:text-accent-light">
            LinkedIn
          </a>
          <a href="#" className="text-accent hover:text-accent-light">
            X
          </a>
          <a href="#" className="text-accent hover:text-accent-light">
            GitHub
          </a>
        </div>
      </div>
    </footer>
  );
}
