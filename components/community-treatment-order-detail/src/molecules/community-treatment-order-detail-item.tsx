import React from 'react'

import { LypftCommunityTreatmentOrder } from '@ltht-react/types'
import { WidgetDetailList } from '@ltht-react/widget'
import Consent from '../atoms/community-treatment-order-detail-consent'

const CommunityTreatmentOrderDetailItem: React.FC<Props> = ({ communityTreatmentOrder }) => {
  return (
    <WidgetDetailList>
      <Consent communityTreatmentOrder={communityTreatmentOrder} />
      <Consent communityTreatmentOrder={communityTreatmentOrder} />
      <Consent communityTreatmentOrder={communityTreatmentOrder} />
    </WidgetDetailList>
  )
}

interface Props {
  communityTreatmentOrder: LypftCommunityTreatmentOrder
  clickHandler?(CommunityTreatmentOrder: LypftCommunityTreatmentOrder): void
}

export default CommunityTreatmentOrderDetailItem
