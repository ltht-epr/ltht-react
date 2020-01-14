import React from 'react'
import { mount } from 'enzyme'
import ReactDOM from 'react-dom'

import { CarePlan } from '@ltht-react/types'
import { CarePlanOne, CarePlanTwo } from './fixtures'
import CarePlanSummary from '.'

const handleClick = (carePlan: CarePlan) => {}

describe('CarePlanSummary', () => {
  const carePlans = [CarePlanOne, CarePlanTwo]
  it('renders without crashing', () => {
    const div = document.createElement('div')
    ReactDOM.render(<CarePlanSummary title="Care Plans" carePlans={carePlans} clickHandler={handleClick} />, div)
  })
  it('matches snapshot', () => {
    expect(
      mount(<CarePlanSummary title="Care Plans" carePlans={carePlans} clickHandler={handleClick} />)
    ).toMatchSnapshot('wrapper mount')
  })
})
