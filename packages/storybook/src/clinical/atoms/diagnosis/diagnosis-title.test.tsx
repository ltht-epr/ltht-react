import { render, screen } from '@testing-library/react'
import DiagnosisTitle from '@ltht-react/diagnosis-summary/src/atoms/diagnosis-title'

const validTitle = 'Diagnosis Title Example'

describe('Diagnosis Title', () => {
  it('Renders clinical code text summaries', () => {
    render(<DiagnosisTitle text={validTitle} enteredInError={false} />)

    expect(screen.getByText('Diagnosis Title Example')).toBeVisible()
  })

  it('Adds the strikethrough property to code summaries if entered in error', () => {
    render(<DiagnosisTitle text={validTitle} enteredInError />)

    expect(screen.getByText('Diagnosis Title Example')).toHaveStyle('text-decoration: line-through')
  })

  it('Displays missing data message when title text is empty', () => {
    render(<DiagnosisTitle text="" enteredInError />)

    expect(screen.getByText('Insufficient data provided.')).toBeVisible()
  })

  it('Displays missing data message when title text is null', () => {
    render(<DiagnosisTitle text={null} enteredInError />)

    expect(screen.getByText('Insufficient data provided.')).toBeVisible()
  })

  it('Displays missing data message when title text is undefined', () => {
    render(<DiagnosisTitle text={undefined} enteredInError />)

    expect(screen.getByText('Insufficient data provided.')).toBeVisible()
  })
})
