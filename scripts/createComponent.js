const fs = require('fs')
const path = require('path')
const exec = require('await-exec')
const package = require('../package.json')

package.author = 'Node'

console.log(package.author)

const componentType = process.argv[2]
const componentFolderName = process.argv[3]
const componentName = `${componentFolderName.charAt(0).toUpperCase()}${componentFolderName
  .slice(1)
  .replace(/-([a-z])/g, (g) => g[1].toUpperCase())}`

const folderName = `./components/${componentType}/${componentFolderName}`
const fileNames = {
  package: 'package.json',
  tsconfig: 'tsconfig.json',
  readme: 'README.md',
}

const writeComponentFile = async (filename, contents) => {
  const rootFileNames = [fileNames.package, fileNames.tsconfig, fileNames.readme]
  const pathName = path.join(rootFileNames.includes(filename) ? folderName : `${folderName}/src`, filename)
  console.log(`ℹ️ creating file: ${pathName}`)
  await fs.promises.writeFile(pathName, `${contents}`, (err) => {
    if (err) {
      return console.log(`❌ ${pathName} error: ${err}`)
    }
    return false
  })
  return false
}

const writeStoryFile = async (filename, contents, storyPath) => {
  const pathName = path.join(storyPath, filename)
  console.log(`ℹ️ creating file: ${pathName}`)
  await fs.promises.writeFile(pathName, `${contents}`, (err) => {
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
  "version": "1.0.0",
  "description": "ltht-react ${componentType} ${componentName} component.",
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
    "@emotion/react": "^11.0.0",
    "@emotion/styled": "^11.0.0",
    "@ltht-react/hooks": "^1.0.19",
    "@ltht-react/styles": "^1.3.21",
    "@ltht-react/summary": "^1.3.29",
    "@ltht-react/types": "^1.0.25",
    "@ltht-react/utils": "^1.1.27",
    "react": "^17.0.0"
  }
}
`
  writeComponentFile(filename, contents)
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
  writeComponentFile(filename, content)
}

const tsconfigScript = () => {
  const filename = fileNames.tsconfig
  const content = `{
  "extends": "../../../tsconfig.json",
  "compilerOptions": {
    "outDir": "./lib"
  },
  "include": ["./src"]
}
`
  writeComponentFile(filename, content)
}

const indexScript = () => {
  const filename = 'index.tsx'
  const contents = `import { FC } from 'react'

const ${componentName}: FC = () => <div>${componentName}</div>

export default ${componentName}
`
  writeComponentFile(filename, contents)
}

const storyScript = (storyType, storyPath) => {
  var capitalisedStoryType = storyType.charAt(0).toUpperCase() + storyType.slice(1)
  const filename = `${componentName}.stories.tsx`
  const contents = ` import { Story } from '@storybook/react'
  export const ${componentName}: Story = () => <${componentName} />
  export default { title: '${capitalisedStoryType}/Organisms/${componentName}' }
  `
  writeStoryFile(filename, contents, storyPath)
}

const lerna = async (command) => {
  return exec(command).catch((error) => {
    console.error(`❌ command error: ${error}`)
  })
}

const linkPackages = async () => {
  console.log(`ℹ️ linking @ltht-react/styles`)
  await lerna(`yarn lerna add @ltht-react/styles --scope=@ltht-react/${componentFolderName}`)
  console.log(`ℹ️ linking @ltht-react/types`)
  await lerna(`yarn lerna add @ltht-react/types --scope=@ltht-react/${componentFolderName}`)
  console.log(`ℹ️ linking @ltht-react/utils`)
  await lerna(`yarn lerna add @ltht-react/utils --scope=@ltht-react/${componentFolderName}`)
  console.log(`ℹ️ linking @ltht-react/storybook`)
  await lerna(`yarn lerna add @ltht-react/${componentFolderName} --scope=@ltht-react/storybook`)
  console.log(`ℹ️ linking @ltht-react/root`)
  await lerna(`yarn lerna add @ltht-react/${componentFolderName} --scope=@ltht-react/root`)
  console.log(`ℹ️ bootstrapping`)
  await lerna(`yarn lerna bootstrap`)
  console.log(`ℹ️ building`)
  await lerna(`yarn lerna run build`)

  console.log('')
  console.log(`✅ Package linking complete, '${componentFolderName}' was created successfully`)
  console.log(`⚠️  Please ensure you that it is exported in packages/ltht-react/src/index.ts`)
}

const init = async () => {
  if (fs.existsSync(path.join(folderName))) {
    console.log(
      `❌ The ${componentType} component '${componentName}' already exists Please use a different name or delete the existing folder`
    )
    return false
  }
  await fs.promises.mkdir(`${folderName}/src`, { recursive: true })
  await indexScript()
  await packageJson()
  await readmeScript()
  await tsconfigScript()
  await linkPackages()

  addStory()

  return false
}

const addStory = async () => {
  var storyType
  if (componentType === 'clinical') {
    storyType = 'clinical'
  } else if (componentType === 'styled') {
    storyType = 'ui'
  } else {
    console.log('Invalid component type')
  }
  var storyPath = `packages/storybook/src/${storyType}/organisms/${componentName}`
  await fs.promises.mkdir(storyPath, { recursive: true })

  await storyScript(storyType, storyPath)
}

init()
