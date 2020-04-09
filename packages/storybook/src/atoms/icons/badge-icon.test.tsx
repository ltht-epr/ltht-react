import React from 'react'
import { mount } from 'enzyme'
import ReactDOM from 'react-dom'

import { BadgeIcon } from '@ltht-react/icon'

describe('BadgeIcon', () => {
  const Icons: React.FC = () => {
    return (
      <>
        <BadgeIcon size="medium" status="secondary" />
        <BadgeIcon size="medium" status="secondary" />
        <BadgeIcon size="medium" status="secondary" />
        <BadgeIcon size="medium" status="secondary" />
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
