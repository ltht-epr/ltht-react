import { Story } from '@storybook/react'
import Card from '@ltht-react/card'
import Timeline, { ITimelineFilter } from '@ltht-react/timeline'
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
    buttonState: 'no-button',
    buttonText: 'View',
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

const createSomeButtonStates = (index: number) => {
  if (index === 3) {
    return 'permission-denied-button'
  }
  return index % 2 === 0 ? 'selectable-button' : 'no-button'
}

export const AuditEventClickableTimeline: Story = () => {
  const timelineItems: ITimelineItem[] = AuditTrail.resources.map((ti, idx) => {
    let text = `View Form ${idx / 2 + 1}`
    if (idx === 3) {
      text = 'Insufficient Privileges to view this form'
    }

    return {
      domainResource: ti as AuditEvent,
      // eslint-disable-next-line @typescript-eslint/no-empty-function
      buttonState: createSomeButtonStates(idx),
      itemClickHandler:
        idx % 2 === 0
          ? () => {
              // eslint-disable-next-line no-console
              console.log('Clicked')
            }
          : undefined,
      buttonText: text,
    }
  })

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
    itemClickHandler: () => {},
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
  const timelineItems: ITimelineItem[] = Questionnaires.resources.map((ti, idx) => ({
    domainResource: ti as QuestionnaireResponse,
    buttonState: idx !== 2 ? 'selectable-button' : 'selected-button',
    buttonText: idx !== 2 ? 'View Form' : '(Selected) Deselect this',
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
    itemClickHandler:
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
    itemClickHandler: () => {},
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
    itemClickHandler:
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
    itemClickHandler: () => {},
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

export const TimelineWithFilters: Story = () => {
  const timelineItems: ITimelineItem[] = AuditTrail.resources.map((ti) => ({
    domainResource: ti as AuditEvent,
    buttonState: 'no-button',
    buttonText: 'View',
  }))

  const filters: ITimelineFilter[] = [
    {
      label: 'Care plan',
      options: [
        { label: 'All', value: undefined },
        {
          label: 'Pneumonia',
          value: 'domain:careplan:definitionseriesid:9f4e2790-d0b7-a891-5d51-5f35b0e58228',
        },
      ],
    },
    {
      label: 'User',
      options: [
        { label: '', value: undefined },
        {
          label: 'Bob',
          value: 'domain:user:some-random-user-guid',
        },
      ],
    },
  ]

  return (
    <Card>
      <Card.Header>
        <Card.Title style={{ textAlign: 'center' }}>Timeline</Card.Title>
      </Card.Header>
      <Card.Body>
        <Timeline
          timelineItems={timelineItems}
          key="Timeline3"
          domainResourceType={auditType}
          filters={filters}
          // eslint-disable-next-line no-console
          onFilterChange={console.log}
        />
      </Card.Body>
    </Card>
  )
}

export default { title: 'Clinical/Organisms/Timeline' }
