/** @type {import('next').NextConfig} */
const nextConfig = {
    /* This allows us to use placeholder images from placehold.co */
    /* Delete when useless */
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
    /* End placeholder */
};

export default nextConfig;
