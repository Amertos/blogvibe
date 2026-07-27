import Link from "next/link";

export default function SettingsPage() {
  return (
    <div className="mx-auto max-w-3xl px-4 py-8 sm:px-6 sm:py-12">
      {/* Header */}
      <div className="mb-8">
        <h1 className="text-2xl font-bold text-text-primary sm:text-3xl">
          Settings
        </h1>
        <p className="mt-1 text-sm text-text-secondary">
          Manage your account preferences and profile settings.
        </p>
      </div>

      {/* Settings Sections */}
      <div className="space-y-6">
        {/* Profile Section */}
        <section className="rounded-xl border border-border bg-surface p-6 sm:p-8">
          <h2 className="text-lg font-bold text-text-primary">Profile</h2>
          <p className="mt-1 text-sm text-text-secondary">
            Update your display name, bio, and avatar.
          </p>
          <div className="mt-4 space-y-4">
            <div>
              <label className="mb-2 block text-xs font-medium text-text-secondary">
                Display Name
              </label>
              <input
                type="text"
                placeholder="Your name"
                disabled
                className="w-full rounded-lg border border-border bg-surface-secondary px-4 py-2.5 text-sm text-text-primary placeholder:text-text-tertiary disabled:cursor-not-allowed disabled:opacity-60"
              />
            </div>
            <div>
              <label className="mb-2 block text-xs font-medium text-text-secondary">
                Bio
              </label>
              <textarea
                rows={3}
                placeholder="Tell us about yourself"
                disabled
                className="w-full rounded-lg border border-border bg-surface-secondary px-4 py-2.5 text-sm text-text-primary placeholder:text-text-tertiary disabled:cursor-not-allowed disabled:opacity-60"
              />
            </div>
          </div>
        </section>

        {/* Appearance Section */}
        <section className="rounded-xl border border-border bg-surface p-6 sm:p-8">
          <h2 className="text-lg font-bold text-text-primary">Appearance</h2>
          <p className="mt-1 text-sm text-text-secondary">
            Customize how BlogVibe looks for you.
          </p>
          <div className="mt-4">
            <label className="mb-2 block text-xs font-medium text-text-secondary">
              Theme
            </label>
            <select
              disabled
              className="w-full rounded-lg border border-border bg-surface-secondary px-4 py-2.5 text-sm text-text-primary disabled:cursor-not-allowed disabled:opacity-60"
            >
              <option>System (default)</option>
              <option>Light</option>
              <option>Dark</option>
            </select>
          </div>
        </section>

        {/* Notifications Section */}
        <section className="rounded-xl border border-border bg-surface p-6 sm:p-8">
          <h2 className="text-lg font-bold text-text-primary">Notifications</h2>
          <p className="mt-1 text-sm text-text-secondary">
            Choose what updates you receive.
          </p>
          <div className="mt-4 space-y-3">
            {[
              "Email notifications",
              "Push notifications",
              "Weekly digest",
            ].map((item) => (
              <label
                key={item}
                className="flex items-center gap-3 text-sm text-text-secondary"
              >
                <input
                  type="checkbox"
                  defaultChecked
                  disabled
                  className="h-4 w-4 rounded border-border text-brand-600 disabled:opacity-60"
                />
                {item}
              </label>
            ))}
          </div>
        </section>

        {/* Danger Zone */}
        <section className="rounded-xl border border-red-200 bg-red-50 p-6 sm:p-8 dark:border-red-900/30 dark:bg-red-950/10">
          <h2 className="text-lg font-bold text-red-600 dark:text-red-400">
            Danger Zone
          </h2>
          <p className="mt-1 text-sm text-red-500">
            Irreversible actions. Proceed with caution.
          </p>
          <div className="mt-4">
            <button
              disabled
              className="rounded-xl border border-red-300 bg-white px-5 py-2 text-sm font-medium text-red-600 opacity-60 cursor-not-allowed dark:bg-transparent"
            >
              Delete Account
            </button>
          </div>
        </section>
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
