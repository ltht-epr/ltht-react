import React from 'react'
import { css, jsx } from '@emotion/core'

import ExclamationIcon from '@ltht-react/exclamation-icon'
import { AllergyIntolerance, AllergyIntoleranceCriticalityCode } from '@ltht-react/types'

const AllergyIcon = ({ allergy }: { allergy: AllergyIntolerance }) => {
  if (allergy.criticality && allergy.criticality === AllergyIntoleranceCriticalityCode.High) {
    return <ExclamationIcon status="red" size="medium" />
  }
  return <ExclamationIcon status="default" size="medium" />
}

export default AllergyIcon
