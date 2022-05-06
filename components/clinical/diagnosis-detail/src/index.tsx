import { FC } from 'react'
import styled from '@emotion/styled'
import { Condition, Maybe, DetailViewType } from '@ltht-react/types'
import {
  StringDetail,
  AnnotationListDetail,
  CodeableConceptDetail,
  CodeableConceptListDetail,
  DatetimeDetail,
  ResourceReferenceDetail,
  CodingListDetail,
} from '@ltht-react/type-detail'

import Questionnaire from '@ltht-react/questionnaire'
import { DESKTOP_MINIMUM_MEDIA_QUERY, MOBILE_MAXIMUM_MEDIA_QUERY, TABLET_ONLY_MEDIA_QUERY } from '@ltht-react/styles'

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

const StyledDetail = styled.div`
  display: flex;
  flex-wrap: wrap;
  justify-content: flex-start;
  margin-top: '1rem';

  & dl {
    margin-top: 0;
    margin-bottom: 1rem;

    ${DESKTOP_MINIMUM_MEDIA_QUERY} {
      width: 25%;

      &:nth-last-child(1),
      :nth-last-child(2),
      :nth-last-child(3),
      :nth-last-child(4) {
        margin-bottom: 0px !important;
      }

      &:nth-child(4n + 1) {
        text-align: left;
      }

      &:nth-child(4n + 2) {
        text-align: center;
      }

      &:nth-child(4n + 3) {
        text-align: center;
      }

      &:nth-child(4n) {
        text-align: right;
      }
    }

    ${TABLET_ONLY_MEDIA_QUERY} {
      width: 33.3%;

      &:nth-last-child(1),
      :nth-last-child(2),
      :nth-last-child(3) {
        margin-bottom: 0px !important;
      }

      &:nth-child(3n + 1) {
        text-align: left;
      }

      &:nth-child(3n + 2) {
        text-align: center;
      }

      &:nth-child(3n) {
        text-align: right;
      }
    }

    ${MOBILE_MAXIMUM_MEDIA_QUERY} {
      width: 100%;

      &:nth-last-child(1) {
        margin-bottom: 0px !important;
      }
    }
  }
`

const DiagnosisDetail: FC<Props> = ({ condition, links, viewType }) => {
  // Default to compact view
  const showIfEmpty = viewType === DetailViewType.Expanded
  return (
    <>
      <TopSection>
        <CodeableConceptDetail term="Diagnosis" concept={condition.code} links={links} />
        <CodingListDetail term="Data Source(s)" codings={condition.metadata.dataSources} />
      </TopSection>

      {condition.extensionData &&
        condition?.extensionData.map((item, index) => (
          <>
            {index === 0 && <Seperator />}
            <Questionnaire questionnaire={item} showTitle displayDynamic />
            <Seperator />
          </>
        ))}

      <StyledDetail>
        <DatetimeDetail term="Onset Date" datetime={condition.onset?.dateTime} showIfEmpty={showIfEmpty} />
        <StringDetail
          term="Clinical Status"
          description={condition.clinicalStatus?.toString()}
          showIfEmpty={showIfEmpty}
        />
        <StringDetail
          term="Verification Status"
          description={condition.verificationStatus?.toString()}
          showIfEmpty={showIfEmpty}
        />
        <CodeableConceptListDetail term="Category" concepts={condition.category} showIfEmpty={showIfEmpty} />
        <CodeableConceptDetail term="Severity" concept={condition.severity} showIfEmpty={showIfEmpty} />
        <CodeableConceptListDetail
          term="Location"
          concepts={condition.bodySite}
          links={links}
          showIfEmpty={showIfEmpty}
        />
        <AnnotationListDetail term="Note(s)" notes={condition.note} showIfEmpty={showIfEmpty} />
        <CodeableConceptDetail
          term="Stage"
          concept={condition.stage?.summary}
          links={links}
          showIfEmpty={showIfEmpty}
        />
        <ResourceReferenceDetail term="Asserted By" resourceReference={condition.asserter} showIfEmpty={showIfEmpty} />
        <DatetimeDetail term="Asserted Date" datetime={condition.assertedDate} showIfEmpty={showIfEmpty} />
        <DatetimeDetail term="Abatement Date" datetime={condition.abatement?.dateTime} showIfEmpty={showIfEmpty} />
      </StyledDetail>
    </>
  )
}
interface Props {
  condition: Condition
  // TODO: Define 'links?' type once code link config implementation has been done
  links?: any // eslint-disable-line,
  viewType?: Maybe<DetailViewType>
}

export default DiagnosisDetail
