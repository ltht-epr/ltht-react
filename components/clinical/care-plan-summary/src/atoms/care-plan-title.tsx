import { FC, HTMLAttributes } from 'react'
import styled from '@emotion/styled'

import { TEXT_COLOURS } from '@ltht-react/styles'
import { CarePlan } from '@ltht-react/types'

const StyledCarePlanTitle = styled.div`
  color: ${TEXT_COLOURS.PRIMARY};
  text-align: left;
`

const CarePlanTitle: FC<Props> = ({ carePlan, ...rest }) => (
  <StyledCarePlanTitle {...rest}>{carePlan.title}</StyledCarePlanTitle>
)

interface Props extends HTMLAttributes<HTMLDivElement> {
  carePlan: CarePlan
}

export default CarePlanTitle
