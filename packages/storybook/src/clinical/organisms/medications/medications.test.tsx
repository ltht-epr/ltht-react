import MedicationDetail from '@ltht-react/medication-detail'
import MedicationSummary from '@ltht-react/medication-summary'
import { render } from '@testing-library/react'

import medicationFixtures from './medications.fixture'

describe('Medication', () => {
  describe('Summary', () => {
    it('Renders', () => {
      render(<MedicationSummary medication={medicationFixtures[0]} />)
    })
  })
  describe('Detail', () => {
    it('Renders', () => {
      render(<MedicationDetail medication={medicationFixtures[0]} />)
    })
  })
})
