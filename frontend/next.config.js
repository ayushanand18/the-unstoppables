/** @type {import('next').NextConfig} */

const nextConfig = {
    reactStrictMode: true,
    swcMinify: true,
    experimental: {
        appDir: true,
    },
    images: {
        domains: [
            "rukminim1.flixcart.com",
            "rukminim2.flixcart.com",
        ],
    }
}

module.exports = nextConfig