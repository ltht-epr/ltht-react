import React from 'react'
import { render } from '@testing-library/react'

import CarePlanSummary from '@ltht-react/care-plan-summary'
import carePlans from './care-plans.fixtures'

describe('Care Plans', () => {
  it('Renders', () => {
    render(<CarePlanSummary carePlan={carePlans[0]} />)
  })
})
