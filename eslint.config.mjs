import nx from '@nx/eslint-plugin';

export default [
  ...nx.configs['flat/base'],
  ...nx.configs['flat/typescript'],
  ...nx.configs['flat/javascript'],
  {
    ignores: [
      '**/dist',
      '**/vite.config.*.timestamp*',
      '**/vitest.config.*.timestamp*',
    ],
  },
  {
    files: ['**/*.ts', '**/*.tsx', '**/*.js', '**/*.jsx'],
    rules: {
      '@nx/enforce-module-boundaries': [
        'error',
        {
          enforceBuildableLibDependency: true,
          allow: ['^.*/eslint(\\.base)?\\.config\\.[cm]?js$'],
          depConstraints: [
            {
              sourceTag: '*',
              onlyDependOnLibsWithTags: ['*'],
            },
            {
              sourceTag: 'scope:blog-app',
              onlyDependOnLibsWithTags: [
                'feature:base-ui',
                'feature:utility',
                'feature:blog-ui',
              ],
            },
            {
              sourceTag: 'scope:blog_admin-app',
              onlyDependOnLibsWithTags: [
                'feature:base-ui',
                'feature:utility',
                'feature:blog-admin-ui',
                'feature:database',
              ],
            },
            {
              sourceTag: 'scope:portpolio-app',
              onlyDependOnLibsWithTags: [
                'feature:base-ui',
                'feature:utility',
                'feature:portpolio-ui',
              ],
            },
          ],
        },
      ],
    },
  },
  {
    files: [
      '**/*.ts',
      '**/*.tsx',
      '**/*.cts',
      '**/*.mts',
      '**/*.js',
      '**/*.jsx',
      '**/*.cjs',
      '**/*.mjs',
    ],
    rules: {},
  },
];
