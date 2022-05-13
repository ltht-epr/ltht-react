import { FC } from 'react'
import { DetailViewType, LypftCommunityTreatmentOrder } from '@ltht-react/types/'
import {
  StringDetail,
  CodeableConceptDetail,
  PeriodDetail,
  CollapsibleDetailCollectionProps,
  CollapsibleDetailCollection,
} from '@ltht-react/type-detail'

const CommunityTreatmentOrderDetail: FC<Props> = ({ communityTreatmentOrder, viewType = DetailViewType.Compact }) => (
  <CollapsibleDetailCollection viewType={viewType}>
    <StringDetail term="Consent" description={communityTreatmentOrder.consentToTreat} />
    <CodeableConceptDetail term="Legal Status" concept={communityTreatmentOrder.legalStatus} />
    <PeriodDetail period={communityTreatmentOrder?.period} />
    <StringDetail term="Restrictions" description={communityTreatmentOrder.restrictions} />
  </CollapsibleDetailCollection>
)

interface Props extends CollapsibleDetailCollectionProps {
  communityTreatmentOrder: LypftCommunityTreatmentOrder
}

export default CommunityTreatmentOrderDetail
