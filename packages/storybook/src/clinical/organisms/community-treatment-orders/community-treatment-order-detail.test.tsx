import React from 'react'
import ReactDOM from 'react-dom'

import CommunityTreatmentOrderDetail from '@ltht-react/community-treatment-order-detail'
import orders from './community-treatment-order.fixtures'

describe('CommunityTreatmentOrderSummary', () => {
  const communityTreatmentOrder = orders[0]
  it('renders without crashing', () => {
    const div = document.createElement('div')
    ReactDOM.render(<CommunityTreatmentOrderDetail communityTreatmentOrder={communityTreatmentOrder} />, div)
  })
})
