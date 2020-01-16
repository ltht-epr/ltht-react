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
  return (
    <div css={styles}>
      {allergy.clinicalStatus.toString()} {allergy.verificationStatus && `- ${allergy.verificationStatus.toString()}`}
    </div>
  )
}

export default AlergyStatus
