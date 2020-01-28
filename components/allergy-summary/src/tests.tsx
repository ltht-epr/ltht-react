import React from 'react'
import { mount } from 'enzyme'
import ReactDOM from 'react-dom'

import { AllergyOne, AllergyTwo } from './fixtures'
import AllergySummary from '.'

describe('AllergySummary', () => {
  const allergies = [AllergyOne, AllergyTwo]
  it('renders without crashing', () => {
    const div = document.createElement('div')
    ReactDOM.render(<AllergySummary title="Allergies" allergies={allergies} />, div)
  })
  it('matches snapshot', () => {
    expect(mount(<AllergySummary title="Allergies" allergies={allergies} />)).toMatchSnapshot('wrapper mount')
  })
})
