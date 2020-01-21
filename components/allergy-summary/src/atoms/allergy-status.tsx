/** @jsx jsx */
import React from 'react'
import { css, jsx } from '@emotion/core'

import { SECONDARY_TEXT_COLOUR } from '@ltht-react/styles'
import { AllergyIntolerance } from '@ltht-react/types'
import { titleCase } from '@ltht-react/utils'

const styles = css`
  color: ${SECONDARY_TEXT_COLOUR};
  text-align: right;
`

const AlergyStatus = ({ allergy }: { allergy: AllergyIntolerance }) => {
  let values = []

  if (allergy.clinicalStatus) values.push(titleCase(allergy.clinicalStatus))
  if (allergy.verificationStatus) values.push(titleCase(allergy.verificationStatus))

  return <div css={styles}>{values.join(' - ')}</div>
}

export default AlergyStatus
