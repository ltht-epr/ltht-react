import React from 'react'
import { mount } from 'enzyme'
import ReactDOM from 'react-dom'

import { AllergyIntolerance } from '@ltht-react/types'
import { AllergyOne, AllergyTwo } from './fixtures'
import AllergySummary from '.'

const handleClick = (allergy: AllergyIntolerance) => {}

describe('AllergySummary', () => {
  const allergies = [AllergyOne, AllergyTwo]
  it('renders without crashing', () => {
    const div = document.createElement('div')
    ReactDOM.render(<AllergySummary title="Allergies" allergies={allergies} clickHandler={handleClick} />, div)
  })
  it('matches snapshot', () => {
    expect(
      mount(<AllergySummary title="Allergies" allergies={allergies} clickHandler={handleClick} />)
    ).toMatchSnapshot('wrapper mount')
  })
})
