/** @jsx jsx */
import React from 'react'
import { css, jsx } from '@emotion/core'

import { PRIMARY_TEXT_COLOUR } from '@ltht-react/styles'
import { AllergyIntolerance } from '@ltht-react/types'
import { partialDateTimeText } from '@ltht-react/utils'

const styles = css`
  color: ${PRIMARY_TEXT_COLOUR};
  text-align: right;
`

const AllergyDate = ({ allergy }: { allergy: AllergyIntolerance }) => {
  return <div css={styles}>{partialDateTimeText(allergy.assertedDate)}</div>
}

export default AllergyDate
