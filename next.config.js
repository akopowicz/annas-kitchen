/** @type {import('next').NextConfig} */
const nextConfig = {
  images: {
    domains: ["cnnjjwubvzyyppjtxqre.supabase.co"],
    remotePatterns: [
      {
        protocol: "https",
        hostname: "cnnjjwubvzyyppjtxqre.supabase.co",
        port: "",
        pathname: "/**",
        // pathname: "/storage/v1/object/public/dishes_photos/**",
      },
    ],
  },
};

module.exports = nextConfig;
