import React from 'react'
import { Story } from '@storybook/react'

import CarePlanDetail from '@ltht-react/care-plan-detail'
import CarePlanSummary from '@ltht-react/care-plan-summary'
import Card from '@ltht-react/card'
import carePlans from './care-plans.fixtures'

export const Detail: Story = () => (
  <Card>
    <Card.Header>
      <h3>Care Plan</h3>
    </Card.Header>
    <Card.Body>
      <CarePlanDetail carePlan={carePlans[0]} />
    </Card.Body>
  </Card>
)

export const Summary: Story = () => (
  <Card>
    <Card.Header>
      <Card.Title>Care Plans</Card.Title>
    </Card.Header>
    <Card.List>
      {carePlans.map(carePlan => (
        <Card.ListItem>
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
