import { FC, Fragment } from 'react'
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
    text-align: right;
  }
`

const Seperator = styled.div`
  height: 1px;
  background: rgba(0, 0, 0, 0.125);
  width: calc(100% + 12px);
  margin: 1rem 0;
`

const DiagnosisDetail: FC<Props> = ({ condition, links }) => {
  const evidence = condition.evidence?.reduce((evidenceConcepts: Maybe<CodeableConcept>[], item) => {
    item?.code?.forEach((code) => evidenceConcepts.push(code))
    return evidenceConcepts
  }, [])

  return (
    <>
      <TopSection>
        <CodeableConceptDetail term="Diagnosis" concept={condition.code} links={links} />
        <CodingListDetail term="Data Source(s)" codings={condition.metadata.dataSources} />
      </TopSection>

      {condition.extension?.map((extension, index) => {
        if (index + 1 === condition.extension?.length) {
          return (
            <Fragment key={`level-2-detail-${extension?.url}`}>
              <CodeableConceptDetail term={extension?.url || ''} concept={extension?.valueCodeableConcept} />
              <Seperator />
            </Fragment>
          )
        }

        return (
          <CodeableConceptDetail
            key={`level-2-detail-${extension?.url}`}
            term={extension?.url || ''}
            concept={extension?.valueCodeableConcept}
          />
        )
      })}

      <DatetimeDetail term="Onset Date" datetime={condition.onset?.dateTime} />
      <StringDetail term="Clinical Status" description={condition.clinicalStatus?.toString()} />
      <StringDetail term="Verification Status" description={condition.verificationStatus?.toString()} />
      <CodeableConceptListDetail term="Category" concepts={condition.category} />
      <CodeableConceptDetail term="Severity" concept={condition.severity} />
      <CodeableConceptListDetail term="Location" concepts={condition.bodySite} links={links} />
      <CodeableConceptListDetail term="Evidence" concepts={evidence} links={links} />
      <CodeableConceptDetail term="Stage" concept={condition.stage?.summary} links={links} />
      <ResourceReferenceDetail term="Asserted By" resourceReference={condition.asserter} />
      <DatetimeDetail term="Asserted Date" datetime={condition.assertedDate} />
    </>
  )
}

interface Props {
  condition: Condition
  // TODO: Define 'links?' type once code link config implementation has been done
  links?: any // eslint-disable-line
}

export default DiagnosisDetail
