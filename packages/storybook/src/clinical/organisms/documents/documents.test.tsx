import React from 'react'
import ReactDOM from 'react-dom'

import DocumentSummary from '@ltht-react/document-summary'
import documents from './documents.fixture'

const Sut: React.FC = () => {
  return (
    <>
      {documents.map(document => (
        <div key={document.id}>
          <DocumentSummary document={document} />
        </div>
      ))}
    </>
  )
}

describe('DocumentSummaryy', () => {
  it('renders without crashing', () => {
    const div = document.createElement('div')
    ReactDOM.render(<Sut />, div)
  })
})