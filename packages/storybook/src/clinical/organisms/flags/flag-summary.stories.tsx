import React from 'react'
import { storiesOf } from '@storybook/react'
import JSXAddon from 'storybook-addon-jsx'

import FlagSummary from '@ltht-react/flag-summary'
import readme from '@ltht-react/flag-summary/README.md'
import Card from '@ltht-react/card'
import flags from './flag.fixtures'

// eslint-disable-next-line @typescript-eslint/no-explicit-any
const stories = storiesOf('Clinical|Organisms/Flag', module) as any

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
      {flags.map(flag => (
        <Card.ListItem key={flag.id}>
          <FlagSummary flag={flag} />
        </Card.ListItem>
      ))}
    </Card.List>
  </Card>
))

stories.addWithJSX('Redacted', () => (
  <Card>
    <Card.Header>
      <h3>Flag</h3>
    </Card.Header>
    <Card.List>
      <Card.ListItem>
        <FlagSummary flag={flags[0]} />
      </Card.ListItem>
    </Card.List>
  </Card>
))
