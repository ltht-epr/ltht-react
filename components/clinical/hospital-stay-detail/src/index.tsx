/** @jsx jsx */
import React from 'react'
import { jsx, css } from '@emotion/core'

import { Encounter, CodeableConcept } from '@ltht-react/types'
import { periodSummaryText, titleCase } from '@ltht-react/utils'
import { DescriptionListDescription } from '@ltht-react/description-list'
import {
  CodeableConceptListDetail,
  StringDetail,
  PeriodDetail,
  ResourceReferenceDetail,
  ResourceReferenceListDetail,
  NestedListDetail,
} from '@ltht-react/detail'

const styles = {
  nested: css`
    margin-top: 0.5rem;
    margin-left: 0.5rem;
  `,
  li: css`
    list-style: initial;
  `,
}

const HospitalStayDetail: React.FC<Props> = ({ hospitalStay }) => {
  const hospitalisations: CodeableConcept[] = []

  hospitalStay.hospitalization?.extension?.map(item => {
    if (item?.valueCodeableConcept) {
      hospitalisations.push(item?.valueCodeableConcept)
    }
  })

  return (
    <React.Fragment>
      <CodeableConceptListDetail term="Type" concepts={hospitalStay.type} />
      <ResourceReferenceDetail resourceReference={hospitalStay.serviceProvider} />
      <ResourceReferenceListDetail term="Episode(s) Of Care" resourceReferences={hospitalStay.episodeOfCare} />
      <PeriodDetail period={hospitalStay.period} />
      <StringDetail term="Status" description={hospitalStay.status?.toString()} />
      <NestedListDetail term="Status History">
        {hospitalStay.statusHistory?.map(item => {
          if (item?.status) {
            return (
              <div css={styles.nested}>
                <li css={styles.li}>
                  {titleCase(item?.status)} - {periodSummaryText(item?.period)}
                </li>
              </div>
            )
          }
          return (
            <div css={styles.nested}>
              <DescriptionListDescription>{periodSummaryText(item?.period)}</DescriptionListDescription>
            </div>
          )
        })}
      </NestedListDetail>
      <CodeableConceptListDetail term="Hospitalization(s)" concepts={hospitalisations} />
      <NestedListDetail term="Participant(s)">
        {hospitalStay.participant?.map(item => {
          if (item?.individual?.display && item?.individual?.typeName) {
            return (
              <div css={styles.nested}>
                <li css={styles.li}>
                  {titleCase(item?.individual?.display)} ({titleCase(item?.individual?.typeName)}):{' '}
                  {periodSummaryText(item?.period)}
                </li>
              </div>
            )
          }
          return <React.Fragment></React.Fragment>
        })}
      </NestedListDetail>
    </React.Fragment>
  )
}

interface Props {
  hospitalStay: Encounter
}

export default HospitalStayDetail
