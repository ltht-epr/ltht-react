import React from 'react'
import ReactDOM from 'react-dom'

import AllergySummary from '@ltht-react/allergy-summary'
import allergies from './allergy.fixtures'

const Sut: React.FC = () => {
  return (
    <>
      {allergies.map(allergy => (
        <div key={allergy.id}>
          <AllergySummary allergy={allergy} />
        </div>
      ))}
    </>
  )
}

describe('AllergySummary', () => {
  it('renders without crashing', () => {
    const div = document.createElement('div')
    ReactDOM.render(<Sut />, div)
  })
})
