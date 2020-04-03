import React from 'react'
import { storiesOf } from '@storybook/react'
import JSXAddon from 'storybook-addon-jsx'

import CarePlanSummary from '@ltht-react/care-plan-summary'
import readme from '@ltht-react/care-plan-summary/README.md'
import { Card, CardHeader, CardBody, CardList } from '@ltht-react/card'
import careplans from './care-plan.fixtures'

const stories = storiesOf('Organisms - Clinical|Care Plan', module)

stories.addWithJSX = JSXAddon.addWithJSX

stories.addParameters({
  readme: {
    sidebar: readme,
  },
})

stories.addWithJSX('Summary', () => (
  <Card noData={!careplans}>
    <CardHeader>
      <h3>Care Plans</h3>
    </CardHeader>
    <CardBody>
      <CardList>
        <CarePlanSummary carePlans={careplans} />
      </CardList>
    </CardBody>
  </Card>
))
