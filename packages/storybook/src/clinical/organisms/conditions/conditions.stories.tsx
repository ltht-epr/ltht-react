import React from 'react'
import { Story } from '@storybook/react'

import ConditionSummary from '@ltht-react/condition-summary'
import Card from '@ltht-react/card'
import conditions from './conditions.fixtures'

export const Summary: Story = () => (
  <Card>
    <Card.Header>
      <Card.Title>Conditions</Card.Title>
    </Card.Header>
    <Card.List>
      {conditions.map(condition => (
        <Card.ListItem key={condition.id}>
          <ConditionSummary condition={condition} />
        </Card.ListItem>
      ))}
    </Card.List>
  </Card>
)

export const Redacted: Story = () => (
  <Card>
    <Card.Header>
      <Card.Title>Condition</Card.Title>
    </Card.Header>
    <Card.List>
      <Card.ListItem>
        <ConditionSummary condition={conditions[0]} />
      </Card.ListItem>
    </Card.List>
  </Card>
)

export default { title: 'Clinical/Organisms/Conditions' }
