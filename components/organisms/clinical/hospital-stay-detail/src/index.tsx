/** @jsx jsx */
import React from 'react'
import { jsx, css } from '@emotion/core'

import { Encounter } from '@ltht-react/types'
import { periodSummaryText, titleCase } from '@ltht-react/utils'
import { Card, CardHeader, CardBody } from '@ltht-react/card'
import { DescriptionListDescription } from '@ltht-react/description-list'
import { SubHeader } from '@ltht-react/header'
import {
  CodeableConceptListDetail,
  StringDetail,
  PeriodDetail,
  ResourceReferenceDetail,
  ResourceReferenceListDetail,
  NestedListDetail,
} from '@ltht-react/detail'

const styles = {
  children: css`
    margin-top: 0.5rem;
    margin-left: 0.5rem;
  `,
}

const HospitalStayDetail: React.FC<Props> = ({ title, hospitalStay }) => {
  return (
    <Card>
      <CardHeader>
        <SubHeader>{title}</SubHeader>
      </CardHeader>
      <CardBody>
        <CodeableConceptListDetail term="Type" concepts={hospitalStay.type} />
        <ResourceReferenceDetail resourceReference={hospitalStay.serviceProvider} />
        <ResourceReferenceListDetail term="Episode(s) Of Care" resourceReferences={hospitalStay.episodeOfCare} />
        <PeriodDetail period={hospitalStay.period} />
        <StringDetail term="Status" description={hospitalStay.status?.toString()} />
        <NestedListDetail term="Status History">
          {hospitalStay.statusHistory?.map(item => {
            if (item?.status) {
              return (
                <div css={styles.children}>
                  <DescriptionListDescription>
                    {titleCase(item?.status)} - {periodSummaryText(item?.period)}
                  </DescriptionListDescription>
                </div>
              )
            }
            return (
              <div css={styles.children}>
                <DescriptionListDescription>{periodSummaryText(item?.period)}</DescriptionListDescription>
              </div>
            )
          })}
        </NestedListDetail>
      </CardBody>
    </Card>
  )
}

// hospitalization
// participant

interface Props {
  title?: string
  hospitalStay: Encounter
}

export default HospitalStayDetail
