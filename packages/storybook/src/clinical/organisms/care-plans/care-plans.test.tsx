import { render, screen } from '@testing-library/react'

import CarePlanSummary from '@ltht-react/care-plan-summary'
import carePlans from './care-plans.fixtures'
import CarePlanDetail from '@ltht-react/care-plan-detail'

describe('Care Plans detail', () => {
  it('Renders', () => {
    render(<CarePlanDetail carePlan={carePlans[0]} />)
    expect(screen.getByText('Mental Health Crisis Plan')).toBeInTheDocument()

    expect(screen.getByText('Description')).toBeInTheDocument()
    expect(
      screen.getByText(
        'Sed Ut Perspiciatis Unde Omnis Iste Natus Error Sit Voluptatem Accusantium Doloremque Laudantium, Totam Rem Aperiam, Eaque Ipsa Quae Ab Illo Inventore Veritatis Et Quasi Architecto Beatae Vitae Dicta Sunt Explicabo'
      )
    ).toBeInTheDocument()

    expect(screen.getByText('Period')).toBeInTheDocument()
    expect(screen.getByText('01-Jan-2013 to 02-Feb-2014')).toBeInTheDocument()

    expect(screen.getByText('Intent')).toBeInTheDocument()

    expect(screen.getByText('Status')).toBeInTheDocument()
    expect(screen.getByText('Active')).toBeInTheDocument()

    expect(screen.getByText('Text')).toBeInTheDocument()
    expect(
      screen.getByText(
        'Itaque earum rerum hic tenetur a sapiente delectus, ut aut reiciendis voluptatibus maiores alias consequatur aut perferendis doloribus asperiores repellat.'
      )
    ).toBeInTheDocument()

    expect(screen.getByText('Author(s)')).toBeInTheDocument()
    expect(screen.getByText('Dr Joe Bloggs')).toBeInTheDocument()
    expect(screen.getByText('Dr Adam Careplan')).toBeInTheDocument()
  })
})

describe('Care Plans summary', () => {
  it('Renders', () => {
    render(<CarePlanSummary carePlan={carePlans[1]} />)
    expect(screen.getByText('Test Care Plan')).toBeInTheDocument()
    expect(screen.getByText('John Mclane - LYPFT Care Team 2')).toBeInTheDocument()
    expect(screen.getByText('02-Feb-2014 to 04-Mar-2015')).toBeInTheDocument()
    expect(screen.getByText('Proposal - Completed')).toBeInTheDocument()
  })
})

describe('Care Plans redacted', () => {
  it('Renders', () => {
    render(<CarePlanSummary carePlan={carePlans[0]} />)
    expect(screen.getByText('Insufficient privileges')).toBeInTheDocument()
    expect(screen.getByText('01-Jan-2013 to 02-Feb-2014')).toBeInTheDocument()
  })
})
