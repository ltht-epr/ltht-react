import React from 'react'
import ReactDOM from 'react-dom'

import CommunityTreatmentOrderSummary from '@ltht-react/community-treatment-order-summary'
import CommunityTreatmentOrderDetail from '@ltht-react/community-treatment-order-detail'
import orders from './community-treatment-orders.fixtures'

const Summary: React.FC = () => {
  return (
    <>
      {orders.map(order => (
        <div key={order.id}>
          <CommunityTreatmentOrderSummary communityTreatmentOrder={order} />
        </div>
      ))}
    </>
  )
}

describe('CommunityTreatmentOrderSummary', () => {
  it('renders without crashing', () => {
    const div = document.createElement('div')
    ReactDOM.render(<Summary />, div)
  })
})

describe('CommunityTreatmentOrderDetail', () => {
  it('renders without crashing', () => {
    const div = document.createElement('div')
    ReactDOM.render(<CommunityTreatmentOrderDetail communityTreatmentOrder={orders[0]} />, div)
  })
})
