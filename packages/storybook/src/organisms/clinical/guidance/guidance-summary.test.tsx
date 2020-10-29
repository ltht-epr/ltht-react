import React from 'react'
import { mount } from 'enzyme'
import ReactDOM from 'react-dom'

import GuidanceSummary from '@ltht-react/guidance-summary'
import guidances from './guidance.fixture'

const Sut: React.FC = () => {
  return (
    <>
      {guidances.map(guidance => (
        <div key={guidance.id}>
          <GuidanceSummary guidance={guidance} />
        </div>
      ))}
    </>
  )
}

describe('GuidanceSummary', () => {
  it('renders without crashing', () => {
    const div = document.createElement('div')
    ReactDOM.render(<Sut />, div)
  })
  it('matches snapshot', () => {
    expect(mount(<Sut />)).toMatchSnapshot('wrapper mount')
  })
})
