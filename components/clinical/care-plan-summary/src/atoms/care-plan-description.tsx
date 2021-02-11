import { FC, HTMLAttributes } from 'react'
import styled from '@emotion/styled'

import { TEXT_COLOURS } from '@ltht-react/styles'
import { CarePlan } from '@ltht-react/types'
import { resourceReferenceDisplaySummary } from '@ltht-react/utils'

const StyledCarePlanDescription = styled.div`
  color: ${TEXT_COLOURS.SECONDARY.VALUE};
  text-align: left;
  font-size: smaller;
  padding-top: 0.25rem;
`

const CarePlanDescription: FC<Props> = ({ carePlan, ...rest }) => {
  const values = []

  const author = carePlan.author && resourceReferenceDisplaySummary(carePlan.author)
  if (author && author.length > 0) values.push(author)

  const careTeam = carePlan.careTeam && resourceReferenceDisplaySummary(carePlan.careTeam)
  if (careTeam && careTeam.length > 0) values.push(careTeam)

  return <StyledCarePlanDescription {...rest}>{values.join(' - ')}</StyledCarePlanDescription>
}

interface Props extends HTMLAttributes<HTMLDivElement> {
  carePlan: CarePlan
}

export default CarePlanDescription
