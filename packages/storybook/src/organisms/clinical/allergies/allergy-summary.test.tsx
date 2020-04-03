import React from 'react'
import { mount } from 'enzyme'
import ReactDOM from 'react-dom'

import AllergySummary from '@ltht-react/allergy-summary'
import allergies from './allergy.fixtures'

describe('AllergySummary', () => {
  it('renders without crashing', () => {
    const div = document.createElement('div')
    ReactDOM.render(<AllergySummary allergies={allergies} />, div)
  })
  it('matches snapshot', () => {
    expect(mount(<AllergySummary allergies={allergies} />)).toMatchSnapshot('wrapper mount')
  })
})
