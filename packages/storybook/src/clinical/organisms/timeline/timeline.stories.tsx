import { Story } from '@storybook/react'
import Timeline from '@ltht-react/timeline'
import Card from '@ltht-react/card'
import AuditTrail from './timeline.fixtures'

export const Details: Story = () => (
  <Card>
    <Card.Header>
      <Card.Title style={{ textAlign: 'center' }}>Timeline</Card.Title>
    </Card.Header>
    <Card.Body>
      <Timeline auditTrail={AuditTrail.resources} />
    </Card.Body>
  </Card>
)

export default { title: 'Clinical/Organisms/Timeline' }
