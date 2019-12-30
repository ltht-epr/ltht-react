import { configure } from '@storybook/react'
import { setAddon, addDecorator, addParameters } from '@storybook/react'
import JSXAddon from 'storybook-addon-jsx'
import { withInfo } from '@storybook/addon-info'
import { withKnobs } from '@storybook/addon-knobs/react'
import { addReadme } from 'storybook-readme'
import { INITIAL_VIEWPORTS } from '@storybook/addon-viewport'

addDecorator(withInfo)
addDecorator(withKnobs)
addDecorator(addReadme)
setAddon(JSXAddon)

const req = require.context('../../components/src', true, /.stories.tsx$/)

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
