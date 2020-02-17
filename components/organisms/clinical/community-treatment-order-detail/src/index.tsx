import React from 'react'
import { LypftCommunityTreatmentOrder } from '@ltht-react/types/'
import { Widget, WidgetBody, WidgetHeader } from '@ltht-react/widget'
import SubHeader from '@ltht-react/sub-header'
import CodeableConceptDetail from '@ltht-react/codeable-concept-detail'
import StringDetail from '@ltht-react/string-detail'
import PeriodDetail from '@ltht-react/period-detail'

const CommunityTreatmentOrderDetail: React.FC<Props> = ({ title, communityTreatmentOrder }) => {
  return (
    <Widget>
      <WidgetHeader>
        <SubHeader>{title}</SubHeader>
      </WidgetHeader>
      <WidgetBody>
        <StringDetail term="Consent" description={communityTreatmentOrder.consentToTreat} />
        <CodeableConceptDetail term="Legal Status" concept={communityTreatmentOrder.legalStatus} />
        <PeriodDetail period={communityTreatmentOrder?.period} />
        <StringDetail term="Restrictions" description={communityTreatmentOrder.restrictions} />
      </WidgetBody>
    </Widget>
  )
}

interface Props {
  title: string
  communityTreatmentOrder: LypftCommunityTreatmentOrder
}

export default CommunityTreatmentOrderDetail
