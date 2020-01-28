import React from 'react'

import { Encounter } from '@ltht-react/types'
import { Widget, WidgetHeader, WidgetList, WidgetListItem } from '@ltht-react/widget'
import AppointmentSummaryItem from './molecules/appointment-summary-item'

const AppointmentSummary = ({ title = 'Appointments', appointments = [], clickHandler }: Props) => {
  return (
    <Widget>
      <WidgetHeader>
        <h3>{title}</h3>
      </WidgetHeader>
      <WidgetList clickable={!!clickHandler}>
        {appointments.map((appointment, index) => (
          <WidgetListItem key={index}>
            <AppointmentSummaryItem key={index} appointment={appointment} clickHandler={clickHandler} />
          </WidgetListItem>
        ))}
      </WidgetList>
    </Widget>
  )
}

interface Props {
  title?: string
  appointments: Encounter[] | undefined
  clickHandler?(appointment: Encounter): void
}

export default AppointmentSummary
