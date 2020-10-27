import React from 'react'
import { storiesOf } from '@storybook/react'
import JSXAddon from 'storybook-addon-jsx'

import CommunityTreatmentOrderSummary from '@ltht-react/community-treatment-order-summary'
import Card from '@ltht-react/card'
import readme from '@ltht-react/community-treatment-order-summary/README.md'
import orders from './community-treatment-order.fixtures'

const stories = storiesOf('Organisms - Clinical|Community Treatment Order', module) as any

stories.addWithJSX = JSXAddon.addWithJSX

stories.addParameters({
  readme: {
    sidebar: readme,
  },
})

stories.addWithJSX('Summary', () => (
  <Card>
    <Card.Header>
      <h3>Orders</h3>
    </Card.Header>
    <Card.List>
      <CommunityTreatmentOrderSummary communityTreatmentOrders={orders} />
    </Card.List>
  </Card>
))
