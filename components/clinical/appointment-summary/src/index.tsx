import React from 'react'

import { Encounter } from '@ltht-react/types'
import { ListItem } from '@ltht-react/list'
import AppointmentSummaryItem from './organisms/appointment-summary-item'

const AppointmentSummary: React.FC<Props> = ({ encounters = [], clickHandler }) => {
  return (
    <>
      {encounters.map(encounter => (
        <ListItem key={encounter.id}>
          <AppointmentSummaryItem encounter={encounter} clickHandler={clickHandler} />
        </ListItem>
      ))}
    </>
  )
}

interface Props {
  encounters: Encounter[] | undefined
  clickHandler?(appointment: Encounter): void
}

export default AppointmentSummary
