// Static export for GitHub Pages (project site at https://jometa9.github.io/IPTRADE).
// Keep basePath in sync with BASE_PATH in lib/asset.ts.
const nextConfig = {
  output: "export",
  basePath: "/IPTRADE",
  trailingSlash: false,
  eslint: {
    ignoreDuringBuilds: true,
  },
  typescript: {
    ignoreBuildErrors: true,
  },
  images: {
    unoptimized: true,
  },
};

export default nextConfig;
