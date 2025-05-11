import nx from '@nx/eslint-plugin';

export default [
  ...nx.configs['flat/base'],
  ...nx.configs['flat/typescript'],
  ...nx.configs['flat/javascript'],
  {
    ignores: [
      '**/dist',
      '**/.next',
      '**/vite.config.*.timestamp*',
      '**/vitest.config.*.timestamp*',
    ],
  },
  {
    files: [
      'apps/*/src/**/*.ts',
      'apps/*/src/**/*.tsx',
      'apps/*/src/**/*.js',
      'apps/*/src/**/*.jsx',
    ],
    rules: {
      '@nx/enforce-module-boundaries': 'off', // Disable the rule
    },
    ignores: [
      '**/dist',
      '**/.next',
      '**/vite.config.*.timestamp*',
      '**/vitest.config.*.timestamp*',
    ],
  },
];
