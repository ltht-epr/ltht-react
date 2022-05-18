import { render } from '@testing-library/react'

import AllergySummary from '@ltht-react/allergy-summary'
import AllergyDetail from '@ltht-react/allergy-detail'
import allergies from './allergies.fixtures'

describe('Allergies', () => {
  describe('Summary', () => {
    it('Renders', () => {
      render(<AllergySummary allergy={allergies[0]} />)
    })
  })
  describe('Detail', () => {
    it('Renders', () => {
      render(<AllergyDetail allergy={allergies[0]} />)
    })
  })
})
