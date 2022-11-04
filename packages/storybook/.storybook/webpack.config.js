const path = require('path')
const es6NodeModules = require('./es6-node-modules.json')

const buildPathsForAllModulesToInclude = (modules) => {
  return modules.map((moduleName) => path.resolve(__dirname, '../../../node_modules', moduleName))
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

  // Return the altered config
  return config
}
