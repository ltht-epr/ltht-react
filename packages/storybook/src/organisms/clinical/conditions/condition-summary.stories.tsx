import React from 'react'
import { storiesOf } from '@storybook/react'
import JSXAddon from 'storybook-addon-jsx'

import ConditionSummary from '@ltht-react/condition-summary'
import readme from '@ltht-react/condition-summary/README.md'
import Card from '@ltht-react/card'
import conditions from './condition-summary.fixtures'

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
        <h3>Conditions</h3>
      </Card.Header>
      <Card.List>
        <ConditionSummary conditions={conditions} />
      </Card.List>
    </Card>
  )
})
