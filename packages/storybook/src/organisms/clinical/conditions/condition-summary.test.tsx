import React from 'react'
import { mount } from 'enzyme'
import ReactDOM from 'react-dom'

import ConditionSummary from '@ltht-react/condition-summary'
import { ConditionOne, ConditionTwo } from './condition-summary.fixtures'

describe('ConditionSummary', () => {
  const conditions = [ConditionOne, ConditionTwo]
  it('renders without crashing', () => {
    const div = document.createElement('div')
    ReactDOM.render(<ConditionSummary title="Conditions" conditions={conditions} />, div)
  })
  it('matches snapshot', () => {
    expect(mount(<ConditionSummary title="Conditions" conditions={conditions} />)).toMatchSnapshot('wrapper mount')
  })
})
