import React from 'react'
import { mount } from 'enzyme'
import ReactDOM from 'react-dom'

import { FlagOne, FlagTwo } from './fixtures'
import { FlagSummary } from '.'
import { Flag } from '@ltht-react/core'

const handlClick = (flag: Flag) => {}

describe('FlagSummary', () => {
  const flags = [FlagOne, FlagTwo]
  it('renders without crashing', () => {
    const div = document.createElement('div')
    ReactDOM.render(<FlagSummary flags={flags} handleItemClick={handlClick} />, div)
  })
  it('matches snapshot', () => {
    expect(mount(<FlagSummary flags={flags} handleItemClick={handlClick} />)).toMatchSnapshot('wrapper mount')
  })
})
