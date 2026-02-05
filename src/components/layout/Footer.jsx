const FOOTER_LINKS = [
  { label: "Home", href: "#home" },
  { label: "About", href: "#about" },
  { label: "What is Reiki?", href: "#what-is-reiki" },
  { label: "Blog", href: "#blog" },
  { label: "Contact", href: "#contact" },
];

export default function Footer() {
  return (
    <footer id="contact" className="bg-reiki-dark text-white">
      <div className="mx-auto max-w-7xl px-4 py-12 md:px-6 md:py-16">
        <div className="grid gap-10 md:grid-cols-2 lg:grid-cols-3">
          {/* Brand + description */}
          <div className="space-y-4">
            <a href="#home" className="font-script text-2xl font-semibold md:text-3xl">
              Reiki
            </a>
            <p className="text-sm leading-relaxed text-white/90">
              Reiki means Universal Life Force Energy. I am Jane and I&apos;ve been
              practicing Reiki for the last 12 years, offering healing and teaching at
              multiple levels. Proud member of IDHN.
            </p>
          </div>

          {/* Links */}
          <div>
            <h3 className="text-xs font-semibold uppercase tracking-wider text-white">
              Links
            </h3>
            <ul className="mt-4 space-y-2">
              {FOOTER_LINKS.map(({ label, href }) => (
                <li key={href}>
                  <a href={href} className="text-sm text-white/90 hover:text-white">
                    {label}
                  </a>
                </li>
              ))}
            </ul>
          </div>

          {/* Contact Us */}
          <div>
            <h3 className="text-xs font-semibold uppercase tracking-wider text-white">
              Contact Us
            </h3>
            <address className="mt-4 space-y-1 text-sm not-italic text-white/90">
              <p>Additon street 2, 84</p>
              <p>
                <a href="mailto:E-mail@mail.com" className="hover:text-white">
                  E-mail@mail.com
                </a>
              </p>
              <p>
                <a href="tel:+123457890" className="hover:text-white">
                  +1 2345 7890
                </a>
              </p>
              <p className="flex gap-3 pt-1">
                <a href="https://facebook.com" target="_blank" rel="noopener noreferrer" className="hover:text-white">FB</a>
                <a href="https://instagram.com" target="_blank" rel="noopener noreferrer" className="hover:text-white">IG</a>
                <a href="https://twitter.com" target="_blank" rel="noopener noreferrer" className="hover:text-white">WT</a>
              </p>
            </address>
          </div>
        </div>
      </div>
      <div className="border-t border-white/20 py-4 text-center text-sm text-white/80">
        © 2026 REIKI | All Rights Reserved
      </div>
    </footer>
  );
}
