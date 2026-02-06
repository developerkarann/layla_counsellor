import { Link } from "react-router-dom";
import LotusSectionIcon from "../components/LotusSectionIcon";
import { SERVICES } from "../data/servicesData";

const HERO_IMAGE = "/awaken-final.jpg";

function CheckIcon() {
  return (
    <span className="flex h-6 w-6 shrink-0 items-center justify-center rounded-full bg-reiki-benefit-icon" aria-hidden>
      <svg viewBox="0 0 24 24" className="h-3.5 w-3.5 text-reiki-dark" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round">
        <path d="M20 6L9 17l-5-5" />
      </svg>
    </span>
  );
}

export default function ServicesPage() {
  return (
    <main className="min-h-screen bg-page-bg">
      {/* Hero – face-focused on desktop */}
      <section className="relative min-h-[55vh] sm:min-h-[60vh] md:min-h-[65vh] flex items-end justify-center overflow-hidden">
        <img
          src={HERO_IMAGE}
          alt=""
          className="absolute inset-0 h-full w-full object-cover object-top md:object-[50%_20%] scale-105"
        />
        <div className="absolute inset-0 bg-gradient-to-b from-reiki-dark/25 via-reiki-dark/45 to-reiki-dark/75" aria-hidden />
        <div className="relative z-10 w-full max-w-7xl px-4 pb-16 pt-24 sm:pb-20 md:pb-24 text-center">
          <div className="inline-flex flex-col items-center">
            <span className="font-script text-2xl text-white/90 sm:text-3xl" style={{ fontFamily: "Dancing Script" }}>Layla</span>
            <span className="mt-1 block h-px w-12 bg-white/60" aria-hidden />
          </div>
          <h1 className="mt-4 font-garamond text-4xl font-normal text-white sm:text-5xl md:text-6xl lg:text-7xl" style={{ fontFamily: "EB Garamond" }}>
            Services
          </h1>
          <p className="mt-4 font-lato text-base text-white/90 sm:text-lg md:text-xl max-w-2xl mx-auto">
            Three paths to wholeness—Shamanic Healing, TCK Holistic Coaching, and Medical Qigong. Each meets you where you are.
          </p>
        </div>
      </section>

      {/* Intro quote */}
      <section className="bg-reiki-bg-stripe border-y border-reiki-accent/40 py-12 md:py-16">
        <div className="mx-auto max-w-4xl px-4 text-center">
          <p className="font-serif text-lg italic text-reiki-quote sm:text-xl md:text-2xl leading-relaxed" style={{ fontFamily: "Lora" }}>
            “Healing is not one size fits all. Whether you are drawn to the depth of shamanic work, the clarity of coaching, or the gentle power of Qigong—there is a path here for you.”
          </p>
        </div>
      </section>

      {/* Overview strip */}
      <section className="bg-white px-4 py-10 md:py-14">
        <LotusSectionIcon />
        <div className="mx-auto max-w-6xl">
          <h2 className="font-garamond text-center text-2xl text-reiki-dark sm:text-3xl md:text-4xl" style={{ fontFamily: "EB Garamond" }}>
            Three paths, one <span className="text-reiki-olive">intention</span>
          </h2>
          <p className="mt-4 font-lato text-center text-reiki-body max-w-2xl mx-auto">
            Your wholeness. Each practice is rooted in respect for your autonomy and your inner knowing. We work together to find what serves you best—sometimes one modality, sometimes a blend.
          </p>
          <div className="mt-10 grid gap-6 sm:grid-cols-3">
            {SERVICES.map((s) => (
              <Link
                key={s.id}
                to={`#${s.id}`}
                className="rounded-2xl border border-reiki-card-border bg-reiki-section p-6 text-center shadow-sm transition-all hover:border-reiki-olive/50 hover:shadow-md"
              >
                <span className="font-garamond text-lg font-semibold text-reiki-dark" style={{ fontFamily: "EB Garamond" }}>{s.title}</span>
                <p className="mt-1 font-lato text-sm text-reiki-body">{s.tagline}</p>
              </Link>
            ))}
          </div>
        </div>
      </section>

      {/* Service 1: Shamanic Healing – image left, content right */}
      <section id="shamanic-healing" className="scroll-mt-20 bg-reiki-bg-stripe px-4 py-16 md:py-20 lg:py-24">
        <div className="mx-auto max-w-7xl">
          <div className="grid gap-10 lg:grid-cols-2 lg:gap-16 lg:items-center">
            <div className="relative order-2 lg:order-1">
              <div className="overflow-hidden rounded-2xl border border-reiki-card-border shadow-lg">
                <img src={SERVICES[0].image} alt={SERVICES[0].imageAlt} className="aspect-[4/3] w-full object-cover" />
              </div>
              <div className="absolute -bottom-4 -right-4 h-24 w-24 rounded-full border-4 border-reiki-section bg-reiki-olive/20" aria-hidden />
            </div>
            <div className="order-1 lg:order-2">
              <span className="font-lato text-xs font-semibold uppercase tracking-wider text-reiki-olive">Service one</span>
              <h2 className="mt-2 font-garamond text-3xl text-reiki-dark sm:text-4xl md:text-5xl" style={{ fontFamily: "EB Garamond" }}>
                {SERVICES[0].title}
              </h2>
              <p className="mt-3 font-lato text-lg text-reiki-body">{SERVICES[0].tagline}</p>
              <p className="mt-6 font-lato text-reiki-text leading-relaxed">
                {SERVICES[0].description}
              </p>
              <ul className="mt-6 space-y-3">
                {SERVICES[0].keyPoints.map((point, i) => (
                  <li key={i} className="flex gap-3">
                    <CheckIcon />
                    <span className="font-lato text-reiki-dark">{point}</span>
                  </li>
                ))}
              </ul>
              <div className="mt-8 rounded-xl border-l-4 border-reiki-olive bg-reiki-section p-5">
                <p className="font-serif italic text-reiki-quote" style={{ fontFamily: "Lora" }}>“{SERVICES[0].quote}”</p>
              </div>
              <p className="mt-4 font-lato text-sm text-reiki-body"><strong className="text-reiki-dark">Who it’s for:</strong> {SERVICES[0].whoItsFor}</p>
              <div className="mt-6">
                <p className="font-lato text-xs font-semibold uppercase tracking-wider text-reiki-muted">What we offer</p>
                <ul className="mt-2 flex flex-wrap gap-2">
                  {SERVICES[0].offerings.map((o, i) => (
                    <li key={i} className="rounded-full bg-reiki-section px-3 py-1 font-lato text-sm text-reiki-dark border border-reiki-card-border">{o}</li>
                  ))}
                </ul>
              </div>
              <Link to="/availability" className="mt-8 inline-block rounded-lg bg-reiki-dark px-8 py-3 font-sans text-sm font-semibold text-white transition hover:opacity-90">
                Book a session
              </Link>
            </div>
          </div>
        </div>
      </section>

      {/* Service 2: TCK Coaching – full-width image then content */}
      <section id="tck-coaching" className="scroll-mt-20 bg-white px-4 py-16 md:py-20 lg:py-24">
        <div className="mx-auto max-w-7xl">
          <div className="overflow-hidden rounded-2xl border border-reiki-card-border">
            <img src={SERVICES[1].image} alt={SERVICES[1].imageAlt} className="aspect-[21/9] w-full object-cover" />
          </div>
          <div className="mt-10 lg:mt-14">
            <span className="font-lato text-xs font-semibold uppercase tracking-wider text-reiki-olive">Service two</span>
            <h2 className="mt-2 font-garamond text-3xl text-reiki-dark sm:text-4xl md:text-5xl" style={{ fontFamily: "EB Garamond" }}>
              {SERVICES[1].title}
            </h2>
            <p className="mt-3 font-lato text-lg text-reiki-body">{SERVICES[1].tagline}</p>
            <p className="mt-6 font-lato text-reiki-text leading-relaxed max-w-3xl">
              {SERVICES[1].description}
            </p>
            <div className="mt-8 grid gap-6 sm:grid-cols-2">
              <ul className="space-y-3">
                {SERVICES[1].keyPoints.slice(0, 3).map((point, i) => (
                  <li key={i} className="flex gap-3">
                    <CheckIcon />
                    <span className="font-lato text-reiki-dark">{point}</span>
                  </li>
                ))}
              </ul>
              <ul className="space-y-3">
                {SERVICES[1].keyPoints.slice(3, 6).map((point, i) => (
                  <li key={i} className="flex gap-3">
                    <CheckIcon />
                    <span className="font-lato text-reiki-dark">{point}</span>
                  </li>
                ))}
              </ul>
            </div>
            <div className="mt-8 rounded-2xl border border-reiki-card-border bg-reiki-bg-stripe p-6 sm:p-8">
              <p className="font-serif text-lg italic text-reiki-quote" style={{ fontFamily: "Lora" }}>“{SERVICES[1].quote}”</p>
            </div>
            <p className="mt-6 font-lato text-sm text-reiki-body"><strong className="text-reiki-dark">Who it’s for:</strong> {SERVICES[1].whoItsFor}</p>
            <div className="mt-6">
              <p className="font-lato text-xs font-semibold uppercase tracking-wider text-reiki-muted">What we offer</p>
              <ul className="mt-3 space-y-2">
                {SERVICES[1].offerings.map((o, i) => (
                  <li key={i} className="flex gap-3 font-lato text-reiki-dark"><CheckIcon />{o}</li>
                ))}
              </ul>
            </div>
            <Link to="/availability" className="mt-8 inline-block rounded-lg bg-reiki-dark px-8 py-3 font-sans text-sm font-semibold text-white transition hover:opacity-90">
              Book a session
            </Link>
          </div>
        </div>
      </section>

      {/* Service 3: Medical Qigong – content left, image right */}
      <section id="medical-qigong" className="scroll-mt-20 bg-reiki-bg-stripe px-4 py-16 md:py-20 lg:py-24">
        <div className="mx-auto max-w-7xl">
          <div className="grid gap-10 lg:grid-cols-2 lg:gap-16 lg:items-center">
            <div>
              <span className="font-lato text-xs font-semibold uppercase tracking-wider text-reiki-olive">Service three</span>
              <h2 className="mt-2 font-garamond text-3xl text-reiki-dark sm:text-4xl md:text-5xl" style={{ fontFamily: "EB Garamond" }}>
                {SERVICES[2].title}
              </h2>
              <p className="mt-3 font-lato text-lg text-reiki-body">{SERVICES[2].tagline}</p>
              <p className="mt-6 font-lato text-reiki-text leading-relaxed">
                {SERVICES[2].description}
              </p>
              <ul className="mt-6 space-y-3">
                {SERVICES[2].keyPoints.map((point, i) => (
                  <li key={i} className="flex gap-3">
                    <CheckIcon />
                    <span className="font-lato text-reiki-dark">{point}</span>
                  </li>
                ))}
              </ul>
              <div className="mt-8 rounded-xl border-l-4 border-reiki-olive bg-reiki-section p-5">
                <p className="font-serif italic text-reiki-quote" style={{ fontFamily: "Lora" }}>“{SERVICES[2].quote}”</p>
              </div>
              <p className="mt-4 font-lato text-sm text-reiki-body"><strong className="text-reiki-dark">Who it’s for:</strong> {SERVICES[2].whoItsFor}</p>
              <div className="mt-6">
                <p className="font-lato text-xs font-semibold uppercase tracking-wider text-reiki-muted">What we offer</p>
                <ul className="mt-2 flex flex-wrap gap-2">
                  {SERVICES[2].offerings.map((o, i) => (
                    <li key={i} className="rounded-full bg-reiki-section px-3 py-1 font-lato text-sm text-reiki-dark border border-reiki-card-border">{o}</li>
                  ))}
                </ul>
              </div>
              <Link to="/availability" className="mt-8 inline-block rounded-lg bg-reiki-dark px-8 py-3 font-sans text-sm font-semibold text-white transition hover:opacity-90">
                Book a session
              </Link>
            </div>
            <div className="relative">
              <div className="overflow-hidden rounded-2xl border border-reiki-card-border shadow-lg">
                <img src={SERVICES[2].image} alt={SERVICES[2].imageAlt} className="aspect-[4/3] w-full object-cover" />
              </div>
              <div className="absolute -left-4 -top-4 h-20 w-20 rounded-full border-4 border-reiki-section bg-reiki-accent/80" aria-hidden />
            </div>
          </div>
        </div>
      </section>

      {/* How to choose */}
      <section className="bg-white border-y border-reiki-card-border px-4 py-14 md:py-20">
        <LotusSectionIcon />
        <div className="mx-auto max-w-4xl text-center">
          <h2 className="font-garamond text-2xl text-reiki-dark sm:text-3xl" style={{ fontFamily: "EB Garamond" }}>
            Not sure which <span className="text-reiki-olive">path</span>?
          </h2>
          <p className="mt-4 font-lato text-reiki-body leading-relaxed">
            Many clients start with a single modality and later weave in another. Others come for one focus—trauma release, identity work, or physical vitality—and find that one practice leads naturally to the next. When you get in touch, we can have a short conversation about what you’re drawn to and what you need right now. There’s no wrong door.
          </p>
          <Link to="/contact" className="mt-8 inline-block rounded-lg border-2 border-reiki-dark px-8 py-3 font-sans text-sm font-semibold text-reiki-dark transition hover:bg-reiki-dark hover:text-white">
            Let’s talk
          </Link>
        </div>
      </section>

      {/* All three at a glance */}
      <section className="bg-reiki-bg-stripe px-4 py-14 md:py-20">
        <div className="mx-auto max-w-6xl">
          <h2 className="font-garamond text-center text-2xl text-reiki-dark sm:text-3xl" style={{ fontFamily: "EB Garamond" }}>
            At a <span className="text-reiki-olive">glance</span>
          </h2>
          <div className="mt-10 grid gap-6 md:grid-cols-3">
            {SERVICES.map((s) => (
              <div key={s.id} className="rounded-2xl border border-reiki-card-border bg-reiki-section p-6 shadow-sm">
                <div className="aspect-[4/3] overflow-hidden rounded-xl">
                  <img src={s.image} alt="" className="h-full w-full object-cover" />
                </div>
                <h3 className="mt-4 font-garamond text-xl text-reiki-dark" style={{ fontFamily: "EB Garamond" }}>{s.title}</h3>
                <p className="mt-1 font-lato text-sm text-reiki-body">{s.tagline}</p>
                <Link to={`#${s.id}`} className="mt-4 inline-block font-lato text-sm font-semibold text-reiki-olive hover:underline">
                  Read more →
                </Link>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Final CTA */}
      <section className="bg-white px-4 py-16 md:py-20">
        <div className="mx-auto max-w-2xl text-center">
          <p className="font-serif text-xl italic text-reiki-quote sm:text-2xl" style={{ fontFamily: "Lora" }}>
            “Your healing journey is yours to shape. I’m here to walk it with you.”
          </p>
          <Link to="/contact" className="mt-8 inline-block rounded-lg bg-reiki-dark px-10 py-4 font-sans text-sm font-semibold text-white transition hover:opacity-90">
            Get in touch
          </Link>
        </div>
      </section>
    </main>
  );
}
