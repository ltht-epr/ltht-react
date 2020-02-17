import React from 'react'

import { Encounter } from '@ltht-react/types'
import { Widget, WidgetHeader, WidgetList, WidgetListItem } from '@ltht-react/widget'
import AppointmentSummaryItem from './molecules/appointment-summary-item'

const AppointmentSummary: React.FC<Props> = ({ title = 'Appointments', encounters = [], clickHandler }) => {
  return (
    <Widget noData={encounters.length === 0}>
      <WidgetHeader>
        <h3>{title}</h3>
      </WidgetHeader>
      <WidgetList clickable={!!clickHandler}>
        {encounters.map(encounter => (
          <WidgetListItem key={encounter.id}>
            <AppointmentSummaryItem encounter={encounter} clickHandler={clickHandler} />
          </WidgetListItem>
        ))}
      </WidgetList>
    </Widget>
  )
}

interface Props {
  title?: string
  encounters: Encounter[] | undefined
  clickHandler?(appointment: Encounter): void
}

export default AppointmentSummary
