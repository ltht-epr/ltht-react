import { render, screen } from '@testing-library/react'

import DiagnosisSummary from '@ltht-react/diagnosis-summary'
import DiagnosisDetail from '@ltht-react/diagnosis-detail'
import conditions from './diagnosis.fixtures'

describe('Summary', () => {
  it('Renders', () => {
    render(<DiagnosisSummary condition={conditions[1]} />)
    expect(screen.getByText('Diabetes mellitus type 2')).toBeInTheDocument()
    expect(screen.getByText('Problem - Mild')).toBeInTheDocument()

    expect(screen.getByText('01-Jan-2020')).toBeInTheDocument()
    expect(screen.getByText('Remission - Refuted')).toBeInTheDocument()
  })
})

describe('Redacted', () => {
  it('Renders', () => {
    render(<DiagnosisSummary condition={conditions[0]} />)
    expect(screen.getByText('Insufficient privileges')).toBeInTheDocument()
    expect(screen.getByText('07-Aug-2018')).toBeInTheDocument()
  })
})

describe('Detail', () => {
  it('Renders', () => {
    render(<DiagnosisDetail condition={conditions[0]} />)
    expect(screen.getByText('Diagnosis')).toBeInTheDocument()
    expect(screen.getByText('Heel Pain')).toBeInTheDocument()

    expect(screen.getByText('Onset Date')).toBeInTheDocument()
    expect(screen.getByText('Sep-2016')).toBeInTheDocument()

    expect(screen.getByText('Clinical Status')).toBeInTheDocument()
    expect(screen.getByText('Active')).toBeInTheDocument()

    expect(screen.getByText('Verification Status')).toBeInTheDocument()
    expect(screen.getByText('Confirmed')).toBeInTheDocument()

    expect(screen.getByText('Category')).toBeInTheDocument()
    expect(screen.getByText('Category A')).toBeInTheDocument()
    expect(screen.getByText('Category B')).toBeInTheDocument()

    expect(screen.getByText('Severity')).toBeInTheDocument()
    expect(screen.getByText('Moderate')).toBeInTheDocument()

    expect(screen.getByText('Location')).toBeInTheDocument()
    expect(screen.getByText('Base of phalanx of foot')).toBeInTheDocument()
    expect(screen.getByText('Subcutaneous tissue of lateral border of sole of foot')).toBeInTheDocument()

    expect(screen.getByText('Evidence')).toBeInTheDocument()
    expect(screen.getByText('Blister of foot without infection')).toBeInTheDocument()
    expect(screen.getByText('Nonvenomous insect bite of foot with indection')).toBeInTheDocument()

    expect(screen.getByText('Stage')).toBeInTheDocument()
    expect(screen.getByText('Clinical stage I B')).toBeInTheDocument()

    expect(screen.getByText('Asserted By')).toBeInTheDocument()
    expect(screen.getByText('BROWN, David (Dr)')).toBeInTheDocument()

    expect(screen.getByText('Asserted Date')).toBeInTheDocument()
    expect(screen.getByText('07-Aug-2018')).toBeInTheDocument()

    expect(screen.getByText('Data Source(s)')).toBeInTheDocument()
    expect(screen.getByText('Mock Source A')).toBeInTheDocument()
    expect(screen.getByText('Mock Source B')).toBeInTheDocument()
  })
})
