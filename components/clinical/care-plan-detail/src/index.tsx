import { FC } from 'react'
import { CarePlan } from '@ltht-react/types'
import { StringDetail, PeriodDetail, NarrativeDetail, ResourceReferenceListDetail } from '@ltht-react/detail'

const CarePlanDetail: FC<Props> = ({ carePlan }) => (
  <>
    <StringDetail term="Plan" description={carePlan.title} />
    <StringDetail term="Description" description={carePlan.description} />
    <PeriodDetail period={carePlan.period} />
    <StringDetail term="Intent" description={carePlan.intent.toString()} />
    <StringDetail term="Status" description={carePlan.status.toString()} />
    <NarrativeDetail narrative={carePlan.text} />
    <ResourceReferenceListDetail term="Addresses" resourceReferences={carePlan?.addresses} />
    <ResourceReferenceListDetail term="Performer(s)" resourceReferences={carePlan?.activity?.detail?.performer} />
    <ResourceReferenceListDetail term="Author(s)" resourceReferences={carePlan?.author} />
  </>
)
interface Props {
  carePlan: CarePlan
}

export default CarePlanDetail
