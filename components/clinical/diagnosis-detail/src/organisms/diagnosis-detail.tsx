import { FC } from 'react'
import styled from '@emotion/styled'
import { Condition, DetailViewType } from '@ltht-react/types'
import {
  StringDetail,
  AnnotationListDetail,
  CodeableConceptDetail,
  DatetimeDetail,
  CollapsibleDetailCollection,
  CollapsibleDetailCollectionProps,
  AsserterDetail,
  CodingDetail,
} from '@ltht-react/type-detail'

import { getBooleanExtension } from '@ltht-react/utils'

import Questionnaire from '@ltht-react/questionnaire'
import SNIPPET_HOVER_TEXT from '../constants'

const TopSection = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: flex-start;
  margin-bottom: 1rem;
`

const Separator = styled.div`
  height: 1px;
  background: rgba(0, 0, 0, 0.125);
  margin: 0.75rem -0.75rem 0 -0.75rem;
`

const DiagnosisDetail: FC<Props> = ({
  condition,
  links,
  viewType = DetailViewType.Compact,
  dateOnly = false,
  systemExclusionsFilter = [],
  isRichText = false,
}) => {
  const onsetDateEstimated = getBooleanExtension(
    condition.extension,
    'https://fhir.leedsth.nhs.uk/ValueSet/diagnosis-onset-date-estimated-1'
  )

  const snippetMetadataTag = condition?.metadata.tag?.find(
    (coding) => coding?.system === SNIPPET_HOVER_TEXT && coding?.display
  )

  return (
    <>
      {snippetMetadataTag && (
        <>
          <TopSection>
            <CodingDetail
              term="Diagnosis Summary"
              coding={snippetMetadataTag}
              fallbackMessage="Unable to calculate diagnosis summary"
            />
          </TopSection>
          <Separator />
        </>
      )}
      <CollapsibleDetailCollection viewType={viewType}>
        <CodeableConceptDetail
          term="Diagnosis / Condition"
          concept={condition.code}
          links={links}
          systemExclusionsFilter={systemExclusionsFilter}
          isRichText={isRichText}
        />
        <DatetimeDetail term="Diagnosis Date" datetime={condition.assertedDate} dateOnly={dateOnly} />
        <DatetimeDetail
          term="Onset Date (Symptoms)"
          datetime={condition.onset?.dateTime}
          estimated={onsetDateEstimated}
          dateOnly={dateOnly}
        />
        <StringDetail term="Clinical Status" description={condition.clinicalStatus?.toString()} />
        <StringDetail term="Verification Status" description={condition.verificationStatus?.toString()} />
        <DatetimeDetail term="Remission/Resolution (Abatement)" datetime={condition.abatement?.dateTime} />
        <CodeableConceptDetail term="Severity" concept={condition.severity} />
        <AnnotationListDetail term="Note(s)" notes={condition.note} />
        <AsserterDetail asserter={condition.asserter} />
      </CollapsibleDetailCollection>
      <Separator />

      {condition.extensionData &&
        condition?.extensionData.map((item, index) => (
          <div key={`diagnosis-detail-questionnaire-${index}`}>
            <Questionnaire questionnaire={item} showTitle={false} viewType={viewType} />
            <Separator />
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
  dateOnly?: boolean
  systemExclusionsFilter?: string[]
  isRichText?: boolean
}

export default DiagnosisDetail
