import Link from "next/link";

const placeholderPosts = [
  {
    id: "1",
    title: "Getting Started with Next.js 16",
    excerpt:
      "Explore the latest features in Next.js 16 including enhanced server components, improved streaming, and more.",
    author: "Sarah Chen",
    authorSlug: "sarah-chen",
    date: "July 25, 2026",
    readTime: "5 min read",
    tags: ["Next.js", "React", "Web Dev"],
  },
  {
    id: "2",
    title: "The Art of Mindful Productivity",
    excerpt:
      "How to stay focused and produce meaningful work without burning out in the modern digital age.",
    author: "Marcus Johnson",
    authorSlug: "marcus-johnson",
    date: "July 23, 2026",
    readTime: "7 min read",
    tags: ["Productivity", "Mindfulness", "Lifestyle"],
  },
  {
    id: "3",
    title: "Building Accessible Web Applications",
    excerpt:
      "A practical guide to creating web experiences that work for everyone, regardless of ability.",
    author: "Elena Rodriguez",
    authorSlug: "elena-rodriguez",
    date: "July 20, 2026",
    readTime: "8 min read",
    tags: ["Accessibility", "CSS", "HTML"],
  },
];

export default function HomePage() {
  return (
    <div className="mx-auto max-w-6xl px-4 py-8 sm:px-6 sm:py-12">
      {/* Hero Section */}
      <section className="mb-12 text-center sm:mb-16 sm:text-left">
        <h1 className="text-3xl font-bold tracking-tight text-text-primary sm:text-4xl lg:text-5xl">
          Welcome to{" "}
          <span className="bg-gradient-to-r from-brand-600 to-accent bg-clip-text text-transparent">
            BlogVibe
          </span>
        </h1>
        <p className="mt-4 max-w-2xl text-lg text-text-secondary leading-relaxed">
          Discover stories, thinking, and expertise from writers on any topic
          that matters to you.
        </p>
        <div className="mt-6 flex flex-wrap justify-center gap-3 sm:justify-start">
          <Link
            href="/create"
            className="inline-flex items-center gap-2 rounded-xl bg-brand-600 px-6 py-2.5 text-sm font-semibold text-white shadow-sm transition-all hover:bg-brand-700 hover:shadow-md active:scale-[0.97]"
          >
            Start Writing
          </Link>
          <Link
            href="/about"
            className="inline-flex items-center gap-2 rounded-xl border border-border bg-surface px-6 py-2.5 text-sm font-semibold text-text-primary transition-all hover:bg-surface-secondary hover:border-brand-300 active:scale-[0.97]"
          >
            Learn More
          </Link>
        </div>
      </section>

      {/* Feed Header */}
      <div className="mb-6 flex items-center justify-between">
        <h2 className="text-xl font-bold text-text-primary">Latest Posts</h2>
        <span className="text-xs text-text-tertiary">{placeholderPosts.length} posts</span>
      </div>

      {/* Blog Posts Grid */}
      <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
        {placeholderPosts.map((post) => (
          <article
            key={post.id}
            className="group rounded-xl border border-border bg-surface p-6 shadow-card transition-all hover:shadow-dropdown hover:-translate-y-0.5"
          >
            {/* Tags */}
            <div className="mb-3 flex flex-wrap gap-1.5">
              {post.tags.map((tag) => (
                <span
                  key={tag}
                  className="rounded-md bg-brand-50 px-2.5 py-0.5 text-xs font-medium text-brand-700 dark:bg-brand-900/30 dark:text-brand-300"
                >
                  {tag}
                </span>
              ))}
            </div>

            {/* Title */}
            <Link href={`/blog/${post.id}`}>
              <h3 className="text-lg font-semibold leading-snug text-text-primary transition-colors group-hover:text-brand-600">
                {post.title}
              </h3>
            </Link>

            {/* Excerpt */}
            <p className="mt-2 line-clamp-3 text-sm leading-relaxed text-text-secondary">
              {post.excerpt}
            </p>

            {/* Meta */}
            <div className="mt-4 flex items-center justify-between border-t border-border-light pt-4">
              <Link
                href={`/profile/${post.authorSlug}`}
                className="flex items-center gap-2 text-sm text-text-secondary hover:text-brand-600 transition-colors"
              >
                <span className="flex h-6 w-6 items-center justify-center rounded-full bg-brand-100 text-[10px] font-bold text-brand-700 dark:bg-brand-800 dark:text-brand-200">
                  {post.author.charAt(0)}
                </span>
                <span>{post.author}</span>
              </Link>
              <span className="text-xs text-text-tertiary">{post.readTime}</span>
            </div>
          </article>
        ))}
      </div>
    </div>
  );
}
