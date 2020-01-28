import React from 'react'

import ExclamationIcon from '@ltht-react/exclamation-icon'
import { AllergyIntolerance, AllergyIntoleranceCriticalityCode } from '@ltht-react/types'

const AllergyIcon: React.FC<Props> = ({ allergy }) => {
  if (allergy.criticality && allergy.criticality === AllergyIntoleranceCriticalityCode.High) {
    return <ExclamationIcon status="red" size="medium" />
  }
  return <ExclamationIcon status="default" size="medium" />
}

interface Props {
  allergy: AllergyIntolerance
}

export default AllergyIcon
