/** @jsx jsx */
import React from 'react'
import { css, jsx } from '@emotion/core'

import { PRIMARY_TEXT_COLOUR } from '@ltht-react/styles'
import { AllergyIntolerance } from '@ltht-react/types'
import { codeableConceptDisplaySummary } from '@ltht-react/utils'

const styles = css`
  color: ${PRIMARY_TEXT_COLOUR};
  text-align: left;
`

const AllergyTitle = ({ allergy }: { allergy: AllergyIntolerance }) => {
  return <div css={styles}>{codeableConceptDisplaySummary(allergy.code)}</div>
}

export default AllergyTitle
