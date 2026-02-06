import { Link, useParams, useNavigate } from "react-router-dom";
import { getPostBySlug, getRelatedPosts } from "../data/blogPosts";

const AUTHOR_IMAGE = "/about.JPG";

function readingTime(body) {
  const words = body.join(" ").split(/\s+/).length;
  return Math.max(1, Math.ceil(words / 200));
}

export default function BlogDetailPage() {
  const { slug } = useParams();
  const navigate = useNavigate();
  const post = slug ? getPostBySlug(slug) : null;
  const related = post ? getRelatedPosts(post.slug, 3) : [];
  const pullQuote = post?.body?.[1] ?? post?.body?.[0] ?? "";

  if (!post) {
    return (
      <main className="min-h-screen bg-page-bg flex flex-col items-center justify-center px-4">
        <h1 className="font-garamond text-2xl text-reiki-dark" style={{ fontFamily: "EB Garamond" }}>Post not found</h1>
        <Link to="/blog" className="mt-4 text-reiki-olive hover:underline">← Back to Blog</Link>
      </main>
    );
  }

  const mins = readingTime(post.body);

  return (
    <main className="min-h-screen bg-page-bg">
      {/* Back bar */}
      <div className="border-b border-reiki-card-border bg-reiki-section">
        <div className="mx-auto max-w-3xl px-4 py-3 flex flex-wrap items-center justify-between gap-2">
          <Link
            to="/blog"
            className="inline-flex items-center gap-2 font-lato text-sm text-reiki-muted hover:text-reiki-dark transition-colors"
          >
            ← Back to Blog
          </Link>
          <span className="font-lato text-xs text-reiki-muted">{mins} min read</span>
        </div>
      </div>

      {/* Hero image */}
      <section className="relative aspect-[21/9] sm:aspect-[3/1] max-h-[55vh] w-full overflow-hidden bg-reiki-section">
        <img src={post.image} alt="" className="h-full w-full object-cover" />
        <div className="absolute inset-0 bg-gradient-to-t from-reiki-dark/60 via-reiki-dark/20 to-transparent" aria-hidden />
        <div className="absolute bottom-0 left-0 right-0 p-4 sm:p-6 md:p-8">
          <span className="font-lato text-xs text-white/80 uppercase tracking-wider">{post.category}</span>
          <h1 className="mt-1 font-garamond text-2xl text-white drop-shadow sm:text-3xl md:text-4xl lg:text-5xl leading-tight" style={{ fontFamily: "EB Garamond" }}>
            {post.title}
          </h1>
          <p className="mt-2 font-lato text-sm text-white/90">By {post.author} · {post.date}</p>
        </div>
      </section>

      {/* Article */}
      <article className="mx-auto max-w-3xl px-4 py-8 sm:py-12">
        <div className="space-y-6 border-t border-reiki-card-border pt-8">
          {post.body.map((paragraph, i) => (
            <p key={i} className="font-lato text-reiki-text leading-relaxed sm:text-lg">
              {paragraph}
            </p>
          ))}
        </div>

        {/* Pull quote */}
        {pullQuote && (
          <aside className="my-10 sm:my-12 rounded-2xl border-l-4 border-reiki-olive bg-reiki-bg-stripe px-6 py-6 sm:px-8 sm:py-8">
            <p className="font-serif text-lg italic text-reiki-quote sm:text-xl leading-relaxed" style={{ fontFamily: "Lora" }}>
              “{pullQuote}”
            </p>
          </aside>
        )}

        {/* Author box */}
        <div className="mt-10 flex flex-wrap items-center gap-4 rounded-2xl border border-reiki-card-border bg-reiki-section p-6">
          <div className="h-16 w-16 shrink-0 overflow-hidden rounded-full border-2 border-reiki-accent">
            <img src={AUTHOR_IMAGE} alt={post.author} className="h-full w-full object-cover object-top" />
          </div>
          <div>
            <p className="font-garamond text-lg font-semibold text-reiki-dark" style={{ fontFamily: "EB Garamond" }}>{post.author}</p>
            <p className="font-lato text-sm text-reiki-body">Practitioner · Coach · Writer</p>
            <Link to="/#about" className="mt-1 inline-block font-lato text-sm font-semibold text-reiki-olive hover:underline">
              About Layla →
            </Link>
          </div>
        </div>

        {/* Navigation */}
        <div className="mt-10 flex flex-wrap items-center gap-4 border-t border-reiki-card-border pt-8">
          <Link
            to="/blog"
            className="inline-block rounded-lg bg-reiki-dark px-6 py-2.5 font-sans text-sm font-semibold text-white transition hover:opacity-90"
          >
            ← All posts
          </Link>
          <button
            type="button"
            onClick={() => navigate(-1)}
            className="font-lato text-sm text-reiki-muted hover:text-reiki-dark transition-colors"
          >
            Go back
          </button>
        </div>
      </article>

      {/* Related posts */}
      {related.length > 0 && (
        <section className="bg-reiki-bg-stripe border-t border-reiki-accent/40 px-4 py-12 md:py-16">
          <div className="mx-auto max-w-5xl">
            <h2 className="font-garamond text-xl text-reiki-dark sm:text-2xl" style={{ fontFamily: "EB Garamond" }}>
              You might also <span className="text-reiki-olive">like</span>
            </h2>
            <div className="mt-6 grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
              {related.map((p) => (
                <Link
                  key={p.slug}
                  to={`/blog/${p.slug}`}
                  className="group overflow-hidden rounded-xl border border-reiki-card-border bg-reiki-section shadow-sm transition-shadow hover:shadow-md"
                >
                  <div className="aspect-[16/10] overflow-hidden">
                    <img src={p.image} alt="" className="h-full w-full object-cover transition-transform duration-300 group-hover:scale-105" />
                  </div>
                  <div className="p-4">
                    <span className="font-lato text-xs text-reiki-muted">{p.category}</span>
                    <h3 className="mt-1 font-garamond font-semibold text-reiki-dark group-hover:text-reiki-olive transition-colors line-clamp-2" style={{ fontFamily: "EB Garamond" }}>
                      {p.title}
                    </h3>
                  </div>
                </Link>
              ))}
            </div>
          </div>
        </section>
      )}

      {/* CTA strip */}
      <section className="bg-white border-t border-reiki-card-border px-4 py-10 md:py-12">
        <div className="mx-auto max-w-3xl text-center">
          <p className="font-serif text-lg italic text-reiki-quote" style={{ fontFamily: "Lora" }}>
            “Every moment holds the possibility of peace.”
          </p>
          <Link
            to="/#contact"
            className="mt-4 inline-block font-lato text-sm font-semibold text-reiki-dark hover:text-reiki-olive transition-colors"
          >
            Get in touch →
          </Link>
        </div>
      </section>
    </main>
  );
}
