import { render, screen } from '@testing-library/react'

import DocumentSummary from '@ltht-react/document-summary'
import documents from './documents.fixture'

describe('Documents Summary', () => {
  it('Renders', () => {
    render(<DocumentSummary document={documents[0]} />)
    expect(screen.getByText('01-Apr-2020')).toBeInTheDocument()
    expect(screen.getByText('Description of document one')).toBeInTheDocument()

    expect(screen.getByText('Mock')).toBeInTheDocument()
    expect(screen.getByText('Current')).toBeInTheDocument()
  })
})

describe('Documents Redacted', () => {
  it('Renders', () => {
    render(<DocumentSummary document={documents[2]} />)
    expect(screen.getByText('11-Jan-2020')).toBeInTheDocument()
    expect(screen.getByText('Insufficient privileges')).toBeInTheDocument()
  })
})
