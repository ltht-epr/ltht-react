import { render, screen } from '@testing-library/react'
import { ITimelineItem } from '../molecules/timeline-item'
import TimelineButton from './timeline-button'

describe('Timeline Button', () => {
  it.each([
    {
      buttonState: 'no-button',
    } as ITimelineItem,
    {
      buttonState: 'no-button',
      clickHandler: () => undefined,
    } as ITimelineItem,
    {
      buttonState: 'no-button',
      buttonText: 'Click me!',
    } as ITimelineItem,
    {
      buttonState: 'no-button',
      clickHandler: () => undefined,
      buttonText: 'Click me!',
    } as ITimelineItem,
  ])(
    `Renders a fragment if button state is no-button, regardless of other properties`,
    (timelineItem: ITimelineItem) => {
      const { asFragment } = render(<TimelineButton timelineItem={timelineItem} />)

      expect(asFragment().firstChild).toBeNull()
    }
  )

  it.each([
    {
      buttonState: 'selectable-button',
    } as ITimelineItem,
    {
      buttonState: 'selectable-button',
      buttonText: 'Click me!',
    } as ITimelineItem,
    {
      buttonState: 'selectable-button',
      clickHandler: () => undefined,
    } as ITimelineItem,
    {
      buttonState: 'selectable-button',
      clickHandler: () => undefined,
    } as ITimelineItem,
  ])(
    'Renders a button if button state is selectable-button, regardless of other properties',
    (timelineItem: ITimelineItem) => {
      render(<TimelineButton timelineItem={timelineItem} />)

      expect(screen.getByRole('button')).toBeVisible()
    }
  )

  it.each([
    {
      buttonState: 'selected-button',
    } as ITimelineItem,
    {
      buttonState: 'selected-button',
      buttonText: 'Click me!',
    } as ITimelineItem,
    {
      buttonState: 'selected-button',
      clickHandler: () => undefined,
    } as ITimelineItem,
    {
      buttonState: 'selected-button',
      clickHandler: () => undefined,
    } as ITimelineItem,
  ])(
    'Renders a button if button state is selected-button, regardless of other properties',
    (timelineItem: ITimelineItem) => {
      render(<TimelineButton timelineItem={timelineItem} />)

      expect(screen.getByRole('button')).toBeVisible()
    }
  )

  it.each([
    {
      buttonState: 'permission-denied-button',
      buttonText: 'This is some button text',
    } as ITimelineItem,
    {
      buttonState: 'permission-denied-button',
      buttonText: 'This is some button text',
    } as ITimelineItem,
    {
      buttonState: 'permission-denied-button',
      buttonText: 'This is some button text',
      clickHandler: () => undefined,
    } as ITimelineItem,
    {
      buttonState: 'permission-denied-button',
      buttonText: 'This is some button text',
      clickHandler: () => undefined,
    } as ITimelineItem,
  ])('Renders a disabled button if button state is permission-denied-button', (timelineItem: ITimelineItem) => {
    render(<TimelineButton timelineItem={timelineItem} />)

    expect(screen.getByRole('button', { name: /This is some button text/ })).toBeVisible()
    expect(screen.getByRole('button', { name: /This is some button text/ })).toBeDisabled()
  })

  it.each([
    {
      buttonState: 'selectable-button',
      buttonText: 'This is some button text',
    } as ITimelineItem,
    {
      buttonState: 'selected-button',
      buttonText: 'This is some button text',
    } as ITimelineItem,
    {
      buttonState: 'permission-denied-button',
      buttonText: 'This is some button text',
    } as ITimelineItem,
  ])('Renders the button text', (timelineItem: ITimelineItem) => {
    render(<TimelineButton timelineItem={timelineItem} />)

    expect(screen.getByRole('button', { name: /This is some button text/ })).toBeVisible()
  })

  it('Uses the default permissions text if no custom text is provided', () => {
    const timelineItem = {
      buttonState: 'permission-denied-button',
    } as ITimelineItem

    render(<TimelineButton timelineItem={timelineItem} />)

    expect(screen.getByRole('button', { name: /Insufficient privileges to view this item/ })).toBeVisible()
  })
})
