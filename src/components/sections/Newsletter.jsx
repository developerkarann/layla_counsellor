import { useState } from "react";

export default function Newsletter() {
  const [email, setEmail] = useState("");

  function handleSubmit(e) {
    e.preventDefault();
    if (email.trim()) setEmail("");
  }

  return (
    <section className="flex min-h-screen flex-col bg-reiki-bg-stripe px-4 py-10 md:px-6 md:py-12">
      <div className="mx-auto flex flex-1 px-20 flex-col justify-center">
        <div className="flex flex-col items-stretch gap-8 lg:flex-row lg:items-center lg:justify-between lg:gap-30 w-full">
          {/* Left: serif italic, dark grey, left-aligned, moderate size */}
          <p className="text-left font-serif text-base italic text-reiki-newsletter-text md:text-5xl leading-tight">
            Subscribe to our newsletter & be informed about news and offers
          </p>
          {/* Right: single bordered container with input + button */}
          <form
            onSubmit={handleSubmit}
            className="flex w-full max-w-md flex-row overflow-hidden border border-reiki-newsletter-border lg:max-w-[50%]"
          >
            <input
              type="email"
              placeholder="E-mail"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              className="min-w-0 flex-1 border-0 bg-transparent px-8 py-4 font-sans text-sm text-reiki-newsletter-text placeholder:text-reiki-newsletter-placeholder focus:outline-none  "
              aria-label="Email for newsletter"
            />
            <button
              type="submit"
              className="shrink-0 border-l border-reiki-newsletter-border  px-5 py-2.5 font-sans text-sm font-semibold uppercase tracking-wide text-reiki-newsletter-text transition hover:bg-reiki-section-alt/50"
            >
              Subscribe
            </button>
          </form>
        </div>
      </div>
    </section>
  );
}
