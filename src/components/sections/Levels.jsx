import LotusSectionIcon from "../LotusSectionIcon";

const LEVEL_DESCRIPTION =
  "Praesent porttitor purus vel nunc rhoncus, at ornare turpis suscipit. Ut non condimentum tellus. Praesent in turpis eu sem mollis laoreet vehicula sit amet tellus.";

const LEVELS = [
  { title: "Level I", subtitle: "Healing Your Body", img: '/tree.png' },
  { title: "Level II - A", subtitle: "Healing Your Mind", img: '/tree2.png' },
  { title: "Level II - B", subtitle: "Alignment, Balance & Centeredness", img: '/tree3.png' },
];

function CardTreeBackground() {
  return (
    <div
      className="pointer-events-none absolute inset-0 overflow-hidden rounded-lg"
      aria-hidden
    >
      <div
        className="absolute inset-0 bg-bottom bg-no-repeat opacity-[0.14]"
        style={{
          backgroundImage: "url(/tree.png)",
          backgroundSize: "contain",
          backgroundPosition: "bottom center",
        }}
      />
    </div>
  );
}

export default function Levels() {
  return (
    <section id="levels" className="flex min-h-screen flex-col overflow-visible bg-white px-4 pt-0 pb-10 md:px-6 md:pb-12">
      <LotusSectionIcon />
      <div className="mx-auto flex flex-1 max-w-7xl flex-col justify-center">
        <h2 className="font-garamond text-center text-2xl text-reiki-dark md:text-6xl" style={{ fontFamily: 'EB Garamond' }}>
          Levels
        </h2>
        <div className="mt-10 grid gap-8 sm:grid-cols-2 lg:grid-cols-3">
          {LEVELS.map((level) => (
            <article
              key={level.title}
              style={{ backgroundImage: `url(${level.img})`, backgroundSize: "cover", backgroundPosition: "bottom center", fontFamily: 'Lato' }}
              className="relative flex flex-col rounded-lg border border-reiki-card-border bg-white px-6 py-8 text-center min-h-[500px] bg-cover bg-bottom bg-no-repeat justify-center items-center gap-10"
            >
              <CardTreeBackground />
              <h3 className="relative font-serif text-4xl font-medium text-reiki-dark" style={{ fontFamily: 'Garamond' }}>
                {level.title}
              </h3>
              <p className="relative mt-2 font-serif text-2xl font-bold leading-snug text-reiki-dark">
                {level.subtitle}
              </p>
              <p className="relative mt-5 flex-1 font-serif text-sm leading-relaxed text-reiki-level-desc px-15 ">
                {LEVEL_DESCRIPTION}
              </p>
              <a
                href="#contact"
                className="relative mt-6 inline-block rounded px-8 py-3 font-sans text-sm font-semibold text-white transition hover:opacity-90 bg-reiki-dark"
              >
                Send Enquiry
              </a>
            </article>
          ))}
        </div>
      </div>
    </section>
  );
}
