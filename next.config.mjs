/** @type {import('next').NextConfig} */
const nextConfig = {
    images: {
        remotePatterns: [{
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
                hostname: "cms-images.udemycdn.com",
                port: "",
                pathname: "/**",

            },

        ],
    },
};

export default nextConfig;