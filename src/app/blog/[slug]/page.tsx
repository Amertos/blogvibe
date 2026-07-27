import Link from "next/link";
import { notFound } from "next/navigation";

// Placeholder data — will be replaced by real CMS/data source
const posts = [
  {
    id: "1",
    title: "Getting Started with Next.js 16",
    content: `
      <p>Next.js 16 introduces a host of exciting features that make building modern web applications faster and more enjoyable than ever before.</p>
      <p>In this post, we'll explore the key highlights including enhanced server components, improved streaming capabilities, and the new caching model.</p>
      <h2>Enhanced Server Components</h2>
      <p>Server Components have been a game-changer since their introduction, and Next.js 16 takes them even further. With improved data fetching patterns and better streaming support, you can now build truly dynamic pages that load instantly.</p>
      <h2>Improved Streaming</h2>
      <p>The streaming architecture has been completely revamped for better performance and developer experience. Pages now start rendering immediately while data is still being fetched, resulting in faster time-to-first-byte.</p>
      <p>Stay tuned for more deep dives into each of these features!</p>
    `,
    author: "Sarah Chen",
    authorSlug: "sarah-chen",
    date: "July 25, 2026",
    readTime: "5 min read",
    tags: ["Next.js", "React", "Web Dev"],
  },
];

export async function generateStaticParams() {
  // Return known post slugs for static generation
  return posts.map((post) => ({
    slug: post.id,
  }));
}

export default async function BlogPostPage({
  params,
}: {
  params: Promise<{ slug: string }>;
}) {
  const { slug } = await params;
  const post = posts.find((p) => p.id === slug);

  if (!post) {
    notFound();
  }

  return (
    <article className="mx-auto max-w-3xl px-4 py-8 sm:px-6 sm:py-12">
      {/* Breadcrumb */}
      <nav className="mb-8">
        <Link
          href="/"
          className="text-sm text-text-secondary hover:text-brand-600 transition-colors"
        >
          ← Back to all posts
        </Link>
      </nav>

      {/* Header */}
      <header className="mb-8">
        <div className="mb-4 flex flex-wrap gap-2">
          {post.tags.map((tag) => (
            <span
              key={tag}
              className="rounded-md bg-brand-50 px-3 py-1 text-xs font-medium text-brand-700 dark:bg-brand-900/30 dark:text-brand-300"
            >
              {tag}
            </span>
          ))}
        </div>

        <h1 className="text-3xl font-bold tracking-tight text-text-primary sm:text-4xl">
          {post.title}
        </h1>

        <div className="mt-4 flex items-center gap-4 text-sm text-text-secondary">
          <Link
            href={`/profile/${post.authorSlug}`}
            className="flex items-center gap-2 hover:text-brand-600 transition-colors"
          >
            <span className="flex h-8 w-8 items-center justify-center rounded-full bg-brand-100 text-xs font-bold text-brand-700 dark:bg-brand-800 dark:text-brand-200">
              {post.author.charAt(0)}
            </span>
            <span className="font-medium">{post.author}</span>
          </Link>
          <span className="text-text-tertiary">·</span>
          <time className="text-text-tertiary">{post.date}</time>
          <span className="text-text-tertiary">·</span>
          <span className="text-text-tertiary">{post.readTime}</span>
        </div>
      </header>

      {/* Content */}
      <div
        className="prose prose-zinc max-w-none dark:prose-invert prose-headings:font-bold prose-headings:text-text-primary prose-p:text-text-secondary prose-a:text-brand-600"
        dangerouslySetInnerHTML={{ __html: post.content }}
      />

      {/* Footer */}
      <div className="mt-12 rounded-xl border border-border bg-surface-secondary p-6">
        <p className="text-sm text-text-secondary">
          This is a placeholder page. Content will be fetched from a real data
          source in the next phase.
        </p>
      </div>
    </article>
  );
}
