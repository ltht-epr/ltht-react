/* eslint-disable @typescript-eslint/no-explicit-any */
import React from 'react'
import { storiesOf } from '@storybook/react'
import JSXAddon from 'storybook-addon-jsx'

import CommunityTreatmentOrderDetail from '@ltht-react/community-treatment-order-detail'
import readme from '@ltht-react/community-treatment-order-detail/README.md'
import { Card, CardHeader, CardBody } from '@ltht-react/card'

import orders from './community-treatment-order.fixtures'

const stories = storiesOf('Organisms - Clinical|Community Treatment Order', module) as any

stories.addWithJSX = JSXAddon.addWithJSX

stories.addParameters({
  readme: {
    sidebar: readme,
  },
})

stories.addWithJSX('Detail', () => (
  <Card noData={!orders}>
    <CardHeader position="center">
      <h3>Order</h3>
    </CardHeader>
    <CardBody>
      <CommunityTreatmentOrderDetail communityTreatmentOrder={orders[0]} />
    </CardBody>
  </Card>
))
