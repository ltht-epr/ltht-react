import React from 'react'
import { storiesOf } from '@storybook/react'
import JSXAddon from 'storybook-addon-jsx'

import FlagSummary from '@ltht-react/flag-summary'
import readme from '@ltht-react/flag-summary/README.md'
import Card from '@ltht-react/card'
import flags from './flag.fixtures'

// eslint-disable-next-line @typescript-eslint/no-explicit-any
const stories = storiesOf('Organisms - Clinical|Flag', module) as any

stories.addWithJSX = JSXAddon.addWithJSX

stories.addParameters({
  readme: {
    sidebar: readme,
  },
})

stories.addWithJSX('Summary', () => (
  <Card>
    <Card.Header>
      <h3>Flags</h3>
    </Card.Header>
    <Card.List>
      <FlagSummary flags={flags} />
    </Card.List>
  </Card>
))
