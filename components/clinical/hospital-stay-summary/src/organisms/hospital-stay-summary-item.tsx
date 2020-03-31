/** @jsx jsx */
import React from 'react'
import { css, jsx } from '@emotion/core'

import { Encounter } from '@ltht-react/types'
import { PeriodSummary } from '@ltht-react/summary'

import ServiceProvider from '../atoms/hospital-stay-service-provider'
import Redacted from '../molecules/hospital-stay-redacted'

const styles = {
  root: css`
    display: flex;
    justify-content: center;

    & > div {
      flex-grow: 1;
    }
  `,
  date: css`
    text-align: left;
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
      <div>
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
