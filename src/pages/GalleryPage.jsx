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
  { src: "/slide2.JPG", alt: "Stillness" },
  { src: "/slide4.JPG", alt: "Meditation" },
  { src: "/standing.JPG", alt: "Nature" },
  { src: "/yoga.JPG", alt: "Quiet" },
  { src: "/main3.JPG", alt: "Reflection" },
  { src: "/IMG_0863.JPG", alt: "Peace" },
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

      {/* Nature & Stillness – 4 images, symmetric 2×2 */}
      <section className="bg-reiki-bg-stripe px-4 py-12 md:py-16 lg:py-20" aria-labelledby="nature-stillness-heading">
        <div className="mx-auto max-w-6xl px-4 sm:px-6 md:px-8">
          <header className="text-center">
            <h2 id="nature-stillness-heading" className="font-garamond text-2xl text-reiki-dark sm:text-3xl md:text-4xl" style={{ fontFamily: "EB Garamond" }}>
              Nature & <span className="text-reiki-olive">Stillness</span>
            </h2>
            <p className="mt-2 font-lato text-sm text-reiki-body sm:text-base max-w-2xl mx-auto">
              Finding calm in the world around us
            </p>
          </header>
          <ul className="mt-8 grid grid-cols-2 gap-4 sm:gap-5 md:gap-6 list-none p-0 m-0" aria-label="Nature and stillness gallery">
            {NATURE_STILLNESS.filter((_, i) => i !== 1 && i !== 4).map((item, i) => (
              <li key={i} className="overflow-hidden rounded-2xl border border-reiki-card-border bg-reiki-section shadow-sm transition-all duration-300 hover:shadow-md">
                <figure className="m-0 aspect-[4/3] min-h-[200px] sm:min-h-[260px] md:min-h-[300px]">
                  <img src={item.src} alt={item.alt} className="h-full w-full object-cover object-center transition-transform duration-500 hover:scale-105" loading="lazy" />
                </figure>
              </li>
            ))}
          </ul>
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
          <div className="mt-10 flex flex-col gap-8 md:gap-12 w-full">
            {PRACTICE_PRESENCE.map((item, i) => (
              <div
                key={i}
                className={`overflow-hidden rounded-2xl border border-reiki-card-border bg-reiki-section shadow-sm ${i % 2 === 1 ? "md:ml-auto md:mr-0" : "md:mr-auto md:ml-0"}`}
              >
                <div className={`relative aspect-[8/3] md:aspect-[4/2] md:max-h-[600px]`}>
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
