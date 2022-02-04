import { render, screen } from '@testing-library/react'

import HospitalStayDetail from '@ltht-react/hospital-stay-detail'
import HospitalStaySummary from '@ltht-react/hospital-stay-summary'
import stays from './hospital-stays.fixtures'

describe('Hospital Stays Detail', () => {
  it('Renders', () => {
    render(<HospitalStayDetail hospitalStay={stays[2]} />)
    expect(screen.getByText('Type')).toBeInTheDocument()
    expect(screen.getByText('Transferred from other hospital due to lack of space')).toBeInTheDocument()

    expect(screen.getByText('Episode(s) Of Care')).toBeInTheDocument()
    expect(screen.getByText('Martin, Jack - (15/04/1980) [qa-cas-000001-6537]')).toBeInTheDocument()

    expect(screen.getByText('Period')).toBeInTheDocument()
    expect(screen.getByText('01-Jan-2020 to Present')).toBeInTheDocument()

    expect(screen.getByText('Status')).toBeInTheDocument()
    expect(screen.getByText('On Leave')).toBeInTheDocument()

    expect(screen.getByText('Status History')).toBeInTheDocument()
    expect(screen.getByText('In Progress - 01-Jan-2020 to Present')).toBeInTheDocument()
    expect(screen.getByText('Finished - 01-Jan-2019 to 01-Jan-2020')).toBeInTheDocument()

    expect(screen.getByText('Hospitalisation')).toBeInTheDocument()
    expect(screen.getByText('Admit Source')).toBeInTheDocument()
    expect(screen.getByText('Referral by physician')).toBeInTheDocument()

    expect(screen.getByText('Discharge Disposition')).toBeInTheDocument()
    expect(screen.getByText('Discharge to home')).toBeInTheDocument()

    expect(screen.getByText('Additional Info')).toBeInTheDocument()

    expect(screen.getByText('Pre Admission Identifier')).toBeInTheDocument()
    expect(screen.getByText('Use')).toBeInTheDocument()
    expect(screen.getByText('Official')).toBeInTheDocument()

    expect(screen.getByText('Participant(s)')).toBeInTheDocument()
    expect(screen.getByText('Guillermo Villar (Practitioner): 01-Jan-2020 to Present')).toBeInTheDocument()
    expect(screen.getByText('Man Test (Nurse): 01-Jan-2019 to 01-Jan-2020')).toBeInTheDocument()
  })
})

describe('Hospital Stays', () => {
  it('Renders', () => {
    render(<HospitalStaySummary hospitalStay={stays[0]} />)
    expect(screen.getByText('01-Jan-2013 to 02-Feb-2014')).toBeInTheDocument()
    expect(screen.getByText('Chapel Allerton Hospital')).toBeInTheDocument()
  })
})

describe('Hospital Stays Redacted', () => {
  it('Renders', () => {
    render(<HospitalStaySummary hospitalStay={stays[1]} />)
    expect(screen.getByText('01-Jan-2020 to Present')).toBeInTheDocument()
    expect(screen.getByText('Insufficient privileges')).toBeInTheDocument()
  })
})
