import React from 'react'
import { mount } from 'enzyme'
import ReactDOM from 'react-dom'

import { LypftCommunityTreatmentOrder } from '@ltht-react/types'
import { CommunityTreatmentOrderOne, CommunityTreatmentOrderTwo } from './fixtures'
import CommunityTreatmentOrderSummary from '.'

const handleClick = (communityTreatmentOrder: LypftCommunityTreatmentOrder) => {}

describe('CommunityTreatmentOrderSummary', () => {
  const communityTreatmentOrders = [CommunityTreatmentOrderOne, CommunityTreatmentOrderTwo]
  it('renders without crashing', () => {
    const div = document.createElement('div')
    ReactDOM.render(
      <CommunityTreatmentOrderSummary
        title="Community Treatment Orders"
        communityTreatmentOrders={communityTreatmentOrders}
        clickHandler={handleClick}
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
          clickHandler={handleClick}
        />
      )
    ).toMatchSnapshot('wrapper mount')
  })
})
