import React from 'react'
import { mount } from 'enzyme'
import ReactDOM from 'react-dom'

import SpinnerIcon from '@ltht-react/spinner-icon'

describe('SpinnerIcon', () => {
  it('renders without crashing', () => {
    const div = document.createElement('div')
    ReactDOM.render(<SpinnerIcon size="small" />, div)
  })
  it('matches snapshot', () => {
    expect(mount(<SpinnerIcon size="small" />)).toMatchSnapshot('wrapper mount')
  })
})
