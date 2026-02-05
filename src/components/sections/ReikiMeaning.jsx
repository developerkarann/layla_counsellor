import LotusSectionIcon from "../LotusSectionIcon";



export default function ReikiMeaning() {
  return (
    <section
      id="what-is-reiki"
      className="flex min-h-screen flex-col overflow-visible bg-white px-4 pt-0 pb-10 md:px-6 md:pb-12"
    >
      <LotusSectionIcon />
      <div className="mx-auto flex flex-1 px-4 sm:px-6 md:px-8 lg:px-40 flex-col items-stretch gap-8 sm:gap-10 lg:gap-12 lg:grid lg:grid-cols-2 lg:items-center lg:gap-x-24">
        <div className="text-left font-sans">
          <h2 className="leading-tight font-garamond">
            <span className="block text-xl font-normal sm:text-2xl md:text-3xl lg:text-7xl mb-2 sm:mb-3">
              Holistic  <span className="text-reiki-olive">healing</span> for
            </span>
            <span className="block text-xl font-normal sm:text-2xl md:text-3xl lg:text-7xl mb-2 sm:mb-3">
              empowered living
            </span>
          </h2>
          <p className="text-left font-lato text-sm leading-relaxed text-reiki-body sm:text-base md:text-2xl mt-4 md:mt-5">
            Create the life you want to live !
          </p>

          <button className="relative mt-6 sm:mt-8 inline-block rounded px-6 py-2.5 sm:px-8 sm:py-3 font-sans text-sm sm:text-base font-semibold text-white transition hover:opacity-90 bg-reiki-dark">
            Learn more
          </button>
        </div>
        <div className="max-w-xl lg:max-w-none">
          <p className="text-left font-lato text-sm leading-relaxed text-reiki-body sm:text-base md:text-lg mb-3 sm:mb-4">
            My mission is to ignite self-empowerment and self-healing through quantum shifts of consciousness. I believe in the ripple effect of all things: one deep positive change in a person can create boundless positive outcome far beyond this one person
          </p>
          <p className="text-left font-lato text-sm leading-relaxed text-reiki-body sm:text-base md:text-lg mb-3 sm:mb-4" >
            My approach to achieve this goal is rooted in the consideration that you are a conscious and intelligent being with infinite potential and powers. My ethics and values are founded on the respect of your free choice and inner knowing of what is good for you. On that basis, it is a privilege to accompany you and witness your blossoming, your joy, your victories but also help you overcome sorrows, loss, hurts and transcend struggles. It is an honor to guide you towards your alignement and self-realisation. In this journey, we will together cultivate the power and energy of love.
          </p>
          <p className="text-left font-lato text-sm leading-relaxed text-reiki-body sm:text-base md:text-lg mb-3 sm:mb-4" >
            Love and Freedom are at the center of my practice. It is the means, the beginning and the end. It is the everlasting journey to open, embrace, evolve, ignite, expand, transform, fall and get up, surrender, accept and alchemize, in few words to feel unity in oneness and flow in life with ease. The Love Frequency carries a light of infinite powers whose qualities are the very pathways helping you align with your pure inner being, the universal energy of love and natural life forces.
          </p>
        </div>
      </div>
    </section>
  );
}
