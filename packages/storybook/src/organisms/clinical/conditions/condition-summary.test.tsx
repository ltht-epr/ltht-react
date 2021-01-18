import React from 'react'
import { mount } from 'enzyme'
import ReactDOM from 'react-dom'

import ConditionSummary from '@ltht-react/condition-summary'
import conditions from './condition-summary.fixtures'

describe('ConditionSummary', () => {
  it('renders without crashing', () => {
    const ul = document.createElement('ul')
    ReactDOM.render(<ConditionSummary conditions={conditions} />, ul)
  })
  it('matches snapshot', () => {
    expect(mount(<ConditionSummary conditions={conditions} />)).toMatchSnapshot('wrapper mount')
  })
})
