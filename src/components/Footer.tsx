import Link from "next/link";

export default function Footer() {
  return (
    <footer className="mt-auto border-t border-border bg-surface">
      <div className="mx-auto max-w-6xl px-4 py-8 sm:px-6 sm:py-12">
        <div className="grid grid-cols-2 gap-8 sm:grid-cols-3 lg:grid-cols-4">
          {/* Brand */}
          <div className="col-span-2 sm:col-span-1">
            <Link
              href="/"
              className="flex items-center gap-2 text-lg font-bold tracking-tight text-brand-600"
            >
              <span className="flex h-7 w-7 items-center justify-center rounded-lg bg-brand-600 text-xs font-bold text-white">
                B
              </span>
              BlogVibe
            </Link>
            <p className="mt-2 text-sm text-text-secondary leading-relaxed">
              A space for stories, ideas, and conversations that matter.
            </p>
          </div>

          {/* Navigation */}
          <div>
            <h4 className="mb-3 text-xs font-semibold uppercase tracking-widest text-text-tertiary">
              Explore
            </h4>
            <ul className="space-y-2">
              {[
                { href: "/", label: "Home" },
                { href: "/create", label: "Write a Post" },
                { href: "/about", label: "About Us" },
              ].map((link) => (
                <li key={link.href}>
                  <Link
                    href={link.href}
                    className="text-sm text-text-secondary hover:text-brand-600 transition-colors"
                  >
                    {link.label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Support */}
          <div>
            <h4 className="mb-3 text-xs font-semibold uppercase tracking-widest text-text-tertiary">
              Support
            </h4>
            <ul className="space-y-2">
              {[
                { href: "/contact", label: "Contact" },
                { href: "/settings", label: "Settings" },
                { href: "/health", label: "System Status" },
              ].map((link) => (
                <li key={link.href}>
                  <Link
                    href={link.href}
                    className="text-sm text-text-secondary hover:text-brand-600 transition-colors"
                  >
                    {link.label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Legal */}
          <div>
            <h4 className="mb-3 text-xs font-semibold uppercase tracking-widest text-text-tertiary">
              Legal
            </h4>
            <ul className="space-y-2">
              <li>
                <span className="text-sm text-text-tertiary cursor-not-allowed">
                  Privacy Policy
                </span>
              </li>
              <li>
                <span className="text-sm text-text-tertiary cursor-not-allowed">
                  Terms of Service
                </span>
              </li>
            </ul>
          </div>
        </div>

        <div className="mt-8 pt-6 border-t border-border-light text-center text-xs text-text-tertiary">
          &copy; {new Date().getFullYear()} BlogVibe. Built with Next.js &amp; Tailwind CSS.
        </div>
      </div>
    </footer>
  );
}
