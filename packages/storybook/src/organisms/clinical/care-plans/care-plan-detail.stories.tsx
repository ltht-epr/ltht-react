import React from 'react'
import { storiesOf } from '@storybook/react'
import JSXAddon from 'storybook-addon-jsx'

import CarePlanDetail from '@ltht-react/care-plan-detail'
import readme from '@ltht-react/care-plan-detail/README.md'
import { Card, CardHeader, CardBody } from '@ltht-react/card'

import careplans from './care-plan.fixtures'

const stories = storiesOf('Organisms - Clinical|Care Plan', module)

stories.addWithJSX = JSXAddon.addWithJSX

stories.addParameters({
  readme: {
    sidebar: readme,
  },
})

stories.addWithJSX('Detail', () => (
  <Card noData={!careplans}>
    <CardHeader position="center">
      <h3>Care Plan</h3>
    </CardHeader>
    <CardBody>
      <CarePlanDetail carePlan={careplans[0]} />
    </CardBody>
  </Card>
))
