import React from 'react'
import { mount } from 'enzyme'
import ReactDOM from 'react-dom'

import AppointmentSummary from '@ltht-react/appointment-summary'
import appointments from './appointment-summary.fixtures'

const Sut: React.FC = () => {
  return (
    <>
      {appointments.map(appointment => (
        <div key={appointment.id}>
          <AppointmentSummary encounter={appointment} />
        </div>
      ))}
    </>
  )
}

describe('AppointmentSummary', () => {
  it('renders without crashing', () => {
    const div = document.createElement('div')
    ReactDOM.render(<Sut />, div)
  })
  it('matches snapshot', () => {
    expect(mount(<Sut />)).toMatchSnapshot('wrapper mount')
  })
})
