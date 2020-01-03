import React from 'react'
import { mount } from 'enzyme'
import ReactDOM from 'react-dom'

import { Flag } from '../../../packages/types/lib'
import { FlagOne, FlagTwo } from './fixtures'
import FlagSummary from '.'

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
