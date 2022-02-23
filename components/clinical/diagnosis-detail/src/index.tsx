import { FC } from 'react'
import styled from '@emotion/styled'
import { isMobileView } from '@ltht-react/utils'
import { useWindowSize } from '@ltht-react/hooks'
import { CodeableConcept, Condition, Maybe } from '@ltht-react/types'
import {
  StringDetail,
  CodeableConceptDetail,
  CodeableConceptListDetail,
  DatetimeDetail,
  ResourceReferenceDetail,
  CodingListDetail,
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

const StyledDetail = styled.div`
  display: flex;
  flex: 1;
  justify-content: space-between;
  padding-bottom: 1rem;
`

const StyledColumn = styled.div`
  display: flex;
  flex: 1;
  flex-direction: column;
  padding-right: 0.5rem;
`

const DiagnosisDetail: FC<Props> = ({ condition, links }) => {
  const { width } = useWindowSize()
  const isMobile = isMobileView(width)

  const evidence = condition.evidence?.reduce((evidenceConcepts: Maybe<CodeableConcept>[], item) => {
    item?.code?.forEach((code) => evidenceConcepts.push(code))
    return evidenceConcepts
  }, [])

  const detailItems = [
    {
      element: <DatetimeDetail term="Onset Date" datetime={condition.onset?.dateTime} />,
      renderCondition: condition.onset?.dateTime !== undefined,
    },
    {
      element: <StringDetail term="Clinical Status" description={condition.clinicalStatus?.toString()} />,
      renderCondition: condition.clinicalStatus !== undefined,
    },
    {
      element: <StringDetail term="Verification Status" description={condition.verificationStatus?.toString()} />,
      renderCondition: condition.verificationStatus !== undefined,
    },
    {
      element: <CodeableConceptListDetail term="Category" concepts={condition.category} />,
      renderCondition: condition.category !== undefined,
    },
    {
      element: <CodeableConceptDetail term="Severity" concept={condition.severity} />,
      renderCondition: condition.severity !== undefined,
    },
    {
      element: <CodeableConceptListDetail term="Location" concepts={condition.bodySite} links={links} />,
      renderCondition: condition.bodySite !== undefined,
    },
    {
      element: <CodeableConceptListDetail term="Evidence" concepts={evidence} links={links} />,
      renderCondition: evidence !== undefined,
    },
    {
      element: <CodeableConceptDetail term="Stage" concept={condition.stage?.summary} links={links} />,
      renderCondition: condition.stage?.summary !== undefined,
    },
    {
      element: <ResourceReferenceDetail term="Asserted By" resourceReference={condition.asserter} />,
      renderCondition: condition.asserter !== undefined,
    },
    {
      element: <DatetimeDetail term="Asserted Date" datetime={condition.assertedDate} />,
      renderCondition: condition.assertedDate !== undefined,
    },
    {
      element: <DatetimeDetail term="Abatement Date" datetime={condition.abatement?.dateTime} />,
      renderCondition: condition.abatement?.dateTime !== undefined,
    },
  ]

  const leftItems: JSX.Element[] = []
  const centerItems: JSX.Element[] = []
  const rightItems: JSX.Element[] = []

  if (!isMobile) {
    detailItems
      .filter((y) => y.renderCondition)
      .map((x, idx) => {
        if (idx % 3 === 0) {
          return leftItems.push(x.element)
        }

        if (idx % 3 === 1) {
          return centerItems.push(x.element)
        }

        return rightItems.push(x.element)
      })
  }

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
            <Questionnaire questionnaire={item} showTitle />
            <Seperator />
          </>
        ))}

      {isMobile
        ? detailItems.map((x) => x.element)
        : leftItems.map((x, idx) => (
            <StyledDetail>
              <StyledColumn>{x}</StyledColumn>
              <StyledColumn>{idx <= centerItems.length - 1 ? centerItems[idx] : <></>}</StyledColumn>
              <StyledColumn>{idx <= rightItems.length - 1 ? rightItems[idx] : <></>}</StyledColumn>
            </StyledDetail>
          ))}
    </>
  )
}

interface Props {
  condition: Condition
  // TODO: Define 'links?' type once code link config implementation has been done
  links?: any // eslint-disable-line
}

// interface DetailList {
//   element: JSX.Element
//   renderCondition: boolean
// }

export default DiagnosisDetail
