import { render } from '@testing-library/react'

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
})
