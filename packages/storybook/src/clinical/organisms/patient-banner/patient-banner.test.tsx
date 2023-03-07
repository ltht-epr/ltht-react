import { render, screen } from '@testing-library/react'

import PatientBanner from '@ltht-react/patient-banner'
import { AlivePatient, DeceasedPatient, groupsIncludingPedigreeGroup } from './patient-banner.fixtures'

describe('Patient Banner', () => {
  it('Renders', () => {
    render(<PatientBanner patient={DeceasedPatient} />)
  })

  it('Shows Pedigree Number if one is provided', () => {
    render(<PatientBanner patient={AlivePatient} patientGroups={groupsIncludingPedigreeGroup} />)

    expect(screen.getByText('Ped No.')).toBeInTheDocument()
    expect(screen.getByText('PED048164')).toBeInTheDocument()
  })
})
