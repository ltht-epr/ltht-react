import React from 'react'
import { mount } from 'enzyme'
import ReactDOM from 'react-dom'

import GuidanceSummary from '@ltht-react/guidance-summary'
import GuidanceData from './guidance.fixture'

describe('GuidanceSummaryy', () => {
  it('renders without crashing', () => {
    const div = document.createElement('div')
    ReactDOM.render(<GuidanceSummary guidanceList={GuidanceData} />, div)
  })
  it('matches snapshot', () => {
    expect(mount(<GuidanceSummary guidanceList={GuidanceData} />)).toMatchSnapshot('wrapper mount')
  })
})
