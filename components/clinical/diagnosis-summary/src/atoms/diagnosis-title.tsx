import { FC, HTMLAttributes } from 'react'
import styled from '@emotion/styled'
import { titleCase, codeableConceptDisplaySummary } from '@ltht-react/utils'
import parseHtml from 'html-react-parser'

import { TEXT_COLOURS } from '@ltht-react/styles'
import { Condition } from '@ltht-react/types'
import { SNIPPET_HOVER_TEXT } from '../constants'

const StyledConditionTitle = styled.div<IStyledDescription>`
  color: ${TEXT_COLOURS.PRIMARY};
  text-align: left;
  text-decoration: ${({ enteredInError }) => (enteredInError ? 'line-through' : 'none')};
`

const DiagnosisTitle: FC<Props> = ({ condition, enteredInError, systemExclusionsFilter, isRichText = false }) => {
  const snippetTagText = extractSnippetTagDisplayValue(condition)

  if (snippetTagText) {
    return renderTitle(snippetTagText, enteredInError, isRichText)
  }

  const conditionText = extractConditionOrFallbackText(condition, systemExclusionsFilter)
  const conditionStatusText = extractConditionStatusText(condition)
  const title = conditionStatusText ? `${conditionText}, ${conditionStatusText}` : conditionText

  return renderTitle(title, enteredInError, isRichText)
}

const extractConditionOrFallbackText = (condition: Condition, systemExclusionsFilter?: string[]): string => {
  if (!condition?.code) {
    return titleCase('Unknown Condition')
  }

  const diagnosisTitle = codeableConceptDisplaySummary(condition.code, systemExclusionsFilter)

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

const renderTitle = (title: string, enteredInError: boolean, isRichText?: boolean) => (
  <StyledConditionTitle enteredInError={enteredInError}>{isRichText ? parseHtml(title) : title}</StyledConditionTitle>
)

interface Props extends HTMLAttributes<HTMLDivElement> {
  condition: Condition
  enteredInError: boolean
  systemExclusionsFilter?: string[]
  isRichText?: boolean
}

interface IStyledDescription {
  enteredInError: boolean
}

export default DiagnosisTitle
