import React from 'react'

import { LypftCommunityTreatmentOrder } from '@ltht-react/types'
import {
  DetailList,
  DetailListItemPeriod,
  DetailListItemString,
  DetailListItemCodeableConceptDisplay,
} from '@ltht-react/detail'

const CommunityTreatmentOrderDetailItem: React.FC<Props> = ({ communityTreatmentOrder }) => {
  return (
    <DetailList>
      <DetailListItemString tag="Consent" string={communityTreatmentOrder.consentToTreat} />
      <DetailListItemCodeableConceptDisplay tag="Legal Status" concept={communityTreatmentOrder.legalStatus} />
      <DetailListItemPeriod period={communityTreatmentOrder?.period} />
      <DetailListItemString tag="Restrictions" string={communityTreatmentOrder.restrictions} />
    </DetailList>
  )
}

interface Props {
  communityTreatmentOrder: LypftCommunityTreatmentOrder
  clickHandler?(CommunityTreatmentOrder: LypftCommunityTreatmentOrder): void
}

export default CommunityTreatmentOrderDetailItem
