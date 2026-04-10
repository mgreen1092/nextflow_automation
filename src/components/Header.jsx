import { useState, useEffect, useRef } from "react";

const mainNavItems = [
  { label: "Services", href: "#services" },
  { label: "AI phone agent", href: "#ai-phone-agent" },
  { label: "How it works", href: "#how-it-works" },
];

const moreNavItems = [
  { label: "Outcomes", href: "#outcomes" },
  { label: "Who it's for", href: "#ideal-fit" },
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
          <a href="#top" className="shrink-0" aria-label="NextFlow Automation home">
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
                  className="absolute right-0 top-full z-50 mt-2 min-w-[220px] rounded-xl border border-white/[0.08] py-2 shadow-xl"
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

          <div className="flex items-center gap-4">
            <button
              onClick={onScheduleClick}
              className="cta-btn hidden lg:inline-flex"
              type="button"
            >
              Book a demo
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

      <div
        id="mobile-drawer"
        className={`fixed top-20 right-0 bottom-0 z-40 w-full max-w-sm border-l border-slate-800 bg-slate-950 transition-transform duration-300 ease-out lg:hidden ${
          mobileOpen ? "translate-x-0" : "translate-x-full"
        }`}
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
            Book a demo
          </button>
          <nav
            className="mt-6 flex flex-col gap-2 rounded-2xl bg-slate-950 p-2"
            aria-label="Mobile navigation"
          >
            {allNavItems.map((item) => (
              <a
                key={item.href}
                href={item.href}
                onClick={handleNavClick}
                className={`rounded-lg border border-slate-700 bg-slate-900 px-4 py-3 text-sm font-semibold text-white transition-colors hover:border-accent/60 hover:bg-slate-800 hover:text-accent ${
                  activeHash === item.href
                    ? "border-accent bg-slate-800 text-accent"
                    : ""
                }`}
              >
                {item.label}
              </a>
            ))}
          </nav>
        </div>
      </div>

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
