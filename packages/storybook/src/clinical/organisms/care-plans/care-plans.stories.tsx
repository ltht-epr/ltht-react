import { Story } from '@storybook/react'

import CarePlanDetail from '@ltht-react/care-plan-detail'
import CarePlanSummary from '@ltht-react/care-plan-summary'
import Card from '@ltht-react/card'
import { useDetailViewType } from '@ltht-react/type-detail'
import { Button } from '@ltht-react/button'
import { DetailViewType } from '@ltht-react/types'
import carePlans from './care-plans.fixtures'

export const Detail: Story = () => (
  <Card>
    <Card.Header>
      <Card.Title>Care Plan</Card.Title>
    </Card.Header>
    <Card.Body>
      <CarePlanDetail carePlan={carePlans[0]} />
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
        <CarePlanDetail carePlan={carePlans[0]} viewType={viewType} />
      </Card.Body>
    </Card>
  )
}

export const Summary: Story = () => (
  <Card>
    <Card.Header>
      <Card.Title>Care Plans</Card.Title>
    </Card.Header>
    <Card.List>
      {carePlans.map((carePlan) => (
        <Card.ListItem key={carePlan.id}>
          <CarePlanSummary carePlan={carePlan} />
        </Card.ListItem>
      ))}
    </Card.List>
  </Card>
)
export const Redacted: Story = () => (
  <Card>
    <Card.Header>
      <Card.Title>Care Plan</Card.Title>
    </Card.Header>
    <Card.List>
      <Card.ListItem>
        <CarePlanSummary carePlan={carePlans[0]} />
      </Card.ListItem>
    </Card.List>
  </Card>
)

export default { title: 'Clinical/Organisms/Care Plans' }
