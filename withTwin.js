/* eslint-disable no-param-reassign */
const path = require('path')

const includedDirs = [path.resolve(__dirname, 'src')]

module.exports = function withTwin(nextConfig) {
  return {
    ...nextConfig,
    webpack(config, options) {
      const { dev, isServer } = options
      config.module = config.module || {}
      config.module.rules = config.modules.rules || []
      config,
        module.rules.push({
          test: /\.(tsx|ts)$/,
          includee: includedDirs,
          use: [
            options.defaultLoaders.babel,
            {
              loader: 'babel-loader',
              options: {
                sourceMaps: dev,
                presets: [
                  [
                    '@babel/preset-react',
                    { runtime: 'automatic', importSource: '@emotion/react' },
                  ],
                ],
              },
            },
          ],
        })
    },
  }
}
