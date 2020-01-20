import React from 'react'

import { LypftCommunityTreatmentOrder, Maybe } from '@ltht-react/types'
import CommunityTreatmentOrderSummaryItem from './molecules/community-treatment-order-summary-item'
import { Widget, WidgetHeader, WidgetList, WidgetListItem } from '@ltht-react/widget'

const CommunityTreatmentOrderSummary = ({
  title = 'Community Treatment Orders',
  communityTreatmentOrders = [],
  clickHandler,
}: Props) => {
  return (
    <Widget>
      <WidgetHeader>
        <h3>{title}</h3>
      </WidgetHeader>
      <WidgetList clickable={clickHandler ? true : false}>
        {communityTreatmentOrders.map((communityTreatmentOrder, index) => (
          <WidgetListItem key={index}>
            <CommunityTreatmentOrderSummaryItem
              communityTreatmentOrder={communityTreatmentOrder}
              clickHandler={clickHandler}
            />
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
