export function Footer() {
  return (
    <footer className="border-t border-ink bg-ink py-10">
      <div className="section-wrap flex flex-col gap-8 text-sm text-soft-gray sm:flex-row sm:items-start sm:justify-between">
        <div>
          <p className="text-base font-bold text-white">NextFlow Automation</p>
          <p className="mt-2 max-w-md">
            Revenue recovery workflows and AI outbound calling for dental practices—without
            adding headcount.
          </p>
          <a
            href="mailto:nextflowautomation.ai@gmail.com"
            className="mt-4 inline-block font-semibold text-accent hover:text-accent-light"
          >
            nextflowautomation.ai@gmail.com
          </a>
          <p>Chicago, IL</p>
        </div>
        <div className="flex flex-wrap gap-6">
          <a href="#services" className="text-accent hover:text-accent-light">
            Services
          </a>
          <a href="#ai-phone-agent" className="text-accent hover:text-accent-light">
            AI phone agent
          </a>
          <a href="#contact" className="text-accent hover:text-accent-light">
            Contact
          </a>
          <a href="#" className="text-accent hover:text-accent-light">
            LinkedIn
          </a>
        </div>
      </div>
      <div className="section-wrap mt-10 border-t border-white/10 pt-8 text-xs text-soft-gray/80">
        <p>
          HIPAA-conscious workflows; covered entities should complete appropriate agreements
          with vendors as part of implementation.
        </p>
      </div>
    </footer>
  );
}
