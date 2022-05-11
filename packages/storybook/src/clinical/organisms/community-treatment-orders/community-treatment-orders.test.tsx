import { render } from '@testing-library/react'

import CommunityTreatmentOrderSummary from '@ltht-react/community-treatment-order-summary'
import CommunityTreatmentOrderDetail from '@ltht-react/community-treatment-order-detail'
import orders from './community-treatment-orders.fixtures'

describe('Community Treatment Orders', () => {
  describe('Summary', () => {
    it('Renders', () => {
      render(<CommunityTreatmentOrderSummary communityTreatmentOrder={orders[0]} />)
    })
  })
  describe('Detail', () => {
    it('Renders', () => {
      render(<CommunityTreatmentOrderDetail communityTreatmentOrder={orders[0]} />)
    })
  })
})
