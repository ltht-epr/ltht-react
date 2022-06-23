import { render, screen } from '@testing-library/react'

import Timeline from '@ltht-react/timeline'
import AuditTrail from './timeline.fixtures'

describe('Timeline', () => {
  it('Renders Without Click Handler', () => {
    const timelineItems = AuditTrail.resources.map((ti) => ({
      auditEvent: ti,
    }))

    render(<Timeline timelineItems={timelineItems} />)
  })

  it('Renders With Click Handler', () => {
    const timelineItems = AuditTrail.resources.map((ti) => ({
      auditEvent: ti,
      clickHandler: () => {
        // eslint-disable-next-line no-console
        console.log('Clicked')
      },
    }))

    render(<Timeline timelineItems={timelineItems} />)
  })

  it('Renders With Click Handler', () => {
    const timelineItems = AuditTrail.resources.map((ti) => ({
      auditEvent: ti,
      clickHandler: () => {
        // eslint-disable-next-line no-console
        console.log('Clicked')
      },
      clickPrompt: 'Click Here Please',
    }))

    render(<Timeline timelineItems={timelineItems} />)

    expect(screen.getByText('Click Here Please')).toBeVisible()
  })

  it('No click handler does not display click Prompt', () => {
    const timelineItems = AuditTrail.resources.map((ti) => ({
      auditEvent: ti,
      clickPrompt: 'Click Here Please',
    }))

    render(<Timeline timelineItems={timelineItems} />)

    expect(screen.queryByText('Click Here Please')).not.toBeInTheDocument()
  })
})
