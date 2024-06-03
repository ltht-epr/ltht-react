import { FC } from 'react'
import styled from '@emotion/styled'
import { Condition, DetailViewType } from '@ltht-react/types'
import {
  StringDetail,
  AnnotationListDetail,
  CodeableConceptDetail,
  DatetimeDetail,
  CodingListDetail,
  CollapsibleDetailCollection,
  CollapsibleDetailCollectionProps,
  AsserterDetail,
} from '@ltht-react/type-detail'

import { getBooleanExtension } from '@ltht-react/utils'

import Questionnaire from '@ltht-react/questionnaire'

const TopSection = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: flex-start;
  margin-bottom: 1rem;
`

const Seperator = styled.div`
  height: 1px;
  background: rgba(0, 0, 0, 0.125);
  width: calc(100% + 12px);
  margin: 1rem 0;
`

const DiagnosisDetail: FC<Props> = ({ condition, links, viewType = DetailViewType.Compact }) => {
  const onsetDateEstimated = getBooleanExtension(
    condition.extension,
    'https://fhir.leedsth.nhs.uk/ValueSet/diagnosis-onset-date-estimated-1'
  )

  return (
    <>
      <TopSection>
        <CodeableConceptDetail term="Diagnosis" concept={condition.code} links={links} />
        <CodingListDetail term="Data Source(s)" codings={condition.metadata.dataSources} />
      </TopSection>
      <Seperator />
      <CollapsibleDetailCollection viewType={viewType}>
        <DatetimeDetail term="Onset Date" datetime={condition.onset?.dateTime} estimated={onsetDateEstimated} />
        <StringDetail term="Clinical Status" description={condition.clinicalStatus?.toString()} />
        <StringDetail term="Verification Status" description={condition.verificationStatus?.toString()} />
        <CodeableConceptDetail term="Severity" concept={condition.severity} />
        <AsserterDetail asserter={condition.asserter} />
        <DatetimeDetail term="Diagnosis Date" datetime={condition.assertedDate} />
        <DatetimeDetail term="Abatement Date" datetime={condition.abatement?.dateTime} />
        <AnnotationListDetail term="Note(s)" notes={condition.note} />
      </CollapsibleDetailCollection>

      {condition.extensionData &&
        condition?.extensionData.map((item, index) => (
          <div key={`diagnosis-detail-questionnaire-${index}`}>
            <Questionnaire questionnaire={item} showTitle={false} viewType={viewType} />
            <Seperator />
          </div>
        ))}
    </>
  )
}

interface Props extends CollapsibleDetailCollectionProps {
  condition: Condition
  // TODO: Define 'links?' type once code link config implementation has been done
  // eslint-disable-next-line @typescript-eslint/no-explicit-any
  links?: any
}

export default DiagnosisDetail
