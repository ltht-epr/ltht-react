import React from 'react'
import { render } from '@testing-library/react'

import AppointmentSummary from '@ltht-react/appointment-summary'
import appointments from './appointments.fixtures'

describe('Appointments', () => {
  it('Renders', () => {
    render(<AppointmentSummary encounter={appointments[0]} />)
  })
})
