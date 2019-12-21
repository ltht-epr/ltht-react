const aliasToSrc = require('./linkToSrc')
const path = require('path')
const fs = require('fs')

const dirs = p =>
  fs
    .readdirSync(p)
    .filter(f => fs.statSync(path.join(p, f)).isDirectory())
    .map(f => path.join(p, f))

module.exports = ({ config }) => {
  config.module.rules.push({
    test: /\.(ts|tsx)$/,
    use: [
      {
        loader: require.resolve('awesome-typescript-loader'),
      },
      // Optional
      {
        loader: require.resolve('react-docgen-typescript-loader'),
      },
    ],
  })
  config.resolve.extensions.push('.ts', '.tsx')
  config.resolve.alias = {
    ...config.resolve.alias,
    ...aliasToSrc(dirs('../../components')),
    ...aliasToSrc(dirs('../../packages')),
  }
  return config
}
