"use client";

import Link from "next/link";
import { useEffect, useState } from "react";

type HealthCheck = {
  label: string;
  status: string;
  detail: string;
  ok: boolean;
};

type FetchedPost = {
  id: number;
  title: string;
  body: string;
};

export default function HealthPage() {
  const [checks, setChecks] = useState<HealthCheck[]>([]);
  const [posts, setPosts] = useState<FetchedPost[]>([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState<string | null>(null);

  useEffect(() => {
    async function runChecks() {
      const results: HealthCheck[] = [
        {
          label: "Application",
          status: "healthy",
          detail: "Running on Next.js (static export)",
          ok: true,
        },
        {
          label: "Environment",
          status: "healthy",
          detail: `Browser — ${navigator.userAgent.substring(0, 60)}`,
          ok: true,
        },
        {
          label: "Database",
          status: "not configured",
          detail: "Database connection will be added in a future phase",
          ok: false,
        },
      ];

      // Test external API
      try {
        const start = performance.now();
        const res = await fetch(
          "https://jsonplaceholder.typicode.com/posts?userId=1"
        );
        const duration = (performance.now() - start).toFixed(0);
        const data = await res.json();

        results.push({
          label: "External API",
          status: res.ok ? "healthy" : "unreachable",
          detail: res.ok
            ? `JSONPlaceholder responded in ${duration}ms`
            : `HTTP ${res.status}`,
          ok: res.ok,
        });

        setPosts(data.slice(0, 3));
      } catch {
        results.push({
          label: "External API",
          status: "unreachable",
          detail: "Could not reach JSONPlaceholder",
          ok: false,
        });
      }

      setChecks(results);
      setLoading(false);
    }

    runChecks();
  }, []);

  const allOk = checks.every((c) => c.ok || c.status === "not configured");
  const overallStatus = loading
    ? "Checking..."
    : allOk
    ? "All Systems Operational"
    : "Partial Outage";

  return (
    <div className="mx-auto max-w-3xl px-4 py-8 sm:px-6 sm:py-12">
      {/* Header */}
      <div className="mb-8">
        <h1 className="text-3xl font-bold tracking-tight text-text-primary">
          System Status
        </h1>
        <p className="mt-2 text-text-secondary">
          Health check endpoint for BlogVibe platform.
        </p>
      </div>

      {/* Status Overview */}
      <div className="mb-8 rounded-xl border border-border bg-surface p-6 sm:p-8">
        <div className="flex items-center justify-between">
          <div className="flex items-center gap-3">
            <span
              className={`flex h-3 w-3 rounded-full ${
                loading
                  ? "bg-yellow-500 animate-pulse"
                  : allOk
                  ? "bg-green-500"
                  : "bg-red-500"
              }`}
            />
            <span className="text-lg font-bold text-text-primary">
              {loading ? "Checking..." : overallStatus}
            </span>
          </div>
          <span className="text-xs text-text-tertiary font-mono">v0.1.0</span>
        </div>
        <p className="mt-2 text-xs text-text-tertiary font-mono">
          Client-side check · {new Date().toLocaleString()}
        </p>
      </div>

      {/* Individual Checks */}
      <div className="space-y-3">
        {loading
          ? // Skeleton loaders
            [1, 2, 3, 4].map((i) => (
              <div
                key={i}
                className="flex items-center justify-between rounded-xl border border-border bg-surface p-4 animate-pulse"
              >
                <div className="flex items-center gap-4">
                  <div className="h-2.5 w-2.5 rounded-full bg-zinc-200 dark:bg-zinc-700" />
                  <div>
                    <div className="h-4 w-24 rounded bg-zinc-200 dark:bg-zinc-700" />
                    <div className="mt-1 h-3 w-48 rounded bg-zinc-100 dark:bg-zinc-800" />
                  </div>
                </div>
                <div className="h-5 w-16 rounded-md bg-zinc-200 dark:bg-zinc-700" />
              </div>
            ))
          : checks.map((check) => (
              <div
                key={check.label}
                className="flex items-center justify-between rounded-xl border border-border bg-surface p-4 transition-colors hover:bg-surface-secondary"
              >
                <div className="flex items-center gap-4">
                  <span
                    className={`flex h-2.5 w-2.5 rounded-full ${
                      check.ok
                        ? check.status === "not configured"
                          ? "bg-yellow-500"
                          : "bg-green-500"
                        : "bg-red-500"
                    }`}
                  />
                  <div>
                    <p className="text-sm font-medium text-text-primary">
                      {check.label}
                    </p>
                    <p className="text-xs text-text-secondary">{check.detail}</p>
                  </div>
                </div>
                <span
                  className={`rounded-md px-2.5 py-0.5 text-xs font-medium capitalize ${
                    check.ok
                      ? check.status === "not configured"
                        ? "bg-yellow-50 text-yellow-700 dark:bg-yellow-900/20 dark:text-yellow-400"
                        : "bg-green-50 text-green-700 dark:bg-green-900/20 dark:text-green-400"
                      : "bg-red-50 text-red-700 dark:bg-red-900/20 dark:text-red-400"
                  }`}
                >
                  {check.status}
                </span>
              </div>
            ))}
      </div>

      {/* API Response Preview */}
      {posts.length > 0 && (
        <div className="mt-8">
          <h2 className="mb-3 text-lg font-bold text-text-primary">
            API Response Preview
          </h2>
          <div className="rounded-xl border border-border bg-surface p-4 sm:p-6">
            <p className="mb-3 text-xs font-medium text-text-tertiary uppercase tracking-wider">
              Sample data fetched from JSONPlaceholder
            </p>
            <div className="space-y-3">
              {posts.map((post) => (
                <div
                  key={post.id}
                  className="rounded-lg border border-border-light bg-surface-secondary p-3"
                >
                  <p className="text-xs font-semibold text-text-primary">
                    {post.title}
                  </p>
                  <p className="mt-0.5 text-xs text-text-secondary line-clamp-2">
                    {post.body}
                  </p>
                </div>
              ))}
            </div>
          </div>
        </div>
      )}

      {error && (
        <div className="mt-8 rounded-xl border border-red-200 bg-red-50 p-4 dark:border-red-900/30 dark:bg-red-950/10">
          <p className="text-sm text-red-600 dark:text-red-400">{error}</p>
        </div>
      )}

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
