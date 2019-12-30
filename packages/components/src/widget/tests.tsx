import React from 'react'
import { mount } from 'enzyme'
import ReactDOM from 'react-dom'

import { Widget } from '.'

describe('Widget', () => {
  it('renders without crashing', () => {
    const div = document.createElement('div')
    ReactDOM.render(<Widget />, div)
  })
  it('matches snapshot', () => {
    expect(mount(<Widget />)).toMatchSnapshot('wrapper mount')
  })
})
