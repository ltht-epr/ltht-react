import { FC } from 'react'
import styled from '@emotion/styled'
import { AllergyIntolerance, DetailViewType } from '@ltht-react/types'
import {
  AnnotationListDetail,
  CodeableConceptDetail,
  CodingListDetail,
  CollapsibleDetailCollection,
  CollapsibleDetailCollectionProps,
  DatetimeDetail,
  ResourceReferenceDetail,
  StringDetail,
} from '@ltht-react/type-detail'
import { TEXT_COLOURS } from '@ltht-react/styles'
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

const Seperator = styled.div`
  height: 1px;
  background: rgba(0, 0, 0, 0.125);
  width: calc(100% + 12px);
  margin: 1rem 0;
`
const Title = styled.h4`
  margin: 1rem 0 1rem;
  color: ${TEXT_COLOURS.SECONDARY.VALUE};
`

const AllergyDetail: FC<Props> = ({ allergy, showDates = true, viewType = DetailViewType.Compact }) => (
  <>
    <TopSection>
      <StringDetail term="Type" description={allergy.type?.toString()} />
      <CodingListDetail term="Data Source(s)" codings={allergy.metadata.dataSources} />
    </TopSection>
    <Seperator />
    <Title>Details</Title>
    <CollapsibleDetailCollection viewType={viewType}>
      <StringDetail term="Category" description={allergy?.category?.toString()} />
      <CodeableConceptDetail term="Allergy" concept={allergy.code} />
      <StringDetail term="Verification Status" description={allergy.verificationStatus?.toString()} />
      <StringDetail term="Clinical Status" description={allergy.clinicalStatus?.toString()} />
      {showDates ? <AllergyOnset term="Onset" onset={allergy.onSet} /> : <></>}
      <ResourceReferenceDetail term="Asserter" resourceReference={allergy?.asserter} />
      {showDates ? <DatetimeDetail term="Asserted Date" datetime={allergy?.assertedDate} /> : <></>}
      <AnnotationListDetail term="Note(s)" notes={allergy.note} />
      <DatetimeDetail term="Last Occurence" datetime={allergy?.lastOccurrence} />
      <StringDetail term="Criticality" description={allergy.criticality?.toString()} />
      <ResourceReferenceDetail term="Recorder" resourceReference={allergy?.recorder} />
    </CollapsibleDetailCollection>
  </>
)

interface Props extends CollapsibleDetailCollectionProps {
  allergy: AllergyIntolerance
  showDates?: boolean
}

export default AllergyDetail
