import React from 'react'
import { mount } from 'enzyme'
import ReactDOM from 'react-dom'

import AllergySummary from '@ltht-react/allergy-summary'
import allergies from './allergy.fixtures'

const Sut: React.FC = () => {
  return (
    <>
      {allergies.map(allergy => (
        <AllergySummary allergy={allergy} />
      ))}
    </>
  )
}

describe('AllergySummary', () => {
  it('renders without crashing', () => {
    const div = document.createElement('div')
    ReactDOM.render(<Sut />, div)
  })
  it('matches snapshot', () => {
    expect(mount(<Sut />)).toMatchSnapshot('wrapper mount')
  })
})
