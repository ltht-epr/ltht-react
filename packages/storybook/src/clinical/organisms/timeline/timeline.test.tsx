import { render } from '@testing-library/react'

import Timeline from '@ltht-react/timeline'
import AuditTrail from './timeline.fixtures'

describe('Timeline', () => {
  it('Renders', () => {
    render(<Timeline auditTrail={AuditTrail.resources} />)
  })
})
