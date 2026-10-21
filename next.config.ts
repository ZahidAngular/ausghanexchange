import type { NextConfig } from "next";

// Set STATIC_EXPORT=1 to build a static site in `out/` (used for Firebase Hosting).
const staticExport = process.env.STATIC_EXPORT === "1";

const nextConfig: NextConfig = staticExport
  ? { output: "export", images: { unoptimized: true } }
  : {};

export default nextConfig;
