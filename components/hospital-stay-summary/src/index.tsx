import React from 'react'

import { Encounter, Maybe } from '@ltht-react/types'
import HospitalStaySummaryItem from './molecules/hospital-stay-summary-item'
import { Widget, WidgetHeader, WidgetList, WidgetListItem } from '@ltht-react/widget'

const HospitalStaySummary = ({ title = 'Hospital Stays', hospitalStays, clickHandler }: Props) => {
  return (
    <Widget>
      <WidgetHeader>
        <h3>{title}</h3>
      </WidgetHeader>
      <WidgetList clickable={clickHandler ? true : false}>
        {hospitalStays?.map((hospitalStay, index) => (
          <WidgetListItem key={index}>
            <HospitalStaySummaryItem hospitalStay={hospitalStay} clickHandler={clickHandler} />
          </WidgetListItem>
        ))}
      </WidgetList>
    </Widget>
  )
}

interface Props {
  title?: string
  hospitalStays: Maybe<Encounter[]>
  clickHandler?(allergy: Encounter): void
}

export default HospitalStaySummary
