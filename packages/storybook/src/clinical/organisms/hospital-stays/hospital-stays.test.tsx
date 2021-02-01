import React from 'react'
import { render } from '@testing-library/react'

import HospitalStaySummary from '@ltht-react/hospital-stay-summary'
import stays from './hospital-stays.fixtures'

describe('Hospital Stays', () => {
  it('Renders', () => {
    render(<HospitalStaySummary hospitalStay={stays[0]} />)
  })
})
