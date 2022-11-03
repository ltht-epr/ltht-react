const path = require('path')

// Export a function. Accept the base config as the only param.
module.exports = async ({ config, mode }) => {
  // `mode` has a value of 'DEVELOPMENT' or 'PRODUCTION'
  // You can change the configuration based on that.
  // 'PRODUCTION' is used when building the static version of storybook.

  // Make whatever fine-grained changes you need
  config.module.rules.push({
    test: /\.(js|ts)$/,
    include: [path.resolve(__dirname, '../../../node_modules', '@tanstack/react-table')],
    exclude: [],
    loader: 'babel-loader',
    options: {
      compact: true,
      presets: ['@babel/preset-env'],
    },
  })

  // Return the altered config
  return config
}
