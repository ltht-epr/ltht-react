import { FC } from 'react'
import { CarePlan, DetailViewType } from '@ltht-react/types'
import {
  StringDetail,
  PeriodDetail,
  NarrativeDetail,
  ResourceReferenceListDetail,
  CollapsibleDetailCollection,
  CollapsibleDetailCollectionProps,
} from '@ltht-react/type-detail'

const CarePlanDetail: FC<Props> = ({ carePlan, viewType = DetailViewType.Compact }) => (
  <CollapsibleDetailCollection viewType={viewType}>
    <StringDetail term="Plan" description={carePlan.title} />
    <StringDetail term="Description" description={carePlan.description} />
    <PeriodDetail period={carePlan.period} />
    <StringDetail term="Intent" description={carePlan.intent.toString()} />
    <StringDetail term="Status" description={carePlan.status.toString()} />
    <NarrativeDetail narrative={carePlan.text} />
    <ResourceReferenceListDetail term="Addresses" resourceReferences={carePlan?.addresses} />
    <ResourceReferenceListDetail term="Performer(s)" resourceReferences={carePlan?.activity?.detail?.performer} />
    <ResourceReferenceListDetail term="Author(s)" resourceReferences={carePlan?.author} />
  </CollapsibleDetailCollection>
)
interface Props extends CollapsibleDetailCollectionProps {
  carePlan: CarePlan
}

export default CarePlanDetail
