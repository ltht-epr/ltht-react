import React from 'react'
import { mount } from 'enzyme'
import ReactDOM from 'react-dom'

import { Flag } from '@ltht-react/types'
import { FlagOne, FlagTwo } from './fixtures'
import FlagSummary from '.'

const handleClick = (flag: Flag) => {}

describe('FlagSummary', () => {
  const flags = [FlagOne, FlagTwo]
  it('renders without crashing', () => {
    const div = document.createElement('div')
    ReactDOM.render(<FlagSummary title="Alerts" flags={flags} clickHandler={handleClick} />, div)
  })
  it('matches snapshot', () => {
    expect(mount(<FlagSummary title="Alerts" flags={flags} clickHandler={handleClick} />)).toMatchSnapshot(
      'wrapper mount'
    )
  })
})
