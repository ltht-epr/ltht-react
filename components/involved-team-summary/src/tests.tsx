import React from 'react'
import { mount } from 'enzyme'
import ReactDOM from 'react-dom'

import { EpisodeOfCare } from '@ltht-react/types'
import { InvolvedTeamOne, InvolvedTeamTwo } from './fixtures'
import InvolvedTeamSummary from '.'

const handleClick = (episodeOfCare: EpisodeOfCare) => {}

describe('InvolvedTeamSummary', () => {
  const episodeOfCares = [InvolvedTeamOne, InvolvedTeamTwo]
  it('renders without crashing', () => {
    const div = document.createElement('div')
    ReactDOM.render(
      <InvolvedTeamSummary title="Involved Teams" episodeOfCares={episodeOfCares} clickHandler={handleClick} />,
      div
    )
  })
  it('matches snapshot', () => {
    expect(
      mount(<InvolvedTeamSummary title="Involved Teams" episodeOfCares={episodeOfCares} clickHandler={handleClick} />)
    ).toMatchSnapshot('wrapper mount')
  })
})
