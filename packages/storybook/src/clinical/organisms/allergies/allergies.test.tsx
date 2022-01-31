import { render, screen } from '@testing-library/react'

// import AllergySummary from '@ltht-react/allergy-summary'
import allergies from './allergies.fixtures'
import AllergyDetail from '@ltht-react/allergy-detail'

describe('Allergy Detail', () => {
  it('Renders the widget data correctly', () => {
    render(<AllergyDetail allergy={allergies[0]} />)

    expect(screen.getByText('Allergy')).toBeInTheDocument()

    expect(screen.getByText('Data Source(s)')).toBeInTheDocument()

    expect(screen.getByText('Type')).toBeInTheDocument()
    expect(screen.getByText('Intolerance')).toBeInTheDocument()

    expect(screen.getByText('Category')).toBeInTheDocument()
    expect(screen.getByText('Environment')).toBeInTheDocument()

    expect(screen.getByText('Allergy')).toBeInTheDocument()
    expect(screen.getByText('Dust Mites')).toBeInTheDocument()

    expect(screen.getByText('Verification Status')).toBeInTheDocument()
    expect(screen.getByText('Confirmed')).toBeInTheDocument()

    expect(screen.getByText('Clinical Status')).toBeInTheDocument()
    expect(screen.getByText('Active')).toBeInTheDocument()

    expect(screen.getByText('Onset')).toBeInTheDocument()
    expect(screen.getByText('3 Years')).toBeInTheDocument()

    expect(screen.getByText('Asserter')).toBeInTheDocument()
    //expect(screen.getByText('BROWN, David (Dr)')).toBeInTheDocument()

    expect(screen.getByText('Asserted Date')).toBeInTheDocument()
    expect(screen.getByText('2016')).toBeInTheDocument()

    expect(screen.getByText('Note(s)')).toBeInTheDocument()
    expect(screen.getByText('Allergy Note 1')).toBeInTheDocument()

    expect(screen.getByText('Dr. John Doe')).toBeInTheDocument()
    expect(screen.getByText('01-Jan-2013')).toBeInTheDocument()
    expect(
      screen.getByText(
        'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur.'
      )
    ).toBeInTheDocument()

    expect(screen.getByText('Last Occurance')).toBeInTheDocument()
    //expect(screen.getByText('Sept-2016')).toBeInTheDocument()

    expect(screen.getByText('Criticality')).toBeInTheDocument()
    expect(screen.getByText('High')).toBeInTheDocument()

    expect(screen.getByText('Recorder')).toBeInTheDocument()
    expect(screen.getByText('BROWN, David (Dr)')).toBeInTheDocument()

    // expect(screen.getByText('')).toBeInTheDocument()
  })

  it('Renders the widget data correctly when dates are hidden', () => {
    render(<AllergyDetail allergy={allergies[0]} showDates={false} />)

    expect(screen.queryByText('Asserted Date')).not.toBeInTheDocument()
  })
})
