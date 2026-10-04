import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  /* config options here */
  reactCompiler: true,
  // bundle-barrel-imports: transform lucide-react barrel imports into
  // direct per-icon imports (Next.js-recommended alternative to manual
  // deep imports, which lack .d.ts types for lucide-react).
  experimental: {
    optimizePackageImports: ["lucide-react"],
  },
};

export default nextConfig;
