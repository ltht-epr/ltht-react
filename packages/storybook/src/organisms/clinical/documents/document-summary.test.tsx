import React from 'react'
import { mount } from 'enzyme'
import ReactDOM from 'react-dom'

import DocumentSummary from '@ltht-react/document-summary'
import documents from './document-summary.fixture'

describe('DocumentSummaryy', () => {
  it('renders without crashing', () => {
    const div = document.createElement('div')
    ReactDOM.render(<DocumentSummary documents={documents} />, div)
  })
  it('matches snapshot', () => {
    expect(mount(<DocumentSummary documents={documents} />)).toMatchSnapshot('wrapper mount')
  })
})
