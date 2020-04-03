import React from 'react'
import { mount } from 'enzyme'
import ReactDOM from 'react-dom'

import InvolvedTeamSummary from '@ltht-react/involved-team-summary'
import episodes from './involved-team-summary.fixtures'

describe('InvolvedTeamSummary', () => {
  it('renders without crashing', () => {
    const div = document.createElement('div')
    ReactDOM.render(<InvolvedTeamSummary episodeOfCares={episodes} />, div)
  })
  it('matches snapshot', () => {
    expect(mount(<InvolvedTeamSummary episodeOfCares={episodes} />)).toMatchSnapshot('wrapper mount')
  })
})
