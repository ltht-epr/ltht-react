import { render, screen } from '@testing-library/react'
import DiagnosisOnsetEstimated from '@ltht-react/diagnosis-summary/src/atoms/diagnosis-onset-estimated'
import conditions from '../organisms/diagnosis/diagnosis.fixtures'

const conditionWithEstimatedOnsetDate = conditions[0]
conditionWithEstimatedOnsetDate.extension = [
  {
    url: 'https://fhir.leedsth.nhs.uk/ValueSet/diagnosis-onset-date-estimated-1',
    valueBoolean: true,
  },
]

describe('Diagnosis Onset Estimate', () => {
  it('Renders the expected text if the condition onset date was estimated', () => {
    render(<DiagnosisOnsetEstimated condition={conditionWithEstimatedOnsetDate} enteredInError={false} />)

    expect(screen.getByText('(estimated)')).toBeVisible()
  })

  it('Does not Renders the expected text if the condition onset date was estimated', () => {
    const conditionWithoutEstimatedOnsetDate = conditions[0]
    conditionWithoutEstimatedOnsetDate.extension = []

    render(<DiagnosisOnsetEstimated condition={conditionWithoutEstimatedOnsetDate} enteredInError={false} />)

    expect(screen.queryByText('(estimated)')).toBeNull()
  })

  it('Adds the strikethrough property if entered in error', () => {
    render(<DiagnosisOnsetEstimated condition={conditionWithEstimatedOnsetDate} enteredInError />)

    expect(screen.getByText('(estimated)')).toHaveStyle('text-decoration: line-through')
  })
})
