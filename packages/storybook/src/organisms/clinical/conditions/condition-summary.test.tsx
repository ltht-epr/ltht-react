import React from 'react'
import { mount } from 'enzyme'
import ReactDOM from 'react-dom'

import ConditionSummary from '@ltht-react/condition-summary'
import conditions from './condition-summary.fixtures'

const Sut: React.FC = () => {
  return (
    <>
      {conditions.map(condition => (
        <li>
          <ConditionSummary condition={condition} />
        </li>
      ))}
    </>
  )
}

describe('ConditionSummary', () => {
  it('renders without crashing', () => {
    const ul = document.createElement('ul')
    ReactDOM.render(<Sut />, ul)
  })
  it('matches snapshot', () => {
    expect(mount(<Sut />)).toMatchSnapshot('wrapper mount')
  })
})
