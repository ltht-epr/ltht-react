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

const AppointmentSummaryItem = ({ appointment, clickHandler }: Props) => {
  const handleClick = (e: React.MouseEvent<HTMLDivElement, MouseEvent>) => {
    e.preventDefault()
    clickHandler && clickHandler(appointment)
  }
  return (
    <div css={styles} onClick={clickHandler && handleClick}>
      <div css={descriptionStyles}>
        <AppointmentDate appointment={appointment} />
      </div>
      <div css={descriptionStyles}>
        <AppointmentDescription appointment={appointment} />
      </div>
      <div css={descriptionStyles}>
        <AppointmentServiceProvider appointment={appointment} />
        <AppointmentStatus appointment={appointment} />
      </div>
    </div>
  )
}

interface Props {
  appointment: Encounter
  clickHandler?(appointment: Encounter): void
}

export default AppointmentSummaryItem
