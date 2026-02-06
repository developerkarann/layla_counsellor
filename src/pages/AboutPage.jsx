import { Link } from "react-router-dom";
import LotusSectionIcon from "../components/LotusSectionIcon";
import { ABOUT, TESTIMONIAL, JOURNEY } from "../data/aboutData";

export default function AboutPage() {
  return (
    <main className="min-h-screen bg-page-bg">
      {/* Hero – full viewport, image dominant */}
      <section className="relative min-h-[85vh] sm:min-h-[90vh] flex items-end overflow-hidden">
        <img src="/slide4.JPG" alt="" className="absolute inset-0 h-full w-full object-cover object-top scale-105" />
        <div className="absolute inset-0 bg-gradient-to-b from-black/10 via-reiki-dark/30 to-reiki-dark/80" aria-hidden />
        <div className="relative z-10 w-full px-4 pb-16 pt-24 sm:pb-20 md:pb-24 md:pt-32">
          <div className="mx-auto max-w-7xl flex flex-col items-center text-center">
            <span className="font-script text-4xl text-white drop-shadow-lg sm:text-5xl md:text-6xl" style={{ fontFamily: "Dancing Script" }}>
              {ABOUT.name}
            </span>
            <span className="mt-3 block h-px w-20 bg-white/80" aria-hidden />
            <h1 className="mt-5 font-garamond text-5xl font-normal text-white sm:text-6xl md:text-7xl lg:text-8xl drop-shadow-md" style={{ fontFamily: "EB Garamond" }}>
              About
            </h1>
            <p className="mt-5 font-lato text-xl text-white/95 sm:text-2xl md:text-3xl max-w-2xl">
              {ABOUT.tagline}
            </p>
          </div>
        </div>
        {/* Decorative frame */}
        <div className="absolute inset-4 sm:inset-6 md:inset-8 border border-white/20 rounded-lg pointer-events-none" aria-hidden />
      </section>

      {/* Hi, I'm Layla – large photo left, text right; second image overlapping */}
      <section className="bg-white py-20 md:py-28 lg:py-32 overflow-hidden">
        <LotusSectionIcon />
        <div className="mx-auto max-w-7xl px-4">
          <div className="grid gap-12 lg:grid-cols-12 lg:gap-8 lg:items-center">
            <div className="lg:col-span-5 relative">
              <div className="relative max-w-lg mx-auto lg:max-w-none">
                <div className="aspect-[3/4] max-h-[75vh] overflow-hidden rounded-3xl border-4 border-reiki-card-border shadow-2xl">
                  <img src="/about.JPG" alt="Layla" className="h-full w-full object-cover object-top" />
                </div>
                <div className="absolute -bottom-6 -right-4 sm:-right-8 w-[45%] sm:w-[50%] aspect-square overflow-hidden rounded-2xl border-4 border-white shadow-xl hidden sm:block">
                  <img src="/layla2.JPG" alt="" className="h-full w-full object-cover" />
                </div>
                <div className="absolute -top-4 -left-4 w-24 h-24 rounded-full border-4 border-white bg-reiki-olive/40 shadow-lg" aria-hidden />
              </div>
            </div>
            <div className="lg:col-span-7 lg:pl-12">
              <h2 className="font-garamond text-3xl text-reiki-dark sm:text-4xl md:text-5xl lg:text-6xl" style={{ fontFamily: "EB Garamond" }}>
                {ABOUT.introTitle.split("Layla")[0]}
                <span className="text-reiki-olive">Layla</span>
              </h2>
              <div className="mt-8 space-y-6">
                {ABOUT.introParagraphs.map((p, i) => (
                  <p key={i} className="font-lato text-reiki-text leading-relaxed text-lg sm:text-xl">
                    {p}
                  </p>
                ))}
              </div>
              <Link to="/services" className="mt-10 inline-block rounded-xl bg-reiki-dark px-10 py-4 font-sans text-base font-semibold text-white transition hover:opacity-90 shadow-lg">
                Explore my services
              </Link>
            </div>
          </div>
        </div>
      </section>

      {/* Mission – full-bleed image strip with overlay text */}
      <section className="relative min-h-[50vh] sm:min-h-[55vh] flex items-center justify-center overflow-hidden">
        <img src="/slide3.JPG" alt="" className="absolute inset-0 h-full w-full object-cover scale-105" />
        <div className="absolute inset-0 bg-reiki-dark/60" aria-hidden />
        <div className="relative z-10 w-full max-w-4xl px-4 py-16 text-center">
          <h2 className="font-garamond text-2xl text-white sm:text-3xl md:text-4xl" style={{ fontFamily: "EB Garamond" }}>
            {ABOUT.mission.title}
          </h2>
          <p className="mt-6 font-serif text-xl italic text-white/95 sm:text-2xl md:text-3xl leading-relaxed" style={{ fontFamily: "Lora" }}>
            “{ABOUT.mission.quote}”
          </p>
          <p className="mt-6 font-lato text-white/90 leading-relaxed text-lg sm:text-xl max-w-2xl mx-auto">
            {ABOUT.mission.body}
          </p>
        </div>
      </section>

      {/* My approach + values with large accent image */}
      <section className="bg-reiki-bg-stripe py-20 md:py-28">
        <div className="mx-auto max-w-7xl px-4">
          <h2 className="font-garamond text-center text-2xl text-reiki-dark sm:text-3xl md:text-4xl" style={{ fontFamily: "EB Garamond" }}>
            {ABOUT.approach.title}
          </h2>
          <p className="mt-6 mx-auto max-w-3xl text-center font-lato text-reiki-text leading-relaxed text-lg">
            {ABOUT.approach.body}
          </p>
          <div className="mt-16 grid gap-8 lg:grid-cols-5">
            <div className="lg:col-span-2 relative order-first lg:order-none">
              <div className="sticky top-24">
                <div className="aspect-[4/5] max-h-[500px] overflow-hidden rounded-3xl border border-reiki-card-border shadow-xl">
                  <img src="/yoga.JPG" alt="" className="h-full w-full object-cover" />
                </div>
              </div>
            </div>
            <div className="lg:col-span-3 grid gap-5 sm:grid-cols-2">
              {ABOUT.values.map((v) => (
                <div key={v.title} className="rounded-2xl border-2 border-reiki-card-border bg-reiki-section p-6 shadow-sm hover:border-reiki-olive/50 transition-colors">
                  <h3 className="font-garamond text-xl font-semibold text-reiki-olive" style={{ fontFamily: "EB Garamond" }}>{v.title}</h3>
                  <p className="mt-3 font-lato text-reiki-body leading-relaxed">{v.text}</p>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Awakens – big image (60%+) with text overlay option / side content */}
      <section className="bg-white py-20 md:py-28 overflow-hidden">
        <div className="mx-auto max-w-7xl px-4">
          <div className="grid gap-0 lg:grid-cols-12 lg:gap-0 lg:items-stretch">
            <div className="lg:col-span-7 relative min-h-[400px] sm:min-h-[500px] lg:min-h-[600px]">
              <img src="/awaken-final.jpg" alt="Awaken your powers" className="absolute inset-0 h-full w-full object-cover object-top" />
              <div className="absolute inset-0 bg-gradient-to-r from-white/0 via-white/0 to-white/95 lg:to-white/90" aria-hidden />
              <div className="absolute inset-0 flex items-center lg:items-center lg:justify-end p-8 md:p-12">
                <div className="max-w-md lg:max-w-lg lg:mr-12 lg:ml-auto">
                  <h2 className="font-garamond text-2xl text-reiki-dark sm:text-3xl md:text-4xl lg:text-white lg:drop-shadow-md" style={{ fontFamily: "EB Garamond" }}>
                    <span className="text-reiki-olive lg:text-reiki-accent">Awakens</span> your powers of self healing
                  </h2>
                  <p className="mt-4 font-lato text-reiki-dark lg:text-white/95 text-base sm:text-lg lg:drop-shadow-sm">
                    {ABOUT.awaken.closing}
                  </p>
                </div>
              </div>
            </div>
            <div className="lg:col-span-5 bg-reiki-bg-stripe p-8 md:p-12 lg:py-16 flex flex-col justify-center">
              {ABOUT.awaken.paragraphs.map((p, i) => (
                <p key={i} className="font-lato text-reiki-text leading-relaxed text-lg mb-6 last:mb-0">
                  {p}
                </p>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Vision – full-bleed dramatic quote */}
      <section className="relative min-h-[40vh] flex items-center justify-center overflow-hidden">
        <img src="/slide4.JPG" alt="" className="absolute inset-0 h-full w-full object-cover" />
        <div className="absolute inset-0 bg-reiki-dark/65" aria-hidden />
        <div className="relative z-10 max-w-5xl px-4 py-20 text-center">
          <p className="font-serif text-2xl italic text-white sm:text-3xl md:text-4xl lg:text-5xl leading-relaxed" style={{ fontFamily: "Lora" }}>
            “{ABOUT.vision}”
          </p>
        </div>
      </section>

      {/* Training + large practice image */}
      <section className="bg-white py-20 md:py-28">
        <LotusSectionIcon />
        <div className="mx-auto max-w-7xl px-4">
          <div className="grid gap-12 lg:grid-cols-2 lg:gap-16 lg:items-center">
            <div className="order-2 lg:order-1">
              <h2 className="font-garamond text-2xl text-reiki-dark sm:text-3xl" style={{ fontFamily: "EB Garamond" }}>
                Training & <span className="text-reiki-olive">practice</span>
              </h2>
              <p className="mt-4 font-lato text-reiki-body text-lg max-w-xl">
                My work is grounded in formal training and ongoing study across traditions that honor the whole person.
              </p>
              <ul className="mt-8 space-y-4">
                {ABOUT.trainings.map((t) => (
                  <li key={t} className="flex items-center gap-4 rounded-2xl border-2 border-reiki-card-border bg-reiki-section px-6 py-4">
                    <span className="flex h-10 w-10 shrink-0 items-center justify-center rounded-full bg-reiki-benefit-icon text-reiki-dark font-semibold">✓</span>
                    <span className="font-lato text-reiki-dark text-lg">{t}</span>
                  </li>
                ))}
              </ul>
              <p className="mt-8">
                <Link to="/services" className="font-lato text-base font-semibold text-reiki-olive hover:underline">
                  See all services →
                </Link>
              </p>
            </div>
            <div className="order-1 lg:order-2">
              <div className="aspect-[4/3] sm:aspect-[3/4] max-h-[560px] overflow-hidden rounded-3xl border-4 border-reiki-card-border shadow-2xl">
                <img src="/service1.JPG" alt="Practice" className="h-full w-full object-cover" />
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Journey with visual timeline and image */}
      <section className="bg-reiki-bg-stripe py-20 md:py-28">
        <div className="mx-auto max-w-6xl px-4">
          <h2 className="font-garamond text-center text-2xl text-reiki-dark sm:text-3xl" style={{ fontFamily: "EB Garamond" }}>
            My <span className="text-reiki-olive">path</span>
          </h2>
          <div className="mt-16 relative">
            <div className="absolute left-6 top-0 bottom-0 w-0.5 bg-reiki-card-border hidden sm:block" aria-hidden />
            <div className="space-y-12 sm:pl-20">
              {JOURNEY.map((step, i) => (
                <div key={i} className="relative flex flex-col sm:flex-row gap-6 sm:gap-10">
                  <span className="flex sm:absolute sm:left-6 sm:-translate-x-1/2 w-12 h-12 shrink-0 items-center justify-center rounded-full border-4 border-reiki-olive bg-reiki-section font-garamond text-lg font-bold text-reiki-dark shadow-md z-10">
                    {i + 1}
                  </span>
                  <div className="sm:pl-8 flex-1">
                    <span className="font-lato text-xs font-bold uppercase tracking-wider text-reiki-olive">{step.year}</span>
                    <h3 className="mt-1 font-garamond text-2xl text-reiki-dark" style={{ fontFamily: "EB Garamond" }}>{step.title}</h3>
                    <p className="mt-3 font-lato text-reiki-body leading-relaxed text-lg">{step.text}</p>
                  </div>
                  {i === 1 && (
                    <div className="sm:w-48 shrink-0 rounded-2xl overflow-hidden border-2 border-reiki-card-border shadow-lg">
                      <img src="/layla2.JPG" alt="" className="aspect-square w-full object-cover" />
                    </div>
                  )}
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Testimonial – prominent with soft image background */}
      <section className="relative py-20 md:py-28 overflow-hidden">
        <img src="/slide2.JPG" alt="" className="absolute inset-0 h-full w-full object-cover scale-105" />
        <div className="absolute inset-0 bg-reiki-section/95 backdrop-blur-sm" aria-hidden />
        <div className="relative z-10 mx-auto max-w-4xl px-4">
          <h2 className="font-garamond text-center text-2xl text-reiki-dark sm:text-3xl" style={{ fontFamily: "EB Garamond" }}>
            Words from <span className="text-reiki-olive">clients</span>
          </h2>
          <blockquote className="mt-12 rounded-3xl border-2 border-reiki-card-border bg-white/90 backdrop-blur p-8 sm:p-12 shadow-xl">
            <div className="flex gap-6">
              <span className="flex h-16 w-16 shrink-0 items-center justify-center rounded-full border-2 border-reiki-accent bg-reiki-section text-reiki-dark text-3xl" aria-hidden>“</span>
              <div>
                <p className="font-serif text-lg italic text-reiki-quote leading-relaxed sm:text-xl md:text-2xl">
                  {TESTIMONIAL.quote}
                </p>
                <cite className="mt-6 block font-lato text-base not-italic text-reiki-quote-attribution font-medium">
                  {TESTIMONIAL.attribution}
                </cite>
              </div>
            </div>
          </blockquote>
        </div>
      </section>

      {/* CTA – full-bleed image with overlay */}
      <section className="relative min-h-[50vh] flex items-center justify-center overflow-hidden">
        <img src="/awaken-final.jpg" alt="" className="absolute inset-0 h-full w-full object-cover object-center" />
        <div className="absolute inset-0 bg-reiki-dark/70" aria-hidden />
        <div className="relative z-10 max-w-2xl px-4 py-20 text-center">
          <p className="font-serif text-2xl italic text-white sm:text-3xl md:text-4xl" style={{ fontFamily: "Lora" }}>
            “Create the life you want to live.”
          </p>
          <p className="mt-5 font-lato text-white/95 text-lg">
            Ready to take the first step? I’d be honored to walk alongside you.
          </p>
          <Link to="/contact" className="mt-8 inline-block rounded-xl bg-white px-12 py-4 font-sans text-base font-semibold text-reiki-dark transition hover:bg-reiki-section shadow-xl">
            Get in touch
          </Link>
        </div>
      </section>
    </main>
  );
}
