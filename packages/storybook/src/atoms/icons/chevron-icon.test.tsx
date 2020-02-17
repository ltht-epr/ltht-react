import React from 'react'
import { mount } from 'enzyme'
import ReactDOM from 'react-dom'

import ChevronIcon from '@ltht-react/chevron-icon'

describe('ChevronIcon', () => {
  const Icons: React.FC = () => {
    return (
      <>
        <ChevronIcon direction="up" size="medium" />
        <ChevronIcon direction="down" size="medium" />
        <ChevronIcon direction="left" size="medium" />
        <ChevronIcon direction="right" size="medium" />
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
