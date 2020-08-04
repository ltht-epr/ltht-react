import React from 'react'
import { storiesOf } from '@storybook/react'
import JSXAddon from 'storybook-addon-jsx'

import EForm from '@ltht-react/eform'
import readme from '@ltht-react/eform/README.md'

const stories = storiesOf('Organisms - Clinical|EForm', module)

stories.addWithJSX = JSXAddon.addWithJSX

stories.addParameters({
  readme: {
    sidebar: readme,
  },
})

const handler = (event: unknown): void => {
  // eslint-disable-next-line no-console
  console.log(event)
}

stories.addWithJSX('NEWS', () => {
  return <EForm url="https://www.wikipedia.org/" messageHandler={handler} />
})
