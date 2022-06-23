import { Story } from '@storybook/react'
import Card from '@ltht-react/card'
import AuditTrail, { RedactedAuditTrail } from './timeline.fixtures'

export const Details: Story = () => (
  <Card>
    <Card.Header>
      <Card.Title style={{ textAlign: 'center' }}>Timeline</Card.Title>
    </Card.Header>
    <Card.Body>{/* <Timeline auditTrail={AuditTrail.resources} key="timeline" /> */}</Card.Body>
  </Card>
)

export const Redacted: Story = () => (
  <Card>
    <Card.Header>
      <Card.Title style={{ textAlign: 'center' }}>Timeline</Card.Title>
    </Card.Header>
    <Card.Body>{/* <Timeline auditTrail={RedactedAuditTrail.resources} key="timeline" /> */}</Card.Body>
  </Card>
)

export default { title: 'Clinical/Organisms/Timeline' }
