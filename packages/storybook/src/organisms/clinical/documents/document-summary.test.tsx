import React from 'react'
import { mount } from 'enzyme'
import ReactDOM from 'react-dom'

import DocumentSummary from '@ltht-react/document-summary'
import { Document1, Document2, Document3 } from './document-summary.fixture'

describe('DocumentSummaryy', () => {
  it('renders without crashing', () => {
    const div = document.createElement('div')
    ReactDOM.render(<DocumentSummary documents={[Document1, Document2, Document3]} />, div)
  })
  it('matches snapshot', () => {
    expect(mount(<DocumentSummary documents={[Document1, Document2, Document3]} />)).toMatchSnapshot('wrapper mount')
  })
})
