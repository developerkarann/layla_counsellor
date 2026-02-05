import LotusSectionIcon from "../LotusSectionIcon";

export default function ReikiMeaning() {
  return (
    <section
      id="what-is-reiki"
      className="flex min-h-screen flex-col overflow-visible bg-white px-4 pt-0 pb-10 md:px-6 md:pb-12"
    >
      <LotusSectionIcon />
      <div className="mx-auto flex flex-1 max-w-7xl flex-col items-stretch gap-12 lg:grid lg:grid-cols-2 lg:items-center lg:gap-x-24">
        <div className="text-left font-sans">
          <h2 className="leading-tight font-garamond">
            <span className="block text-2xl font-normal md:text-3xl lg:text-7xl mb-3">
              <span className="text-reiki-olive">Reiki</span> means
            </span>
            <span className=" block text-2xl font-normal md:text-3xl lg:text-7xl mb-3">
              Universal Life
            </span>
            <span className="block text-2xl font-normal md:text-3xl lg:text-7xl mb-3">
              Force Energy
            </span>
          </h2>
        </div>
        <div className="max-w-xl lg:max-w-none">
          <p className="text-left font-lato text-base leading-relaxed text-reiki-body md:text-2xl">
            Reiki means &ldquo;Universal Life Force Energy&rdquo;. Reiki is an ancient healing
            art that works with the energy fields in and around the body. It helps restore
            emotional and physical wellbeing through gentle, non-invasive touch and supports
            the body&apos;s natural ability to heal.
          </p>
        </div>
      </div>
    </section>
  );
}
