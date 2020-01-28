import React from 'react'
import { mount } from 'enzyme'
import ReactDOM from 'react-dom'

import { CarePlanOne, CarePlanTwo } from './fixtures'
import CarePlanSummary from '.'

describe('CarePlanSummary', () => {
  const carePlans = [CarePlanOne, CarePlanTwo]
  it('renders without crashing', () => {
    const div = document.createElement('div')
    ReactDOM.render(<CarePlanSummary title="Care Plans" carePlans={carePlans} />, div)
  })
  it('matches snapshot', () => {
    expect(mount(<CarePlanSummary title="Care Plans" carePlans={carePlans} />)).toMatchSnapshot('wrapper mount')
  })
})
