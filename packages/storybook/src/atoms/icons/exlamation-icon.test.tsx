import React from 'react'
import { mount } from 'enzyme'
import ReactDOM from 'react-dom'

import { ExclamationIcon } from '@ltht-react/icon'

describe('SpinnerIcon', () => {
  it('renders without crashing', () => {
    const div = document.createElement('div')
    ReactDOM.render(<ExclamationIcon status="amber" size="small" />, div)
  })
  it('matches snapshot', () => {
    expect(mount(<ExclamationIcon status="amber" size="small" />)).toMatchSnapshot('wrapper mount')
  })
})
