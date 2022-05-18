import { FC } from 'react'
import styled from '@emotion/styled'
import { Condition, DetailViewType } from '@ltht-react/types'
import {
  StringDetail,
  AnnotationListDetail,
  CodeableConceptDetail,
  CodeableConceptListDetail,
  DatetimeDetail,
  ResourceReferenceDetail,
  CodingListDetail,
  CollapsibleDetailCollection,
  CollapsibleDetailCollectionProps,
} from '@ltht-react/type-detail'

import Questionnaire from '@ltht-react/questionnaire'

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

const DiagnosisDetail: FC<Props> = ({ condition, links, viewType = DetailViewType.Compact }) => (
  <>
    <TopSection>
      <CodeableConceptDetail term="Diagnosis" concept={condition.code} links={links} />
      <CodingListDetail term="Data Source(s)" codings={condition.metadata.dataSources} />
    </TopSection>

    {condition.extensionData &&
      condition?.extensionData.map((item, index) => (
        <>
          {index === 0 && <Seperator />}
          <Questionnaire questionnaire={item} showTitle viewType={viewType} />
          <Seperator />
        </>
      ))}
    <CollapsibleDetailCollection viewType={viewType}>
      <DatetimeDetail term="Onset Date" datetime={condition.onset?.dateTime} />
      <StringDetail term="Clinical Status" description={condition.clinicalStatus?.toString()} />
      <StringDetail term="Verification Status" description={condition.verificationStatus?.toString()} />
      <CodeableConceptListDetail term="Category" concepts={condition.category} />
      <CodeableConceptDetail term="Severity" concept={condition.severity} />
      <CodeableConceptListDetail term="Location" concepts={condition.bodySite} links={links} />
      <AnnotationListDetail term="Note(s)" notes={condition.note} />
      <CodeableConceptDetail term="Stage" concept={condition.stage?.summary} links={links} />
      <ResourceReferenceDetail term="Asserted By" resourceReference={condition.asserter} />
      <DatetimeDetail term="Asserted Date" datetime={condition.assertedDate} />
      <DatetimeDetail term="Abatement Date" datetime={condition.abatement?.dateTime} />
    </CollapsibleDetailCollection>
  </>
)

interface Props extends CollapsibleDetailCollectionProps {
  condition: Condition
  // TODO: Define 'links?' type once code link config implementation has been done
  // eslint-disable-next-line @typescript-eslint/no-explicit-any
  links?: any
}

export default DiagnosisDetail
