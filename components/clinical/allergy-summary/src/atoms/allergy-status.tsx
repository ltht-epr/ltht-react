import { FC, HTMLAttributes } from 'react'
import styled from '@emotion/styled'

import { TEXT_COLOURS } from '@ltht-react/styles'
import { AllergyIntolerance } from '@ltht-react/types'
import { titleCase } from '@ltht-react/utils'

const StyledAllergyStatus = styled.div`
  color: ${TEXT_COLOURS.SECONDARY.VALUE};
  text-align: right;
  font-size: smaller;
  padding-top: 0.25rem;
`

const AllergyStatus: FC<Props> = ({ allergy, ...rest }) => {
  const values = []

  if (allergy.clinicalStatus) values.push(titleCase(allergy.clinicalStatus))
  if (allergy.verificationStatus) values.push(titleCase(allergy.verificationStatus))

  return <StyledAllergyStatus {...rest}>{values.join(' - ')}</StyledAllergyStatus>
}

interface Props extends HTMLAttributes<HTMLDivElement> {
  allergy: AllergyIntolerance
}

export default AllergyStatus
