import React from 'react'
import { LypftCommunityTreatmentOrder } from '@ltht-react/types/'
import { Card, CardBody, CardHeader } from '@ltht-react/card'
import { SubHeader } from '@ltht-react/header'
import CodeableConceptDetail from '@ltht-react/codeable-concept-detail'
import StringDetail from '@ltht-react/string-detail'
import PeriodDetail from '@ltht-react/period-detail'

const CommunityTreatmentOrderDetail: React.FC<Props> = ({ title, communityTreatmentOrder }) => {
  return (
    <Card>
      <CardHeader>
        <SubHeader>{title}</SubHeader>
      </CardHeader>
      <CardBody>
        <StringDetail term="Consent" description={communityTreatmentOrder.consentToTreat} />
        <CodeableConceptDetail term="Legal Status" concept={communityTreatmentOrder.legalStatus} />
        <PeriodDetail period={communityTreatmentOrder?.period} />
        <StringDetail term="Restrictions" description={communityTreatmentOrder.restrictions} />
      </CardBody>
    </Card>
  )
}

interface Props {
  title: string
  communityTreatmentOrder: LypftCommunityTreatmentOrder
}

export default CommunityTreatmentOrderDetail
