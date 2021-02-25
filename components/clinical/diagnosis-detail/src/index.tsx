import { FC } from 'react'
import styled from '@emotion/styled'
import { CodeableConcept, Condition, Maybe } from '@ltht-react/types'
import {
  StringDetail,
  CodeableConceptDetail,
  CodeableConceptListDetail,
  DatetimeDetail,
  ResourceReferenceDetail,
  CodingListDetail,
} from '@ltht-react/detail'

const TopSection = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: flex-start;

  & dl:last-of-type {
    margin-top: 0;
  }
`

const DiagnosisDetail: FC<Props> = ({ condition, links }) => {
  const evidence = condition.evidence?.reduce((evidenceConcepts: Maybe<CodeableConcept>[], item) => {
    item?.code?.forEach((code) => evidenceConcepts.push(code))
    return evidenceConcepts
  }, [])

  return (
    <>
      <TopSection>
        <StringDetail term="Status" description={condition.clinicalStatus?.toString()} />
        <CodingListDetail term="Data Source(s)" codings={condition.metadata.dataSources} />
      </TopSection>
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
