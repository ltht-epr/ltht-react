import { render } from '@testing-library/react'

import InvolvedTeamSummary from '@ltht-react/involved-team-summary'
import episodes from './involved-teams.fixtures'

describe('Involved Teams', () => {
  it('Renders', () => {
    render(<InvolvedTeamSummary episodeOfCare={episodes[0]} />)
  })
})
