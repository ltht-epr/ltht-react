import React from 'react'

import { CarePlan } from '@ltht-react/types'
import { ListItem } from '@ltht-react/list'
import CarePlanSummaryItem from './molecules/care-plan-summary-item'

const CarePlanSummary: React.FC<Props> = ({ carePlans = [], clickHandler }) => {
  return (
    <>
      {carePlans.map(carePlan => (
        <ListItem key={carePlan.id}>
          <CarePlanSummaryItem carePlan={carePlan} clickHandler={clickHandler} />
        </ListItem>
      ))}
    </>
  )
}

interface Props {
  carePlans: CarePlan[] | undefined
  clickHandler?(carePlan: CarePlan): void
}

export default CarePlanSummary
