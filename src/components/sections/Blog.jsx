import LotusSectionIcon from "../LotusSectionIcon";

const BLOG_POSTS = [
  {
    title: "The Power of Mindful Healing",
    excerpt: "Discover how mindfulness and energy healing can work together to restore balance and bring peace to your daily life.",
    image: "/slide1.JPG",
    href: "#blog",
  },
  {
    title: "Finding Home Within: A TCK Journey",
    excerpt: "Exploring identity, belonging, and the unique path of third culture individuals toward self-acceptance and growth.",
    image: "/slide2.JPG",
    href: "#blog",
  },
  {
    title: "Reiki and Emotional Release",
    excerpt: "Understanding how Reiki supports the release of stored emotions and supports your journey to emotional freedom.",
    image: "/slide3.JPG",
    href: "#blog",
  },
  {
    title: "Cultivating Joy Through Practice",
    excerpt: "Simple rituals and practices to invite more joy, presence, and alignment into your mind, body, and spirit.",
    image: "/slide4.JPG",
    href: "#blog",
  },
  {
    title: "Bridging Cultures with Compassion",
    excerpt: "How holistic coaching can help you honor multiple cultures and create a life that feels authentically yours.",
    image: "/about.JPG",
    href: "#blog",
  },
  {
    title: "Sound and Silence in Healing",
    excerpt: "The role of healing music, guided journeys, and quiet reflection in deepening your connection to yourself.",
    image: "/layla3.JPG",
    href: "#blog",
  },
];

export default function Blog() {
  return (
    <section id="blog" className="flex min-h-screen flex-col overflow-visible bg-reiki-bg-stripe px-4 pt-0 pb-10 md:px-6 md:pb-12">
      <LotusSectionIcon />
      <div className="mx-auto flex flex-1 px-4 sm:px-6 md:px-8 lg:px-40 flex-col justify-center w-full ">
        <h2 className="mt-1 font-garamond text-center text-xl text-reiki-dark sm:text-2xl md:text-4xl lg:text-5xl xl:text-6xl leading-tight" style={{ fontFamily: "EB Garamond" }}>
          Pathways to Inner Peace
        </h2>
        <div className="mt-6 sm:mt-8 md:mt-10 grid gap-6 sm:gap-8 md:gap-10 sm:grid-cols-2 lg:grid-cols-3">
          {BLOG_POSTS.map((post) => (
            <article
              key={post.title}
              className="flex flex-col overflow-hidden rounded-xl border border-reiki-card-border bg-reiki-section shadow-md transition-shadow hover:shadow-lg"
            >
              <a href={post.href} className="block overflow-hidden rounded-t-xl">
                <div className="aspect-[4/3] w-full overflow-hidden">
                  <img
                    src={post.image}
                    alt=""
                    className="h-full w-full object-cover"
                  />
                </div>
              </a>
              <div className="flex flex-1 flex-col p-4 sm:p-5">
                <h3 className="font-garamond text-lg font-semibold text-reiki-dark sm:text-xl" style={{ fontFamily: "EB Garamond" }}>
                  <a href={post.href} className="hover:text-reiki-olive transition-colors">
                    {post.title}
                  </a>
                </h3>
                <p className="mt-2 font-lato text-sm leading-relaxed text-reiki-body sm:text-base">
                  {post.excerpt}
                </p>
                <a
                  href={post.href}
                  className="mt-4 inline-block self-start rounded-lg bg-reiki-dark px-6 py-2.5 font-sans text-sm font-semibold text-white transition hover:opacity-90"
                >
                  Read more
                </a>
              </div>
            </article>
          ))}
        </div>
      </div>
    </section>
  );
}
