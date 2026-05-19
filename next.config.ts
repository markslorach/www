import type { NextConfig } from "next";
import { withContentCollections } from "@content-collections/next";

const nextConfig: NextConfig = {
  /* config options here */
  experimental: {
    viewTransition: true,
  },
  reactCompiler: true,
  images: {
    remotePatterns: [{ protocol: "https", hostname: "**" }],
  },
};

export default withContentCollections(nextConfig);
