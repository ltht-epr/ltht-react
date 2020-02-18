import React from 'react'

import { CarePlan } from '@ltht-react/types'
import { ListItem } from '@ltht-react/list'
import { Card, CardHeader, CardList } from '@ltht-react/card'
import CarePlanSummaryItem from './molecules/care-plan-summary-item'

const CarePlanSummary: React.FC<Props> = ({ title = 'Care Plans', carePlans = [], clickHandler }) => {
  return (
    <Card noData={carePlans.length === 0}>
      <CardHeader>
        <h3>{title}</h3>
      </CardHeader>
      <CardList clickable={!!clickHandler}>
        {carePlans.map(carePlan => (
          <ListItem key={carePlan.id}>
            <CarePlanSummaryItem carePlan={carePlan} clickHandler={clickHandler} />
          </ListItem>
        ))}
      </CardList>
    </Card>
  )
}

interface Props {
  title?: string
  carePlans: CarePlan[] | undefined
  clickHandler?(carePlan: CarePlan): void
}

export default CarePlanSummary
