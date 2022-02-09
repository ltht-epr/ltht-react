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

const AllergyDetail: FC<Props> = ({ allergy, showDates = true }) => (
  <>
    <TopSection>
      <StringDetail term="Type" description={allergy.type?.toString()} />
      <CodingListDetail term="Data Source(s)" codings={allergy.metadata.dataSources} />
    </TopSection>

    <StringDetail term="Category" description={allergy?.category?.toString()} />
    <CodeableConceptDetail term="Allergy" concept={allergy.code} />
    <StringDetail term="Verification Status" description={allergy.verificationStatus?.toString()} />
    <StringDetail term="Clinical Status" description={allergy.clinicalStatus?.toString()} />
    {showDates && <AllergyOnset term="Onset" onset={allergy.onSet} />}
    <ResourceReferenceDetail term="Asserter" resourceReference={allergy?.asserter} />
    {showDates && <DatetimeDetail term="Asserted Date" datetime={allergy?.assertedDate} />}
    <AnnotationListDetail term="Note(s)" notes={allergy.note} />
    <DatetimeDetail term="Last Occurence" datetime={allergy?.lastOccurrence} />
    <StringDetail term="Criticality" description={allergy.criticality?.toString()} />
    <ResourceReferenceDetail term="Recorder" resourceReference={allergy?.recorder} />
  </>
)

interface Props {
  allergy: AllergyIntolerance
  showDates?: boolean
}

export default AllergyDetail
