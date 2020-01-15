import React from 'react'
import { mount } from 'enzyme'
import ReactDOM from 'react-dom'

import { Encounter } from '@ltht-react/types'
import { AppointmentOne, AppointmentTwo } from './fixtures'
import AppointmentSummary from '.'

const handleClick = (appointment: Encounter) => {}

describe('AppointmentSummary', () => {
  const appointments = [AppointmentOne, AppointmentTwo]
  it('renders without crashing', () => {
    const div = document.createElement('div')
    ReactDOM.render(
      <AppointmentSummary title="Appointments" appointments={appointments} clickHandler={handleClick} />,
      div
    )
  })
  it('matches snapshot', () => {
    expect(
      mount(<AppointmentSummary title="Appointments" appointments={appointments} clickHandler={handleClick} />)
    ).toMatchSnapshot('wrapper mount')
  })
})
