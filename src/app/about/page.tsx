import Link from "next/link";

export default function AboutPage() {
  return (
    <div className="mx-auto max-w-4xl px-4 py-8 sm:px-6 sm:py-12">
      {/* Header */}
      <div className="mb-10 text-center sm:text-left">
        <h1 className="text-3xl font-bold tracking-tight text-text-primary sm:text-4xl">
          About BlogVibe
        </h1>
        <p className="mt-3 text-lg text-text-secondary">
          A space where voices are heard and stories come to life.
        </p>
      </div>

      {/* Mission */}
      <section className="mb-10 rounded-xl border border-border bg-surface p-6 sm:p-8">
        <h2 className="mb-4 text-xl font-bold text-text-primary">Our Mission</h2>
        <p className="leading-relaxed text-text-secondary">
          BlogVibe was created to give everyone a platform to share their unique
          perspective. We believe that everyone has a story worth telling and
          that the best ideas emerge from diverse voices and authentic
          conversations.
        </p>
        <p className="mt-4 leading-relaxed text-text-secondary">
          Whether you&apos;re a seasoned writer or sharing your first post,
          BlogVibe provides the tools and community to help your voice reach the
          people who need to hear it.
        </p>
      </section>

      {/* Values */}
      <section className="mb-10">
        <h2 className="mb-6 text-xl font-bold text-text-primary">Our Values</h2>
        <div className="grid gap-4 sm:grid-cols-2">
          {[
            {
              title: "Authenticity",
              desc: "Real stories from real people. No filters, no pretense.",
            },
            {
              title: "Community",
              desc: "We grow together through meaningful discussions and shared knowledge.",
            },
            {
              title: "Quality",
              desc: "Thoughtful content that informs, inspires, and sparks curiosity.",
            },
            {
              title: "Inclusivity",
              desc: "Every voice matters. We welcome perspectives from all backgrounds.",
            },
          ].map((value) => (
            <div
              key={value.title}
              className="rounded-xl border border-border bg-surface p-5"
            >
              <h3 className="font-semibold text-text-primary">{value.title}</h3>
              <p className="mt-1 text-sm text-text-secondary">{value.desc}</p>
            </div>
          ))}
        </div>
      </section>

      {/* Placeholder Notice */}
      <div className="mb-10 rounded-xl border border-dashed border-brand-300 bg-brand-50/50 p-4 dark:bg-brand-900/10">
        <p className="text-xs text-brand-700 dark:text-brand-300">
          🚧 This page will be populated with real content in the next phase.
        </p>
      </div>

      {/* Back link */}
      <Link
        href="/"
        className="text-sm text-text-secondary hover:text-brand-600 transition-colors"
      >
        ← Back to home
      </Link>
    </div>
  );
}
