import { useState, useEffect } from "react";

const SLIDES = [
  {
    alt: "Reiki practitioner using a pendulum during a healing session",
    placeholder:
      "/slide1.JPG",
  },
  {
    alt: "Woman meditating with hands near head in a serene room",
    placeholder:
      "/slide2.JPG",
  },
  {
    alt: "Calm healing space with natural light",
    placeholder:
      "/slide3.JPG",
  },
  {
    alt: "Calm healing space with natural light",
    placeholder:
      "/slide4.JPG",
  },
  {
    alt: "Calm healing space with natural light",
    placeholder:
      "/slide5.JPG",
  },
  {
    alt: "Calm healing space with natural light",
    placeholder:
      "/slide6.JPG",
  },
  {
    alt: "Calm healing space with natural light",
    placeholder:
      "/slide7.JPG",
  },
  {
    alt: "Calm healing space with natural light",
    placeholder:
      "/slide8.JPG",
  },
  {
    alt: "Calm healing space with natural light",
    placeholder:
      "/slide9.JPG",
  },
];

const slideCount = SLIDES.length;

export default function HeroSlider() {
  const [current, setCurrent] = useState(0);
  const currentIndex = current % slideCount;

  useEffect(() => {
    const t = setInterval(() => {
      setCurrent((c) => (c + 1) % slideCount);
    }, 2000);
    return () => clearInterval(t);
  }, []);

  const goToSlide = (i) => setCurrent(i);

  return (
    <section id="home" className="bg-reiki-bg-stripe px-3 sm:px-4 py-4 sm:py-6 md:px-6 md:py-10">
      <div className="mx-auto max-w-[1450px]">
        <div className="overflow-hidden rounded-lg bg-reiki-section shadow-md">
          <div className="relative aspect-[4/3] sm:aspect-[16/9] w-full md:aspect-[2.2/1]">
            {SLIDES.map((slide, i) => {
              const isActive = i === currentIndex;
              return (
                <div
                  key={`slide-${i}-${slide.placeholder}`}
                  className={`absolute inset-0 transition-opacity duration-500 ${isActive ? "z-10 opacity-100" : "z-0 opacity-0 pointer-events-none"}`}
                  aria-hidden={!isActive}
                >
                  <img
                    src={slide.placeholder}
                    alt={slide.alt}
                    className="h-full w-full object-cover"
                    loading={i === 0 ? "eager" : "lazy"}
                  />
                </div>
              );
            })}
          </div>
        </div>
        {/* Pagination dots - one per slide */}
        <div className="mt-4 flex flex-wrap justify-center gap-2">
          {SLIDES.map((_, i) => (
            <button
              key={`dot-${i}`}
              type="button"
              onClick={() => goToSlide(i)}
              className={`h-2.5 w-2.5 rounded-full transition-colors shrink-0 ${i === currentIndex ? "bg-reiki-dark" : "border border-reiki-dark/40 bg-white"}`}
              aria-label={`Go to slide ${i + 1}`}
              aria-current={i === currentIndex ? "true" : undefined}
            />
          ))}
        </div>
      </div>
    </section>
  );
}
