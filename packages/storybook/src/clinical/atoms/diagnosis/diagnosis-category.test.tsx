import { render, screen } from '@testing-library/react'
import DiagnosisCategory from '@ltht-react/diagnosis-summary/src/atoms/diagnosis-category'
import conditions from '../../organisms/diagnosis/diagnosis.fixtures'

describe('Diagnosis Category', () => {
  it('renders severity if severity is provided', () => {
    const conditionWithSeverity = conditions[0]
    conditionWithSeverity.category = undefined

    conditionWithSeverity.severity = {
      text: 'Severity',
    }

    render(<DiagnosisCategory condition={conditionWithSeverity} enteredInError={false} />)

    expect(screen.getByText('Severity')).toBeVisible()
  })

  it('Adds the strikethrough property if entered in error', () => {
    const conditionWithSeverity = conditions[0]

    conditionWithSeverity.severity = {
      text: 'Severity',
    }

    render(<DiagnosisCategory condition={conditionWithSeverity} enteredInError />)

    expect(screen.getByText('Severity')).toHaveStyle('text-decoration: line-through')
  })
})
