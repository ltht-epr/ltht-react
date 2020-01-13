import { configure } from '@storybook/react'
import { setAddon, addDecorator, addParameters } from '@storybook/react'
import JSXAddon from 'storybook-addon-jsx'
import { addReadme } from 'storybook-readme'
import { INITIAL_VIEWPORTS } from '@storybook/addon-viewport'

addDecorator(addReadme)
setAddon(JSXAddon)

const req = require.context('../src', true, /.stories.tsx$/)

function loadStories() {
  req.keys().forEach(filename => req(filename))
}

const viewports = {
  ...INITIAL_VIEWPORTS,
}

addParameters({
  backgrounds: [{ name: 'canvas-background', value: '#d8d8d8', default: true }],
  viewport: { viewports },
})

configure(loadStories, module)
