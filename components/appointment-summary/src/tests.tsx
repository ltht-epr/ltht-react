import React from 'react'
import { mount } from 'enzyme'
import ReactDOM from 'react-dom'

import { AppointmentOne, AppointmentTwo } from './fixtures'
import AppointmentSummary from '.'

describe('AppointmentSummary', () => {
  const appointments = [AppointmentOne, AppointmentTwo]
  it('renders without crashing', () => {
    const div = document.createElement('div')
    ReactDOM.render(<AppointmentSummary title="Appointments" encounters={appointments} />, div)
  })
  it('matches snapshot', () => {
    expect(mount(<AppointmentSummary title="Appointments" encounters={appointments} />)).toMatchSnapshot(
      'wrapper mount'
    )
  })
})
