/** @jsx jsx */
import React from 'react'
import { css, jsx } from '@emotion/core'

import { SECONDARY_TEXT_COLOUR } from '@ltht-react/styles'
import { AllergyIntolerance } from '@ltht-react/types'

const styles = css`
  color: ${SECONDARY_TEXT_COLOUR};
  text-align: right;
`

const AlergyStatus = ({ allergy }: { allergy: AllergyIntolerance }) => {
  let values = []

  if (allergy.clinicalStatus) values.push(allergy.clinicalStatus.toString())
  if (allergy.verificationStatus) values.push(allergy.verificationStatus.toString())

  return <div css={styles}>{values.join(' - ')}</div>
}

export default AlergyStatus
