import { Link } from "react-router-dom";
import LotusSectionIcon from "../components/LotusSectionIcon";

const HERO_IMAGE = "/awaken-final.jpg";

const HEALING_SPACES = [
  { src: "/layla3.JPG", alt: "Healing space" },
  { src: "/slide1.JPG", alt: "Reiki practice" },
  { src: "/slide3.JPG", alt: "Calm room" },
  { src: "/about.JPG", alt: "Presence" },
  { src: "/IMG_0827.JPG", alt: "Serene moment" },
];

const NATURE_STILLNESS = [
  { src: "/slide2.JPG", alt: "Stillness" },
  { src: "/slide4.JPG", alt: "Meditation" },
  { src: "/IMG_0849.JPG", alt: "Nature" },
  { src: "/IMG_0853.JPG", alt: "Quiet" },
  { src: "/IMG_0860.JPG", alt: "Reflection" },
  { src: "/IMG_0863.JPG", alt: "Peace" },
];

const PRACTICE_PRESENCE = [
  { src: "/IMG_0830.JPG", alt: "Practice" },
  { src: "/IMG_0835.JPG", alt: "Focus" },
  { src: "/IMG_0838.JPG", alt: "Energy" },
  { src: "/IMG_0841.JPG", alt: "Flow" },
  { src: "/IMG_0855.JPG", alt: "Presence" },
];

export default function GalleryPage() {
  return (
    <main className="min-h-screen bg-page-bg">
      {/* Hero */}
      <section className="relative min-h-[50vh] sm:min-h-[60vh] flex items-end justify-center overflow-hidden">
        <img src={HERO_IMAGE} alt="" className="absolute inset-0 h-full w-full object-cover" />
        <div className="absolute inset-0 bg-reiki-dark/40" aria-hidden />
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
                <div className="relative aspect-[4/3]">
                  <img src={item.src} alt={item.alt} className="h-full w-full object-cover transition-transform duration-500 hover:scale-105" />
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Nature & Stillness – Staggered */}
      <section className="bg-reiki-bg-stripe px-4 py-12 md:py-16 lg:py-20">
        <div className="mx-auto max-w-7xl">
          <h2 className="font-garamond text-center text-2xl text-reiki-dark sm:text-3xl md:text-4xl" style={{ fontFamily: "EB Garamond" }}>
            Nature & <span className="text-reiki-olive">Stillness</span>
          </h2>
          <p className="mt-2 font-lato text-center text-sm text-reiki-body sm:text-base max-w-2xl mx-auto">
            Finding calm in the world around us
          </p>
          <div className="mt-8 grid grid-cols-2 sm:grid-cols-3 gap-3 sm:gap-4 md:gap-5">
            {NATURE_STILLNESS.map((item, i) => {
              const isCircle = i === 1 || i === 4;
              return (
                <div
                  key={i}
                  className={`overflow-hidden border border-reiki-card-border bg-reiki-section shadow-sm transition-all duration-300 hover:shadow-md ${
                    isCircle ? "rounded-full aspect-square w-full max-w-[200px] sm:max-w-[240px] justify-self-center" : "rounded-2xl aspect-[3/4]"
                  }`}
                >
                  <img src={item.src} alt={item.alt} className="h-full w-full object-cover transition-transform duration-500 hover:scale-105" />
                </div>
              );
            })}
          </div>
        </div>
      </section>

      {/* Practice & Presence – Alternating large/small */}
      <section className="bg-white px-4 py-12 md:py-16 lg:py-20">
        <LotusSectionIcon />
        <div className="mx-auto max-w-7xl">
          <h2 className="font-garamond text-center text-2xl text-reiki-dark sm:text-3xl md:text-4xl" style={{ fontFamily: "EB Garamond" }}>
            Practice & <span className="text-reiki-olive">Presence</span>
          </h2>
          <p className="mt-2 font-lato text-center text-sm text-reiki-body sm:text-base max-w-2xl mx-auto">
            The art of showing up—fully and gently
          </p>
          <div className="mt-10 flex flex-col gap-8 md:gap-12">
            {PRACTICE_PRESENCE.map((item, i) => (
              <div
                key={i}
                className={`overflow-hidden rounded-2xl border border-reiki-card-border bg-reiki-section shadow-sm md:max-w-4xl ${i % 2 === 1 ? "md:ml-auto md:mr-0" : "md:mr-auto md:ml-0"}`}
              >
                <div className={`relative ${i % 2 === 0 ? "aspect-[21/9] md:aspect-[3/1]" : "aspect-[4/3] md:aspect-[4/3] md:max-h-[360px]"}`}>
                  <img src={item.src} alt={item.alt} className="h-full w-full object-cover transition-transform duration-500 hover:scale-105" />
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
