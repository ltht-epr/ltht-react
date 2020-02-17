import React from 'react'
import { mount } from 'enzyme'
import ReactDOM from 'react-dom'

import AllergySummary from '@ltht-react/allergy-summary'
import { AllergyOne, AllergyTwo } from './allergy.fixtures'

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
