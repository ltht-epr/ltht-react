const fs = require('fs')
const path = require('path')
const mkdirp = require('mkdirp-promise')
const exec = require('await-exec')
const package = require('../package.json')

package.author = 'Node'

console.log(package.author)

const componentFolderName = process.argv[2]
const componentName = `${componentFolderName.charAt(0).toUpperCase()}${componentFolderName
  .slice(1)
  .replace(/-([a-z])/g, g => g[1].toUpperCase())}`

const folderName = `./components/${componentFolderName}`
const fileNames = {
  package: 'package.json',
  tsconfig: 'tsconfig.json',
  readme: 'README.md',
}

const writeFile = async (filename, contents) => {
  const rootFileNames = [fileNames.package, fileNames.tsconfig, fileNames.readme]
  const pathName = path.join(rootFileNames.includes(filename) ? folderName : `${folderName}/src`, filename)
  console.log(`ℹ️ creating file: ${pathName}`)
  await fs.promises.writeFile(pathName, `${contents}`, err => {
    if (err) {
      return console.log(`❌ ${pathName} error: ${err}`)
    }
    return false
  })
  return false
}

const packageJson = () => {
  const filename = fileNames.package
  const contents = `{  
  "name": "@ltht-react/${componentFolderName}",
  "version": "0.0.0",
  "description": "ltht-react ${componentName} component.",
  "author": "LTHT",
  "homepage": "",
  "license": "MIT",
  "main": "lib/index.js",
  "typings": "lib/index.d.ts",
  "files": [
    "lib"
  ],
  "directories": {
    "lib": "lib"
  },
  "publishConfig": {
    "access": "public"
  },
  "scripts": {
    "clean": "rimraf lib",
    "build": "yarn build:lib",
    "watch": "tsc -w",
    "build:lib": "tsc",
    "type:check": "tsc --noEmit",
    "lint": "prettylint 'src/*.{ts,tsx}'"
  },
  "dependencies": {
    "@emotion/core": "^10.0.27",
    "@emotion/styled": "^10.0.27",    
    "emotion": "^10.0.27",
    "react": "^16.12.0"
  }
}
`
  writeFile(filename, contents)
}

const readmeScript = () => {
  const filename = fileNames.readme
  const content = `
# ${componentName}

<!-- STORY -->

### Import

\`\`\`js
import ${componentName} from '@ltht-react/${componentFolderName}'
\`\`\`

### Usage

\`\`\`jsx
<${componentName} />
\`\`\`
  `
  writeFile(filename, content)
}

const tsconfigScript = () => {
  const filename = fileNames.tsconfig
  const content = `{
  "extends": "../../tsconfig.json",
  "compilerOptions": {
    "outDir": "./lib"
  },
  "include": ["./src"]
}
`
  writeFile(filename, content)
}

const indexScript = () => {
  const filename = 'index.tsx'
  const contents = `import React from 'react'

const ${componentName} = () => <div>${componentName}</div>

export default ${componentName}
`
  writeFile(filename, contents)
}

const lerna = async command => {
  return exec(command).catch(error => {
    console.error(`❌ command error: ${error}`)
  })
}

const linkPackages = async () => {
  console.log(`ℹ️ linking @ltht-react/types`)
  await lerna(`yarn lerna add @ltht-react/types --scope=@ltht-react/${componentFolderName}`)
  console.log(`ℹ️ linking @ltht-react/utils`)
  await lerna(`yarn lerna add @ltht-react/utils --scope=@ltht-react/${componentFolderName}`)
  console.log(`ℹ️ linking @ltht-react/widget`)
  await lerna(`yarn lerna add @ltht-react/widget --scope=@ltht-react/${componentFolderName}`)
  console.log(`ℹ️ linking @ltht-react/storybook`)
  await lerna(`yarn lerna add @ltht-react/${componentFolderName} --scope=@ltht-react/storybook`)
  console.log(`ℹ️ linking ltht-react`)
  await lerna(`yarn lerna add @ltht-react/${componentFolderName} --scope=ltht-react`)
  console.log(`ℹ️ bootstrapping`)
  await lerna(`yarn lerna bootstrap`)
  console.log(`ℹ️ building`)
  await lerna(`yarn lerna run build`)

  console.log('')
  console.log(`✅ Package linking complete, '${componentFolderName}' was created successfully`)
  console.log(`⚠️  Please ensure you that it is exported in packages/ltht-react/src/index.ts`)
}

const init = () => {
  if (fs.existsSync(path.join(folderName))) {
    console.log(
      `❌ The component '${componentName}' already exists Please use a different name or delete the existing folder`
    )
    return false
  }
  mkdirp(`${folderName}/src`).then(() => {
    indexScript()
    packageJson()
    readmeScript()
    tsconfigScript()
    linkPackages()
  })
  return false
}

init()
