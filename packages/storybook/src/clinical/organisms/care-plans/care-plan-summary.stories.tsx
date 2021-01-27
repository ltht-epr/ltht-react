import React from 'react'
import { storiesOf } from '@storybook/react'
import JSXAddon from 'storybook-addon-jsx'

import CarePlanSummary from '@ltht-react/care-plan-summary'
import readme from '@ltht-react/care-plan-summary/README.md'
import Card from '@ltht-react/card'
import carePlans from './care-plan.fixtures'

// eslint-disable-next-line @typescript-eslint/no-explicit-any
const stories = storiesOf('Clinical|Organisms/Care Plan', module) as any

stories.addWithJSX = JSXAddon.addWithJSX

stories.addParameters({
  readme: {
    sidebar: readme,
  },
})

stories.addWithJSX('Summary', () => (
  <Card>
    <Card.Header>
      <Card.Title>Care Plans</Card.Title>
    </Card.Header>
    <Card.List>
      {carePlans.map(carePlan => (
        <Card.ListItem>
          <CarePlanSummary carePlan={carePlan} />
        </Card.ListItem>
      ))}
    </Card.List>
  </Card>
))

stories.addWithJSX('Redacted', () => (
  <Card>
    <Card.Header>
      <Card.Title>Care Plan</Card.Title>
    </Card.Header>
    <Card.List>
      <Card.ListItem>
        <CarePlanSummary carePlan={carePlans[0]} />
      </Card.ListItem>
    </Card.List>
  </Card>
))
