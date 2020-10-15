import React from 'react'
import { mount } from 'enzyme'
import ReactDOM from 'react-dom'

import CarePlanSummary from '@ltht-react/care-plan-summary'
import carePlans from './care-plan.fixtures'

const Sut: React.FC = () => {
  return (
    <>
      {carePlans.map(carePlan => (
        <div key={carePlan.id}>
          <CarePlanSummary carePlan={carePlan} />
        </div>
      ))}
    </>
  )
}

describe('CarePlanSummary', () => {
  it('renders without crashing', () => {
    const div = document.createElement('div')
    ReactDOM.render(<Sut />, div)
  })
  it('matches snapshot', () => {
    expect(mount(<Sut />)).toMatchSnapshot('wrapper mount')
  })
})
