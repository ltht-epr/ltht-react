import { FC } from 'react'
import { EncounterHospitalisation, CodeableConcept, Maybe } from '@ltht-react/types'

import {
  CodeableConceptListDetail,
  ResourceReferenceDetail,
  CodeableConceptDetail,
  NestedListDetail,
  IdentifierDetail,
} from '@ltht-react/detail'

const EncounterHospitalisationDetail: FC<Props> = ({ hospitalisation }) => {
  const extensions: CodeableConcept[] = []
  hospitalisation?.extension?.forEach(item => {
    if (item?.valueCodeableConcept) {
      extensions.push(item?.valueCodeableConcept)
    }
  })

  return (
    <NestedListDetail term="Hospitalisation">
      <CodeableConceptDetail term="Admit Source" concept={hospitalisation?.admitSource} />
      <ResourceReferenceDetail term="Destination" resourceReference={hospitalisation?.destination} />
      <CodeableConceptListDetail term="Diet Preference(s)" concepts={hospitalisation?.dietPreference} />
      <CodeableConceptDetail term="Discharge Disposition" concept={hospitalisation?.dischargeDisposition} />
      <CodeableConceptListDetail term="Additional Info" concepts={extensions} />
      <ResourceReferenceDetail term="Origin" resourceReference={hospitalisation?.origin} />
      <IdentifierDetail term="Pre Admission Identifier" identifier={hospitalisation?.preAdmissionIdentifier} />
      <CodeableConceptDetail term="Re Admission" concept={hospitalisation?.reAdmission} />
      <CodeableConceptListDetail term="Special Arrangement(s)" concepts={hospitalisation?.specialArrangement} />
      <CodeableConceptListDetail term="Special Courtesy(s)" concepts={hospitalisation?.specialCourtesy} />
    </NestedListDetail>
  )
}

interface Props {
  hospitalisation?: Maybe<EncounterHospitalisation>
}

export default EncounterHospitalisationDetail
