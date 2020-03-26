import React from 'react'
import { mount } from 'enzyme'
import ReactDOM from 'react-dom'

import InvolvedTeamSummary from '@ltht-react/involved-team-summary'
import { InvolvedTeamOne, InvolvedTeamTwo } from './involved-team-summary.fixtures'

describe('InvolvedTeamSummary', () => {
  const episodeOfCares = [InvolvedTeamOne, InvolvedTeamTwo]
  it('renders without crashing', () => {
    const div = document.createElement('div')
    ReactDOM.render(<InvolvedTeamSummary episodeOfCares={episodeOfCares} />, div)
  })
  it('matches snapshot', () => {
    expect(mount(<InvolvedTeamSummary episodeOfCares={episodeOfCares} />)).toMatchSnapshot('wrapper mount')
  })
})
