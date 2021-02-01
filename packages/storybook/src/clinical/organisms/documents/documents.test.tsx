import React from 'react'
import { render } from '@testing-library/react'

import DocumentSummary from '@ltht-react/document-summary'
import documents from './documents.fixture'

describe('Documents', () => {
  it('Renders', () => {
    render(<DocumentSummary document={documents[0]} />)
  })
})
