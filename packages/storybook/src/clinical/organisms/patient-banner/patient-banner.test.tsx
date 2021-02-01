import React from 'react'
import { render } from '@testing-library/react'

import PatientBanner from '@ltht-react/patient-banner'
import { DeceasedPatient } from './patient-banner.fixtures'

describe('Patient Banner', () => {
  it('Renders', () => {
    render(<PatientBanner patient={DeceasedPatient} />)
  })
})
