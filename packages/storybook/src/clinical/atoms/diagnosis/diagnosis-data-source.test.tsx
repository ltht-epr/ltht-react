import { render, screen } from '@testing-library/react'
import DiagnosisDataSource from '@ltht-react/diagnosis-summary/src/atoms/diagnosis-data-source'
import { Condition } from '@ltht-react/types'

const condition: Condition = {
  id: 'data-source-test',
  metadata: {
    dataSources: [],
    isRedacted: false,
    requestedWhen: '',
  },
}

beforeEach(() => {
  condition.metadata.dataSources = []
})

describe('Diagnosis Data Source', () => {
  it('renders data source display if a single data source is present', () => {
    condition.metadata.dataSources[0] = { display: 'Humber Teaching NHS Foundation Trust' }

    render(<DiagnosisDataSource condition={condition} enteredInError={false} />)

    expect(screen.getByText('Source: Humber Teaching NHS Foundation Trust')).toBeVisible()
  })

  it('renders data source display if multiple data sources are present', () => {
    condition.metadata.dataSources[0] = { display: 'Humber Teaching NHS Foundation Trust' }
    condition.metadata.dataSources[1] = { display: 'Yorkshire Ambulance Service' }

    render(<DiagnosisDataSource condition={condition} enteredInError={false} />)

    expect(screen.getByText('Source: Humber Teaching NHS Foundation Trust, Yorkshire Ambulance Service')).toBeVisible()
  })

  it('renders data source display with a strike through if the diagnosis is entered in error', () => {
    condition.metadata.dataSources[0] = { display: 'Humber Teaching NHS Foundation Trust' }

    render(<DiagnosisDataSource condition={condition} enteredInError />)

    expect(screen.getByText('Source: Humber Teaching NHS Foundation Trust')).toBeVisible()
    expect(screen.getByText('Source: Humber Teaching NHS Foundation Trust')).toHaveStyle(
      'text-decoration: line-through'
    )
  })
})
