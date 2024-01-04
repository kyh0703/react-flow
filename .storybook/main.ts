import type { StorybookConfig } from '@storybook/nextjs'
import TsConfigPathsPlugin from 'tsconfig-paths-webpack-plugin'

const config: StorybookConfig = {
  stories: [
    '../src/components/**/*.mdx',
    '../src/components/**/*.stories.@(js|jsx|mjs|ts|tsx)',
  ],
  addons: [
    '@storybook/addon-links',
    '@storybook/addon-essentials',
    '@storybook/addon-onboarding',
    '@storybook/addon-interactions',
  ],
  framework: {
    name: '@storybook/nextjs',
    options: {},
  },
  docs: {
    autodocs: 'tag',
  },
  staticDirs: ['public'],
  core: {
    disableTelemetry: true,
  },
  // Twin recommends adding the babel config here as Next.js disables SWC when .babelrc is added to the root
  babel: async (options) => {
    return {
      ...options,
      presets: [['next/babel']],
      plugins: [
        'babel-plugin-macros',
        [
          '@emotion/babel-plugin-jsx-pragmatic',
          {
            export: 'jsx',
            import: '__cssprop',
            module: '@emotion/react',
          },
        ],
        [
          '@babel/plugin-transform-react-jsx',
          {
            pragma: '__cssprop',
          },
          'emotion-css-prop',
        ],
      ],
    }
  },
  webpackFinal: async (config) => {
    return {
      ...config,
      resolve: {
        ...config.resolve,
        plugins: [new TsConfigPathsPlugin()],
      },
    }
  },
}

export default config
