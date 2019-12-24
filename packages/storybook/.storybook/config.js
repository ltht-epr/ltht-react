import { configure, addParameters } from '@storybook/react'

const req = require.context('../src/', true, /.stories.tsx$/)

function loadStories() {
  req.keys().forEach(req)
}

addParameters({
  backgrounds: [{ name: 'canvas-background', value: '#d8d8d8', default: true }],
})

configure(loadStories, module)
