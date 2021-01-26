import React, { HTMLAttributes } from 'react'
import styled from '@emotion/styled'

import { TEXT_COLOURS } from '@ltht-react/styles'
import { CarePlan } from '@ltht-react/types'
import { titleCase } from '@ltht-react/utils'

const StyledCarePlanStatus = styled.div`
  color: ${TEXT_COLOURS.SECONDARY.VALUE};
  text-align: right;
  font-size: smaller;
  padding-top: 0.25rem;
`

const CarePlanStatus: React.FC<Props> = ({ carePlan, ...rest }) => {
  const values = []

  if (carePlan.intent) values.push(titleCase(carePlan.intent))
  if (carePlan.status) values.push(titleCase(carePlan.status))

  return <StyledCarePlanStatus {...rest}>{values.join(' - ')}</StyledCarePlanStatus>
}

interface Props extends HTMLAttributes<HTMLDivElement> {
  carePlan: CarePlan
}

export default CarePlanStatus
