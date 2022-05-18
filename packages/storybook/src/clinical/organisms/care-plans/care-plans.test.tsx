import { render } from '@testing-library/react'

import CarePlanSummary from '@ltht-react/care-plan-summary'
import CarePlanDetail from '@ltht-react/care-plan-detail'
import carePlans from './care-plans.fixtures'

describe('Care Plans', () => {
  describe('Summary', () => {
    it('Renders', () => {
      render(<CarePlanSummary carePlan={carePlans[0]} />)
    })
  })
  describe('Detail', () => {
    it('Renders', () => {
      render(<CarePlanDetail carePlan={carePlans[0]} />)
    })
  })
})
