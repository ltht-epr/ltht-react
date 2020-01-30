import React from 'react'

import { CarePlan } from '@ltht-react/types'
import { Widget, WidgetHeader, WidgetList, WidgetListItem } from '@ltht-react/widget'
import CarePlanSummaryItem from './molecules/care-plan-summary-item'

const CarePlanSummary: React.FC<Props> = ({ title = 'Care Plans', carePlans = [], clickHandler }) => {
  return (
    <Widget>
      <WidgetHeader>
        <h3>{title}</h3>
      </WidgetHeader>
      <WidgetList clickable={!!clickHandler}>
        {carePlans.map(carePlan => (
          <WidgetListItem key={carePlan.id}>
            <CarePlanSummaryItem carePlan={carePlan} clickHandler={clickHandler} />
          </WidgetListItem>
        ))}
      </WidgetList>
    </Widget>
  )
}

interface Props {
  title?: string
  carePlans: CarePlan[] | undefined
  clickHandler?(carePlan: CarePlan): void
}

export default CarePlanSummary
