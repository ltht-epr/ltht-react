import { FC, HTMLAttributes } from 'react'
import styled from '@emotion/styled'

import { TEXT_COLOURS } from '@ltht-react/styles'
import { Condition } from '@ltht-react/types'
import { titleCase } from '@ltht-react/utils'

const StyledConditionStatus = styled.div`
  color: ${TEXT_COLOURS.SECONDARY.VALUE};
  text-align: right;
  font-size: smaller;
  padding-top: 0.25rem;
`

const ConditionStatus: FC<Props> = ({ condition, ...rest }) => {
  const values = []

  if (condition.clinicalStatus) values.push(titleCase(condition.clinicalStatus))
  if (condition.verificationStatus) values.push(titleCase(condition.verificationStatus))

  return <StyledConditionStatus {...rest}>{values.join(' - ')}</StyledConditionStatus>
}

interface Props extends HTMLAttributes<HTMLDivElement> {
  condition: Condition
}

export default ConditionStatus
