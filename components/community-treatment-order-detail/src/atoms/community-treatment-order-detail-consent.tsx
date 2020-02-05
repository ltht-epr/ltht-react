/** @jsx jsx */
import React from 'react'

import { LypftCommunityTreatmentOrder } from '@ltht-react/types'
import { WidgetDetailListItemTag, WidgetDetailListItemDescription } from '@ltht-react/widget'
import { jsx } from '@emotion/core'

const CommunityTreatmentOrderDetailConsent: React.FC<Props> = ({ communityTreatmentOrder }) => {
  return (
    <React.Fragment>
      <WidgetDetailListItemTag>Consent</WidgetDetailListItemTag>
      <WidgetDetailListItemDescription>{communityTreatmentOrder.consentToTreat}</WidgetDetailListItemDescription>
    </React.Fragment>
  )
}

interface Props {
  communityTreatmentOrder: LypftCommunityTreatmentOrder
}

export default CommunityTreatmentOrderDetailConsent
