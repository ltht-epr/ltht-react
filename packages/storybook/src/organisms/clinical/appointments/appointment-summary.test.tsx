import React from 'react'
import { mount } from 'enzyme'
import ReactDOM from 'react-dom'

import AppointmentSummary from '@ltht-react/appointment-summary'
import appointments from './appointment-summary.fixtures'

describe('AppointmentSummary', () => {
  it('renders without crashing', () => {
    const div = document.createElement('div')
    ReactDOM.render(<AppointmentSummary encounters={appointments} />, div)
  })
  it('matches snapshot', () => {
    expect(mount(<AppointmentSummary encounters={appointments} />)).toMatchSnapshot('wrapper mount')
  })
})
