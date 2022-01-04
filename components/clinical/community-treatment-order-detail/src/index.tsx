import { FC } from 'react'
import { LypftCommunityTreatmentOrder } from '@ltht-react/types/'
import { StringDetail, CodeableConceptDetail, PeriodDetail } from '@ltht-react/type-detail'

const CommunityTreatmentOrderDetail: FC<Props> = ({ communityTreatmentOrder }) => (
  <>
    <StringDetail term="Consent" description={communityTreatmentOrder.consentToTreat} />
    <CodeableConceptDetail term="Legal Status" concept={communityTreatmentOrder.legalStatus} />
    <PeriodDetail period={communityTreatmentOrder?.period} />
    <StringDetail term="Restrictions" description={communityTreatmentOrder.restrictions} />
  </>
)

interface Props {
  communityTreatmentOrder: LypftCommunityTreatmentOrder
}

export default CommunityTreatmentOrderDetail
