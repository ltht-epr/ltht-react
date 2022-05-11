import { FC } from 'react'
import { EncounterHospitalisation, CodeableConcept, Maybe, Scalars } from '@ltht-react/types'

import {
  CodeableConceptListDetail,
  ResourceReferenceDetail,
  CodeableConceptDetail,
  NestedListDetail,
  IdentifierDetail,
} from '@ltht-react/type-detail'

const EncounterHospitalisationDetail: FC<Props> = ({ hospitalisation, showIfEmpty = true }) => {
  const extensions: CodeableConcept[] = []
  hospitalisation?.extension?.forEach((item) => {
    if (item?.valueCodeableConcept) {
      extensions.push(item?.valueCodeableConcept)
    }
  })

  if (hospitalisation) {
    return (
      <NestedListDetail term="Hospitalisation">
        <CodeableConceptDetail term="Admit Source" concept={hospitalisation?.admitSource} showIfEmpty={showIfEmpty} />
        <ResourceReferenceDetail
          term="Destination"
          resourceReference={hospitalisation?.destination}
          showIfEmpty={showIfEmpty}
        />
        <CodeableConceptListDetail
          term="Diet Preference(s)"
          concepts={hospitalisation?.dietPreference}
          showIfEmpty={showIfEmpty}
        />
        <CodeableConceptDetail
          term="Discharge Disposition"
          concept={hospitalisation?.dischargeDisposition}
          showIfEmpty={showIfEmpty}
        />
        <CodeableConceptListDetail term="Additional Info" concepts={extensions} showIfEmpty={showIfEmpty} />
        <ResourceReferenceDetail term="Origin" resourceReference={hospitalisation?.origin} showIfEmpty={showIfEmpty} />
        <IdentifierDetail
          term="Pre Admission Identifier"
          identifier={hospitalisation?.preAdmissionIdentifier}
          showIfEmpty={showIfEmpty}
        />
        <CodeableConceptDetail term="Re Admission" concept={hospitalisation?.reAdmission} showIfEmpty={showIfEmpty} />
        <CodeableConceptListDetail
          term="Special Arrangement(s)"
          concepts={hospitalisation?.specialArrangement}
          showIfEmpty={showIfEmpty}
        />
        <CodeableConceptListDetail
          term="Special Courtesy(s)"
          concepts={hospitalisation?.specialCourtesy}
          showIfEmpty={showIfEmpty}
        />
      </NestedListDetail>
    )
  }
  if (showIfEmpty === true) {
    return <NestedListDetail term="Hospitalisation" />
  }
  return <></>
}

interface Props {
  hospitalisation?: Maybe<EncounterHospitalisation>
  showIfEmpty?: Maybe<Scalars['Boolean']>
}

export default EncounterHospitalisationDetail
