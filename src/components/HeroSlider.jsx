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
      "/slide4.JPG",
  },
  {
    alt: "Calm healing space with natural light",
    placeholder:
      "/slide3.JPG",
  },
];

export default function HeroSlider() {
  const [current, setCurrent] = useState(0);

  useEffect(() => {
    const t = setInterval(() => {
      setCurrent((c) => (c + 1) % SLIDES.length);
    }, 5000);
    return () => clearInterval(t);
  }, []);

  return (
    <section id="home" className="bg-reiki-bg-stripe px-3 sm:px-4 py-4 sm:py-6 md:px-6 md:py-10">
      <div className="mx-auto max-w-[1450px]">
        <div className="overflow-hidden rounded-lg bg-reiki-section shadow-md">
          <div className="relative aspect-[4/3] sm:aspect-[16/9] w-full md:aspect-[2.2/1]">
            {SLIDES.map((slide, i) => (
              <div
                key={i}
                className={`absolute inset-0 transition-opacity duration-500 ${i === current ? "opacity-100" : "opacity-0"
                  }`}
              >
                <img
                  src={slide.placeholder}
                  alt={slide.alt}
                  className="h-full w-full object-cover"
                />
              </div>
            ))}
          </div>
        </div>
        {/* Pagination dots */}
        <div className="mt-4 flex justify-center gap-2">
          {SLIDES.map((_, i) => (
            <button
              key={i}
              type="button"
              onClick={() => setCurrent(i)}
              className={`h-2.5 w-2.5 rounded-full transition-colors ${i === current ? "bg-reiki-dark" : "border border-reiki-dark/40 bg-white"
                }`}
              aria-label={`Go to slide ${i + 1}`}
            />
          ))}
        </div>
      </div>
    </section>
  );
}
