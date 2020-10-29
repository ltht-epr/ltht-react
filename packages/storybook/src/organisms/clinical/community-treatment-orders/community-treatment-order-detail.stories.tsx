import React from 'react'
import { storiesOf } from '@storybook/react'
import JSXAddon from 'storybook-addon-jsx'

import CommunityTreatmentOrderDetail from '@ltht-react/community-treatment-order-detail'
import readme from '@ltht-react/community-treatment-order-detail/README.md'
import Card from '@ltht-react/card'

import orders from './community-treatment-order.fixtures'

// eslint-disable-next-line @typescript-eslint/no-explicit-any
const stories = storiesOf('Organisms - Clinical|Community Treatment Order', module) as any

stories.addWithJSX = JSXAddon.addWithJSX

stories.addParameters({
  readme: {
    sidebar: readme,
  },
})

stories.addWithJSX('Detail', () => (
  <Card>
    <Card.Header>
      <h3>Order</h3>
    </Card.Header>
    <Card.Body>
      <CommunityTreatmentOrderDetail communityTreatmentOrder={orders[0]} />
    </Card.Body>
  </Card>
))
