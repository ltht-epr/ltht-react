import React from 'react'
import { mount } from 'enzyme'
import ReactDOM from 'react-dom'

import { ExclamationIcon } from '.'

describe('ExclamationIcon', () => {
  it('renders without crashing', () => {
    const div = document.createElement('div')
    ReactDOM.render(<ExclamationIcon status="red" size="small" />, div)
  })
  it('matches snapshot', () => {
    expect(mount(<ExclamationIcon status="red" size="small" />)).toMatchSnapshot('wrapper mount')
  })
})
