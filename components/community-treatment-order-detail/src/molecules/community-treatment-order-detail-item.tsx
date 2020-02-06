import React from 'react'

import { LypftCommunityTreatmentOrder } from '@ltht-react/types'
import { DetailList, DetailListItemPeriod } from '@ltht-react/detail'
import Consent from '../atoms/community-treatment-order-detail-consent'

const CommunityTreatmentOrderDetailItem: React.FC<Props> = ({ communityTreatmentOrder }) => {
  return (
    <DetailList>
      <Consent communityTreatmentOrder={communityTreatmentOrder} />
      <DetailListItemPeriod period={communityTreatmentOrder?.period} />
    </DetailList>
  )
}

interface Props {
  communityTreatmentOrder: LypftCommunityTreatmentOrder
  clickHandler?(CommunityTreatmentOrder: LypftCommunityTreatmentOrder): void
}

export default CommunityTreatmentOrderDetailItem
