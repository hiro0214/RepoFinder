import path from 'node:path'
import type { StorybookConfig } from '@storybook/nextjs-vite'

const config: StorybookConfig = {
  stories: ['../src/**/*.mdx', '../src/**/*.stories.@(js|jsx|mjs|ts|tsx)'],
  addons: [
    '@chromatic-com/storybook',
    '@storybook/addon-docs',
    '@storybook/addon-a11y',
    '@storybook/addon-vitest'
  ],
  framework: {
    name: '@storybook/nextjs-vite',
    options: {}
  },
  viteFinal: async (config) => {
    if (!config.resolve) return config

    config.resolve.alias = {
      ...config.resolve?.alias,
      '@': path.resolve(__dirname, '../src')
    }

    config.optimizeDeps = {
      ...(config.optimizeDeps ?? {}),
      include: [
        ...(config.optimizeDeps?.include ?? []),
        'react',
        'react-dom',
        'next/navigation',
        'next/link',
        'date-fns',
        'storybook/test'
      ]
    }
    return config
  }
}
export default config
