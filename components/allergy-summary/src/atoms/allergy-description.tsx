/** @jsx jsx */
import React from 'react'
import { css, jsx } from '@emotion/core'

import { SECONDARY_TEXT_COLOUR } from '@ltht-react/styles'
import { AllergyIntolerance } from '@ltht-react/types'
import { codeableConceptCodeSummary, allergyIntoleranceCategoryCodeDisplaySummary } from '@ltht-react/utils'

const styles = css`
  color: ${SECONDARY_TEXT_COLOUR};
  text-align: left;
`

const AllergyDescription = ({ allergy }: { allergy: AllergyIntolerance }) => {
  return (
    <div css={styles}>
      {codeableConceptCodeSummary(allergy.code)}{' '}
      {allergy.category && `- ${allergyIntoleranceCategoryCodeDisplaySummary(allergy.category)}`}{' '}
      {allergy.type && `- ${allergy.type.toString()}`}
    </div>
  )
}

export default AllergyDescription
