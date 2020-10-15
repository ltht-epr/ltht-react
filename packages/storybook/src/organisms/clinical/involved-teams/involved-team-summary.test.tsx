import React from 'react'
import { mount } from 'enzyme'
import ReactDOM from 'react-dom'

import InvolvedTeamSummary from '@ltht-react/involved-team-summary'
import episodes from './involved-team-summary.fixtures'

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
  it('matches snapshot', () => {
    expect(mount(<Sut />)).toMatchSnapshot('wrapper mount')
  })
})
