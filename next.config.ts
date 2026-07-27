import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  output: "export",

  // GitHub Pages deploys to https://<username>.github.io/<repo>/
  // Change this if your repo has a different name
  basePath: "/blogvibe",

  // Required for static export — disables next/image optimization
  images: {
    unoptimized: true,
  },

  // Ensures trailing slashes work with GitHub Pages
  trailingSlash: true,
};

export default nextConfig;
