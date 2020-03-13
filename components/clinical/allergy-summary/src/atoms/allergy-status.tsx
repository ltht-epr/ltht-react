/** @jsx jsx */
import React from 'react'
import { css, jsx } from '@emotion/core'

import { TEXT_COLOURS } from '@ltht-react/styles'
import { AllergyIntolerance } from '@ltht-react/types'
import { titleCase } from '@ltht-react/utils'

const styles = css`
  color: ${TEXT_COLOURS.SECONDARY};
  text-align: right;
`

const AllergyStatus: React.FC<Props> = ({ allergy }) => {
  const values = []

  if (allergy.clinicalStatus) values.push(titleCase(allergy.clinicalStatus))
  if (allergy.verificationStatus) values.push(titleCase(allergy.verificationStatus))

  return <div css={styles}>{values.join(' - ')}</div>
}

interface Props {
  allergy: AllergyIntolerance
}

export default AllergyStatus
