/** @jsx jsx */
import React from 'react'
import { css, jsx } from '@emotion/core'

import { Encounter } from '@ltht-react/types'
import { DateSummary } from '@ltht-react/summary'

import ServiceProvider from '../atoms/appointment-service-provider'
import Description from '../atoms/appointment-description'
import Status from '../atoms/appointment-status'

const styles = {
  root: css`
    display: flex;
    justify-content: center;
  `,
  description: css`
    flex-grow: 1;
  `,
  date: css`
    text-align: left;
  `,
}

const AppointmentSummaryItem: React.FC<Props> = ({ encounter, clickHandler }) => {
  const handleClick = (e: React.MouseEvent<HTMLDivElement, MouseEvent>): void => {
    e.preventDefault()
    clickHandler && clickHandler(encounter)
  }
  return (
    <div role="link" css={styles.root} onClick={clickHandler && handleClick}>
      <div css={styles.date}>
        <DateSummary datetime={encounter?.period?.start} />
      </div>
      <div css={styles.description}>
        <Description encounter={encounter} />
      </div>
      <div>
        <ServiceProvider encounter={encounter} />
        <Status encounter={encounter} />
      </div>
    </div>
  )
}

interface Props {
  encounter: Encounter
  clickHandler?(appointment: Encounter): void
}

export default AppointmentSummaryItem
