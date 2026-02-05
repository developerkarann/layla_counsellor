import { useState } from "react";

const NAV_LINKS = [
  { label: "HOME", href: "#home", active: true },
  { label: "ABOUT", href: "#about" },
  { label: "SERVICES", href: "#benefits" },
  { label: "CONTACT", href: "#contact" },
  { label: "BLOG", href: "#blog" },
];

export default function Header() {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  return (
    <header className=" top-0 z-50 w-full border-b border-l border-reiki-accent/60 bg-reiki-bg-stripe">
      {/* Top section: left = number + Get in touch, center = logo, right = number + Login */}
      <div className="mx-auto flex max-w-7xl items-center justify-between gap-2 sm:gap-4 px-4 py-3 md:px-6">
        <div className="flex items-center gap-4">

        </div>

        <a
          href="#home"
          className="absolute left-1/2 flex -translate-x-1/2 flex-col items-center font-script text-xl font-semibold text-reiki-dark sm:text-2xl md:text-4xl"
        >
          Layla
          <span className="mt-0.5 block h-px w-8 bg-reiki-dark/40" aria-hidden />
        </a>

        <div className="flex items-center gap-3">
          <a href="tel:+12345678900" className="hidden text-sm text-reiki-dark sm:block">
            +1 234 567 8900
          </a>
          <a
            href="#contact"
            className="hidden rounded bg-reiki-dark px-4 py-2 text-sm font-medium text-white transition hover:opacity-90 sm:block"
          >
            Get in touch
          </a>
          <button
            type="button"
            className="flex flex-col gap-1.5 p-2 md:hidden"
            onClick={() => setMobileMenuOpen((o) => !o)}
            aria-expanded={mobileMenuOpen}
            aria-label="Toggle menu"
          >
            <span className="block h-0.5 w-5 bg-reiki-dark" />
            <span className="block h-0.5 w-5 bg-reiki-dark" />
            <span className="block h-0.5 w-5 bg-reiki-dark" />
          </button>
        </div>
      </div>

      {/* Bottom section: centered nav links (desktop) */}
      <nav className="hidden border-t border-reiki-accent/40 md:block">
        <div className="mx-auto max-w-7xl px-4 py-3 md:px-6">
          <ul className="flex flex-wrap items-center justify-center gap-6 md:gap-8">
            {NAV_LINKS.map(({ label, href, active }) => (
              <li key={href}>
                <a
                  href={href}
                  className={`text-sm font-medium uppercase tracking-wide text-reiki-muted hover:text-reiki-dark ${active ? "border-b border-reiki-dark font-semibold text-reiki-dark" : ""
                    }`}
                >
                  {label}
                </a>
              </li>
            ))}
          </ul>
        </div>
      </nav>

      {mobileMenuOpen && (
        <div className="border-t border-reiki-accent/40 bg-reiki-bg-stripe px-4 py-4 md:hidden">
          <ul className="flex flex-col gap-3">
            {NAV_LINKS.map(({ label, href, active }) => (
              <li key={href}>
                <a
                  href={href}
                  onClick={() => setMobileMenuOpen(false)}
                  className={`block py-1 text-sm font-medium uppercase text-reiki-dark ${active ? "font-semibold" : ""}`}
                >
                  {label}
                </a>
              </li>
            ))}
          </ul>
        </div>
      )}
    </header>
  );
}
