import React from 'react'
import ReactDOM from 'react-dom'

import AppointmentSummary from '@ltht-react/appointment-summary'
import appointments from './appointments.fixtures'

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
})
