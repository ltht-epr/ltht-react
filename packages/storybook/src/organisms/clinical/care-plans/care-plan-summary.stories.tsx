import React from 'react'
import { storiesOf } from '@storybook/react'
import JSXAddon from 'storybook-addon-jsx'

import CarePlanSummary from '@ltht-react/care-plan-summary'
import readme from '@ltht-react/care-plan-summary/README.md'
import Card from '@ltht-react/card'
import careplans from './care-plan.fixtures'

const stories = storiesOf('Organisms - Clinical|Care Plan', module) as any

stories.addWithJSX = JSXAddon.addWithJSX

stories.addParameters({
  readme: {
    sidebar: readme,
  },
})

stories.addWithJSX('Summary', () => (
  <Card>
    <Card.Header>
      <h3>Care Plans</h3>
    </Card.Header>
    <Card.List>
      <CarePlanSummary carePlans={careplans} />
    </Card.List>
  </Card>
))
