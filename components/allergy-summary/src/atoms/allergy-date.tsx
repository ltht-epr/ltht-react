/** @jsx jsx */
import React from 'react'
import { css, jsx } from '@emotion/core'

import { TEXT_PRIMARY_COLOUR } from '@ltht-react/styles'
import { AllergyIntolerance } from '@ltht-react/types'
import { partialDateTimeText } from '@ltht-react/utils'

const styles = css`
  color: ${TEXT_PRIMARY_COLOUR};
  text-align: right;
`

const AllergyDate: React.FC<Props> = ({ allergy }) => {
  return <div css={styles}>{partialDateTimeText(allergy.assertedDate)}</div>
}

interface Props {
  allergy: AllergyIntolerance
}

export default AllergyDate
