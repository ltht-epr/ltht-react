import React from 'react'
import { mount } from 'enzyme'
import ReactDOM from 'react-dom'

import { HospitalStay } from '@ltht-react/types'
import { HospitalStayOne, HospitalStayTwo } from './fixtures'
import HospitalStaySummary from '.'

const handleClick = (hospitalStay: HospitalStay) => {}

describe('HospitalStaySummary', () => {
  const hospitalStays = [HospitalStayOne, HospitalStayTwo]
  it('renders without crashing', () => {
    const div = document.createElement('div')
    ReactDOM.render(
      <HospitalStaySummary title="Hospital Stays" hospitalStays={hospitalStays} clickHandler={handleClick} />,
      div
    )
  })
  it('matches snapshot', () => {
    expect(
      mount(<HospitalStaySummary title="Hospital Stays" hospitalStays={hospitalStays} clickHandler={handleClick} />)
    ).toMatchSnapshot('wrapper mount')
  })
})
