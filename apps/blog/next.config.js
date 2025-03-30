//@ts-check

const { composePlugins, withNx } = require('@nx/next');
const createMDX = require('@next/mdx');

/**
 * @type {import('@nx/next/plugins/with-nx').WithNxOptions}
 **/
const nextConfig = {
  nx: {
    // Set this to true if you would like to use SVGR
    // See: https://github.com/gregberge/svgr
    svgr: false,
  },
  assetPrefix: '/blog',
  pageExtensions: ['js', 'jsx', 'ts', 'tsx', 'md', 'mdx'], // Add MDX support
  transpilePackages: ['next-mdx-remote'],
};

const withMDX = createMDX({});

/**
 * Add more Next.js plugins to this list if needed.
 */
const plugins = [withNx, withMDX];

module.exports = composePlugins(...plugins)(nextConfig);
