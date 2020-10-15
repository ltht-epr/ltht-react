import React from 'react'
import { storiesOf } from '@storybook/react'
import JSXAddon from 'storybook-addon-jsx'

import CarePlanDetail from '@ltht-react/care-plan-detail'
import readme from '@ltht-react/care-plan-detail/README.md'
import Card from '@ltht-react/card'

import carePlans from './care-plan.fixtures'

// eslint-disable-next-line @typescript-eslint/no-explicit-any
const stories = storiesOf('Organisms - Clinical|Care Plan', module) as any

stories.addWithJSX = JSXAddon.addWithJSX

stories.addParameters({
  readme: {
    sidebar: readme,
  },
})

stories.addWithJSX('Detail', () => (
  <Card>
    <Card.Header>
      <h3>Care Plan</h3>
    </Card.Header>
    <Card.Body>
      <CarePlanDetail carePlan={carePlans[0]} />
    </Card.Body>
  </Card>
))
