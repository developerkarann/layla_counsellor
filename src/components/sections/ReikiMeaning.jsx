import LotusSectionIcon from "../LotusSectionIcon";



export default function ReikiMeaning() {
  return (
    <section
      id="what-is-reiki"
      className="flex md:min-h-screen flex-col overflow-visible bg-white px-4 pt-0 pb-10 md:px-6 md:pb-12"
    >
      <LotusSectionIcon />
      <div className="mx-auto flex flex-1 w-full max-w-6xl px-4 sm:px-6 md:px-8 flex-col items-center text-center gap-8 sm:gap-10 lg:gap-0 lg:grid lg:grid-cols-2 lg:items-center lg:gap-x-10 lg:text-left lg:items-stretch">
        <div className="w-full max-w-xl lg:max-w-none flex flex-col items-center lg:items-start">
          <h2 className="leading-tight font-garamond text-2xl font-normal sm:text-3xl md:text-4xl lg:text-6xl xl:text-7xl mb-3 sm:mb-4" style={{ fontFamily: "EB Garamond" }}>
            <span className="block mb-1 sm:mb-2">
              Holistic <span className="text-reiki-olive">healing</span> for
            </span>
            <span className="block">
              empowered living
            </span>
          </h2>
          <p className="font-lato text-sm leading-relaxed text-reiki-body sm:text-base md:text-xl lg:text-2xl mt-4 md:mt-5 max-w-md lg:max-w-none">
            Create the life you want to live.
          </p>
          <a
            href="/about"
            className="mt-6 sm:mt-8 inline-flex items-center justify-center rounded-lg px-6 py-3 sm:px-8 sm:py-3.5 font-sans text-sm sm:text-base font-semibold text-white transition hover:opacity-90 bg-reiki-dark shadow-md hover:shadow-lg"
          >
            Learn more
          </a>
        </div>
        <div className="w-full max-w-xl lg:max-w-none text-center lg:text-left">
          <p className="font-lato text-sm leading-relaxed text-reiki-body sm:text-base md:text-lg mb-3 sm:mb-4">
            My mission is to ignite self-empowerment and self-healing through quantum shifts of consciousness. I believe in the ripple effect of all things: one deep positive change in a person can create boundless positive outcome far beyond this one person
          </p>
          <p className="font-lato text-sm leading-relaxed text-reiki-body sm:text-base md:text-lg mb-3 sm:mb-4">
            My approach to achieve this goal is rooted in the consideration that you are a conscious and intelligent being with infinite potential and powers. My ethics and values are founded on the respect of your free choice and inner knowing of what is good for you. On that basis, it is a privilege to accompany you and witness your blossoming, your joy, your victories but also help you overcome sorrows, loss, hurts and transcend struggles.
          </p>
        </div>
      </div>
    </section>
  );
}
