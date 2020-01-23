/** @jsx jsx */
import React from 'react'
import { css, jsx } from '@emotion/core'

import { TEXT_SECONDARY_COLOUR } from '@ltht-react/styles'
import { AllergyIntolerance } from '@ltht-react/types'
import { titleCase } from '@ltht-react/utils'

const styles = css`
  color: ${TEXT_SECONDARY_COLOUR};
  text-align: right;
`

const AllergyStatus = ({ allergy }: { allergy: AllergyIntolerance }) => {
  let values = []

  if (allergy.clinicalStatus) values.push(titleCase(allergy.clinicalStatus))
  if (allergy.verificationStatus) values.push(titleCase(allergy.verificationStatus))

  return <div css={styles}>{values.join(' - ')}</div>
}

export default AllergyStatus
