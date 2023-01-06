const { exec } = require('child_process')

const storybook = exec('start-storybook --ci --quiet -p 9010')
var mainProcessExitCode = 0

storybook.stdout.on('data', console.log)
storybook.stderr.on('data', console.error)

const testcafe = exec('sleep 8 && testcafe --config-file ./testcafe/.testcaferc.json')

testcafe.stdout.on('data', console.log)
testcafe.stderr.on('data', console.error)

testcafe.on('exit', (code) => {
  console.log(`testcafe exited with code ${code}`)
  mainProcessExitCode = code
  storybook.kill('SIGINT')
})

storybook.on('exit', (code) => {
  console.log(`storybook test instance exited with code ${code}`)
  process.exit(mainProcessExitCode)
})

setTimeout(() => {
  console.error('TIMEOUT')
  testcafe.kill('SIGINT')
  storybook.kill('SIGINT')
  process.exit(1)
}, 80000)
