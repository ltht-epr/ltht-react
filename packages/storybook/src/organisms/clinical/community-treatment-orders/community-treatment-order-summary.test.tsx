import React from 'react'
import { mount } from 'enzyme'
import ReactDOM from 'react-dom'

import CommunityTreatmentOrderSummary from '@ltht-react/community-treatment-order-summary'
import orders from './community-treatment-order.fixtures'

const Sut: React.FC = () => {
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
    ReactDOM.render(<Sut />, div)
  })
  it('matches snapshot', () => {
    expect(mount(<Sut />)).toMatchSnapshot('wrapper mount')
  })
})
