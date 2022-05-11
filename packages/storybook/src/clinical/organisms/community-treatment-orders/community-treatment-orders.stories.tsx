import { Story } from '@storybook/react'

import CommunityTreatmentOrderDetail from '@ltht-react/community-treatment-order-detail'
import CommunityTreatmentOrderSummary from '@ltht-react/community-treatment-order-summary'
import Card from '@ltht-react/card'
import { Button } from '@ltht-react/button'
import { DetailViewType } from '@ltht-react/types'
import { useDetailViewType } from '@ltht-react/type-detail'
import orders from './community-treatment-orders.fixtures'

export const Detail: Story = () => (
  <Card>
    <Card.Header>
      <Card.Title>Order</Card.Title>
    </Card.Header>
    <Card.Body>
      <CommunityTreatmentOrderDetail communityTreatmentOrder={orders[0]} />
    </Card.Body>
  </Card>
)

export const DetailsCollapsibleView: Story = () => {
  // eslint-disable-next-line @typescript-eslint/no-unused-vars
  const { viewType, toggle } = useDetailViewType()
  return (
    <Card>
      <Card.Header>
        <Card.Title>
          Collapsible detail view{' '}
          <Button
            type="button"
            value={viewType === DetailViewType.Expanded ? 'View compacted' : 'View expanded'}
            onClick={toggle}
          />
        </Card.Title>
      </Card.Header>
      <Card.Body>
        <CommunityTreatmentOrderDetail communityTreatmentOrder={orders[2]} viewType={viewType} />
      </Card.Body>
    </Card>
  )
}

export const Summary: Story = () => (
  <Card>
    <Card.Header>
      <Card.Title>Orders</Card.Title>
    </Card.Header>
    <Card.List>
      {orders.map((order) => (
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
