import React from 'react'
import { mount } from 'enzyme'
import ReactDOM from 'react-dom'

import AllergySummaryItem from '@ltht-react/allergy-summary-item'
import * as fixtures from './allergy.fixtures'

describe('AllergySummaryItem', () => {
  it('renders without crashing', () => {
    const div = document.createElement('div')
    ReactDOM.render(<AllergySummaryItem allergy={fixtures.AllergyOne} />, div)
  })
  it('matches snapshot', () => {
    expect(mount(<AllergySummaryItem allergy={fixtures.AllergyOne} />)).toMatchSnapshot('wrapper mount')
  })
})
