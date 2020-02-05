import React from 'react'
import { LypftCommunityTreatmentOrder } from '@ltht-react/types'
import { Widget, WidgetBody } from '@ltht-react/widget'
import CommunityTreatmentOrderDetailItem from './molecules/community-treatment-order-detail-item'

const CommunityTreatmentOrderDetail: React.FC<Props> = ({ communityTreatmentOrder }) => {
  return (
    <Widget>
      <WidgetBody>
        <CommunityTreatmentOrderDetailItem communityTreatmentOrder={communityTreatmentOrder} />
      </WidgetBody>
    </Widget>
  )
}

interface Props {
  communityTreatmentOrder: LypftCommunityTreatmentOrder
}

export default CommunityTreatmentOrderDetail
