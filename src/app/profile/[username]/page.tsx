import Link from "next/link";
import { notFound } from "next/navigation";

// Placeholder data
const profiles = [
  {
    username: "sarah-chen",
    name: "Sarah Chen",
    bio: "Full-stack developer and writer. Passionate about React, Next.js, and building great developer experiences.",
    avatar: "S",
    joined: "March 2024",
    stats: { posts: 12, followers: 342, following: 89 },
  },
  {
    username: "marcus-johnson",
    name: "Marcus Johnson",
    bio: "Productivity enthusiast and mindfulness practitioner. Helping people do their best work.",
    avatar: "M",
    joined: "January 2025",
    stats: { posts: 8, followers: 215, following: 56 },
  },
  {
    username: "elena-rodriguez",
    name: "Elena Rodriguez",
    bio: "Accessibility advocate and frontend engineer. Making the web work for everyone.",
    avatar: "E",
    joined: "November 2024",
    stats: { posts: 15, followers: 528, following: 120 },
  },
];

export async function generateStaticParams() {
  // Return known usernames for static generation
  return profiles.map((profile) => ({
    username: profile.username,
  }));
}

export default async function ProfilePage({
  params,
}: {
  params: Promise<{ username: string }>;
}) {
  const { username } = await params;
  const profile = profiles.find((p) => p.username === username);

  if (!profile) {
    notFound();
  }

  return (
    <div className="mx-auto max-w-4xl px-4 py-8 sm:px-6 sm:py-12">
      {/* Profile Header */}
      <div className="rounded-xl border border-border bg-surface p-6 sm:p-8">
        <div className="flex flex-col items-center gap-4 sm:flex-row sm:items-start">
          <span className="flex h-20 w-20 items-center justify-center rounded-full bg-brand-100 text-2xl font-bold text-brand-700 dark:bg-brand-800 dark:text-brand-200">
            {profile.avatar}
          </span>
          <div className="text-center sm:text-left">
            <h1 className="text-2xl font-bold text-text-primary">
              {profile.name}
            </h1>
            <p className="mt-1 text-sm text-text-secondary">
              @{profile.username}
            </p>
            <p className="mt-3 max-w-lg text-sm leading-relaxed text-text-secondary">
              {profile.bio}
            </p>
            <p className="mt-2 text-xs text-text-tertiary">
              Joined {profile.joined}
            </p>
          </div>
        </div>

        {/* Stats */}
        <div className="mt-6 flex justify-center gap-8 border-t border-border pt-6 sm:justify-start">
          <div className="text-center">
            <p className="text-lg font-bold text-text-primary">
              {profile.stats.posts}
            </p>
            <p className="text-xs text-text-tertiary">Posts</p>
          </div>
          <div className="text-center">
            <p className="text-lg font-bold text-text-primary">
              {profile.stats.followers}
            </p>
            <p className="text-xs text-text-tertiary">Followers</p>
          </div>
          <div className="text-center">
            <p className="text-lg font-bold text-text-primary">
              {profile.stats.following}
            </p>
            <p className="text-xs text-text-tertiary">Following</p>
          </div>
        </div>
      </div>

      {/* Posts Section */}
      <section className="mt-8">
        <h2 className="mb-4 text-lg font-bold text-text-primary">Posts</h2>
        <div className="rounded-xl border border-border bg-surface p-8 text-center">
          <p className="text-sm text-text-tertiary">
            User posts will appear here once connected to a data source.
          </p>
        </div>
      </section>

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
