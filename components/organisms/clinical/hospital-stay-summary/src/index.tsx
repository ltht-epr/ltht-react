import React from 'react'

import { Encounter } from '@ltht-react/types'
import { Widget, WidgetHeader, WidgetList, WidgetListItem } from '@ltht-react/widget'
import HospitalStaySummaryItem from './molecules/hospital-stay-summary-item'

const HospitalStaySummary: React.FC<Props> = ({ title = 'Hospital Stays', hospitalStays = [], clickHandler }) => {
  return (
    <Widget noData={hospitalStays.length === 0}>
      <WidgetHeader>
        <h3>{title}</h3>
      </WidgetHeader>
      <WidgetList clickable={!!clickHandler}>
        {hospitalStays.map(encounter => (
          <WidgetListItem key={encounter.id}>
            <HospitalStaySummaryItem hospitalStay={encounter} clickHandler={clickHandler} />
          </WidgetListItem>
        ))}
      </WidgetList>
    </Widget>
  )
}

interface Props {
  title?: string
  hospitalStays: Encounter[] | undefined
  clickHandler?(allergy: Encounter): void
}

export default HospitalStaySummary
