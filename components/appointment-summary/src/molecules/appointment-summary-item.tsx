/** @jsx jsx */
import React from 'react'
import { css, jsx } from '@emotion/core'

import { Encounter } from '@ltht-react/types'
import AppointmentServiceProvider from '../atoms/appointment-service-provider'
import AppointmentDate from '../atoms/appointment-date'
import AppointmentDescription from '../atoms/appointment-description'
import AppointmentStatus from '../atoms/appointment-status'

const styles = css`
  display: flex;
  justify-content: center;
`
const descriptionStyles = css`
  flex-grow: 1;
`

const AppointmentSummaryItem: React.FC<Props> = ({ encounter, clickHandler, tabIndex }) => {
  const handleClick = (e: EventTypes): void => {
    e.preventDefault()
    clickHandler && clickHandler(encounter)
  }
  return (
    <div
      role="link"
      tabIndex={tabIndex}
      css={styles}
      onClick={clickHandler && handleClick}
      onKeyDown={clickHandler && handleClick}
    >
      <div>
        <AppointmentDate encounter={encounter} />
      </div>
      <div css={descriptionStyles}>
        <AppointmentDescription encounter={encounter} />
      </div>
      <div>
        <AppointmentServiceProvider encounter={encounter} />
        <AppointmentStatus encounter={encounter} />
      </div>
    </div>
  )
}

type EventTypes = React.MouseEvent<HTMLDivElement, MouseEvent> | React.KeyboardEvent<HTMLDivElement>

interface Props {
  encounter: Encounter
  clickHandler?(appointment: Encounter): void
  tabIndex: number
}

export default AppointmentSummaryItem
