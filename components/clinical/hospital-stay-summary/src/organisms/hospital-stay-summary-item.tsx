/** @jsx jsx */
import React from 'react'
import { css, jsx } from '@emotion/core'

import { Encounter } from '@ltht-react/types'
import { PeriodSummary } from '@ltht-react/summary'

import ServiceProvider from '../atoms/hospital-stay-service-provider'
import Description from '../atoms/hospital-stay-description'
import Redacted from '../molecules/hospital-stay-redacted'

const styles = {
  root: css`
    display: flex;
    justify-content: center;
  `,
  description: css`
    flex: 1;
  `,
  date: css`
    flex: 1;
    text-align: left;
  `,
  service: css`
    flex: 1;
    text-align: right;
  `,
}

const HospitalStaySummaryItem: React.FC<Props> = ({ hospitalStay, clickHandler }) => {
  const handleClick = (e: React.MouseEvent<HTMLDivElement, MouseEvent>): void => {
    e.preventDefault()
    clickHandler && clickHandler(hospitalStay)
  }

  const summaryMarkup = (
    <React.Fragment>
      <div css={styles.date}>
        <PeriodSummary period={hospitalStay.period} />
      </div>
      <div css={styles.description}>
        <Description encounter={hospitalStay} />
      </div>
      <div css={styles.service}>
        <ServiceProvider encounter={hospitalStay} />
      </div>
    </React.Fragment>
  )

  return (
    <div role="link" css={styles.root} onClick={clickHandler && handleClick}>
      {hospitalStay.metadata.isRedacted ? <Redacted hospitalStay={hospitalStay} /> : summaryMarkup}
    </div>
  )
}

interface Props {
  hospitalStay: Encounter
  clickHandler?(hospitalStay: Encounter): void
}

export default HospitalStaySummaryItem
