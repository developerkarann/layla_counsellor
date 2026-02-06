import LotusSectionIcon from "../LotusSectionIcon";

const GALLERY_IMAGES = [
  { src: "/awaken-final.jpg", alt: "Awaken your inner peace" },
  { src: "/layla2.JPG", alt: "Healing space" },
  { src: "/slide1.JPG", alt: "Reiki practice" },
  { src: "/about.JPG", alt: "Mindful presence" },
  { src: "/slide3.JPG", alt: "Calm healing space" },
  { src: "/main.JPG", alt: "Serene moment" },
  { src: "/slide4.JPG", alt: "Meditation" },
  { src: "/standing.JPG", alt: "Nature and stillness" },
  { src: "/yoga.JPG", alt: "Quiet reflection" },
];

export default function Gallery() {
  return (
    <section id="gallery" className="flex min-h-screen flex-col overflow-visible bg-white px-4 pt-0 pb-10 md:px-6 md:pb-12">
      <LotusSectionIcon />
      <div className="mx-auto flex flex-1 px-4 sm:px-6 md:px-8 lg:px-40 flex-col justify-center w-full ">
        <h2 className="mt-1 font-garamond text-center text-xl text-reiki-dark sm:text-2xl md:text-4xl lg:text-5xl xl:text-6xl leading-tight" style={{ fontFamily: "EB Garamond" }}>
          Moments of <span className="text-reiki-olive">Peace</span>
        </h2>
        <p className="mt-2 font-lato text-center text-sm text-reiki-body sm:text-base md:text-lg max-w-2xl mx-auto">
          Glimpses from sessions, nature, and the path of healing
        </p>
        {/* Collage: first image featured large, rest in grid */}
        <div className="mt-6 sm:mt-8 md:mt-10 grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-4 gap-3 sm:gap-4 md:gap-5 auto-rows-fr">
          {GALLERY_IMAGES.map((item, i) => (
            <div
              key={`${item.src}-${i}`}
              className={`
                group overflow-hidden rounded-xl border border-reiki-card-border bg-reiki-section shadow-sm
                transition-all duration-300 hover:shadow-md hover:border-reiki-accent/60
                ${i === 0 ? "col-span-2 row-span-2 min-h-[200px] sm:min-h-[240px] lg:min-h-[280px]" : "min-h-[120px] sm:min-h-[140px]"}
              `}
            >
              <div className={`relative h-full w-full overflow-hidden ${i === 0 ? "min-h-[200px] sm:min-h-[240px] lg:min-h-[280px]" : "min-h-[120px] sm:min-h-[140px]"}`}>
                <img
                  src={item.src}
                  alt={item.alt}
                  className="h-full w-full object-cover transition-transform duration-300 group-hover:scale-105"
                />
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
