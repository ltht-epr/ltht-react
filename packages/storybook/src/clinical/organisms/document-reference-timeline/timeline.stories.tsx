import { Story } from '@storybook/react'
import Card from '@ltht-react/card'
import Timeline from '@ltht-react/timeline'
import { ITimelineItem } from '@ltht-react/timeline/src'
import { DocumentReference } from '@ltht-react/types'
import DocumentReferences from './document-timeline.fixtures'

export const Details: Story = () => {
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
        <Timeline timelineItems={timelineItems} key="Timeline1" />
      </Card.Body>
    </Card>
  )
}

export const ClickableDetails: Story = () => {
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
        <Timeline timelineItems={timelineItems} key="Timeline2" />
      </Card.Body>
    </Card>
  )
}

export const Redacted: Story = () => {
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
        <Timeline timelineItems={timelineItems} key="Timeline3" />
      </Card.Body>
    </Card>
  )
}

export default { title: 'Clinical/Organisms/DocumentReferenceTimeline' }
