import React from 'react'
import { Story } from '@storybook/react'

import CommunityTreatmentOrderDetail from '@ltht-react/community-treatment-order-detail'
import CommunityTreatmentOrderSummary from '@ltht-react/community-treatment-order-summary'
import Card from '@ltht-react/card'
import orders from './community-treatment-orders.fixtures'

export const Detail: Story = () => (
  <Card>
    <Card.Header>
      <h3>Order</h3>
    </Card.Header>
    <Card.Body>
      <CommunityTreatmentOrderDetail communityTreatmentOrder={orders[0]} />
    </Card.Body>
  </Card>
)

export const Summary: Story = () => (
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
)

export const Redacted: Story = () => (
  <Card>
    <Card.Header>
      <Card.Title>Order</Card.Title>
    </Card.Header>
    <Card.List>
      <Card.ListItem>
        <CommunityTreatmentOrderSummary communityTreatmentOrder={orders[1]} />
      </Card.ListItem>
    </Card.List>
  </Card>
)

export default { title: 'Clinical/Organisms/Community Treatment Orders' }
