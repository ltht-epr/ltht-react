import { render, screen } from '@testing-library/react'

import PatientBanner from '@ltht-react/patient-banner'
import { AlivePatient, DeceasedPatient } from './patient-banner.fixtures'

describe('Patient Banner', () => {
  it('Renders', () => {
    render(<PatientBanner patient={AlivePatient} />)
    expect(screen.getByText('SMITH, Jane Elizabeth (Mrs)')).toBeInTheDocument()

    expect(screen.getByText('Born')).toBeInTheDocument()
    expect(screen.getByText('17-Aug-1971 (50y)')).toBeInTheDocument()

    expect(screen.getByText('Gender')).toBeInTheDocument()
    expect(screen.getByText('Female')).toBeInTheDocument()

    expect(screen.getByText('NHS No.')).toBeInTheDocument()
    expect(screen.getByText('987 654 3210')).toBeInTheDocument()

    expect(screen.getByText('Address')).toBeInTheDocument()
    expect(
      screen.getByText('My House Name, The Street, Seacroft, Leeds, West Yorkshire, UK, LS1 2HL')
    ).toBeInTheDocument()

    expect(screen.getByText('Pas No.')).toBeInTheDocument()
    expect(screen.getByText('0033201')).toBeInTheDocument()
  })
})

describe('Patient Banner Deceased', () => {
  it('Renders', () => {
    render(<PatientBanner patient={DeceasedPatient} />)
    expect(screen.getByText('WOO, John (Mr)')).toBeInTheDocument()

    expect(screen.getByText('Born')).toBeInTheDocument()
    expect(screen.getByText('30-Jun-1955')).toBeInTheDocument()

    expect(screen.getByText('Gender')).toBeInTheDocument()
    expect(screen.getByText('Male')).toBeInTheDocument()

    expect(screen.getByText('Died')).toBeInTheDocument()
    expect(screen.getByText('05-Feb-2020')).toBeInTheDocument()

    expect(screen.getByText('Age at Death')).toBeInTheDocument()
    expect(screen.getByText('64y')).toBeInTheDocument()

    expect(screen.getByText('NHS No.')).toBeInTheDocument()
    expect(screen.getByText('896 745 2301')).toBeInTheDocument()

    expect(screen.getByText('Address')).toBeInTheDocument()
    expect(screen.getByText('18 Benson Gardens, Leeds, LS11 8HK')).toBeInTheDocument()

    expect(screen.getByText('Pas No.')).toBeInTheDocument()
    expect(screen.getByText('0056341')).toBeInTheDocument()
  })
})
