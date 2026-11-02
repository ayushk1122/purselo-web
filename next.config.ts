import type { NextConfig } from "next";

// Netlify sets CONTEXT at build time: "production" for purselo.app, otherwise a preview or local build.
const production = process.env.CONTEXT === "production";

const noindex = { key: "X-Robots-Tag", value: "noindex" };

const nextConfig: NextConfig = {
  env: {
    LINK_PREVIEW_PROJECT: production ? "dnejxyohyzpwfjmnnarq" : "czeplbbbszjposemzaqw",
    LINK_PREVIEW_ORIGIN: production
      ? "https://purselo.app"
      : (process.env.DEPLOY_PRIME_URL ?? "http://localhost:3000"),
  },
  async redirects() {
    return [
      { source: "/%40:username", destination: "/@:username", permanent: true },
      { source: "/%40:username/:rest*", destination: "/@:username/:rest*", permanent: true },
    ];
  },
  // App Router treats folders starting with "@" as parallel route slots, so shared links live under /link.
  async rewrites() {
    return [
      { source: "/@:username", destination: "/link/:username" },
      { source: "/@:username/opengraph-image", destination: "/link/:username/preview-image" },
      { source: "/@:username/p/:id", destination: "/link/:username/p/:id" },
      {
        source: "/@:username/p/:id/opengraph-image",
        destination: "/link/:username/p/:id/preview-image",
      },
    ];
  },
  async headers() {
    return [
      { source: "/@:username", headers: [noindex] },
      { source: "/@:username/p/:id", headers: [noindex] },
      { source: "/link/:path*", headers: [noindex] },
      {
        source: "/moderate",
        headers: [{ key: "Referrer-Policy", value: "no-referrer" }, { ...noindex, value: "noindex, nofollow" }],
      },
    ];
  },
  outputFileTracingIncludes: {
    "/link/**": ["./src/assets/og/**"],
  },
  turbopack: {
    rules: {
      "*.css": {
        loaders: ["@tailwindcss/turbopack"],
        as: "*.css",
      },
    },
  },
};

export default nextConfig;
