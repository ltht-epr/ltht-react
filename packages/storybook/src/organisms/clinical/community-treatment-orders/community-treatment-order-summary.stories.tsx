import React from 'react'
import { storiesOf } from '@storybook/react'
import JSXAddon from 'storybook-addon-jsx'

import CommunityTreatmentOrderSummary from '@ltht-react/community-treatment-order-summary'
import { Card, CardHeader, CardBody, CardList } from '@ltht-react/card'
import readme from '@ltht-react/community-treatment-order-summary/README.md'
import orders from './community-treatment-order.fixtures'

const stories = storiesOf('Organisms - Clinical|Community Treatment Order', module)

stories.addWithJSX = JSXAddon.addWithJSX

stories.addParameters({
  readme: {
    sidebar: readme,
  },
})

stories.addWithJSX('Summary', () => (
  <Card noData={!orders}>
    <CardHeader>
      <h3>Orders</h3>
    </CardHeader>
    <CardBody>
      <CardList>
        <CommunityTreatmentOrderSummary communityTreatmentOrders={orders} />
      </CardList>
    </CardBody>
  </Card>
))
