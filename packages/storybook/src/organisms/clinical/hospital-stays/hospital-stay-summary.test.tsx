import React from 'react'
import { mount } from 'enzyme'
import ReactDOM from 'react-dom'

import HospitalStaySummary from '@ltht-react/hospital-stay-summary'
import { HospitalStayOne, HospitalStayTwo } from './hospital-stay.fixtures'

describe('HospitalStaySummary', () => {
  const hospitalStays = [HospitalStayOne, HospitalStayTwo]
  it('renders without crashing', () => {
    const div = document.createElement('div')
    ReactDOM.render(<HospitalStaySummary hospitalStays={hospitalStays} />, div)
  })
  it('matches snapshot', () => {
    expect(mount(<HospitalStaySummary hospitalStays={hospitalStays} />)).toMatchSnapshot('wrapper mount')
  })
})
