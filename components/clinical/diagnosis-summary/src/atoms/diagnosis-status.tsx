import { FC, HTMLAttributes } from 'react'
import styled from '@emotion/styled'

import { TEXT_COLOURS } from '@ltht-react/styles'
import { Condition, ConditionVerificationStatus } from '@ltht-react/types'
import { titleCase } from '@ltht-react/utils'

const StyledConditionStatus = styled.div<IStyledDescription>`
  color: ${TEXT_COLOURS.SECONDARY.VALUE};
  text-align: right;
  font-size: smaller;
  padding-top: 0.25rem;
  text-decoration: ${({ enteredInError }) => (enteredInError ? 'line-through' : 'none')};
`

const DiagnosisStatus: FC<Props> = ({ condition, enteredInError, ...rest }) => {
  const values = []

  if (condition.clinicalStatus) values.push(titleCase(condition.clinicalStatus))
  if (condition.verificationStatus) values.push(titleCase(condition.verificationStatus))

  if (condition.verificationStatus === ConditionVerificationStatus.EnteredinError) enteredInError = true

  return (
    <StyledConditionStatus enteredInError={enteredInError} {...rest}>
      {values.join(' - ')}
    </StyledConditionStatus>
  )
}

interface Props extends HTMLAttributes<HTMLDivElement> {
  condition: Condition
  enteredInError: boolean
}

interface IStyledDescription {
  enteredInError: boolean
}

export default DiagnosisStatus
