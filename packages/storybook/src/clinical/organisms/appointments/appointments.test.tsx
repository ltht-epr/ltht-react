import { render, screen } from '@testing-library/react'

import AppointmentSummary from '@ltht-react/appointment-summary'
import encounters from './appointments.fixtures'

describe('Appointments', () => {
  it('Renders the appointments widget correctly', () => {
    render(<AppointmentSummary encounter={encounters[0]} />)
    expect(screen.getByText('01-Apr-2020')).toBeInTheDocument()
    expect(screen.getByText('See GP regarding sore throat')).toBeInTheDocument()
    expect(screen.getByText('Beeston Village Surgery')).toBeInTheDocument()
    expect(screen.getByText('Planned')).toBeInTheDocument()
  })
})

describe('Appointments redacted', () => {
  it('Renders the appointments widget correctly when redacted', () => {
    render(<AppointmentSummary encounter={encounters[3]} />)
    expect(screen.getByText('Insufficient privileges')).toBeInTheDocument()
  })
})
