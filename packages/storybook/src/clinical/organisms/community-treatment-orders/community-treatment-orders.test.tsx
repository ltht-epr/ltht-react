import React from 'react'
import { render } from '@testing-library/react'

import CommunityTreatmentOrderSummary from '@ltht-react/community-treatment-order-summary'
import orders from './community-treatment-orders.fixtures'

describe('Community Treatment Orders', () => {
  it('renders without crashing', () => {
    render(<CommunityTreatmentOrderSummary communityTreatmentOrder={orders[0]} />)
  })
})
