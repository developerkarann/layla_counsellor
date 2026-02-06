import { Link } from "react-router-dom";
import LotusSectionIcon from "../components/LotusSectionIcon";

const HERO_IMAGE = "/layla3.JPG";

const HEALING_SPACES = [
  { src: "/layla3.JPG", alt: "Healing space" },
  { src: "/slide1.JPG", alt: "Reiki practice" },
  { src: "/slide3.JPG", alt: "Calm room" },
  { src: "/about.JPG", alt: "Presence" },
  { src: "/main.JPG", alt: "Serene moment" },
];

const NATURE_STILLNESS = [
  { src: "/IMG_0620.JPG", alt: "Calm in nature" },
  { src: "/IMG_3028.JPG", alt: "Quiet moment" },
  { src: "/IMG_6293.JPG", alt: "Stillness" },
  { src: "/IMG_6330.JPG", alt: "Peaceful presence" },
];

const PRACTICE_PRESENCE = [
  { src: "/slide1.JPG", alt: "Practice" },
  { src: "/slide3.JPG", alt: "Focus" },
  { src: "/service1.JPG", alt: "Energy" },
  { src: "/standing4.JPG", alt: "Flow" },
  { src: "/slide2.JPG", alt: "Presence" },
];

export default function GalleryPage() {
  return (
    <main className="min-h-screen bg-page-bg">
      {/* Hero – face visible and centered */}
      <section className="relative min-h-[50vh] sm:min-h-[60vh] md:min-h-[65vh] flex items-end justify-center overflow-hidden">
        <img
          src={HERO_IMAGE}
          alt=""
          className="absolute inset-0 h-full w-full object-cover object-[50%_25%]"
        />
        <div className="absolute inset-0 bg-gradient-to-b from-reiki-dark/20 via-reiki-dark/40 to-reiki-dark/70" aria-hidden />
        <div className="relative z-10 w-full max-w-7xl px-4 pb-12 pt-24 sm:pb-16 md:pb-20 text-center">
          <div className="inline-flex flex-col items-center">
            <span className="font-script text-2xl text-white/90 sm:text-3xl" style={{ fontFamily: "Dancing Script" }}>Layla</span>
            <span className="mt-1 block h-px w-12 bg-white/60" aria-hidden />
          </div>
          <h1 className="mt-4 font-garamond text-4xl font-normal text-white sm:text-5xl md:text-6xl lg:text-7xl" style={{ fontFamily: "EB Garamond" }}>
            Gallery
          </h1>
          <p className="mt-3 font-lato text-base text-white/90 sm:text-lg md:text-xl max-w-xl mx-auto">
            Moments of peace, presence, and the path of healing
          </p>
        </div>
      </section>

      {/* Intro quote */}
      <section className="bg-reiki-bg-stripe border-y border-reiki-accent/40 py-12 md:py-16">
        <div className="mx-auto max-w-3xl px-4 text-center">
          <p className="font-serif text-xl italic text-reiki-quote sm:text-2xl md:text-3xl leading-relaxed" style={{ fontFamily: "Lora" }}>
            “Every moment holds the possibility of peace. These images are glimpses from that journey—spaces, nature, and the quiet practice of coming home to oneself.”
          </p>
        </div>
      </section>

      {/* Healing Spaces – Bento */}
      <section className="bg-white px-4 py-12 md:py-16 lg:py-20">
        <LotusSectionIcon />
        <div className="mx-auto max-w-7xl">
          <h2 className="font-garamond text-center text-2xl text-reiki-dark sm:text-3xl md:text-4xl" style={{ fontFamily: "EB Garamond" }}>
            Healing <span className="text-reiki-olive">Spaces</span>
          </h2>
          <p className="mt-2 font-lato text-center text-sm text-reiki-body sm:text-base max-w-2xl mx-auto">
            Where inner work meets outer calm
          </p>
          <div className="mt-8 grid grid-cols-1 gap-4 sm:grid-cols-2 sm:gap-5 lg:grid-cols-4 lg:gap-6">
            <div className="sm:col-span-2 lg:row-span-2 overflow-hidden rounded-2xl border border-reiki-card-border bg-reiki-section shadow-sm">
              <div className="relative h-full min-h-[280px] sm:min-h-[320px] lg:min-h-[400px]">
                <img src={HEALING_SPACES[0].src} alt={HEALING_SPACES[0].alt} className="h-full w-full object-cover transition-transform duration-500 hover:scale-105" />
              </div>
            </div>
            {HEALING_SPACES.slice(1, 5).map((item, i) => (
              <div key={i} className="overflow-hidden rounded-2xl border border-reiki-card-border bg-reiki-section shadow-sm">
                <div className="relative aspect-[2/3]">
                  <img src={item.src} alt={item.alt} className="h-full w-full object-cover transition-transform duration-500 hover:scale-105" />
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Nature & Stillness – 4 equal heroes, 2×2 grid, each image prominent */}
      <section
        className="relative overflow-hidden bg-reiki-bg-stripe px-4 py-12 sm:py-16 md:py-20 lg:py-24"
        aria-labelledby="nature-stillness-heading"
      >
        {/* Subtle radial glow for depth */}
        <div className="pointer-events-none absolute inset-0 bg-[radial-gradient(ellipse_80%_60%_at_50%_20%,var(--tw-gradient-from)_0%,transparent_50%)] from-reiki-olive/5 to-transparent" aria-hidden />
        <div className="relative mx-auto max-w-7xl px-3 sm:px-5 md:px-6">
          <header className="text-center mb-10 sm:mb-12 md:mb-14">
            <p className="font-lato text-xs uppercase tracking-[0.2em] text-reiki-olive/80 sm:text-sm mb-3">
              Moments of calm
            </p>
            <h2 id="nature-stillness-heading" className="font-garamond text-3xl text-reiki-dark sm:text-4xl md:text-5xl lg:text-6xl" style={{ fontFamily: "EB Garamond" }}>
              Nature & <span className="text-reiki-olive">Stillness</span>
            </h2>
            <p className="mt-3 font-lato text-sm text-reiki-body sm:text-base max-w-2xl mx-auto">
              Finding calm in the world around us
            </p>
            {/* Decorative line */}
            <div className="mt-6 mx-auto h-px w-16 bg-gradient-to-r from-transparent via-reiki-olive/60 to-transparent" aria-hidden />
          </header>

          <div
            className="grid grid-cols-2 gap-3 sm:gap-4 md:gap-5 lg:gap-6 max-w-6xl mx-auto"
            aria-label="Nature and stillness gallery"
          >
            {NATURE_STILLNESS.map((item, i) => {
              const corners = [
                "rounded-tl-[1.75rem] rounded-tr-xl rounded-bl-xl rounded-br-xl sm:rounded-tl-[2rem]",
                "rounded-tr-[1.75rem] rounded-tl-xl rounded-bl-xl rounded-br-xl sm:rounded-tr-[2rem]",
                "rounded-bl-[1.75rem] rounded-tl-xl rounded-tr-xl rounded-br-xl sm:rounded-bl-[2rem]",
                "rounded-br-[1.75rem] rounded-tl-xl rounded-tr-xl rounded-bl-xl sm:rounded-br-[2rem]",
              ];
              return (
                <div
                  key={i}
                  className={`group overflow-hidden border-2 border-reiki-card-border bg-reiki-section shadow-lg transition-all duration-500 hover:shadow-2xl hover:border-reiki-olive/40 hover:-translate-y-1 ${corners[i]}`}
                  style={{ transitionDelay: `${i * 40}ms` }}
                >
                  <figure className="m-0 relative w-full aspect-[4/5] min-h-[280px] sm:min-h-[320px] md:min-h-[380px] lg:min-h-[440px]">
                    <img
                      src={item.src}
                      alt={item.alt}
                      className="absolute inset-0 h-full w-full object-cover object-center transition-transform duration-700 ease-out group-hover:scale-105"
                      loading={i === 0 ? "eager" : "lazy"}
                    />
                    {/* Subtle bottom gradient so image reads clearly */}
                    <div className="absolute inset-0 bg-gradient-to-t from-black/20 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500 pointer-events-none" aria-hidden />
                  </figure>
                </div>
              );
            })}
          </div>
        </div>
      </section>

      {/* Practice & Presence – Alternating large/small */}
      <section className="bg-white px-4 py-8 md:py-16 lg:py-20">
        <LotusSectionIcon />
        <div className="mx-auto max-w-7xl">
          <h2 className="font-garamond text-center text-2xl text-reiki-dark sm:text-3xl md:text-4xl" style={{ fontFamily: "EB Garamond" }}>
            Practice & <span className="text-reiki-olive">Presence</span>
          </h2>
          <p className="mt-2 font-lato text-center text-sm text-reiki-body sm:text-base max-w-2xl mx-auto">
            The art of showing up—fully and gently
          </p>
          <div className="mt-6 flex flex-col gap-4 md:mt-10 md:gap-12 w-full">
            {PRACTICE_PRESENCE.map((item, i) => (
              <div
                key={i}
                className={`overflow-hidden rounded-2xl border border-reiki-card-border bg-reiki-section shadow-sm ${i % 2 === 1 ? "md:ml-auto md:mr-0" : "md:mr-auto md:ml-0"}`}
              >
                <div className="relative aspect-[4/3] min-h-[220px] sm:min-h-[280px] md:aspect-[4/2] md:min-h-0 md:max-h-[600px]">
                  <img src={item.src} alt={item.alt} className="h-full w-full object-cover object-center transition-transform duration-500 hover:scale-105" />
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Closing CTA */}
      <section className="bg-reiki-bg-stripe border-t border-reiki-accent/40 px-4 py-16 md:py-20">
        <div className="mx-auto max-w-2xl text-center">
          <p className="font-serif text-lg italic text-reiki-quote sm:text-xl" style={{ fontFamily: "Lora" }}>
            Every moment holds the possibility of peace.
          </p>
          <Link
            to="/#contact"
            className="mt-6 inline-block rounded-lg bg-reiki-dark px-8 py-3 font-sans text-sm font-semibold text-white transition hover:opacity-90"
          >
            Get in touch
          </Link>
        </div>
      </section>
    </main>
  );
}
