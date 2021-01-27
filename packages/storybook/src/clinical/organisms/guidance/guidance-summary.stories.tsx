import React from 'react'
import { storiesOf } from '@storybook/react'
import JSXAddon from 'storybook-addon-jsx'

import GuidanceSummary from '@ltht-react/guidance-summary'
import readme from '@ltht-react/guidance-summary/README.md'
import Card from '@ltht-react/card'

import guidances from './guidance.fixture'

// eslint-disable-next-line @typescript-eslint/no-explicit-any
const stories = storiesOf('Clinical|Organisms/Guidance', module) as any

stories.addWithJSX = JSXAddon.addWithJSX

stories.addParameters({
  readme: {
    sidebar: readme,
  },
})

stories.addWithJSX('Summary', () => {
  return (
    <Card>
      <Card.Header>
        <Card.Title>Guidance</Card.Title>
      </Card.Header>
      <Card.List>
        {guidances.map(guidance => (
          <Card.ListItem key={guidance.id}>
            <GuidanceSummary guidance={guidance} />
          </Card.ListItem>
        ))}
      </Card.List>
    </Card>
  )
})

stories.addWithJSX('Redacted', () => {
  return (
    <Card>
      <Card.Header>
        <Card.Title>Guidance</Card.Title>
      </Card.Header>
      <Card.List>
        <Card.ListItem>
          <GuidanceSummary guidance={guidances[1]} />
        </Card.ListItem>
      </Card.List>
    </Card>
  )
})
