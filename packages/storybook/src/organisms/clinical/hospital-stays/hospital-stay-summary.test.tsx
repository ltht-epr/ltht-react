import React from 'react'
import { mount } from 'enzyme'
import ReactDOM from 'react-dom'

import HospitalStaySummary from '@ltht-react/hospital-stay-summary'
import stays from './hospital-stay.fixtures'

describe('HospitalStaySummary', () => {
  it('renders without crashing', () => {
    const div = document.createElement('div')
    ReactDOM.render(<HospitalStaySummary hospitalStays={stays} />, div)
  })
  it('matches snapshot', () => {
    expect(mount(<HospitalStaySummary hospitalStays={stays} />)).toMatchSnapshot('wrapper mount')
  })
})
