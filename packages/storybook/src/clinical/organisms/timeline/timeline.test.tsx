import { render, screen } from '@testing-library/react'
import { ITimelineItem } from '@ltht-react/timeline/src'

import Timeline from '@ltht-react/timeline'
import AuditTrail from './timeline.fixtures'
import { formatTime, formatDate } from '@ltht-react/utils'

describe('Timeline without handlers', () => {
  beforeEach(() => {
    const timelineItems: ITimelineItem[] = AuditTrail.resources.map((ti) => ({
      domainResource: ti,
      isSelected: false,
    }))

    render(<Timeline timelineItems={timelineItems} />)
  })

  it('Renders Without Click Handler', () => {
    expect(screen.queryAllByTestId(new RegExp('^timeline_day_item'))).toHaveLength(AuditTrail.resources.length)
  })

  it('Each day section only exists once', () => {
    const datetimes = AuditTrail.resources.map((x) => x?.period?.start)
    let uniqueDays: string[] = []
    datetimes.forEach((x) => {
      if (x?.value) {
        const date = formatDate(new Date(x.value))
        if (!uniqueDays.includes(date)) {
          uniqueDays.push(date)
        }
      }
    })
    uniqueDays.forEach((x) => {
      expect(screen.queryAllByTestId(x)).toHaveLength(1)
    })
  })

  it('Left and right divide work', () => {
    const datetimes = AuditTrail.resources.map((x) => x?.period?.start)
    let uniqueTimes: string[] = []
    datetimes.forEach((x) => {
      if (x?.value) {
        if (uniqueTimes.includes(x.value)) {
          const date = formatDate(new Date(x.value))
          const time = formatTime(new Date(x.value))
          if (uniqueTimes.length % 2 === 1) {
            expect(
              screen.queryAllByTestId(new RegExp(`^content_left_timeline_day_item_${date}_${time}`))
            ).not.toHaveLength(0)
            expect(
              screen.queryAllByTestId(new RegExp(`^content_right_timeline_day_item_${date}_${time}`))
            ).toHaveLength(0)
          } else {
            expect(
              screen.queryAllByTestId(new RegExp(`^content_right_timeline_day_item_${date}_${time}`))
            ).not.toHaveLength(0)
            expect(screen.queryAllByTestId(new RegExp(`^content_left_timeline_day_item_${date}_${time}`))).toHaveLength(
              0
            )
          }
        } else {
          uniqueTimes.push(x.value)
        }
      }
    })
    expect(screen.queryAllByTestId(new RegExp('^timeline_day_item'))).toHaveLength(AuditTrail.resources.length)
    expect(screen.queryByText('Click Here Please')).not.toBeInTheDocument()
  })
})

it('Shows the deselect prompt over the clickHandler prompt if both are present', () => {
  const timelineItems: ITimelineItem[] = AuditTrail.resources.map((ti) => ({
    domainResource: ti,
    clickHandler: () => {
      // eslint-disable-next-line no-console
      console.log('Clicked')
    },
    clickPrompt: 'Click Here Please',
    isSelected: true,
    deselectPrompt: 'Click here to close me',
  }))

  render(<Timeline timelineItems={timelineItems} />)
  expect(screen.queryAllByTestId(new RegExp('^timeline_day_item'))).toHaveLength(AuditTrail.resources.length)
  expect(screen.getAllByText('Click here to close me')).toHaveLength(AuditTrail.resources.length)
})

it('Renders With Click Handler', () => {
  const timelineItems: ITimelineItem[] = AuditTrail.resources.map((ti) => ({
    domainResource: ti,
    clickHandler: () => {
      // eslint-disable-next-line no-console
      console.log('Clicked')
    },
    isSelected: false,
  }))

  render(<Timeline timelineItems={timelineItems} />)
  expect(screen.queryAllByTestId(new RegExp('^timeline_day_item'))).toHaveLength(AuditTrail.resources.length)
})

it('Shows the click prompt', () => {
  const timelineItems: ITimelineItem[] = AuditTrail.resources.map((ti) => ({
    domainResource: ti,
    clickHandler: () => {
      // eslint-disable-next-line no-console
      console.log('Clicked')
    },
    clickPrompt: 'Click Here Please',
    isSelected: false,
  }))

  render(<Timeline timelineItems={timelineItems} />)

  expect(screen.queryAllByTestId(new RegExp('^timeline_day_item'))).toHaveLength(AuditTrail.resources.length)
  expect(screen.getAllByText('Click Here Please')).toHaveLength(AuditTrail.resources.length)
})

it('No click handler does not display click Prompt', () => {
  const timelineItems: ITimelineItem[] = AuditTrail.resources.map((ti) => ({
    domainResource: ti,
    clickPrompt: 'Click Here Please',
    isSelected: false,
  }))

  render(<Timeline timelineItems={timelineItems} />)

  expect(screen.queryAllByTestId(new RegExp('^timeline_day_item'))).toHaveLength(AuditTrail.resources.length)
  expect(screen.queryByText('Click Here Please')).not.toBeInTheDocument()
})
