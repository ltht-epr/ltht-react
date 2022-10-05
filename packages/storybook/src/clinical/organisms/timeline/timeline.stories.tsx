import { Story } from '@storybook/react'
import Card from '@ltht-react/card'
import Timeline from '@ltht-react/timeline'
import { ITimelineItem } from '@ltht-react/timeline/src'
import { AuditEvent, DocumentReference, QuestionnaireResponse, TimelineDomainResourceType } from '@ltht-react/types'
import Questionnaires, {
  AuditTrail,
  DocumentReferences,
  RedactedAuditTrail,
  RedactedQuestionnaireResponses,
} from './timeline.fixtures'

const auditType = TimelineDomainResourceType.AuditEvent
const questionnaireType = TimelineDomainResourceType.QuestionnaireResponse
const documentType = TimelineDomainResourceType.DocumentReference

export const AuditEventTimeline: Story = () => {
  const timelineItems: ITimelineItem[] = AuditTrail.resources.map((ti) => ({
    domainResource: ti as AuditEvent,
    buttonState: 'selectable-button',
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
    buttonState: idx % 2 === 0 ? 'selectable-button' : 'no-button',
    clickHandler:
      idx % 2 === 0
        ? () => {
            // eslint-disable-next-line no-console
            console.log('Clicked')
          }
        : undefined,
    buttonText: `View Form: ${idx}`,
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
    buttonState: 'selectable-button',
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

export const QuestionnaireTimeline: Story = () => {
  const timelineItems: ITimelineItem[] = Questionnaires.resources.map((ti) => ({
    domainResource: ti as QuestionnaireResponse,
    buttonState: 'selectable-button',
  }))

  return (
    <Card>
      <Card.Header>
        <Card.Title style={{ textAlign: 'center' }}>Timeline</Card.Title>
      </Card.Header>
      <Card.Body>
        <Timeline timelineItems={timelineItems} key="Timeline1" domainResourceType={questionnaireType} />
      </Card.Body>
    </Card>
  )
}

export const QuestionnaireClickableTimeline: Story = () => {
  const timelineItems: ITimelineItem[] = Questionnaires.resources.map((ti, idx) => ({
    domainResource: ti as QuestionnaireResponse,
    // eslint-disable-next-line @typescript-eslint/no-empty-function
    buttonState: idx % 2 === 0 ? 'selected-button' : 'no-button',
    clickHandler:
      idx % 2 === 0
        ? () => {
            // eslint-disable-next-line no-console
            console.log('Clicked')
          }
        : undefined,
    buttonText: `Close me`,
  }))

  return (
    <Card>
      <Card.Header>
        <Card.Title style={{ textAlign: 'center' }}>Timeline</Card.Title>
      </Card.Header>
      <Card.Body>
        <Timeline timelineItems={timelineItems} key="Timeline2" domainResourceType={questionnaireType} />
      </Card.Body>
    </Card>
  )
}

export const QuestionnaireRedactedTimeline: Story = () => {
  const timelineItems: ITimelineItem[] = RedactedQuestionnaireResponses.resources.map((ti) => ({
    domainResource: ti as QuestionnaireResponse,
    // eslint-disable-next-line @typescript-eslint/no-empty-function
    clickHandler: () => {},
    buttonState: 'selectable-button',
  }))

  return (
    <Card>
      <Card.Header>
        <Card.Title style={{ textAlign: 'center' }}>Timeline</Card.Title>
      </Card.Header>
      <Card.Body>
        <Timeline timelineItems={timelineItems} key="Timeline3" domainResourceType={questionnaireType} />
      </Card.Body>
    </Card>
  )
}

export const DocumentTimeline: Story = () => {
  const timelineItems: ITimelineItem[] = DocumentReferences.resources.map((ti) => ({
    domainResource: ti as DocumentReference,
    buttonState: 'selectable-button',
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
    buttonState: idx % 2 === 0 ? 'selectable-button' : 'no-button',
    clickHandler:
      idx % 2 === 0
        ? () => {
            // eslint-disable-next-line no-console
            console.log('Clicked')
          }
        : undefined,
    buttonText: `Close me`,
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
    buttonState: 'selectable-button',
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
