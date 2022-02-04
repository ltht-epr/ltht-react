import { render, screen } from '@testing-library/react'

import FlagSummary from '@ltht-react/flag-summary'
import FlagDetail from '@ltht-react/flag-detail'
import flags from './flags.fixtures'

describe('Flags Detail', () => {
  it('Renders', () => {
    render(<FlagDetail flag={flags[0]} />)
    expect(screen.getByText('Code')).toBeInTheDocument()
    expect(screen.getByText('Lives in Known High Risk Area')).toBeInTheDocument()

    expect(screen.getByText('Status')).toBeInTheDocument()
    expect(screen.getByText('Entered In Error')).toBeInTheDocument()

    expect(screen.getByText('Category')).toBeInTheDocument()
    expect(screen.getByText('Location, Demographics')).toBeInTheDocument()

    expect(screen.getByText('Period')).toBeInTheDocument()
    expect(screen.getByText('2013 to Present')).toBeInTheDocument()

    expect(screen.getByText('Text')).toBeInTheDocument()
    expect(
      screen.getByText(
        'Lorem ipsum dolor sit amet, falli nulla oportere vel eu. Ea meis moderatius scripserit his, ei decore ceteros has. Quo at apeirian facilisi consectetuer. At putant animal persius his, inani maiestatis moderatius vis no'
      )
    ).toBeInTheDocument()

    expect(screen.getByText('Author')).toBeInTheDocument()
    expect(screen.getByText('Smith, John (Dr)')).toBeInTheDocument()
  })
})

describe('Flags Summary', () => {
  it('Renders', () => {
    render(<FlagSummary flag={flags[1]} />)
    expect(screen.getByText('High Risk of Violence')).toBeInTheDocument()
    expect(screen.getByText('56706 - Violence')).toBeInTheDocument()

    expect(screen.getByText('01-Jan-2013 to 02-Feb-2014')).toBeInTheDocument()
    expect(screen.getByText('Inactive')).toBeInTheDocument()
  })
})

describe('Flags Redacted', () => {
  it('Renders', () => {
    render(<FlagSummary flag={flags[0]} />)
    expect(screen.getByText('Insufficient privileges')).toBeInTheDocument()
    expect(screen.getByText('2013 to Present')).toBeInTheDocument()
  })
})
