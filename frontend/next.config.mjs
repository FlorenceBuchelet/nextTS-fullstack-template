/** @type {import('next').NextConfig} */
const nextConfig = {
    images: {
        remotePatterns: [
            {
                protocol: 'https',
                hostname: 'placehold.co',
                port: '',
                pathname: '/400',
            },
        ],
        dangerouslyAllowSVG: true
    },
};

export default nextConfig;
