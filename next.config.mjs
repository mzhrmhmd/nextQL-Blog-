/** @type {import('next').NextConfig} */
const nextConfig = {
  output: "standalone", // Ensures a clean standalone build
  webpack(config, { isServer }) {
    if (!isServer) {
      config.resolve.fallback = {
        ...config.resolve.fallback,
        net: false,
        tls: false,
        fs: false,
        http: false,
        https: false,
        os: false,
      };
    }
    return config;
  },
};

export default nextConfig;
