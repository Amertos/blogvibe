import Link from "next/link";

export default function ContactPage() {
  return (
    <div className="mx-auto max-w-3xl px-4 py-8 sm:px-6 sm:py-12">
      {/* Header */}
      <div className="mb-8 text-center sm:text-left">
        <h1 className="text-3xl font-bold tracking-tight text-text-primary sm:text-4xl">
          Get in Touch
        </h1>
        <p className="mt-3 text-text-secondary">
          Have a question, suggestion, or just want to say hello? We&apos;d love
          to hear from you.
        </p>
      </div>

      {/* Contact Form */}
      <div className="rounded-xl border border-border bg-surface p-6 sm:p-8">
        <div className="mb-5">
          <label
            htmlFor="name"
            className="mb-2 block text-sm font-medium text-text-primary"
          >
            Name
          </label>
          <input
            id="name"
            type="text"
            placeholder="Your name"
            disabled
            className="w-full rounded-lg border border-border bg-surface-secondary px-4 py-2.5 text-sm text-text-primary placeholder:text-text-tertiary disabled:cursor-not-allowed disabled:opacity-60"
          />
        </div>

        <div className="mb-5">
          <label
            htmlFor="email"
            className="mb-2 block text-sm font-medium text-text-primary"
          >
            Email
          </label>
          <input
            id="email"
            type="email"
            placeholder="you@example.com"
            disabled
            className="w-full rounded-lg border border-border bg-surface-secondary px-4 py-2.5 text-sm text-text-primary placeholder:text-text-tertiary disabled:cursor-not-allowed disabled:opacity-60"
          />
        </div>

        <div className="mb-5">
          <label
            htmlFor="message"
            className="mb-2 block text-sm font-medium text-text-primary"
          >
            Message
          </label>
          <textarea
            id="message"
            rows={5}
            placeholder="Write your message..."
            disabled
            className="w-full rounded-lg border border-border bg-surface-secondary px-4 py-2.5 text-sm text-text-primary placeholder:text-text-tertiary disabled:cursor-not-allowed disabled:opacity-60"
          />
        </div>

        <button
          disabled
          className="inline-flex items-center gap-2 rounded-xl bg-brand-600 px-6 py-2.5 text-sm font-semibold text-white opacity-60 cursor-not-allowed"
        >
          Send Message
        </button>
      </div>

      {/* Placeholder Notice */}
      <div className="mt-6 rounded-xl border border-dashed border-accent/30 bg-accent/5 p-4">
        <p className="text-xs text-accent">
          🚧 Form submission will be wired up in the next phase.
        </p>
      </div>

      {/* Back link */}
      <div className="mt-8">
        <Link
          href="/"
          className="text-sm text-text-secondary hover:text-brand-600 transition-colors"
        >
          ← Back to home
        </Link>
      </div>
    </div>
  );
}
