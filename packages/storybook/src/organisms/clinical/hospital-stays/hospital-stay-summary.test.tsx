import React from 'react'
import ReactDOM from 'react-dom'

import HospitalStaySummary from '@ltht-react/hospital-stay-summary'
import stays from './hospital-stay.fixtures'

const Sut: React.FC = () => {
  return (
    <>
      {stays.map(stay => (
        <div key={stay.id}>
          <HospitalStaySummary hospitalStay={stay} />
        </div>
      ))}
    </>
  )
}

describe('HospitalStaySummary', () => {
  it('renders without crashing', () => {
    const div = document.createElement('div')
    ReactDOM.render(<Sut />, div)
  })
})
