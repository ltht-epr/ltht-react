import React from 'react'
import ReactDOM from 'react-dom'

import InvolvedTeamSummary from '@ltht-react/involved-team-summary'
import episodes from './involved-teams.fixtures'

const Sut: React.FC = () => {
  return (
    <>
      {episodes.map(episode => (
        <div key={episode.id}>
          <InvolvedTeamSummary episodeOfCare={episode} />
        </div>
      ))}
    </>
  )
}

describe('InvolvedTeamSummary', () => {
  it('renders without crashing', () => {
    const div = document.createElement('div')
    ReactDOM.render(<Sut />, div)
  })
})