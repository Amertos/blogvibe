import Link from "next/link";

export default function CreatePostPage() {
  return (
    <div className="mx-auto max-w-3xl px-4 py-8 sm:px-6 sm:py-12">
      {/* Header */}
      <div className="mb-8">
        <h1 className="text-2xl font-bold text-text-primary sm:text-3xl">
          Create a New Post
        </h1>
        <p className="mt-2 text-sm text-text-secondary">
          Share your story, ideas, or expertise with the world.
        </p>
      </div>

      {/* Placeholder Form */}
      <div className="rounded-xl border border-border bg-surface p-6 sm:p-8">
        {/* Title Field */}
        <div className="mb-6">
          <label
            htmlFor="title"
            className="mb-2 block text-sm font-medium text-text-primary"
          >
            Title
          </label>
          <input
            id="title"
            type="text"
            placeholder="Enter your post title..."
            disabled
            className="w-full rounded-lg border border-border bg-surface-secondary px-4 py-2.5 text-sm text-text-primary placeholder:text-text-tertiary disabled:cursor-not-allowed disabled:opacity-60"
          />
        </div>

        {/* Content Field */}
        <div className="mb-6">
          <label
            htmlFor="content"
            className="mb-2 block text-sm font-medium text-text-primary"
          >
            Content
          </label>
          <textarea
            id="content"
            rows={12}
            placeholder="Write your story here..."
            disabled
            className="w-full rounded-lg border border-border bg-surface-secondary px-4 py-2.5 text-sm text-text-primary placeholder:text-text-tertiary disabled:cursor-not-allowed disabled:opacity-60"
          />
        </div>

        {/* Tags Field */}
        <div className="mb-6">
          <label
            htmlFor="tags"
            className="mb-2 block text-sm font-medium text-text-primary"
          >
            Tags
          </label>
          <input
            id="tags"
            type="text"
            placeholder="e.g. React, Productivity, Design"
            disabled
            className="w-full rounded-lg border border-border bg-surface-secondary px-4 py-2.5 text-sm text-text-primary placeholder:text-text-tertiary disabled:cursor-not-allowed disabled:opacity-60"
          />
        </div>

        {/* Actions */}
        <div className="flex items-center gap-3">
          <button
            disabled
            className="inline-flex items-center gap-2 rounded-xl bg-brand-600 px-6 py-2.5 text-sm font-semibold text-white opacity-60 cursor-not-allowed"
          >
            Publish
          </button>
          <Link
            href="/"
            className="rounded-xl px-4 py-2.5 text-sm font-medium text-text-secondary hover:text-text-primary transition-colors"
          >
            Cancel
          </Link>
        </div>
      </div>

      {/* Placeholder Notice */}
      <div className="mt-6 rounded-xl border border-dashed border-accent/30 bg-accent/5 p-4">
        <p className="text-xs text-accent">
          🚧 Form submission will be connected to a database in the next phase.
        </p>
      </div>
    </div>
  );
}
