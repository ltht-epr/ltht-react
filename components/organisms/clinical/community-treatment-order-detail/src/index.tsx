import React from 'react'
import { LypftCommunityTreatmentOrder } from '@ltht-react/types/'
import { Widget, WidgetBody, WidgetHeader } from '@ltht-react/widget'
import SubHeader from '@ltht-react/sub-header'
import DescriptionListCodeableConcept from '@ltht-react/description-list-codeable-concept'
import DescriptionListString from '@ltht-react/description-list-string'
import DescriptionListPeriod from '@ltht-react/description-list-period'

const CommunityTreatmentOrderDetail: React.FC<Props> = ({ title, communityTreatmentOrder }) => {
  return (
    <Widget>
      <WidgetHeader>
        <SubHeader>{title}</SubHeader>
      </WidgetHeader>
      <WidgetBody>
        <DescriptionListString term="Consent" description={communityTreatmentOrder.consentToTreat} />
        <DescriptionListCodeableConcept term="Legal Status" concept={communityTreatmentOrder.legalStatus} />
        <DescriptionListPeriod period={communityTreatmentOrder?.period} />
        <DescriptionListString term="Restrictions" description={communityTreatmentOrder.restrictions} />
      </WidgetBody>
    </Widget>
  )
}

interface Props {
  title: string
  communityTreatmentOrder: LypftCommunityTreatmentOrder
}

export default CommunityTreatmentOrderDetail
