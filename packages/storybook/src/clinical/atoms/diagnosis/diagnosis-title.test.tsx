import { render, screen } from '@testing-library/react'
import DiagnosisTitle from '@ltht-react/diagnosis-summary/src/atoms/diagnosis-title'
import conditions from '../../organisms/diagnosis/diagnosis.fixtures'

const conditionWithClinicalCode = conditions[0]
conditionWithClinicalCode.code = {
  text: 'This is a clinical coding text summary',
}

describe('Diagnosis Title', () => {
  it('Renders clinical code text summaries', () => {
    render(<DiagnosisTitle condition={conditionWithClinicalCode} enteredInError={false} />)

    expect(screen.getByText('This is a clinical coding text summary')).toBeVisible()
  })

  it('Adds the strikethrough property to code summaries if entered in error', () => {
    render(<DiagnosisTitle condition={conditionWithClinicalCode} enteredInError />)

    expect(screen.getByText('This is a clinical coding text summary')).toHaveStyle('text-decoration: line-through')
  })
})
