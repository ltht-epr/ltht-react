import React from 'react'
import { mount } from 'enzyme'
import ReactDOM from 'react-dom'

import { FlagOne, FlagTwo } from './fixtures'
import { FlagSummary } from '.'

describe('FlagSummary', () => {
  const flags = [FlagOne, FlagTwo]
  it('renders without crashing', () => {
    const div = document.createElement('div')
    ReactDOM.render(<FlagSummary flags={flags} />, div)
  })
  it('matches snapshot', () => {
    expect(mount(<FlagSummary flags={flags} />)).toMatchSnapshot('wrapper mount')
  })
})
