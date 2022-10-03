import { render, screen } from '@testing-library/react'
import { ITimelineItem } from '../molecules/timeline-item'
import TimelineButton from './timeline-button'

const baseTimelineItem: ITimelineItem = {
  clickHandler: () => {},
  clickPrompt: 'Click me!',
  isSelected: false,
  clickPermissionDenied: false,
  clickPermissionDeniedMessage: 'You shall not pass',
}

describe('Timeline Button', () => {
  it('Renders a fragment if no click handler is provided', () => {
    const timelineItem = { ...baseTimelineItem, clickHandler: undefined }

    const { asFragment } = render(<TimelineButton timelineItem={timelineItem} />)

    expect(asFragment().firstChild).toBeNull()
  })

  it('Renders a button if a click handler is provided', () => {
    const timelineItem = { ...baseTimelineItem, clickHandler: () => {} }

    render(<TimelineButton timelineItem={timelineItem} />)

    expect(screen.queryByText('Click me!')).toBeVisible()
  })
})
