import { render, screen } from '@testing-library/react'
import DiagnosisCategory from '@ltht-react/diagnosis-summary/src/atoms/diagnosis-category'
import conditions from '../../organisms/diagnosis/diagnosis.fixtures'

describe('Diagnosis Category', () => {
  it('renders category and severity if provided', () => {
    const conditionWithCategoryAndSeverity = conditions[0]
    conditionWithCategoryAndSeverity.category = [
      {
        text: 'Category1',
      },
      {
        text: 'Category2',
      },
    ]

    conditionWithCategoryAndSeverity.severity = {
      text: 'Severity',
    }

    render(<DiagnosisCategory condition={conditionWithCategoryAndSeverity} enteredInError={false} />)

    expect(screen.getByText('Category1, Category2 - Severity')).toBeVisible()
  })

  it('renders only category if severity was not provided', () => {
    const conditionWithCategory = conditions[0]
    conditionWithCategory.category = [
      {
        text: 'Category1',
      },
      {
        text: 'Category2',
      },
    ]

    conditionWithCategory.severity = undefined

    render(<DiagnosisCategory condition={conditionWithCategory} enteredInError={false} />)

    expect(screen.getByText('Category1, Category2')).toBeVisible()
  })

  it('renders only severity if category was not provided', () => {
    const conditionWithSeverity = conditions[0]
    conditionWithSeverity.category = undefined

    conditionWithSeverity.severity = {
      text: 'Severity',
    }

    render(<DiagnosisCategory condition={conditionWithSeverity} enteredInError={false} />)

    expect(screen.getByText('Severity')).toBeVisible()
  })

  it('Adds the strikethrough property if entered in error', () => {
    const conditionWithCategoryAndSeverity = conditions[0]
    conditionWithCategoryAndSeverity.category = [
      {
        text: 'Category1',
      },
      {
        text: 'Category2',
      },
    ]

    conditionWithCategoryAndSeverity.severity = {
      text: 'Severity',
    }

    render(<DiagnosisCategory condition={conditionWithCategoryAndSeverity} enteredInError />)

    expect(screen.getByText('Category1, Category2 - Severity')).toHaveStyle('text-decoration: line-through')
  })
})
