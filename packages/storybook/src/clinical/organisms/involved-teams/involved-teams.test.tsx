import { render, screen } from '@testing-library/react'

import InvolvedTeamSummary from '@ltht-react/involved-team-summary'
import episodes from './involved-teams.fixtures'

describe('Involved Teams Summary', () => {
  it('Renders', () => {
    render(<InvolvedTeamSummary episodeOfCare={episodes[1]} />)
    expect(screen.getByText('LYPFT Inbound Care Team')).toBeInTheDocument()
    expect(screen.getByText('Joe Bloggs (0113 000000)')).toBeInTheDocument()

    expect(screen.getByText('01-Dec-2019 to Present')).toBeInTheDocument()
    expect(screen.getByText('Active')).toBeInTheDocument()
  })
})

describe('Involved Teams Redacted', () => {
  it('Renders', () => {
    render(<InvolvedTeamSummary episodeOfCare={episodes[0]} />)
    expect(screen.getByText('Insufficient privileges')).toBeInTheDocument()
    expect(screen.getByText('01-Dec-2018 to 02-Jan-2020')).toBeInTheDocument()
  })
})
