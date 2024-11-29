import { FC, HTMLAttributes } from 'react'
import styled from '@emotion/styled'

import { TEXT_COLOURS } from '@ltht-react/styles'
import { Condition } from '@ltht-react/types'
import { SNIPPET_HOVER_TEXT } from '../constants'

const StyledConditionTitle = styled.div<IStyledDescription>`
  color: ${TEXT_COLOURS.PRIMARY};
  text-align: left;
  text-decoration: ${({ enteredInError }) => (enteredInError ? 'line-through' : 'none')};
`

const DiagnosisTitle: FC<Props> = ({ condition, enteredInError, ...rest }) => {
  const snippetMetadataTag = condition?.metadata.tag?.find((coding) => coding?.system === SNIPPET_HOVER_TEXT)
  const conditionCoding = condition?.code

  return (
    <StyledConditionTitle enteredInError={enteredInError} {...rest}>
      {snippetMetadataTag?.display || conditionCoding?.text}
    </StyledConditionTitle>
  )
}

interface Props extends HTMLAttributes<HTMLDivElement> {
  condition: Condition
  enteredInError: boolean
}

interface IStyledDescription {
  enteredInError: boolean
}

export default DiagnosisTitle
