/** @jsx jsx */
import React from 'react'

import { LypftCommunityTreatmentOrder } from '@ltht-react/types'
import { DetailListItemTag, DetailListItemDescription } from '@ltht-react/detail'
import { jsx } from '@emotion/core'

const CommunityTreatmentOrderDetailConsent: React.FC<Props> = ({ communityTreatmentOrder }) => {
  return (
    <React.Fragment>
      <DetailListItemTag>Consent</DetailListItemTag>
      <DetailListItemDescription>{communityTreatmentOrder.consentToTreat}</DetailListItemDescription>
    </React.Fragment>
  )
}

interface Props {
  communityTreatmentOrder: LypftCommunityTreatmentOrder
}

export default CommunityTreatmentOrderDetailConsent
