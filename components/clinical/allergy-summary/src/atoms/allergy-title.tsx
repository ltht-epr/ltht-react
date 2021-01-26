import React, { HTMLAttributes } from 'react'
import styled from '@emotion/styled'

import { TEXT_COLOURS } from '@ltht-react/styles'
import { AllergyIntolerance } from '@ltht-react/types'
import { codeableConceptDisplaySummary } from '@ltht-react/utils'

const StyledAllergyTitle = styled.div`
  color: ${TEXT_COLOURS.PRIMARY};
  text-align: left;
`

const AllergyTitle: React.FC<Props> = ({ allergy, ...rest }) => (
  <StyledAllergyTitle {...rest}>{codeableConceptDisplaySummary(allergy.code)}</StyledAllergyTitle>
)

interface Props extends HTMLAttributes<HTMLDivElement> {
  allergy: AllergyIntolerance
}

export default AllergyTitle
