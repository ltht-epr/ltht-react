import { render, screen } from '@testing-library/react'

import Timeline from '@ltht-react/timeline'
import AuditTrail, { RedactedAuditTrail } from './timeline.fixtures'

describe('Timeline', () => {
  it('Renders', () => {
    render(<Timeline auditTrail={AuditTrail.resources} />)
    expect(screen.getByText('13 September 2021')).toBeInTheDocument()
    expect(screen.getByText('Pathway Ended')).toBeInTheDocument()
    expect(screen.getByText('Patient being readied for discharge')).toBeInTheDocument()
  })
})

describe('Timeline', () => {
  it('Renders', () => {
    render(<Timeline auditTrail={RedactedAuditTrail.resources} />)
    expect(screen.getByText('13 September 2021')).toBeInTheDocument()

    expect(screen.getByText('15:04')).toBeInTheDocument()
  })
})
