import { render, screen } from '@testing-library/react'
import { ITimelineItem } from '@ltht-react/timeline/src'

import Timeline from '@ltht-react/timeline'
import { formatTime, formatDate } from '@ltht-react/utils'
import DocumentReferences, { AuditTrail } from './timeline.fixtures'

const auditTimelineItems: ITimelineItem[] = AuditTrail.resources.map((ti) => ({
  domainResource: ti,
  isSelected: false,
}))
const auditDatetimes = AuditTrail.resources.map((x) => x?.period?.start)

const documentTimelineItems: ITimelineItem[] = DocumentReferences.resources.map((ti) => ({
  domainResource: ti,
  isSelected: false,
}))
const documentDatetimes = DocumentReferences.resources.map((x) => x?.created)

describe.each([
  [auditTimelineItems, auditDatetimes],
  [documentTimelineItems, documentDatetimes],
])('Timeline without handlers', (timelineItems, datetimes) => {
  beforeEach(() => {
    render(<Timeline timelineItems={timelineItems} />)
  })

  it('Renders Without Click Handler', () => {
    expect(screen.queryAllByTestId(new RegExp('^timeline_day_item'))).toHaveLength(timelineItems.length)
  })

  it('Each day section only exists once', () => {
    const uniqueDays: string[] = []
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
    const uniqueTimes: string[] = []
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
    expect(screen.queryAllByTestId(new RegExp('^timeline_day_item'))).toHaveLength(timelineItems.length)
    expect(screen.queryByText('Click Here Please')).not.toBeInTheDocument()
  })
})

it.each([[auditTimelineItems], [documentTimelineItems]])(
  'Shows the deselect prompt over the clickHandler prompt if both are present',
  (timelineItems) => {
    const alteredTimelineItems: ITimelineItem[] = timelineItems.map((x) => ({
      domainResource: x.domainResource,
      clickHandler: () => {
        // eslint-disable-next-line no-console
        console.log('Clicked')
      },
      isSelected: true,
      clickPrompt: 'Click Here Please',
      deselectPrompt: 'Click here to close me',
    }))

    render(<Timeline timelineItems={alteredTimelineItems} />)
    expect(screen.queryAllByTestId(new RegExp('^timeline_day_item'))).toHaveLength(alteredTimelineItems.length)
    expect(screen.getAllByText('Click here to close me')).toHaveLength(alteredTimelineItems.length)
  }
)

it.each([[auditTimelineItems], [documentTimelineItems]])('Renders With Click Handler', (timelineItems) => {
  const alteredTimelineItems: ITimelineItem[] = timelineItems.map((x) => ({
    domainResource: x.domainResource,
    clickHandler: () => {
      // eslint-disable-next-line no-console
      console.log('Clicked')
    },
    isSelected: false,
  }))

  render(<Timeline timelineItems={alteredTimelineItems} />)
  expect(screen.queryAllByTestId(new RegExp('^timeline_day_item'))).toHaveLength(alteredTimelineItems.length)
})

it.each([[auditTimelineItems], [documentTimelineItems]])('Shows the click prompt', (timelineItems) => {
  const alteredTimelineItems: ITimelineItem[] = timelineItems.map((x) => ({
    domainResource: x.domainResource,
    clickHandler: () => {
      // eslint-disable-next-line no-console
      console.log('Clicked')
    },
    clickPrompt: 'Click Here Please',
    isSelected: false,
  }))

  render(<Timeline timelineItems={alteredTimelineItems} />)
  expect(screen.queryAllByTestId(new RegExp('^timeline_day_item'))).toHaveLength(alteredTimelineItems.length)
  expect(screen.getAllByText('Click Here Please')).toHaveLength(alteredTimelineItems.length)
})

it.each([[auditTimelineItems], [documentTimelineItems]])(
  'No click handler does not display click Prompt',
  (timelineItems) => {
    const alteredTimelineItems: ITimelineItem[] = timelineItems.map((x) => ({
      domainResource: x.domainResource,
      clickPrompt: 'Click Here Please',
      isSelected: false,
    }))

    render(<Timeline timelineItems={alteredTimelineItems} />)
    expect(screen.queryAllByTestId(new RegExp('^timeline_day_item'))).toHaveLength(alteredTimelineItems.length)
    expect(screen.queryByText('Click Here Please')).not.toBeInTheDocument()
  }
)
