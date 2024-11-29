import { render, screen } from '@testing-library/react'
import DiagnosisTitle from '@ltht-react/diagnosis-summary/src/atoms/diagnosis-title'
import {
  conditionWithNoMissingValues,
  conditionWithEmptySnippetHoverText,
  conditionWithNullSnippetHoverText,
  conditionWithUndefinedSnippetHoverText,
} from './title.fixtures'

describe('Diagnosis Title', () => {
  it('Renders clinical code text summaries', () => {
    render(<DiagnosisTitle condition={conditionWithNoMissingValues} enteredInError={false} />)

    expect(screen.getByText('Mock snippet hover text')).toBeVisible()
  })

  it('Adds the strikethrough property to code summaries if entered in error', () => {
    render(<DiagnosisTitle condition={conditionWithNoMissingValues} enteredInError />)

    expect(screen.getByText('Mock snippet hover text')).toHaveStyle('text-decoration: line-through')
  })

  it('Displays condition display name as fallback value when snippet text is empty', () => {
    render(<DiagnosisTitle condition={conditionWithEmptySnippetHoverText} enteredInError />)

    expect(screen.getByText('Mock condition display name')).toBeVisible()
  })

  it('Displays condition display name as fallback value when snippet text is null', () => {
    render(<DiagnosisTitle condition={conditionWithNullSnippetHoverText} enteredInError />)

    expect(screen.getByText('Mock condition display name')).toBeVisible()
  })

  it('Displays condition display name as fallback value when snippet text is undefined', () => {
    render(<DiagnosisTitle condition={conditionWithUndefinedSnippetHoverText} enteredInError />)

    expect(screen.getByText('Mock condition display name')).toBeVisible()
  })
})
