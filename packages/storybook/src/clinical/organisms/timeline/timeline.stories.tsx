import { Story } from '@storybook/react'
import Card from '@ltht-react/card'
import Timeline from '@ltht-react/timeline'
import AuditTrail, { RedactedAuditTrail } from './timeline.fixtures'

export const Details: Story = () => {
  const timelineItems = AuditTrail.resources.map((ti) => ({
    auditEvent: ti,
    isSelected: false,
  }))

  return (
    <Card>
      <Card.Header>
        <Card.Title style={{ textAlign: 'center' }}>Timeline</Card.Title>
      </Card.Header>
      <Card.Body>
        <Timeline timelineItems={timelineItems} key="timeline" />
      </Card.Body>
    </Card>
  )
}

export const ClickableDetails: Story = () => {
  const timelineItems = AuditTrail.resources.map((ti, idx) => ({
    auditEvent: ti,
    // eslint-disable-next-line @typescript-eslint/no-empty-function
    clickHandler:
      idx % 2 === 0
        ? () => {
            // eslint-disable-next-line no-console
            console.log('Clicked')
          }
        : undefined,
    clickPrompt: idx % 2 === 0 ? `View Form: ${idx}` : undefined,
    isSelected: idx === 0 ? true : false,
    deselectPrompt: idx === 0 ? 'Close me' : undefined,
  }))

  return (
    <Card>
      <Card.Header>
        <Card.Title style={{ textAlign: 'center' }}>Timeline</Card.Title>
      </Card.Header>
      <Card.Body>
        <Timeline timelineItems={timelineItems} key="timeline" />
      </Card.Body>
    </Card>
  )
}

export const Redacted: Story = () => {
  const timelineItems = RedactedAuditTrail.resources.map((ti) => ({
    auditEvent: ti,
    // eslint-disable-next-line @typescript-eslint/no-empty-function
    clickHandler: () => {},
    isSelected: false,
  }))

  return (
    <Card>
      <Card.Header>
        <Card.Title style={{ textAlign: 'center' }}>Timeline</Card.Title>
      </Card.Header>
      <Card.Body>
        <Timeline timelineItems={timelineItems} key="timeline" />
      </Card.Body>
    </Card>
  )
}

export default { title: 'Clinical/Organisms/Timeline' }
