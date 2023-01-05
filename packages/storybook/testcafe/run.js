const { exec } = require('child_process')

const startStorybook = exec('start-storybook --ci --quiet -p 9010')
console.log(startStorybook.pid)
var mainProcessExitCode = 0

startStorybook.stdout.on('data', (data) => {
  console.log(data)
})

startStorybook.stderr.on('data', (data) => {
  console.error(data)
})

const testcafe = exec('sleep 8 && testcafe --config-file ./testcafe/.testcaferc.json')

testcafe.stdout.on('data', (data) => {
  console.log(data)
})

testcafe.stderr.on('data', (data) => {
  console.error(data)
})

testcafe.on('exit', (code) => {
  console.log(`testcafe exited with code ${code}`)
  mainProcessExitCode = code
  startStorybook.exit(0)
})

startStorybook.on('exit', (code) => {
  console.log(`storybook test instance exited with code ${code}`)
  process.exit(mainProcessExitCode)
})
