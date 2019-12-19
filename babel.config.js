const esModules = process.env.BABEL_ENV === 'es'

const presets = ['@babel/preset-env', '@babel/preset-typescript']

const plugins = ['@babel/proposal-class-properties', '@babel/proposal-object-rest-spread', 'emotion']

const ignore = ['.spec.ts', '.test.ts', '-test.ts', '/__tests__/']

if (!esModules) {
  presets[0] = [
    '@babel/preset-env',
    {
      loose: true,
      modules: 'commonjs',
    },
  ]
  plugins.push('add-module-exports')
} else {
  presets[0] = [
    '@babel/preset-env',
    {
      loose: true,
      modules: false,
    },
  ]
}

module.exports = api => {
  api.cache(() => process.env.NODE_ENV)
  return {
    presets,
    plugins,
    ignore,
  }
}
