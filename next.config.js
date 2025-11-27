/** @type {import('next').NextConfig} */
const nextConfig = {
  webpack: (config, { isServer }) => {
    if (!isServer) {
      config.resolve.alias = {
        ...config.resolve.alias,
        '@': __dirname,
        'components': __dirname + '/components',
        'data': __dirname + '/data',
      };
    }
    return config;
  },
};

module.exports = nextConfig;
