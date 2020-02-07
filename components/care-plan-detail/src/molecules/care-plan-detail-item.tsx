import React from 'react'

import { CarePlan } from '@ltht-react/types'
import {
  DetailList,
  DetailListItemPeriod,
  DetailListItemString,
  DetailListItemTag,
  DetailListItemDescription,
} from '@ltht-react/detail'

const CarePlanDetailItem: React.FC<Props> = ({ carePlan }) => {
  return (
    <DetailList>
      <DetailListItemString tag="Plan" string={carePlan.title} />
      <DetailListItemString tag="Description" string={carePlan.description} />
      <DetailListItemPeriod period={carePlan.period} />
      <DetailListItemString tag="Inent" string={carePlan.intent.toString()} />
      <DetailListItemString tag="Status" string={carePlan.status.toString()} />
      <DetailListItemString tag="Narrative" string={carePlan.text?.text} />
      {carePlan?.author && <DetailListItemTag>Author(s)</DetailListItemTag>}
      {carePlan?.author?.map(item => {
        return <DetailListItemDescription>{item?.display}</DetailListItemDescription>
      })}
    </DetailList>
  )
}

interface Props {
  carePlan: CarePlan
  clickHandler?(carePlan: CarePlan): void
}

export default CarePlanDetailItem
