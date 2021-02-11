import { FC } from 'react'

import { Encounter } from '@ltht-react/types'
import {
  CodeableConceptListDetail,
  StringDetail,
  PeriodDetail,
  ResourceReferenceDetail,
  ResourceReferenceListDetail,
} from '@ltht-react/detail'
import EncounterStatusHistoryDetail from './molecules/encounter-status-history-detail'
import EncounterHospitalisationDetail from './molecules/encounter-hospitalisation-detail'
import EncounterParticipantDetail from './molecules/encounter-participant-detail'

const HospitalStayDetail: FC<Props> = ({ hospitalStay }) => {
  return (
    <>
      <CodeableConceptListDetail term="Type" concepts={hospitalStay.type} />
      <ResourceReferenceDetail resourceReference={hospitalStay.serviceProvider} />
      <ResourceReferenceListDetail term="Episode(s) Of Care" resourceReferences={hospitalStay.episodeOfCare} />
      <PeriodDetail period={hospitalStay.period} />
      <StringDetail term="Status" description={hospitalStay.status?.toString()} />
      <EncounterStatusHistoryDetail hospitalStatusHistories={hospitalStay.statusHistory} />
      <EncounterHospitalisationDetail hospitalisation={hospitalStay?.hospitalization} />
      <EncounterParticipantDetail participants={hospitalStay?.participant} />
    </>
  )
}

interface Props {
  hospitalStay: Encounter
}

export default HospitalStayDetail
