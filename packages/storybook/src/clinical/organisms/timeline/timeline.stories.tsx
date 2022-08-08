import { Story } from '@storybook/react'
import Card from '@ltht-react/card'
import Timeline from '@ltht-react/timeline'
import { ITimelineItem } from '@ltht-react/timeline/src'
import { AuditEvent, DocumentReference, TimelineDomainResourceType } from '@ltht-react/types'
import DocumentReferences, { AuditTrail, RedactedAuditTrail } from './timeline.fixtures'

const auditType = TimelineDomainResourceType.AuditEvent
const documentType = TimelineDomainResourceType.DocumentReference

export const AuditEventTimeline: Story = () => {
  const timelineItems: ITimelineItem[] = AuditTrail.resources.map((ti) => ({
    domainResource: ti as AuditEvent,
    isSelected: false,
  }))

  return (
    <Card>
      <Card.Header>
        <Card.Title style={{ textAlign: 'center' }}>Timeline</Card.Title>
      </Card.Header>
      <Card.Body>
        <Timeline timelineItems={timelineItems} key="Timeline1" domainResourceType={auditType} />
      </Card.Body>
    </Card>
  )
}

export const AuditEventClickableTimeline: Story = () => {
  const timelineItems: ITimelineItem[] = AuditTrail.resources.map((ti, idx) => ({
    domainResource: ti as AuditEvent,
    // eslint-disable-next-line @typescript-eslint/no-empty-function
    clickHandler:
      idx % 2 === 0
        ? () => {
            // eslint-disable-next-line no-console
            console.log('Clicked')
          }
        : undefined,
    clickPrompt: idx % 2 === 0 ? `View Form: ${idx}` : undefined,
    isSelected: idx === 0,
    deselectPrompt: idx === 0 ? 'Close me' : undefined,
  }))

  return (
    <Card>
      <Card.Header>
        <Card.Title style={{ textAlign: 'center' }}>Timeline</Card.Title>
      </Card.Header>
      <Card.Body>
        <Timeline timelineItems={timelineItems} key="Timeline2" domainResourceType={auditType} />
      </Card.Body>
    </Card>
  )
}

export const AuditEventRedactedTimeline: Story = () => {
  const timelineItems: ITimelineItem[] = RedactedAuditTrail.resources.map((ti) => ({
    domainResource: ti as AuditEvent,
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
        <Timeline timelineItems={timelineItems} key="Timeline3" domainResourceType={auditType} />
      </Card.Body>
    </Card>
  )
}

export const DocumentTimeline: Story = () => {
  const timelineItems: ITimelineItem[] = DocumentReferences.resources.map((ti) => ({
    domainResource: ti as DocumentReference,
    isSelected: false,
  }))

  return (
    <Card>
      <Card.Header>
        <Card.Title style={{ textAlign: 'center' }}>Timeline</Card.Title>
      </Card.Header>
      <Card.Body>
        <Timeline timelineItems={timelineItems} key="Timeline1" domainResourceType={documentType} />
      </Card.Body>
    </Card>
  )
}

export const DocumentClickableTimeline: Story = () => {
  const timelineItems: ITimelineItem[] = DocumentReferences.resources.map((ti, idx) => ({
    domainResource: ti as DocumentReference,
    // eslint-disable-next-line @typescript-eslint/no-empty-function
    clickHandler:
      idx % 2 === 0
        ? () => {
            // eslint-disable-next-line no-console
            console.log('Clicked')
          }
        : undefined,
    clickPrompt: idx % 2 === 0 ? `View Form: ${idx}` : undefined,
    isSelected: idx === 0,
    deselectPrompt: idx === 0 ? 'Close me' : undefined,
  }))

  return (
    <Card>
      <Card.Header>
        <Card.Title style={{ textAlign: 'center' }}>Timeline</Card.Title>
      </Card.Header>
      <Card.Body>
        <Timeline timelineItems={timelineItems} key="Timeline2" domainResourceType={documentType} />
      </Card.Body>
    </Card>
  )
}

export const DocumentRedactedTimeline: Story = () => {
  const timelineItems: ITimelineItem[] = DocumentReferences.resources.map((ti) => ({
    domainResource: ti as DocumentReference,
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
        <Timeline timelineItems={timelineItems} key="Timeline3" domainResourceType={documentType} />
      </Card.Body>
    </Card>
  )
}

export default { title: 'Clinical/Organisms/Timeline' }
