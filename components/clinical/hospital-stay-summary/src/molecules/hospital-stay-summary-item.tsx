/** @jsx jsx */
import React from 'react'
import { css, jsx } from '@emotion/core'

import { Encounter } from '@ltht-react/types'
import { PeriodSummary } from '@ltht-react/summary'

import ServiceProvider from '../atoms/hospital-stay-service-provider'

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
  return (
    <div role="link" css={styles.root} onClick={clickHandler && handleClick}>
      <div css={styles.date}>
        <PeriodSummary period={hospitalStay.period} />
      </div>
      <div>
        <ServiceProvider encounter={hospitalStay} />
      </div>
    </div>
  )
}

interface Props {
  hospitalStay: Encounter
  clickHandler?(hospitalStay: Encounter): void
}

export default HospitalStaySummaryItem
