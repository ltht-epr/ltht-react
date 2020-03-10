import React from 'react'
import { LypftCommunityTreatmentOrder } from '@ltht-react/types/'
import { Card, CardBody, CardHeader } from '@ltht-react/card'
import { SubHeader } from '@ltht-react/header'
import { StringDetail, CodeableConceptDetail, PeriodDetail } from '@ltht-react/detail'

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
