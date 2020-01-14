import React from 'react'

import { CarePlan } from '@ltht-react/types'
import CarePlanSummaryItem from './molecules/care-plan-summary-item'
import { Widget, WidgetHeader, WidgetList, WidgetListItem } from '@ltht-react/widget'

const CarePlanSummary = ({ title = 'Care Plans', carePlans, clickHandler }: Props) => {
  return (
    <Widget>
      <WidgetHeader>
        <h3>{title}</h3>
      </WidgetHeader>
      <WidgetList clickable={clickHandler ? true : false}>
        {carePlans.map((carePlan, index) => (
          <WidgetListItem key={index}>
            <CarePlanSummaryItem carePlan={carePlan} clickHandler={clickHandler} />
          </WidgetListItem>
        ))}
      </WidgetList>
    </Widget>
  )
}

interface Props {
  title?: string
  carePlans: CarePlan[]
  clickHandler?(carePlan: CarePlan): void
}

export default CarePlanSummary
