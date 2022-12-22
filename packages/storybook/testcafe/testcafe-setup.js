const fs = require('fs-extra')

const BASE_PATH = '../src'
const TEST_FILE_PATH = './tests/testcafe-tests.generated.ts'

const findFiles = (path, regex) => {
  const matchingFiles = []
  const files = fs.readdirSync(path)

  for (const file of files) {
    const fullPath = `${path}/${file}`

    if (fs.statSync(fullPath).isDirectory()) {
      matchingFiles.push(...findFiles(fullPath, regex))
    } else {
      if (regex.test(fullPath)) {
        matchingFiles.push(fullPath)
      }
    }
  }

  return matchingFiles
}

const buildContent = (files) => {
  let content = '/* DO NOT MODIFY - THIS IS A GENERATED FILE BY `storybook/testcafe/testcafe-setup.js` */\n\n'
  for (let i = 0; i < files.length; i++) {
    content += `import '../${files[i]}'\n`
  }
  return content
}

try {
  // find all the testcafe files in the storybook project
  const files = findFiles(BASE_PATH, /.*\.(testcafe)\.(ts|tsx)/)

  // build test file content
  const content = buildContent(files)

  // write to auto-generated test file
  fs.ensureFileSync(TEST_FILE_PATH)
  fs.writeFileSync(TEST_FILE_PATH, content, { encoding: 'utf8', flag: 'w' })
} catch (err) {
  console.error(err)
}
