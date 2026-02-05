import { useState } from "react";
import LotusSectionIcon from "../LotusSectionIcon";

const QUOTE_TEXT =
  "Cras ut rutrum mauris, quis sodales eros. Aliquam leo leo, vehicula in mattis ut, dictum id ex. Nullam bibendum lorem in lacinia semper.";
const ATTRIBUTION = "By Emma Watson";

export default function Testimonial() {
  const [activeDot, setActiveDot] = useState(0);

  return (
    <section className="flex min-h-screen flex-col overflow-visible bg-white px-4 pt-0 pb-10 md:px-6 md:pb-12">
      <LotusSectionIcon />
      <div className="mx-auto flex flex-1 max-w-6xl flex-col justify-center">
        <div className="relative flex items-start gap-6 md:gap-8">
          {/* Quote + attribution (left-central) */}
          <blockquote className="flex-1">
            <div className="flex items-start gap-4">
              {/* Opening quote mark: solid green inside light green circular outline */}
              <span
                className="flex h-14 w-14 shrink-0 items-center justify-center rounded-full border-2 border-reiki-accent text-reiki-dark md:h-25 md:w-25"
                aria-hidden
              >
                <span className="font-serif text-3xl leading-none md:text-6xl">
                  &ldquo;
                </span>
              </span>
              <div>
                <p className="text-left font-serif italic leading-relaxed text-reiki-quote md:text-4xl">
                  {QUOTE_TEXT}
                </p>
                <cite className="mt-4 block text-left font-serif text-sm not-italic text-reiki-quote-attribution">
                  {ATTRIBUTION}
                </cite>
              </div>
            </div>
          </blockquote>

          {/* Vertical three dots (right) + faint line */}
          <div className="flex shrink-0 items-center gap-2">
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
