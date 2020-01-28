import React from 'react'
import { mount } from 'enzyme'
import ReactDOM from 'react-dom'

import { HospitalStayOne, HospitalStayTwo } from './fixtures'
import HospitalStaySummary from '.'

describe('HospitalStaySummary', () => {
  const hospitalStays = [HospitalStayOne, HospitalStayTwo]
  it('renders without crashing', () => {
    const div = document.createElement('div')
    ReactDOM.render(<HospitalStaySummary title="Hospital Stays" hospitalStays={hospitalStays} />, div)
  })
  it('matches snapshot', () => {
    expect(mount(<HospitalStaySummary title="Hospital Stays" hospitalStays={hospitalStays} />)).toMatchSnapshot(
      'wrapper mount'
    )
  })
})
