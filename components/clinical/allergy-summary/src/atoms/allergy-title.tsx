/** @jsx jsx */
import React from 'react'
import { css, jsx } from '@emotion/core'

import { TEXT_COLOURS } from '@ltht-react/styles'
import { AllergyIntolerance } from '@ltht-react/types'
import { codeableConceptDisplaySummary } from '@ltht-react/utils'

const styles = css`
  color: ${TEXT_COLOURS.PRIMARY};
  text-align: left;
`

const AllergyTitle: React.FC<Props> = ({ allergy }) => {
  return <div css={styles}>{codeableConceptDisplaySummary(allergy.code)}</div>
}

interface Props {
  allergy: AllergyIntolerance
}

export default AllergyTitle
