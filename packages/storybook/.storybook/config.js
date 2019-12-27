import { configure, addParameters } from '@storybook/react'
import { INITIAL_VIEWPORTS } from '@storybook/addon-viewport'

const req = require.context('../src/', true, /.stories.tsx$/)

function loadStories() {
  req.keys().forEach(req)
}

const viewports = {
  ...INITIAL_VIEWPORTS,
}

addParameters({
  backgrounds: [{ name: 'canvas-background', value: '#d8d8d8', default: true }],
  viewport: { viewports },
})

configure(loadStories, module)
