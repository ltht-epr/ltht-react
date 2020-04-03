import React from 'react'
import { mount } from 'enzyme'
import ReactDOM from 'react-dom'

import FlagSummary from '@ltht-react/flag-summary'
import flags from './flag.fixtures'

describe('FlagSummary', () => {
  it('renders without crashing', () => {
    const div = document.createElement('div')
    ReactDOM.render(<FlagSummary flags={flags} />, div)
  })
  it('matches snapshot', () => {
    expect(mount(<FlagSummary flags={flags} />)).toMatchSnapshot('wrapper mount')
  })
})
