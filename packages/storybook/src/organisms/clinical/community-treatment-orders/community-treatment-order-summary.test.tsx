import React from 'react'
import { mount } from 'enzyme'
import ReactDOM from 'react-dom'

import CommunityTreatmentOrderSummary from '@ltht-react/community-treatment-order-summary'
import orders from './community-treatment-order.fixtures'

describe('CommunityTreatmentOrderSummary', () => {
  it('renders without crashing', () => {
    const div = document.createElement('div')
    ReactDOM.render(<CommunityTreatmentOrderSummary communityTreatmentOrders={orders} />, div)
  })
  it('matches snapshot', () => {
    expect(mount(<CommunityTreatmentOrderSummary communityTreatmentOrders={orders} />)).toMatchSnapshot('wrapper mount')
  })
})
