const isProd = process.env.NODE_ENV === "production";
const repoName = "My-Portfolio";
const basePath = isProd ? `/${repoName}` : "";

/** @type {import('next').NextConfig} */
const nextConfig = {
  output: "export",
  trailingSlash: true,
  images: {
    unoptimized: true,
  },
  basePath,
  assetPrefix: isProd ? `/${repoName}/` : undefined,
};

export default nextConfig;
