import { render, screen } from '@testing-library/react'

import MedicationSummary from '@ltht-react/medication-summary'
import MedicationFixtures from './medications.fixture'

import MedicationDetail from '@ltht-react/medication-detail'

describe('Medication Summary', () => {
  it('Renders', () => {
    render(<MedicationSummary medication={MedicationFixtures[1]} />)
    expect(screen.getByText('Paracetamol')).toBeInTheDocument()
    expect(screen.getByText('Oral')).toBeInTheDocument()
    expect(screen.getByText('Changed')).toBeInTheDocument()

    expect(screen.getByText('Starting on 12-Jul-2021')).toBeInTheDocument()
    expect(screen.getByText('25 g to 50 g')).toBeInTheDocument()
    expect(screen.getByText('Or')).toBeInTheDocument()
    expect(screen.getByText('Four Times a Day (08:00, 12:00, 18:00, 22:00) every day')).toBeInTheDocument()

    expect(screen.getByText('14-Mar-2021')).toBeInTheDocument()
  })
})

describe('Medication Summary Changed', () => {
  it('Renders', () => {
    render(<MedicationSummary medication={MedicationFixtures[4]} />)
    expect(screen.getByText('Paracetamol Tablet')).toBeInTheDocument()
    expect(screen.getByText('Inhalation')).toBeInTheDocument()
    expect(screen.getByText('Allergies')).toBeInTheDocument()

    expect(screen.getByText('Changed')).toBeInTheDocument()

    expect(screen.getByText('2')).toBeInTheDocument()

    expect(screen.getByText('12-Mar-2021')).toBeInTheDocument()
  })
})

describe('Medication Summary Redacted', () => {
  it('Renders', () => {
    render(<MedicationSummary medication={MedicationFixtures[5]} />)
    expect(screen.getByText('Insufficient privileges')).toBeInTheDocument()
  })
})

describe('Medication Detail', () => {
  it('Renders', () => {
    render(<MedicationDetail medication={MedicationFixtures[0]} />)
    expect(screen.getByText('Status at Discharge')).toBeInTheDocument()
    expect(screen.getByText('New')).toBeInTheDocument()

    expect(screen.getByText('Changes / Comments')).toBeInTheDocument()
    expect(screen.getByText('asdf asdfasdfasdfsdf')).toBeInTheDocument()

    expect(screen.getByText('Medication')).toBeInTheDocument()
    expect(screen.getByText('valsartan 26mg + sacubitril 24mg')).toBeInTheDocument()

    expect(screen.getByText('Dosage')).toBeInTheDocument()
    expect(screen.getByText('Twice a Day (08:00, 18:00) every day')).toBeInTheDocument()

    expect(screen.getByText('Form')).toBeInTheDocument()
    expect(screen.getByText('Tablet')).toBeInTheDocument()

    expect(screen.getByText('Indication')).toBeInTheDocument()
    expect(screen.getByText('Symptomatic chronic heart failure with reduced ejection fraction')).toBeInTheDocument()

    expect(screen.getByText('Schedule')).toBeInTheDocument()
    expect(screen.getByText('Twice A Day (08:00, 18:00) Every Day')).toBeInTheDocument()

    expect(screen.getByText('Qualifier')).toBeInTheDocument()
    expect(screen.getByText('Test < > &, Not Assigned, 2nd Test < > &, 2nd Not Assigned')).toBeInTheDocument()

    expect(screen.getByText('Route')).toBeInTheDocument()
    expect(screen.getByText('Oral')).toBeInTheDocument()

    expect(screen.getByText('Perscription Date')).toBeInTheDocument()
    expect(screen.getByText('10-Jan-2022 12:22')).toBeInTheDocument()

    expect(screen.getByText('Verification Comment')).toBeInTheDocument()
    expect(screen.getByText('Asdf Asdfasdfasdfsdf')).toBeInTheDocument()

    expect(screen.getByText('Source')).toBeInTheDocument()
    expect(screen.getByText('Not Assigned')).toBeInTheDocument()
  })
})
