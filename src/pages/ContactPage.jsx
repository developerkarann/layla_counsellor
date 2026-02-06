import { useState } from "react";
import { FaInstagram, FaFacebookF, FaYoutube, FaTelegram } from "react-icons/fa";
import { FaXTwitter } from "react-icons/fa6";
import LotusSectionIcon from "../components/LotusSectionIcon";

const HERO_IMAGE = "/slide3.JPG";

const CONTACT_METHODS = [
  {
    title: "Email",
    description: "For inquiries, bookings, or a first hello.",
    value: "E-mail@mail.com",
    href: "mailto:E-mail@mail.com",
    icon: "✉",
  },
  {
    title: "Phone",
    description: "Prefer to talk? Leave a message and I’ll call back.",
    value: "+1 234 567 8900",
    href: "tel:+12345678900",
    icon: "☎",
  },
  {
    title: "Location",
    description: "In-person sessions by appointment.",
    value: "Addition Street 2, 84",
    href: null,
    icon: "◉",
  },
];

const INTEREST_OPTIONS = [
  "Reiki & Energy Healing",
  "Holistic Coaching",
  "TCK & Cross-Cultural Support",
  "Shamanic Healing",
  "Medical Qigong",
  "General inquiry",
];

const FAQ_ITEMS = [
  {
    q: "How soon will I hear back?",
    a: "I aim to respond within 24–48 hours. If your message is urgent, please mention it and I’ll do my best to reply sooner.",
  },
  {
    q: "Do you offer online sessions?",
    a: "Yes. Many sessions can be held online via video call. We can discuss what works best for you when you get in touch.",
  },
  {
    q: "Where do in-person sessions take place?",
    a: "In-person sessions are held at my practice on Addition Street. The exact address and directions are sent after booking.",
  },
  {
    q: "Is there a fee for an initial consultation?",
    a: "The first conversation is often a short discovery call at no charge, so we can see if we’re a good fit. Details are shared when you reach out.",
  },
];

const OFFICE_HOURS = [
  { day: "Monday – Friday", time: "9:00 – 18:00" },
  { day: "Saturday", time: "By appointment" },
  { day: "Sunday", time: "Closed" },
];

