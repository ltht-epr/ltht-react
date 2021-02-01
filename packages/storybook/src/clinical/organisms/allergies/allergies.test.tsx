import React from 'react'
import { render } from '@testing-library/react'

import AllergySummary from '@ltht-react/allergy-summary'
import allergies from './allergies.fixtures'

describe('Allergies', () => {
  it('Renders', () => {
    render(<AllergySummary allergy={allergies[0]} />)
  })
})
