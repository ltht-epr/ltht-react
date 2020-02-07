import React from 'react'
import { CarePlan } from '@ltht-react/types'
import { Widget, WidgetBody, WidgetHeader } from '@ltht-react/widget'
import { DetailHeader } from '@ltht-react/detail'
import CarePlanDetailItem from './molecules/care-plan-detail-item'

const CarePlanDetail: React.FC<Props> = ({ title, carePlan }) => {
  return (
    <Widget>
      <WidgetHeader>
        <DetailHeader>{title}</DetailHeader>
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
