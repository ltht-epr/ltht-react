import React from 'react'
import { mount } from 'enzyme'
import ReactDOM from 'react-dom'

import CommunityTreatmentOrderSummary from '@ltht-react/community-treatment-order-summary'
import { CommunityTreatmentOrderOne, CommunityTreatmentOrderTwo } from './community-treatment-order.fixtures'

describe('CommunityTreatmentOrderSummary', () => {
  const communityTreatmentOrders = [CommunityTreatmentOrderOne, CommunityTreatmentOrderTwo]
  it('renders without crashing', () => {
    const div = document.createElement('div')
    ReactDOM.render(
      <CommunityTreatmentOrderSummary
        title="Community Treatment Orders"
        communityTreatmentOrders={communityTreatmentOrders}
      />,
      div
    )
  })
  it('matches snapshot', () => {
    expect(
      mount(
        <CommunityTreatmentOrderSummary
          title="Community Treatment Orders"
          communityTreatmentOrders={communityTreatmentOrders}
        />
      )
    ).toMatchSnapshot('wrapper mount')
  })
})
