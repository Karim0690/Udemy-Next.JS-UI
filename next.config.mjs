/** @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode: false,
  images: {
    remotePatterns: [
      {
        protocol: "https",
        hostname: "frontends.udemycdn.com",
        port: "",
        pathname: "/**",
      },
      {
        protocol: "https",
        hostname: "s.udemycdn.com",
        port: "",
        pathname: "/**",
      },
      {
        protocol: "https",
        hostname: "img-c.udemycdn.com",
        port: "",
        pathname: "/**",
      },
      {
        protocol: "https",
        hostname: "img-b.udemycdn.com",
        hostname: "img-b.udemycdn.com",
        port: "",
        pathname: "/**",
      },
      {
        protocol: "https",
        hostname: "img-c.udemycdn.com",
        port: "",
        pathname: "/**",
      },
      {
        protocol: "https",
        hostname: "img-d.udemycdn.com",
        port: "",
        pathname: "/**",
      },
    ],
  },
};

export default nextConfig;
