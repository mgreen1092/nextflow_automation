import { useState, useEffect, useRef } from "react";

const mainNavItems = [
  { label: "Services", href: "#services" },
  { label: "How it Works", href: "#how-it-works" },
];

const moreNavItems = [
  { label: "Example Automation", href: "#example-automation" },
  { label: "About", href: "#about" },
  { label: "FAQ", href: "#faq" },
  { label: "Contact", href: "#contact" },
];

const allNavItems = [...mainNavItems, ...moreNavItems];

export function Header({ onScheduleClick }) {
  const [mobileOpen, setMobileOpen] = useState(false);
  const [moreOpen, setMoreOpen] = useState(false);
  const [activeHash, setActiveHash] = useState("");
  const [logoError, setLogoError] = useState(false);
  const moreRef = useRef(null);

  useEffect(() => {
    setActiveHash(window.location.hash || "#top");
    const onHashChange = () => setActiveHash(window.location.hash || "#top");
    window.addEventListener("hashchange", onHashChange);
    return () => window.removeEventListener("hashchange", onHashChange);
  }, []);

  useEffect(() => {
    if (!moreOpen) return;
    const handleClickOutside = (e) => {
      if (moreRef.current && !moreRef.current.contains(e.target)) {
        setMoreOpen(false);
      }
    };
    document.addEventListener("click", handleClickOutside);
    return () => document.removeEventListener("click", handleClickOutside);
  }, [moreOpen]);

  const handleNavClick = () => {
    setMobileOpen(false);
    setMoreOpen(false);
  };

  return (
    <header
      className="site-header fixed inset-x-0 top-0 z-50 border-b border-white/[0.08] backdrop-blur-[10px]"
      style={{ background: "rgba(15,23,42,0.85)" }}
    >
      <div className="mx-auto flex h-20 max-w-[1200px] items-center justify-between px-6 py-4 sm:px-8">
        <nav
          className="flex w-full items-center justify-between gap-6 lg:justify-start"
          aria-label="Primary navigation"
        >
          {/* Left: Logo */}
          <a
            href="#top"
            className="shrink-0"
            aria-label="NextFlow Automation"
          >
            {!logoError ? (
              <img
                src="/nextflow-logo.png"
                alt="NextFlow Automation"
                className="h-10 w-auto sm:h-11"
                onError={() => setLogoError(true)}
              />
            ) : (
              <span className="text-sm font-extrabold tracking-tight text-white">
                NextFlow Automation
              </span>
            )}
          </a>

          {/* Desktop: Main nav + More dropdown + CTA */}
          <div className="hidden flex-1 items-center justify-end gap-6 lg:flex">
            {mainNavItems.map((item) => (
              <a
                key={item.href}
                href={item.href}
                className={`text-sm font-medium text-white transition-colors hover:text-accent ${
                  activeHash === item.href ? "text-accent" : ""
                }`}
              >
                {item.label}
              </a>
            ))}

            {/* More dropdown */}
            <div className="relative" ref={moreRef}>
              <button
                type="button"
                onClick={() => setMoreOpen((prev) => !prev)}
                className="flex items-center gap-1 text-sm font-medium text-white transition-colors hover:text-accent"
                aria-expanded={moreOpen}
                aria-haspopup="true"
                aria-controls="more-menu"
              >
                More
                <span
                  className={`inline-block transition-transform ${moreOpen ? "rotate-180" : ""}`}
                  aria-hidden
                >
                  ▾
                </span>
              </button>
              {moreOpen && (
                <div
                  id="more-menu"
                  role="menu"
                  className="absolute right-0 top-full z-50 mt-2 min-w-[200px] rounded-xl border border-white/[0.08] py-2 shadow-xl"
                  style={{
                    background: "rgba(15,23,42,0.98)",
                    boxShadow: "0 20px 40px rgba(0,0,0,0.25)",
                  }}
                >
                  {moreNavItems.map((item) => (
                    <a
                      key={item.href}
                      href={item.href}
                      role="menuitem"
                      onClick={handleNavClick}
                      className={`block px-5 py-3 text-sm font-medium text-white transition-colors first:pt-3 last:pb-3 hover:bg-white/5 hover:text-accent ${
                        activeHash === item.href ? "bg-white/5 text-accent" : ""
                      }`}
                    >
                      {item.label}
                    </a>
                  ))}
                </div>
              )}
            </div>
          </div>

          {/* Right: CTA + mobile hamburger */}
          <div className="flex items-center gap-4">
            <button
              onClick={onScheduleClick}
              className="cta-btn hidden lg:inline-flex"
              type="button"
            >
              Schedule Free Workflow Review
            </button>
            <button
              type="button"
              className="rounded-lg border border-white/25 p-2 lg:hidden"
              onClick={() => setMobileOpen((prev) => !prev)}
              aria-expanded={mobileOpen}
              aria-controls="mobile-drawer"
              aria-label="Toggle menu"
            >
              <span className="block h-0.5 w-5 bg-white" />
              <span className="mt-1.5 block h-0.5 w-5 bg-white" />
              <span className="mt-1.5 block h-0.5 w-5 bg-white" />
            </button>
          </div>
        </nav>
      </div>

      {/* Mobile: Slide-over drawer */}
      <div
        id="mobile-drawer"
        className={`fixed top-20 right-0 bottom-0 z-40 w-full max-w-sm border-l border-white/[0.08] transition-transform duration-300 ease-out lg:hidden ${
          mobileOpen ? "translate-x-0" : "translate-x-full"
        }`}
        style={{ background: "rgba(15,23,42,0.98)" }}
        aria-hidden={!mobileOpen}
      >
        <div className="flex flex-col gap-1 p-6">
          <button
            onClick={() => {
              setMobileOpen(false);
              onScheduleClick();
            }}
            className="cta-btn w-full"
            type="button"
          >
            Schedule Free Workflow Review
          </button>
          <nav className="mt-6 flex flex-col gap-1" aria-label="Mobile navigation">
            {allNavItems.map((item) => (
              <a
                key={item.href}
                href={item.href}
                onClick={handleNavClick}
                className={`rounded-lg px-4 py-3 text-sm font-medium text-white transition-colors hover:bg-white/5 hover:text-accent ${
                  activeHash === item.href ? "bg-white/5 text-accent" : ""
                }`}
              >
                {item.label}
              </a>
            ))}
          </nav>
        </div>
      </div>

      {/* Mobile: Backdrop when drawer is open */}
      {mobileOpen && (
        <button
          type="button"
          className="fixed top-20 right-0 bottom-0 left-0 z-30 bg-black/40 lg:hidden"
          onClick={() => setMobileOpen(false)}
          aria-label="Close menu"
        />
      )}
    </header>
  );
}
