import React from 'react'
import { mount } from 'enzyme'
import ReactDOM from 'react-dom'

import { CounterIcon } from '@ltht-react/icon'

describe('BadgeIcon', () => {
  const Icons: React.FC = () => {
    return (
      <>
        <CounterIcon size="medium" status="secondary" value={1} />
        <CounterIcon size="medium" status="primary" value={2} />
        <CounterIcon size="small" status="amber" value={5} />
        <CounterIcon size="large" status="red" value={10} />
      </>
    )
  }

  it('renders without crashing', () => {
    const div = document.createElement('div')
    ReactDOM.render(<Icons />, div)
  })
  it('matches snapshot', () => {
    expect(mount(<Icons />)).toMatchSnapshot('wrapper mount')
  })
})
