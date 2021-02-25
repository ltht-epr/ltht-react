import { FC } from 'react'
import { CodeableConcept, Condition, Maybe } from '@ltht-react/types'
import {
  StringDetail,
  CodeableConceptDetail,
  CodeableConceptListDetail,
  DatetimeDetail,
  ResourceReferenceDetail,
} from '@ltht-react/detail'

const DiagnosisDetail: FC<Props> = ({ condition, links }) => {
  const evidence = condition.evidence?.reduce((evidenceConcepts: Maybe<CodeableConcept>[], item) => {
    item?.code?.forEach((code) => evidenceConcepts.push(code))
    return evidenceConcepts
  }, [])

  return (
    <>
      <StringDetail term="Status" description={condition.clinicalStatus?.toString()} />
      <CodeableConceptListDetail term="Category" concepts={condition.category} />
      <CodeableConceptDetail term="Severity" concept={condition.severity} />
      <CodeableConceptDetail term="Diagnosis" concept={condition.code} links={links} />
      <CodeableConceptListDetail term="Location" concepts={condition.bodySite} links={links} />
      <DatetimeDetail term="Asserted Date" datetime={condition.assertedDate} />
      <DatetimeDetail term="Onset Date" datetime={condition.onset?.dateTime} />
      <ResourceReferenceDetail term="Asserted By" resourceReference={condition.asserter} />
      <CodeableConceptDetail term="Stage" concept={condition.stage?.summary} links={links} />
      <CodeableConceptListDetail term="Evidence" concepts={evidence} links={links} />
    </>
  )
}

interface Props {
  condition: Condition
  links?: any // TODO: Define type once code link config implementation has been done
}

export default DiagnosisDetail
