import LotusSectionIcon from "../LotusSectionIcon";

const LEFT_BENEFITS = [
  "Receive healing energy, Boost immune strength, And reduce stress in daily life.",
  "Eliminate spiritual and emotional blockage, Enhance self-love in daily life.",
  "Reactivate balance and restore energetic body.",
  "Improve daily activities by Following your dreams With confidence.",
];

const RIGHT_BENEFITS = [
  "Remove restricted area for health of mental, emotional and physical bodies.",
  "Create a positive impact on your psyche.",
  "Helps you keep the uninterrupted flow of energy in your body.",
  "Everything you desire feels achievable, you will get a compassionate touch.",
];

function BenefitIcon() {
  return (
    <span
      className="mt-0.5 flex h-6 w-6 shrink-0 items-center justify-center rounded-full bg-reiki-benefit-icon"
      aria-hidden
    >
      <svg
        viewBox="0 0 24 24"
        className="h-3.5 w-3.5 text-reiki-dark"
        fill="none"
        stroke="currentColor"
        strokeWidth="2.5"
        strokeLinecap="round"
        strokeLinejoin="round"
      >
        <path d="M20 6L9 17l-5-5" />
      </svg>
    </span>
  );
}

function BenefitItem({ text }) {
  return (
    <li className="flex gap-7 text-left px-5" style={{ fontFamily: 'Lato' }}>
      <BenefitIcon />
      <span className="font-lato text-reiki-dark text-lg leading-relaxed" style={{ fontFamily: 'Lato' }}>
        {text}
      </span>
    </li>
  );
}

export default function Benefits() {
  return (
    <section id="benefits" className="flex min-h-screen flex-col overflow-visible bg-white px-4 pt-0 pb-10 md:px-6 md:pb-12">
      <LotusSectionIcon />
      <div className="mx-auto flex flex-1 max-w-7xl flex-col justify-center">
        {/* Optional category label – subtle */}
        <h2 className="mt-1 text-center text-2xl leading-tight text-reiki-dark md:text-6xl font-garamond" style={{ fontFamily: 'EB Garamond' }}>
          Benefits
        </h2>
        {/* Tree structure: left column | central arched image | right column */}
        <div className="mt-10 grid gap-8 lg:grid-cols-3 lg:gap-10 lg:items-start">
          {/* Left benefits column – same structure as right */}
          <ul className="space-y-10 lg:pt-36">
            {LEFT_BENEFITS.map((text, i) => (
              <BenefitItem key={i} text={text} />
            ))}
          </ul>
          {/* Central arched image */}
          <div className="flex justify-center">
            <div className="relative w-full max-w-[480px] overflow-hidden">
              <div className="aspect-[3/4] w-full overflow-hidden rounded-t-[13rem] bg-reiki-section-alt shadow-md">
                <img
                  src="https://images.unsplash.com/photo-1545205597-3d9d02c29597?w=500&q=80"
                  alt="Reiki session: practitioner with hands near recipient's head"
                  className="h-full w-full object-cover"
                />
              </div>
            </div>
          </div>
          {/* Right benefits column – mirror of left */}
          <ul className="space-y-10 lg:pt-36">
            {RIGHT_BENEFITS.map((text, i) => (
              <BenefitItem key={i} text={text} />
            ))}
          </ul>
        </div>
      </div>
    </section>
  );
}
