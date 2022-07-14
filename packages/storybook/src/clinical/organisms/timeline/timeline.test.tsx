import { render, screen } from '@testing-library/react'

import Timeline from '@ltht-react/timeline'
import AuditTrail from './timeline.fixtures'

describe('Timeline', () => {
  it('Renders Without Click Handler', () => {
    const timelineItems = AuditTrail.resources.map((ti) => ({
      auditEvent: ti,
      isSelected: false,
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
      isSelected: false,
    }))

    render(<Timeline timelineItems={timelineItems} />)
  })

  it('Shows the click prompt', () => {
    const timelineItems = AuditTrail.resources.map((ti) => ({
      auditEvent: ti,
      clickHandler: () => {
        // eslint-disable-next-line no-console
        console.log('Clicked')
      },
      clickPrompt: 'Click Here Please',
      isSelected: false,
    }))

    render(<Timeline timelineItems={timelineItems} />)

    expect(screen.getAllByText('Click Here Please')).toHaveLength(AuditTrail.resources.length)
  })

  it('No click handler does not display click Prompt', () => {
    const timelineItems = AuditTrail.resources.map((ti) => ({
      auditEvent: ti,
      clickPrompt: 'Click Here Please',
      isSelected: false,
    }))

    render(<Timeline timelineItems={timelineItems} />)

    expect(screen.queryByText('Click Here Please')).not.toBeInTheDocument()
  })

  it('Shows the deselect prompt over the clickHandler prompt if both are present', () => {
    const timelineItems = AuditTrail.resources.map((ti) => ({
      auditEvent: ti,
      clickHandler: () => {
        // eslint-disable-next-line no-console
        console.log('Clicked')
      },
      clickPrompt: 'Click Here Please',
      isSelected: true,
      deselectPrompt: 'Click here to close me',
    }))

    render(<Timeline timelineItems={timelineItems} />)

    expect(screen.getAllByText('Click here to close me')).toHaveLength(AuditTrail.resources.length)
  })
})
