import { FC } from 'react'
import { CodeableConcept, Condition, Maybe } from '@ltht-react/types'
import {
  StringDetail,
  CodeableConceptDetail,
  CodeableConceptListDetail,
  DatetimeDetail,
  ResourceReferenceDetail,
} from '@ltht-react/detail'

const DiagnosisDetail: FC<Props> = ({ condition }) => {
  const evidence = condition.evidence?.reduce((evidenceConcepts: Maybe<CodeableConcept>[], item) => {
    item?.code?.forEach((code) => evidenceConcepts.push(code))
    return evidenceConcepts
  }, [])

  return (
    <>
      <StringDetail term="Status" description={condition.clinicalStatus?.toString()} />
      <CodeableConceptListDetail term="Category" concepts={condition.category} />
      <CodeableConceptDetail term="Severity" concept={condition.severity} />
      <CodeableConceptDetail term="Diagnosis" concept={condition.code} />
      <CodeableConceptListDetail term="Location" concepts={condition.bodySite} />
      <DatetimeDetail term="Asserted Date" datetime={condition.assertedDate} />
      <DatetimeDetail term="Onset Date" datetime={condition.onset?.dateTime} />
      <ResourceReferenceDetail term="Asserted By" resourceReference={condition.asserter} />
      <CodeableConceptDetail term="Stage" concept={condition.stage?.summary} />
      <CodeableConceptListDetail term="Evidence" concepts={evidence} />
    </>
  )
}

interface Props {
  condition: Condition
}

export default DiagnosisDetail
