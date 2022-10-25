import { render } from '@testing-library/react'

import DiagnosisSummary from '@ltht-react/diagnosis-summary'
import DiagnosisDetail from '@ltht-react/diagnosis-detail'
import conditions from './diagnosis.fixtures'

describe('Conditions', () => {
  describe('Summary', () => {
    it('Renders', () => {
      render(<DiagnosisSummary condition={conditions[0]} isReadOnly />)
    })
  })
  describe('Detail', () => {
    it('Renders', () => {
      render(<DiagnosisDetail condition={conditions[0]} />)
    })
  })
})
