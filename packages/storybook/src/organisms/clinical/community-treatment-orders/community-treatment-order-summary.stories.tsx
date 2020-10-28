import React from 'react'
import { storiesOf } from '@storybook/react'
import JSXAddon from 'storybook-addon-jsx'

import CommunityTreatmentOrderSummary from '@ltht-react/community-treatment-order-summary'
import Card from '@ltht-react/card'
import readme from '@ltht-react/community-treatment-order-summary/README.md'
import orders from './community-treatment-order.fixtures'

// eslint-disable-next-line @typescript-eslint/no-explicit-any
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
      <Card.Title>Orders</Card.Title>
    </Card.Header>
    <Card.List>
      {orders.map(order => (
        <Card.ListItem key={order.id}>
          <CommunityTreatmentOrderSummary communityTreatmentOrder={order} />
        </Card.ListItem>
      ))}
    </Card.List>
  </Card>
))
