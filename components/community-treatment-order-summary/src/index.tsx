import React from 'react'
import { LypftCommunityTreatmentOrder } from '@ltht-react/types'
import { Widget, WidgetHeader, WidgetList, WidgetListItem } from '@ltht-react/widget'
import CommunityTreatmentOrderSummaryItem from './molecules/community-treatment-order-summary-item'

const CommunityTreatmentOrderSummary: React.FC<Props> = ({
  title = 'Community Treatment Orders',
  communityTreatmentOrders = [],
  clickHandler,
}) => {
  return (
    <Widget>
      <WidgetHeader>
        <h3>{title}</h3>
      </WidgetHeader>
      <WidgetList clickable={clickHandler !== undefined}>
        {communityTreatmentOrders.map(order => (
          <WidgetListItem key={order.id}>
            <CommunityTreatmentOrderSummaryItem communityTreatmentOrder={order} clickHandler={clickHandler} />
          </WidgetListItem>
        ))}
      </WidgetList>
    </Widget>
  )
}

interface Props {
  title?: string
  communityTreatmentOrders: LypftCommunityTreatmentOrder[] | undefined
  clickHandler?(communityTreatmentOrder: LypftCommunityTreatmentOrder): void
}

export default CommunityTreatmentOrderSummary