export default function ContactPage() {
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [subject, setSubject] = useState("");
  const [interest, setInterest] = useState("");
  const [message, setMessage] = useState("");
  const [openFaq, setOpenFaq] = useState(null);

  function handleSubmit(e) {
    e.preventDefault();
    // Placeholder: in real app would send to backend
    setName("");
    setEmail("");
    setSubject("");
    setInterest("");
    setMessage("");
  }

  return (
    <main className="min-h-screen bg-page-bg">
      {/* Hero – face visible and centered */}
      <section className="relative min-h-[50vh] sm:min-h-[55vh] md:min-h-[60vh] flex items-end justify-center overflow-hidden">
        <img
          src={HERO_IMAGE}
          alt=""
          className="absolute inset-0 h-full w-full object-cover object-[50%_28%]"
        />
        <div className="absolute inset-0 bg-gradient-to-b from-reiki-dark/20 via-reiki-dark/45 to-reiki-dark/78" aria-hidden />
        <div className="relative z-10 w-full max-w-7xl px-4 pb-16 pt-24 sm:pb-20 md:pb-24 text-center">
          <div className="inline-flex flex-col items-center">
            <span className="font-script text-2xl text-white/90 sm:text-3xl" style={{ fontFamily: "Dancing Script" }}>Layla</span>
            <span className="mt-1 block h-px w-12 bg-white/60" aria-hidden />
          </div>
          <h1 className="mt-4 font-garamond text-4xl font-normal text-white sm:text-5xl md:text-6xl lg:text-7xl" style={{ fontFamily: "EB Garamond" }}>
            Contact
          </h1>
          <p className="mt-4 font-lato text-base text-white/90 sm:text-lg md:text-xl max-w-xl mx-auto">
            Every conversation starts with a single step. I’m here when you’re ready.
          </p>
        </div>
      </section>

      {/* Invitation */}
      <section className="bg-reiki-bg-stripe border-y border-reiki-accent/40 py-12 md:py-16">
        <div className="mx-auto max-w-3xl px-4 text-center">
          <p className="font-serif text-lg italic text-reiki-quote sm:text-xl md:text-2xl leading-relaxed" style={{ fontFamily: "Lora" }}>
            “Reaching out takes courage. Whether you’re curious about a first session, have a question, or simply want to say hello—this is a safe space. No pressure, no judgment.”
          </p>
        </div>
      </section>

      {/* Ways to connect – cards */}
      <section className="bg-white px-4 py-12 md:py-16 lg:py-20">
        <LotusSectionIcon />
        <div className="mx-auto max-w-7xl">
          <h2 className="font-garamond text-center text-2xl text-reiki-dark sm:text-3xl md:text-4xl" style={{ fontFamily: "EB Garamond" }}>
            Ways to <span className="text-reiki-olive">connect</span>
          </h2>
          <p className="mt-3 font-lato text-center text-reiki-body max-w-2xl mx-auto">
            Choose what feels right for you—email, phone, or the form below.
          </p>
          <div className="mt-10 grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
            {CONTACT_METHODS.map((method) => (
              <div
                key={method.title}
                className="rounded-2xl border border-reiki-card-border bg-reiki-section p-6 sm:p-8 shadow-sm transition-shadow hover:shadow-md"
              >
                <span className="flex h-12 w-12 items-center justify-center rounded-full bg-reiki-accent text-xl text-reiki-dark" aria-hidden>
                  {method.icon}
                </span>
                <h3 className="mt-4 font-garamond text-xl text-reiki-dark" style={{ fontFamily: "EB Garamond" }}>{method.title}</h3>
                <p className="mt-2 font-lato text-sm text-reiki-body">{method.description}</p>
                {method.href ? (
                  <a href={method.href} className="mt-4 inline-block font-lato text-sm font-semibold text-reiki-dark hover:text-reiki-olive transition-colors">
                    {method.value}
                  </a>
                ) : (
                  <p className="mt-4 font-lato text-sm font-medium text-reiki-dark">{method.value}</p>
                )}
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Contact form – main block */}
      <section id="contact-message" className="bg-reiki-bg-stripe px-4 py-12 md:py-16 lg:py-20 scroll-mt-20">
        <div className="mx-auto max-w-3xl">
          <h2 className="font-garamond text-center text-2xl text-reiki-dark sm:text-3xl md:text-4xl" style={{ fontFamily: "EB Garamond" }}>
            Send a <span className="text-reiki-olive">message</span>
          </h2>
          <p className="mt-3 font-lato text-center text-reiki-body">
            Fill in the form below and I’ll get back to you as soon as I can.
          </p>
          <form onSubmit={handleSubmit} className="mt-10 rounded-2xl border border-reiki-card-border bg-reiki-section p-6 sm:p-8 md:p-10 shadow-sm">
            <div className="grid gap-6 sm:grid-cols-2">
              <div>
                <label htmlFor="contact-name" className="block font-lato text-sm font-medium text-reiki-dark">Name *</label>
                <input
                  id="contact-name"
                  type="text"
                  required
                  value={name}
                  onChange={(e) => setName(e.target.value)}
                  className="mt-2 w-full rounded-lg border border-reiki-card-border bg-white px-4 py-3 font-lato text-reiki-text placeholder:text-reiki-muted focus:border-reiki-olive focus:outline-none focus:ring-1 focus:ring-reiki-olive"
                  placeholder="Your name"
                />
              </div>
              <div>
                <label htmlFor="contact-email" className="block font-lato text-sm font-medium text-reiki-dark">Email *</label>
                <input
                  id="contact-email"
                  type="email"
                  required
                  value={email}
                  onChange={(e) => setEmail(e.target.value)}
                  className="mt-2 w-full rounded-lg border border-reiki-card-border bg-white px-4 py-3 font-lato text-reiki-text placeholder:text-reiki-muted focus:border-reiki-olive focus:outline-none focus:ring-1 focus:ring-reiki-olive"
                  placeholder="your@email.com"
                />
              </div>
            </div>
            <div className="mt-6">
              <label htmlFor="contact-subject" className="block font-lato text-sm font-medium text-reiki-dark">Subject</label>
              <input
                id="contact-subject"
                type="text"
                value={subject}
                onChange={(e) => setSubject(e.target.value)}
                className="mt-2 w-full rounded-lg border border-reiki-card-border bg-white px-4 py-3 font-lato text-reiki-text placeholder:text-reiki-muted focus:border-reiki-olive focus:outline-none focus:ring-1 focus:ring-reiki-olive"
                placeholder="What is this regarding?"
              />
            </div>
            <div className="mt-6">
              <label htmlFor="contact-interest" className="block font-lato text-sm font-medium text-reiki-dark">I’m interested in</label>
              <select
                id="contact-interest"
                value={interest}
                onChange={(e) => setInterest(e.target.value)}
                className="mt-2 w-full rounded-lg border border-reiki-card-border bg-white px-4 py-3 font-lato text-reiki-text focus:border-reiki-olive focus:outline-none focus:ring-1 focus:ring-reiki-olive"
              >
                <option value="">Select an option</option>
                {INTEREST_OPTIONS.map((opt) => (
                  <option key={opt} value={opt}>{opt}</option>
                ))}
              </select>
            </div>
            <div className="mt-6">
              <label htmlFor="contact-message" className="block font-lato text-sm font-medium text-reiki-dark">Message *</label>
              <textarea
                id="contact-message"
                required
                rows={5}
                value={message}
                onChange={(e) => setMessage(e.target.value)}
                className="mt-2 w-full rounded-lg border border-reiki-card-border bg-white px-4 py-3 font-lato text-reiki-text placeholder:text-reiki-muted focus:border-reiki-olive focus:outline-none focus:ring-1 focus:ring-reiki-olive resize-y"
                placeholder="Tell me a little about what brings you here…"
              />
            </div>
            <div className="mt-8">
              <button
                type="submit"
                className="w-full rounded-lg bg-reiki-dark px-6 py-4 font-sans text-sm font-semibold text-white transition hover:opacity-90 sm:w-auto sm:px-10"
              >
                Send message
              </button>
            </div>
          </form>
        </div>
      </section>

      {/* What to expect */}
      <section className="bg-white px-4 py-12 md:py-16">
        <div className="mx-auto max-w-4xl">
          <h2 className="font-garamond text-center text-2xl text-reiki-dark sm:text-3xl" style={{ fontFamily: "EB Garamond" }}>
            What to <span className="text-reiki-olive">expect</span>
          </h2>
          <div className="mt-10 grid gap-6 sm:grid-cols-3">
            <div className="rounded-xl border border-reiki-card-border bg-reiki-section p-6 text-center">
              <span className="text-2xl text-reiki-olive" aria-hidden>1</span>
              <h3 className="mt-3 font-garamond text-lg text-reiki-dark" style={{ fontFamily: "EB Garamond" }}>You reach out</h3>
              <p className="mt-2 font-lato text-sm text-reiki-body">Send a message or call. There’s no commitment—just a first hello.</p>
            </div>
            <div className="rounded-xl border border-reiki-card-border bg-reiki-section p-6 text-center">
              <span className="text-2xl text-reiki-olive" aria-hidden>2</span>
              <h3 className="mt-3 font-garamond text-lg text-reiki-dark" style={{ fontFamily: "EB Garamond" }}>I reply</h3>
              <p className="mt-2 font-lato text-sm text-reiki-body">Within 24–48 hours I’ll respond and we can arrange a short call or session.</p>
            </div>
            <div className="rounded-xl border border-reiki-card-border bg-reiki-section p-6 text-center">
              <span className="text-2xl text-reiki-olive" aria-hidden>3</span>
              <h3 className="mt-3 font-garamond text-lg text-reiki-dark" style={{ fontFamily: "EB Garamond" }}>We connect</h3>
              <p className="mt-2 font-lato text-sm text-reiki-body">We’ll find a time that works and take the next step together.</p>
            </div>
          </div>
        </div>
      </section>

      {/* FAQ */}
      <section className="bg-reiki-bg-stripe border-y border-reiki-accent/40 px-4 py-12 md:py-16 lg:py-20">
        <div className="mx-auto max-w-3xl">
          <h2 className="font-garamond text-center text-2xl text-reiki-dark sm:text-3xl" style={{ fontFamily: "EB Garamond" }}>
            Common <span className="text-reiki-olive">questions</span>
          </h2>
          <div className="mt-10 space-y-3">
            {FAQ_ITEMS.map((item, i) => (
              <div
                key={i}
                className="rounded-xl border border-reiki-card-border bg-reiki-section overflow-hidden"
              >
                <button
                  type="button"
                  onClick={() => setOpenFaq(openFaq === i ? null : i)}
                  className="flex w-full items-center justify-between p-5 text-left font-lato text-reiki-dark hover:bg-reiki-accent/20 transition-colors"
                >
                  <span className="font-medium pr-4">{item.q}</span>
                  <span className="shrink-0 text-reiki-olive">{openFaq === i ? "−" : "+"}</span>
                </button>
                {openFaq === i && (
                  <div className="border-t border-reiki-card-border px-5 py-4">
                    <p className="font-lato text-sm text-reiki-body leading-relaxed">{item.a}</p>
                  </div>
                )}
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Find us / Location + Hours */}
      <section className="bg-white px-4 py-12 md:py-16">
        <div className="mx-auto max-w-6xl">
          <div className="grid gap-8 lg:grid-cols-2">
            <div className="rounded-2xl border border-reiki-card-border bg-reiki-section p-6 sm:p-8">
              <h2 className="font-garamond text-xl text-reiki-dark sm:text-2xl" style={{ fontFamily: "EB Garamond" }}>
                Find <span className="text-reiki-olive">us</span>
              </h2>
              <p className="mt-3 font-lato text-reiki-body">
                In-person sessions are held at a calm, private space. Full address and directions are shared when you book.
              </p>
              <p className="mt-4 font-lato font-medium text-reiki-dark">Addition Street 2, 84</p>
              <div className="mt-6 aspect-[2/1] rounded-xl bg-reiki-bg-stripe border border-reiki-card-border flex items-center justify-center">
                <span className="font-lato text-sm text-reiki-muted">Map placeholder</span>
              </div>
            </div>
            <div className="rounded-2xl border border-reiki-card-border bg-reiki-section p-6 sm:p-8 flex flex-col">
              <h2 className="font-garamond text-xl text-reiki-dark sm:text-2xl" style={{ fontFamily: "EB Garamond" }}>
                <span className="text-reiki-olive">Availability</span>
              </h2>
              <p className="mt-3 font-lato text-sm text-reiki-body">
                General opening hours. Sessions are by appointment—get in touch to find a slot that works for you.
              </p>
              <div className="mt-6 flex-1">
                <ul className="space-y-4">
                  {OFFICE_HOURS.map((row) => (
                    <li key={row.day} className="flex items-center justify-between gap-4 py-3 border-b border-reiki-card-border last:border-0 last:pb-0 first:pt-0">
                      <span className="font-lato font-medium text-reiki-dark">{row.day}</span>
                      <span className="font-lato text-sm text-reiki-body shrink-0">{row.time}</span>
                    </li>
                  ))}
                </ul>
                <p className="mt-6 font-lato text-xs text-reiki-muted italic">
                  All times are flexible by prior arrangement. Weekend and evening slots may be available on request.
                </p>
                <a
                  href="#contact-message"
                  className="mt-6 inline-flex items-center justify-center rounded-lg bg-reiki-dark px-5 py-2.5 font-lato text-sm font-semibold text-white transition hover:opacity-90"
                >
                  Request a time
                </a>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Social + closing */}
      <section className="bg-reiki-bg-stripe border-t border-reiki-accent/40 px-4 py-12 md:py-16">
        <div className="mx-auto max-w-2xl text-center">
          <h2 className="font-garamond text-xl text-reiki-dark sm:text-2xl" style={{ fontFamily: "EB Garamond" }}>
            Connect on <span className="text-reiki-olive">social</span>
          </h2>
          <p className="mt-3 font-lato text-sm text-reiki-body">
            Occasional updates, reflections, and a gentle presence online.
          </p>
          <div className="mt-6 flex flex-wrap justify-center gap-3 sm:gap-4">
            <a href="https://instagram.com" target="_blank" rel="noopener noreferrer" className="flex h-12 w-12 items-center justify-center rounded-full border-2 border-reiki-card-border bg-reiki-section text-reiki-dark hover:border-reiki-olive hover:text-reiki-olive hover:bg-reiki-olive/10 transition-colors" aria-label="Instagram">
              <FaInstagram className="text-xl" />
            </a>
            <a href="https://facebook.com" target="_blank" rel="noopener noreferrer" className="flex h-12 w-12 items-center justify-center rounded-full border-2 border-reiki-card-border bg-reiki-section text-reiki-dark hover:border-reiki-olive hover:text-reiki-olive hover:bg-reiki-olive/10 transition-colors" aria-label="Facebook">
              <FaFacebookF className="text-xl" />
            </a>
            <a href="https://x.com" target="_blank" rel="noopener noreferrer" className="flex h-12 w-12 items-center justify-center rounded-full border-2 border-reiki-card-border bg-reiki-section text-reiki-dark hover:border-reiki-olive hover:text-reiki-olive hover:bg-reiki-olive/10 transition-colors" aria-label="X (Twitter)">
              <FaXTwitter className="text-xl" />
            </a>
            <a href="https://youtube.com" target="_blank" rel="noopener noreferrer" className="flex h-12 w-12 items-center justify-center rounded-full border-2 border-reiki-card-border bg-reiki-section text-reiki-dark hover:border-reiki-olive hover:text-reiki-olive hover:bg-reiki-olive/10 transition-colors" aria-label="YouTube">
              <FaYoutube className="text-xl" />
            </a>
            <a href="https://t.me" target="_blank" rel="noopener noreferrer" className="flex h-12 w-12 items-center justify-center rounded-full border-2 border-reiki-card-border bg-reiki-section text-reiki-dark hover:border-reiki-olive hover:text-reiki-olive hover:bg-reiki-olive/10 transition-colors" aria-label="Telegram">
              <FaTelegram className="text-xl" />
            </a>
          </div>
        </div>
      </section>

      {/* Final CTA */}
      <section className="bg-white border-t border-reiki-card-border px-4 py-14 md:py-20">
        <div className="mx-auto max-w-2xl text-center">
          <p className="font-serif text-xl italic text-reiki-quote sm:text-2xl" style={{ fontFamily: "Lora" }}>
            “Every conversation starts with a single step.”
          </p>
          <p className="mt-4 font-lato text-reiki-body">
            I’m here when you’re ready. No pressure, no judgment—just a safe space to begin.
          </p>
        </div>
      </section>
    </main>
  );
}
