//@ts-check

// eslint-disable-next-line @typescript-eslint/no-var-requires
const { composePlugins, withNx } = require('@nx/next');

/**
 * @type {import('@nx/next/plugins/with-nx').WithNxOptions}
 **/
const nextConfig = {
  nx: {
    // Set this to true if you would like to use SVGR
    // See: https://github.com/gregberge/svgr
    svgr: false,
  },
  assetPrefix: '/portpolio',
  async rewrites() {
    return [
      {
        source: '/blog/:path*',
        destination: 'http://localhost:3001/blog/:path*',
      },
      {
        source: '/blog/_next/:path*',
        destination: 'http://localhost:3001/_next/:path*',
      },
      {
        source: '/blog_admin',
        destination: 'http://localhost:3002',
      },
      {
        source: '/blog_admin/_next/:path*',
        destination: 'http://localhost:3002/_next/:path*'
      }
    ];
  },
};

const plugins = [
  // Add more Next.js plugins to this list if needed.
  withNx,
];

module.exports = composePlugins(...plugins)(nextConfig);
