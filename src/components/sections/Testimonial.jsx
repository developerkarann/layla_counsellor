import LotusSectionIcon from "../LotusSectionIcon";
import { TESTIMONIAL as TESTIMONIAL_DATA } from "../../data/aboutData";

export default function Testimonial() {
  return (
    <section
      id="testimonial"
      className="relative overflow-hidden bg-white py-12 md:py-16"
      aria-labelledby="testimonial-heading"
    >
      <LotusSectionIcon />
      <div className="mx-auto max-w-6xl px-4 sm:px-5 md:px-6">
        <header className="text-center mb-8 md:mb-10">
          <h2
            id="testimonial-heading"
            className="font-garamond text-2xl text-reiki-dark sm:text-3xl md:text-4xl"
            style={{ fontFamily: "EB Garamond" }}
          >
            Words from <span className="text-reiki-olive">clients</span>
          </h2>
        </header>
        <div className="grid grid-cols-1 md:grid-cols-12 md:min-h-[360px] gap-0">
          <figure className="relative md:col-span-5 order-2 md:order-1 min-h-[240px] md:min-h-0 m-0 overflow-hidden rounded-2xl border border-reiki-card-border shadow-sm">
            <img
              src="/about.JPG"
              alt=""
              className="absolute inset-0 h-full w-full object-cover object-center"
            />
          </figure>
          <div className="relative md:col-span-7 order-1 md:order-2 flex items-center py-8 md:py-12 px-0 md:pl-8 lg:pl-10 md:pr-4">
            <figure className="m-0 w-full">
              <blockquote className="relative border-l-4 border-reiki-olive pl-6 md:pl-7">
                <span className="absolute -left-1 md:left-0 -top-1 font-serif text-5xl sm:text-6xl md:text-7xl text-reiki-olive/20 leading-none select-none" aria-hidden>&ldquo;</span>
                <p className="relative font-serif text-base sm:text-lg md:text-xl italic text-reiki-quote leading-relaxed" style={{ fontFamily: "Lora" }}>
                  {TESTIMONIAL_DATA.quote}
                </p>
                <cite className="mt-4 md:mt-5 block font-lato text-sm not-italic text-reiki-quote-attribution font-medium">
                  {TESTIMONIAL_DATA.attribution}
                </cite>
              </blockquote>
            </figure>
          </div>
        </div>
      </div>
    </section>
  );
}
