/** @type {import('next').NextConfig} */
const nextConfig = {
    webpack: (config, { dev }) => {
        // Disable cache trong môi trường development
        if (dev) {
          config.cache = false
        }
        return config
      }
};

export default nextConfig;
