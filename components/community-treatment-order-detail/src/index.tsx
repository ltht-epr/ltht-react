import React from 'react'
import { LypftCommunityTreatmentOrder } from '@ltht-react/types'
import { Widget, WidgetBody, WidgetHeader } from '@ltht-react/widget'
import { DetailHeader } from '@ltht-react/detail'
import CommunityTreatmentOrderDetailItem from './molecules/community-treatment-order-detail-item'

const CommunityTreatmentOrderDetail: React.FC<Props> = ({ title, communityTreatmentOrder }) => {
  return (
    <Widget>
      <WidgetHeader>
        <DetailHeader>{title}</DetailHeader>
      </WidgetHeader>
      <WidgetBody>
        <CommunityTreatmentOrderDetailItem communityTreatmentOrder={communityTreatmentOrder} />
      </WidgetBody>
    </Widget>
  )
}

interface Props {
  title: string
  communityTreatmentOrder: LypftCommunityTreatmentOrder
}

export default CommunityTreatmentOrderDetail
