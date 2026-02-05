export default function AboutJane() {
  return (
    <section id="about" className="flex min-h-screen flex-col bg-reiki-bg-stripe px-4 py-10 md:px-6 md:py-12">
      <div className="mx-auto flex flex-1 max-w-7xl flex-col justify-center">
        <div className="grid items-center gap-10 lg:grid-cols-2 lg:gap-0">
          <div className="flex justify-center lg:justify-start">
            <div className="relative h-72 w-56 shrink-0 md:h-[600px] md:w-[500px]">
              <img
                src="https://wecarethemes.com/lailla-choug/wp-content/uploads/2025/01/welcome-image.jpg"
                alt="Jane, Reiki practitioner"
                className="h-full w-full rounded-full object-cover object-top shadow-lg"
              />
            </div>
          </div>
          <div>
            <h2 className="font-garamond text-2xl leading-tight text-reiki-dark md:text-6xl mb-10">

              Hi, my name is <span className=" text-reiki-olive"> Layla</span>
            </h2>
            <p className="mt-6 font-lato text-reiki-dark leading-relaxed md:text-lg">
              I am a trained practitioner for shamanic energy medicine, medical Qigong and life coaching. My work bridges cultures, traditions, religions and identities. It holds unconditional respect of who you are and where you are from. I have studied some of the most integrative systems of healing to offer a unique and holistic approach that is altogether physical, emotional, mental and spiritual.
            </p>
            <p className="mt-6 font-lato text-reiki-dark leading-relaxed md:text-lg">
              The techniques shaping my work reflect an attuned understanding of the complexities of the human life journey, whether it catalyzes a search for meaning and purpose, a desire to connect more deeply and authentically with others, or a need to heal and find peace amidst personal crises and identity struggles in cross-cultural and rapidly changing environments.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
}
