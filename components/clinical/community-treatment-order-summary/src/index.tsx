import React from 'react'
import { LypftCommunityTreatmentOrder } from '@ltht-react/types'
import { ListItem } from '@ltht-react/list'
import CommunityTreatmentOrderSummaryItem from './organisms/community-treatment-order-summary-item'

const CommunityTreatmentOrderSummary: React.FC<Props> = ({ communityTreatmentOrders = [], clickHandler }) => {
  return (
    <>
      {communityTreatmentOrders.map(order => (
        <ListItem key={order.id}>
          <CommunityTreatmentOrderSummaryItem communityTreatmentOrder={order} clickHandler={clickHandler} />
        </ListItem>
      ))}
    </>
  )
}

interface Props {
  communityTreatmentOrders: LypftCommunityTreatmentOrder[] | undefined
  clickHandler?(communityTreatmentOrder: LypftCommunityTreatmentOrder): void
}

export default CommunityTreatmentOrderSummary
