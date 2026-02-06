import { Link } from "react-router-dom";
import LotusSectionIcon from "../components/LotusSectionIcon";
import { BLOG_POSTS, BLOG_CATEGORIES } from "../data/blogPosts";

const HERO_IMAGE = "/slide1.JPG";
const AUTHOR_IMAGE = "/about.JPG";

export default function BlogPage() {
  const [featured, second, third, ...rest] = BLOG_POSTS;

  return (
    <main className="min-h-screen bg-page-bg">
      {/* Hero */}
      <section className="relative min-h-[45vh] sm:min-h-[50vh] flex items-end justify-center overflow-hidden">
        <img src={HERO_IMAGE} alt="" className="absolute inset-0 h-full w-full object-cover" />
        <div className="absolute inset-0 bg-gradient-to-b from-reiki-dark/30 via-reiki-dark/50 to-reiki-dark/70" aria-hidden />
        <div className="relative z-10 w-full max-w-7xl px-4 pb-14 pt-24 sm:pb-20 md:pb-24 text-center">
          <div className="inline-flex flex-col items-center">
            <span className="font-script text-2xl text-white/90 sm:text-3xl" style={{ fontFamily: "Dancing Script" }}>Layla</span>
            <span className="mt-1 block h-px w-12 bg-white/60" aria-hidden />
          </div>
          <h1 className="mt-4 font-garamond text-4xl font-normal text-white sm:text-5xl md:text-6xl lg:text-7xl" style={{ fontFamily: "EB Garamond" }}>
            Blog
          </h1>
          <p className="mt-4 font-lato text-base text-white/90 sm:text-lg max-w-xl mx-auto">
            Reflections on healing, presence, and the path to inner peace
          </p>
        </div>
      </section>

      {/* Topics strip */}
      <section className="bg-reiki-bg-stripe border-y border-reiki-accent/40 py-6">
        <div className="mx-auto max-w-7xl px-4">
          <p className="font-lato text-center text-xs font-semibold uppercase tracking-wider text-reiki-muted mb-4">Topics we explore</p>
          <div className="flex flex-wrap justify-center gap-2 sm:gap-3">
            {BLOG_CATEGORIES.map((cat) => (
              <span
                key={cat}
                className="rounded-full border border-reiki-card-border bg-reiki-section px-4 py-2 font-lato text-sm text-reiki-dark shadow-sm"
              >
                {cat}
              </span>
            ))}
          </div>
        </div>
      </section>

      {/* Intro quote */}
      <section className="bg-white py-10 md:py-14">
        <div className="mx-auto max-w-3xl px-4 text-center">
          <p className="font-serif text-lg italic text-reiki-quote sm:text-xl md:text-2xl leading-relaxed" style={{ fontFamily: "Lora" }}>
            “Words from the heart, for the heart. Here you’ll find thoughts on Reiki, mindfulness, third culture life, and the art of coming home to yourself.”
          </p>
        </div>
      </section>

      {/* Featured post */}
      <section className="bg-reiki-bg-stripe px-4 py-12 md:py-16">
        <LotusSectionIcon />
        <div className="mx-auto max-w-7xl">
          <span className="font-lato text-xs font-semibold uppercase tracking-wider text-reiki-olive">Featured</span>
          <article className="mt-4 overflow-hidden rounded-2xl border-2 border-reiki-olive/30 bg-reiki-section shadow-lg md:flex">
            <Link to={`/blog/${featured.slug}`} className="block md:w-1/2 lg:w-[55%] shrink-0 relative overflow-hidden rounded-t-2xl md:rounded-l-2xl md:rounded-r-none">
              <div className="aspect-[4/3] md:aspect-auto md:h-full md:min-h-[380px]">
                <img src={featured.image} alt="" className="h-full w-full object-cover transition-transform duration-500 hover:scale-105" />
              </div>
              <span className="absolute top-4 left-4 rounded-full bg-white/90 px-3 py-1 font-lato text-xs font-medium text-reiki-dark shadow">
                {featured.category}
              </span>
            </Link>
            <div className="flex flex-col justify-center p-6 sm:p-8 md:w-1/2 lg:w-[45%] rounded-b-2xl md:rounded-r-2xl md:rounded-l-none">
              <span className="font-lato text-sm text-reiki-muted">{featured.date}</span>
              <h2 className="mt-2 font-garamond text-2xl text-reiki-dark sm:text-3xl md:text-4xl leading-tight" style={{ fontFamily: "EB Garamond" }}>
                <Link to={`/blog/${featured.slug}`} className="hover:text-reiki-olive transition-colors">
                  {featured.title}
                </Link>
              </h2>
              <p className="mt-4 font-lato text-reiki-body leading-relaxed sm:text-lg">
                {featured.excerpt}
              </p>
              <Link
                to={`/blog/${featured.slug}`}
                className="mt-6 inline-block self-start rounded-lg bg-reiki-dark px-6 py-3 font-sans text-sm font-semibold text-white transition hover:opacity-90"
              >
                Read more
              </Link>
            </div>
          </article>
        </div>
      </section>

      {/* Latest two – horizontal cards */}
      <section className="bg-white px-4 py-12 md:py-16">
        <div className="mx-auto max-w-7xl">
          <h2 className="font-garamond text-xl text-reiki-dark sm:text-2xl md:text-3xl" style={{ fontFamily: "EB Garamond" }}>
            Latest <span className="text-reiki-olive">stories</span>
          </h2>
          <div className="mt-8 grid gap-8 md:grid-cols-2">
            {[second, third].map((post) => (
              <article
                key={post.slug}
                className="group overflow-hidden rounded-2xl border border-reiki-card-border bg-reiki-section shadow-sm md:flex md:flex-row"
              >
                <Link to={`/blog/${post.slug}`} className="block md:w-[40%] shrink-0 overflow-hidden rounded-t-2xl md:rounded-l-2xl md:rounded-tr-none">
                  <div className="aspect-[16/10] md:aspect-auto md:h-full md:min-h-[220px]">
                    <img src={post.image} alt="" className="h-full w-full object-cover transition-transform duration-300 group-hover:scale-105" />
                  </div>
                </Link>
                <div className="flex flex-col justify-center p-5 sm:p-6 md:w-[60%]">
                  <span className="font-lato text-xs text-reiki-muted">{post.date} · {post.category}</span>
                  <h3 className="mt-1 font-garamond text-lg font-semibold text-reiki-dark sm:text-xl" style={{ fontFamily: "EB Garamond" }}>
                    <Link to={`/blog/${post.slug}`} className="hover:text-reiki-olive transition-colors">
                      {post.title}
                    </Link>
                  </h3>
                  <p className="mt-2 font-lato text-sm text-reiki-body line-clamp-2">
                    {post.excerpt}
                  </p>
                  <Link to={`/blog/${post.slug}`} className="mt-3 font-sans text-sm font-semibold text-reiki-dark hover:text-reiki-olive transition-colors">
                    Read more →
                  </Link>
                </div>
              </article>
            ))}
          </div>
        </div>
      </section>

      {/* Pull quote / divider */}
      <section className="bg-reiki-bg-stripe border-y border-reiki-accent/40 py-10 md:py-14">
        <div className="mx-auto max-w-4xl px-4">
          <div className="flex flex-col items-center gap-4">
            <span className="text-reiki-olive" aria-hidden>◆</span>
            <p className="font-serif text-center text-lg italic text-reiki-quote sm:text-xl" style={{ fontFamily: "Lora" }}>
              Healing is not something we do so much as something we allow.
            </p>
            <span className="text-reiki-olive text-sm" aria-hidden>— From the blog</span>
          </div>
        </div>
      </section>

      {/* More stories grid */}
      <section className="bg-white px-4 py-12 md:py-16 lg:py-20">
        <div className="mx-auto max-w-7xl">
          <h2 className="font-garamond text-center text-xl text-reiki-dark sm:text-2xl md:text-3xl" style={{ fontFamily: "EB Garamond" }}>
            More <span className="text-reiki-olive">reflections</span>
          </h2>
          <div className="mt-8 grid gap-6 sm:grid-cols-2 lg:grid-cols-3 sm:gap-8">
            {rest.map((post, i) => (
              <article
                key={post.slug}
                className={`flex flex-col overflow-hidden rounded-xl border bg-reiki-section shadow-sm transition-all hover:shadow-md ${i === 0 ? "border-l-4 border-l-reiki-olive border-reiki-card-border" : "border-reiki-card-border"
                  }`}
              >
                <Link to={`/blog/${post.slug}`} className="block overflow-hidden rounded-t-xl">
                  <div className="aspect-[4/3]">
                    <img src={post.image} alt="" className="h-full w-full object-cover transition-transform duration-300 hover:scale-105" />
                  </div>
                </Link>
                <div className="flex flex-1 flex-col p-4 sm:p-5">
                  <span className="font-lato text-xs text-reiki-muted">{post.date} · {post.category}</span>
                  <h3 className="mt-1 font-garamond text-lg font-semibold text-reiki-dark sm:text-xl" style={{ fontFamily: "EB Garamond" }}>
                    <Link to={`/blog/${post.slug}`} className="hover:text-reiki-olive transition-colors line-clamp-2">
                      {post.title}
                    </Link>
                  </h3>
                  <p className="mt-2 font-lato text-sm text-reiki-body line-clamp-3">
                    {post.excerpt}
                  </p>
                  <Link
                    to={`/blog/${post.slug}`}
                    className="mt-4 inline-block self-start font-sans text-sm font-semibold text-reiki-dark hover:text-reiki-olive transition-colors"
                  >
                    Read more →
                  </Link>
                </div>
              </article>
            ))}
          </div>
        </div>
      </section>

      {/* About the author / Why I write */}
      <section className="bg-reiki-bg-stripe border-t border-reiki-accent/40 px-4 py-12 md:py-16">
        <div className="mx-auto max-w-4xl">
          <div className="overflow-hidden rounded-2xl border border-reiki-card-border bg-reiki-section shadow-md md:flex">
            <div className="relative h-48 w-full shrink-0 md:h-auto md:w-72 overflow-hidden">
              <img src={AUTHOR_IMAGE} alt="Layla" className="h-full w-full object-cover object-top" />
              <div className="absolute inset-0 bg-reiki-dark/10 md:bg-transparent" aria-hidden />
            </div>
            <div className="p-6 sm:p-8 md:flex-1">
              <h2 className="font-garamond text-xl text-reiki-dark sm:text-2xl" style={{ fontFamily: "EB Garamond" }}>
                Why I <span className="text-reiki-olive">write</span>
              </h2>
              <p className="mt-3 font-lato text-reiki-body leading-relaxed">
                This blog is a space where I share what I learn from my clients, my practice, and the journey of bridging cultures and healing. I hope these words meet you where you are and remind you that you are not alone on the path.
              </p>
              <Link to="/#about" className="mt-4 inline-block font-sans text-sm font-semibold text-reiki-dark hover:text-reiki-olive transition-colors">
                More about me →
              </Link>
            </div>
          </div>
        </div>
      </section>

      {/* Stay in the loop */}
      <section className="bg-white border-t border-reiki-card-border px-4 py-12 md:py-16">
        <div className="mx-auto max-w-2xl text-center">
          <h2 className="font-garamond text-xl text-reiki-dark sm:text-2xl" style={{ fontFamily: "EB Garamond" }}>
            Stay in the <span className="text-reiki-olive">loop</span>
          </h2>
          <p className="mt-3 font-lato text-reiki-body">
            New reflections on healing and presence. No spam, only heart.
          </p>
          <Link
            to="/#contact"
            className="mt-6 inline-block rounded-lg bg-reiki-dark px-8 py-3 font-sans text-sm font-semibold text-white transition hover:opacity-90"
          >
            Get in touch
          </Link>
        </div>
      </section>
    </main>
  );
}
