import Card from '@ltht-react/card'
import { Story } from '@storybook/react'
import PlanDetailEditor from '@ltht-react/plan-detail-editor'

export const TextField: Story = () => (
  <Card>
    <Card.Header>
      <Card.Title>Questionnaire</Card.Title>
    </Card.Header>
    <Card.Body>
      <PlanDetailEditor />
    </Card.Body>
  </Card>
)
