const path = require('path')
const es6NodeModules = require('./es6-node-modules.json')

const resolveModulePath = (moduleName) => path.resolve(__dirname, '../../../node_modules', moduleName)

const buildPathsForAllModulesToInclude = (modules) => {
  return modules.map((moduleName) => resolveModulePath(moduleName))
}

// Export a function. Accept the base config as the only param.
module.exports = async ({ config, mode }) => {
  // `mode` has a value of 'DEVELOPMENT' or 'PRODUCTION'
  // You can change the configuration based on that.
  // 'PRODUCTION' is used when building the static version of storybook.

  // Make whatever fine-grained changes you need
  config.module.rules.push({
    test: /\.(js|ts)$/,
    include: buildPathsForAllModulesToInclude(es6NodeModules),
    exclude: [],
    loader: 'babel-loader',
    options: {
      compact: true,
      presets: ['@babel/preset-env'],
    },
  })

  config.resolve = {
    ...config.resolve,
    alias: {
      ...config.resolve.alias,
      '@emotion/core': resolveModulePath('@emotion/react'),
      '@emotion/styled': resolveModulePath('@emotion/styled'),
      'emotion-theming': resolveModulePath('@emotion/react'),
    },
  }

  // Return the altered config
  return config
}
