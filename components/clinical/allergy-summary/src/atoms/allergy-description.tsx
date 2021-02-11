import { FC, HTMLAttributes } from 'react'
import styled from '@emotion/styled'

import { TEXT_COLOURS } from '@ltht-react/styles'
import { AllergyIntolerance } from '@ltht-react/types'
import { codeableConceptCodeSummary, allergyIntoleranceCategoryCodeDisplaySummary, titleCase } from '@ltht-react/utils'

const StyledAllergyDescription = styled.div`
  color: ${TEXT_COLOURS.SECONDARY.VALUE};
  text-align: left;
  font-size: smaller;
  padding-top: 0.25rem;
`

const AllergyDescription: FC<Props> = ({ allergy, ...rest }) => {
  const values = []

  const codeSummary = codeableConceptCodeSummary(allergy.code)
  if (codeSummary && codeSummary.length > 0) values.push(codeSummary)

  const categorySummary = allergy.category && allergyIntoleranceCategoryCodeDisplaySummary(allergy.category)
  if (categorySummary && categorySummary.length > 0) values.push(categorySummary)

  if (allergy.type) values.push(titleCase(allergy.type))

  return <StyledAllergyDescription {...rest}>{values.join(' - ')}</StyledAllergyDescription>
}

interface Props extends HTMLAttributes<HTMLDivElement> {
  allergy: AllergyIntolerance
}

export default AllergyDescription
