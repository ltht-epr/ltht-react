/** @jsx jsx */
import React from 'react'
import { css, jsx } from '@emotion/core'

import { SECONDARY_TEXT_COLOUR } from '@ltht-react/styles'
import { AllergyIntolerance } from '@ltht-react/types'
import { codeableConceptCodeSummary, allergyIntoleranceCategoryCodeDisplaySummary, titleCase } from '@ltht-react/utils'

const styles = css`
  color: ${SECONDARY_TEXT_COLOUR};
  text-align: left;
`

const AllergyDescription = ({ allergy }: { allergy: AllergyIntolerance }) => {
  let values = []

  const codeSummary = codeableConceptCodeSummary(allergy.code)
  if (codeSummary && codeSummary.length > 0) values.push(codeSummary)

  const categorySummary = allergy.category && allergyIntoleranceCategoryCodeDisplaySummary(allergy.category)
  if (categorySummary && categorySummary.length > 0) values.push(categorySummary)

  if (allergy.type) values.push(titleCase(allergy.type))

  return <div css={styles}>{values.join(' - ')}</div>
}

export default AllergyDescription
