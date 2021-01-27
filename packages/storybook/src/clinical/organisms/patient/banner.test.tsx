import React from 'react'
import ReactDOM from 'react-dom'

import PatientBanner from '@ltht-react/patient-banner'
import { DeceasedPatient } from './banner.fixtures'

describe('PatientBanner', () => {
  it('renders without crashing', () => {
    const div = document.createElement('div')
    ReactDOM.render(<PatientBanner patient={DeceasedPatient} />, div)
  })
})
