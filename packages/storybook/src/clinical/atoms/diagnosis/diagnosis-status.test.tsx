import { render, screen } from '@testing-library/react'
import DiagnosisStatus from '@ltht-react/diagnosis-summary/src/atoms/diagnosis-status'
import { ConditionClinicalStatus, ConditionVerificationStatus } from '@ltht-react/types'
import { conditions } from '../../organisms/diagnosis/diagnosis.fixtures'

describe('Diagnosis Status', () => {
  it('renders clinical status and verification status', () => {
    const conditionWithClinicalStatusAndVerificationStatus = conditions[0]
    conditionWithClinicalStatusAndVerificationStatus.clinicalStatus = ConditionClinicalStatus.Remission
    conditionWithClinicalStatusAndVerificationStatus.verificationStatus = ConditionVerificationStatus.Provisional

    render(<DiagnosisStatus condition={conditionWithClinicalStatusAndVerificationStatus} enteredInError={false} />)

    expect(screen.getByText('Remission - Provisional')).toBeVisible()
  })

  it('renders only clinical status if verification status was not provided', () => {
    const conditionWithClinicalStatusAndVerificationStatus = conditions[0]
    conditionWithClinicalStatusAndVerificationStatus.clinicalStatus = ConditionClinicalStatus.Remission
    conditionWithClinicalStatusAndVerificationStatus.verificationStatus = undefined

    render(<DiagnosisStatus condition={conditionWithClinicalStatusAndVerificationStatus} enteredInError={false} />)

    expect(screen.getByText('Remission')).toBeVisible()
  })

  it('renders only verification status if clinical status was not provided', () => {
    const conditionWithClinicalStatusAndVerificationStatus = conditions[0]
    conditionWithClinicalStatusAndVerificationStatus.clinicalStatus = undefined
    conditionWithClinicalStatusAndVerificationStatus.verificationStatus = ConditionVerificationStatus.Provisional

    render(<DiagnosisStatus condition={conditionWithClinicalStatusAndVerificationStatus} enteredInError={false} />)

    expect(screen.getByText('Provisional')).toBeVisible()
  })

  it('renders an empty div if neither statuses were provided', () => {
    const conditionWithClinicalStatusAndVerificationStatus = conditions[0]
    conditionWithClinicalStatusAndVerificationStatus.clinicalStatus = undefined
    conditionWithClinicalStatusAndVerificationStatus.verificationStatus = undefined

    render(<DiagnosisStatus condition={conditionWithClinicalStatusAndVerificationStatus} enteredInError={false} />)

    expect(screen.getByText('Insufficient data provided')).toBeVisible()
  })

  it('Adds the strikethrough property to diagnoses entered in error', () => {
    const conditionWithClinicalStatusAndVerificationStatus = conditions[0]
    conditionWithClinicalStatusAndVerificationStatus.clinicalStatus = ConditionClinicalStatus.Remission
    conditionWithClinicalStatusAndVerificationStatus.verificationStatus = ConditionVerificationStatus.Provisional

    render(<DiagnosisStatus condition={conditionWithClinicalStatusAndVerificationStatus} enteredInError />)

    expect(screen.getByText('Remission - Provisional')).toBeVisible()

    expect(screen.getByText('Remission - Provisional')).toHaveStyle('text-decoration: line-through')
  })
})
