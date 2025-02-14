import { FC, HTMLAttributes } from 'react'
import styled from '@emotion/styled'
import { titleCase, codeableConceptDisplaySummary } from '@ltht-react/utils'

import { TEXT_COLOURS } from '@ltht-react/styles'
import { Condition } from '@ltht-react/types'
import { SNIPPET_HOVER_TEXT } from '../constants'

const StyledConditionTitle = styled.div<IStyledDescription>`
  color: ${TEXT_COLOURS.PRIMARY};
  text-align: left;
  text-decoration: ${({ enteredInError }) => (enteredInError ? 'line-through' : 'none')};
`

const DiagnosisTitle: FC<Props> = ({ condition, enteredInError, codingSystemFilter }) => {
  const snippetTagText = extractSnippetTagDisplayValue(condition)

  if (snippetTagText) {
    return renderTitle(snippetTagText, enteredInError)
  }

  const conditionText = extractConditionOrFallbackText(condition, codingSystemFilter)
  const conditionStatusText = extractConditionStatusText(condition)
  const title = conditionStatusText ? `${conditionText}, ${conditionStatusText}` : conditionText

  return renderTitle(title, enteredInError)
}

const extractConditionOrFallbackText = (condition: Condition, codingSystemFilter?: string): string => {
  if (!condition?.code) {
    return titleCase('Unknown Condition')
  }

  const diagnosisTitle = codeableConceptDisplaySummary(condition.code, codingSystemFilter)

  return titleCase(diagnosisTitle || 'Unknown Condition')
}

const extractConditionStatusText = (condition: Condition): string => {
  const statusParts: string[] = []

  if (condition?.clinicalStatus) {
    statusParts.push(condition?.clinicalStatus)
  }

  if (condition?.verificationStatus) {
    statusParts.push(condition.verificationStatus)
  }

  return titleCase(statusParts.join(', '))
}

const extractSnippetTagDisplayValue = (condition: Condition) =>
  condition?.metadata.tag?.find((coding) => coding?.system === SNIPPET_HOVER_TEXT)?.display

const renderTitle = (title: string, enteredInError: boolean) => (
  <StyledConditionTitle enteredInError={enteredInError}>{title}</StyledConditionTitle>
)

interface Props extends HTMLAttributes<HTMLDivElement> {
  condition: Condition
  enteredInError: boolean
  codingSystemFilter?: string
}

interface IStyledDescription {
  enteredInError: boolean
}

export default DiagnosisTitle
