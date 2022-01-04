import { FC } from 'react'
import styled from '@emotion/styled'
import { AllergyIntolerance } from '@ltht-react/types'
import {
  AnnotationListDetail,
  CodeableConceptDetail,
  CodingListDetail,
  DatetimeDetail,
  ResourceReferenceDetail,
  StringDetail,
} from '@ltht-react/type-detail'
import AllergyOnset from './atoms/allergy-onset-detail'

const TopSection = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: flex-start;
  margin-bottom: 1rem;

  & dl:last-of-type {
    margin-top: 0;
    text-align: right;
  }
`

const AllergyDetail: FC<Props> = ({ allergy }) => (
  <>
    <TopSection>
      <CodeableConceptDetail term="Allergy" concept={allergy.code} />
      <CodingListDetail term="Data Source(s)" codings={allergy.metadata.dataSources} />
    </TopSection>

    <StringDetail term="Type" description={allergy.type?.toString()} />
    <StringDetail term="Clinical Status" description={allergy.clinicalStatus?.toString()} />
    <StringDetail term="Verification Status" description={allergy.verificationStatus?.toString()} />
    <StringDetail term="Category" description={allergy?.category?.toString()} />
    <StringDetail term="Criticality" description={allergy.criticality?.toString()} />
    <ResourceReferenceDetail term="Asserter" resourceReference={allergy?.asserter} />
    <DatetimeDetail term="Asserted Date" datetime={allergy?.assertedDate} />
    <AllergyOnset term="Onset" onset={allergy.onSet} />
    <DatetimeDetail term="Last Occurance" datetime={allergy?.lastOccurrence} />
    <ResourceReferenceDetail term="Recorder" resourceReference={allergy?.recorder} />
    <AnnotationListDetail term="Note(s)" notes={allergy.note} />
  </>
)

interface Props {
  allergy: AllergyIntolerance
}

export default AllergyDetail
