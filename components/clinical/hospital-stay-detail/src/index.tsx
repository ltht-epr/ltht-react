import { FC } from 'react'

import { DetailViewType, Encounter } from '@ltht-react/types'
import {
  CodeableConceptListDetail,
  StringDetail,
  PeriodDetail,
  ResourceReferenceDetail,
  ResourceReferenceListDetail,
  CollapsibleDetailCollection,
  CollapsibleDetailCollectionProps,
} from '@ltht-react/type-detail'
import EncounterStatusHistoryDetail from './molecules/encounter-status-history-detail'
import EncounterHospitalisationDetail from './molecules/encounter-hospitalisation-detail'
import EncounterParticipantDetail from './molecules/encounter-participant-detail'

const HospitalStayDetail: FC<Props> = ({ hospitalStay, viewType = DetailViewType.Compact }) => (
  <CollapsibleDetailCollection viewType={viewType}>
    <CodeableConceptListDetail term="Type" concepts={hospitalStay.type} />
    <ResourceReferenceDetail resourceReference={hospitalStay.serviceProvider} />
    <ResourceReferenceListDetail term="Episode(s) Of Care" resourceReferences={hospitalStay.episodeOfCare} />
    <PeriodDetail period={hospitalStay.period} />
    <StringDetail term="Status" description={hospitalStay.status?.toString()} />
    <EncounterStatusHistoryDetail hospitalStatusHistories={hospitalStay.statusHistory} />
    <EncounterHospitalisationDetail hospitalisation={hospitalStay?.hospitalization} />
    <EncounterParticipantDetail participants={hospitalStay?.participant} />
  </CollapsibleDetailCollection>
)

interface Props extends CollapsibleDetailCollectionProps {
  hospitalStay: Encounter
}

export default HospitalStayDetail
