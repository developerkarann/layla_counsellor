import { useState } from "react";
import LotusSectionIcon from "../LotusSectionIcon";

const QUOTE_TEXT =
  "The healing session I had with Layla was astonishing and the experience is hard to describe in words. During the session I was able to get rid of a lot of mental and physical baggage and tension. I even shed a few tears without feeling any sadness. Layla gave me a very good and trusting feeling right from the start, which enabled me to let myself go. At the end of the session, Layla gave her assessment of my current situation and brought back an experience from my past that was spot on – all in all it was an amazing, almost surreal experience.";
const ATTRIBUTION = "By Paul - Financial Consultant, Switzerland";

export default function Testimonial() {
  const [activeDot, setActiveDot] = useState(0);

  return (
    <section className="flex flex-col overflow-visible bg-white px-4   pt-0 pb-8 sm:pb-10 md:px-6 md:pb-22">
      <LotusSectionIcon />
      <div className="mx-auto flex flex-1 max-w-6xl flex-col justify-center w-full">
        <div className="relative flex flex-col sm:flex-row items-start gap-4 sm:gap-6 md:gap-8">
          {/* Quote + attribution (left-central) */}
          <blockquote className="flex-1 min-w-0">
            <div className="flex items-start gap-3 sm:gap-4">
              {/* Opening quote mark: solid green inside light green circular outline */}
              <span
                className="flex h-12 w-12 shrink-0 items-center justify-center rounded-full border-2 border-reiki-accent text-reiki-dark sm:h-14 sm:w-14 md:h-24 md:w-24"
                aria-hidden
              >
                <span className="font-serif text-2xl leading-none sm:text-3xl md:text-5xl lg:text-6xl">
                  &ldquo;
                </span>
              </span>
              <div className="min-w-0">
                <p className="text-left font-serif text-xs sm:text-lg md:text-xl lg:text-2xl italic leading-relaxed text-reiki-quote">
                  {QUOTE_TEXT}
                </p>
                <cite className="mt-3 sm:mt-4 block text-left font-serif text-xs sm:text-sm not-italic text-reiki-quote-attribution">
                  {ATTRIBUTION}
                </cite>
              </div>
            </div>
          </blockquote>

          {/* Vertical three dots (right) + faint line */}
          <div className="flex shrink-0 items-center gap-2 self-center sm:self-auto">
            <div className="flex flex-col items-center gap-2 py-2">
              {[0, 1, 2].map((i) => (
                <button
                  key={i}
                  type="button"
                  onClick={() => setActiveDot(i)}
                  className={`h-2.5 w-2.5 rounded-full transition-colors focus:outline-none focus:ring-2 focus:ring-reiki-dark/30 ${i === activeDot
                    ? "border-2 border-reiki-dark bg-transparent"
                    : "bg-reiki-dark"
                    }`}
                  aria-label={`View testimonial ${i + 1}`}
                  aria-pressed={i === activeDot}
                />
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
