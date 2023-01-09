import { render, screen } from '@testing-library/react'
import { ConditionVerificationStatus } from '@ltht-react/types'
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

  describe('Diagnosis Summary', () => {
    it('Does not diplay redacted data', () => {
      const redactedCondition = conditions[0]
      redactedCondition.metadata.isRedacted = true

      render(<DiagnosisSummary condition={redactedCondition} isReadOnly />)

      expect(screen.getByText('Insufficient privileges')).toBeVisible()
    })

    it('Adds the strikethrough property to diagnoses entered in error', () => {
      const enteredInErrorCondition = conditions[0]
      enteredInErrorCondition.verificationStatus = ConditionVerificationStatus.EnteredInError

      render(<DiagnosisSummary condition={enteredInErrorCondition} isReadOnly />)

      expect(screen.getByText('Heel Pain')).toHaveStyle('text-decoration: line-through')
    })
  })
})
