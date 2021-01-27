import React from 'react'
import { storiesOf } from '@storybook/react'
import JSXAddon from 'storybook-addon-jsx'

import EForm from '@ltht-react/eform'
import readme from '@ltht-react/eform/README.md'

// eslint-disable-next-line @typescript-eslint/no-explicit-any
const stories = storiesOf('Clinical|Organisms/EForm', module) as any

stories.addWithJSX = JSXAddon.addWithJSX

stories.addParameters({
  readme: {
    sidebar: readme,
  },
})

stories.addWithJSX('Wikipedia', () => {
  return <EForm url="https://www.wikipedia.org/" style={{ height: '98vh' }} />
})
