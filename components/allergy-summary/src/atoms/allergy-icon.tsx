import React from 'react'
import { css, jsx } from '@emotion/core'

import ExclamationIcon from '@ltht-react/exclamation-icon'
import { AllergyIntolerance, AllergyIntoleranceCriticalityCode } from '@ltht-react/types'

const styles = css`
  min-width: 1.0828rem;
`

const AllergyIcon = ({ allergy }: { allergy: AllergyIntolerance }) => {
  if (allergy.criticality && allergy.criticality === AllergyIntoleranceCriticalityCode.High) {
    return <ExclamationIcon css={styles} status="red" size="medium" />
  }
  return <div css={styles} />
}

export default AllergyIcon
