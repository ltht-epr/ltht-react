import { render, screen } from '@testing-library/react'

import CommunityTreatmentOrderSummary from '@ltht-react/community-treatment-order-summary'
import orders from './community-treatment-orders.fixtures'
import CommunityTreatmentOrderDetail from '@ltht-react/community-treatment-order-detail'

describe('Community Treatment Orders details', () => {
  it('renders', () => {
    render(<CommunityTreatmentOrderDetail communityTreatmentOrder={orders[0]} />)
    expect(screen.getByText('Consent')).toBeInTheDocument()
    expect(screen.getByText('Consent Not Given')).toBeInTheDocument()

    expect(screen.getByText('Legal Status')).toBeInTheDocument()
    expect(screen.getByText('Approved')).toBeInTheDocument()

    expect(screen.getByText('Period')).toBeInTheDocument()
    expect(screen.getByText('01-Jan-2013 to 02-Feb-2014')).toBeInTheDocument()

    expect(screen.getByText('Restrictions')).toBeInTheDocument()
    expect(screen.getByText('No Restrictions')).toBeInTheDocument()
  })
})

describe('Community Treatment Orders summary', () => {
  it('renders', () => {
    render(<CommunityTreatmentOrderSummary communityTreatmentOrder={orders[0]} />)
    expect(screen.getByText('Approved')).toBeInTheDocument()
    expect(screen.getByText('No restrictions')).toBeInTheDocument()

    expect(screen.getByText('01-Jan-2013 to 02-Feb-2014')).toBeInTheDocument()
    expect(screen.getByText('Consent Not Given')).toBeInTheDocument()
  })
})

describe('Community Treatment Orders redacted', () => {
  it('renders', () => {
    render(<CommunityTreatmentOrderSummary communityTreatmentOrder={orders[1]} />)
    expect(screen.getByText('Insufficient privileges')).toBeInTheDocument()
    expect(screen.getByText('02-Jan-2020 to Present')).toBeInTheDocument()
  })
})
