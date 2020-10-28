import React from 'react'
import { storiesOf } from '@storybook/react'
import JSXAddon from 'storybook-addon-jsx'

import ConditionSummary from '@ltht-react/condition-summary'
import readme from '@ltht-react/condition-summary/README.md'
import Card from '@ltht-react/card'
import conditions from './condition-summary.fixtures'

// eslint-disable-next-line @typescript-eslint/no-explicit-any
const stories = storiesOf('Organisms - Clinical|Condition', module) as any

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
        <Card.Title>Conditions</Card.Title>
      </Card.Header>
      <Card.List>
        {conditions.map(condition => (
          <Card.ListItem key={condition.id}>
            <ConditionSummary condition={condition} />
          </Card.ListItem>
        ))}
      </Card.List>
    </Card>
  )
})
