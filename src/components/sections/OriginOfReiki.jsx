export default function OriginOfReiki() {
  return (
    <section className="flex min-h-screen flex-col bg-reiki-bg-stripe px-4 py-10 md:px-6 md:py-12">
      <div className="mx-auto flex flex-1 max-w-7xl flex-col justify-center">
        <div className="grid items-center gap-10 lg:grid-cols-2 lg:gap-16">
          <div className="relative order-2 flex justify-center lg:order-1">
            <div className="relative flex items-center justify-center">
              <div
                className=""

              />
              <img
                src="/character.png"
                className="relative z-10 h-72 w-72  md:h-[600px] md:w-[600px]"
              />
            </div>
          </div>
          <div className="order-1 lg:order-2">
            <h2 className="font-serif text-2xl text-black md:text-6xl mb-15">
              Origin of <span className="text-reiki-olive"> Reiki</span>
            </h2>
            <div className="mt-4 space-y-4 font-serif text-reiki-dark leading-relaxed md:text-lg">
              <p>
                It is believed that Reiki was first discovered by Mikao Usui in Japan during
                the mid-1800s. He developed the system after many years of study and
                meditation. Dr. Usui taught this system to students who then spread it
                around the world.
              </p>
              <p>
                The term &ldquo;Reiki&rdquo; is derived from two Japanese words: &ldquo;rei&rdquo;
                (universal) and &ldquo;ki&rdquo; (life force energy). Today Reiki is
                practiced worldwide as a gentle yet powerful form of energy healing.
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
