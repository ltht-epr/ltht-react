/** @jsx jsx */
import React from 'react'
import { css, jsx } from '@emotion/core'

import { TEXT_COLOURS } from '@ltht-react/styles'
import { AllergyIntolerance } from '@ltht-react/types'
import { codeableConceptCodeSummary, allergyIntoleranceCategoryCodeDisplaySummary, titleCase } from '@ltht-react/utils'

const styles = css`
  color: ${TEXT_COLOURS.SECONDARY};
  text-align: left;
`

const AllergyDescription: React.FC<Props> = ({ allergy }) => {
  const values = []

  const codeSummary = codeableConceptCodeSummary(allergy.code)
  if (codeSummary && codeSummary.length > 0) values.push(codeSummary)

  const categorySummary = allergy.category && allergyIntoleranceCategoryCodeDisplaySummary(allergy.category)
  if (categorySummary && categorySummary.length > 0) values.push(categorySummary)

  if (allergy.type) values.push(titleCase(allergy.type))

  return <div css={styles}>{values.join(' - ')}</div>
}

interface Props {
  allergy: AllergyIntolerance
}

export default AllergyDescription
