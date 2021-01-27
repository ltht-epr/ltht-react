import React from 'react'
import ReactDOM from 'react-dom'

import ConditionSummary from '@ltht-react/condition-summary'
import conditions from './condition-summary.fixtures'

const Sut: React.FC = () => {
  return (
    <>
      {conditions.map(condition => (
        <li key={condition.id}>
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
})
