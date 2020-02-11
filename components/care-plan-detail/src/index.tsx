import React from 'react'
import { CarePlan } from '@ltht-react/types'
import { Widget, WidgetBody, WidgetHeader } from '@ltht-react/widget'
import SubHeader from '@ltht-react/sub-header'
import CarePlanDetailItem from './molecules/care-plan-detail-item'

const CarePlanDetail: React.FC<Props> = ({ title, carePlan }) => {
  return (
    <Widget>
      <WidgetHeader>
        <SubHeader>{title}</SubHeader>
      </WidgetHeader>
      <WidgetBody>
        <CarePlanDetailItem carePlan={carePlan} />
      </WidgetBody>
    </Widget>
  )
}

interface Props {
  title: string
  carePlan: CarePlan
}

export default CarePlanDetail
