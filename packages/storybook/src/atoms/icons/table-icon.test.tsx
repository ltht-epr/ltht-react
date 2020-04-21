import React from 'react'
import { mount } from 'enzyme'
import ReactDOM from 'react-dom'

import { TableIcon } from '@ltht-react/icon'

describe('TableIcon', () => {
  const Icons: React.FC = () => {
    return (
      <>
        <TableIcon status="default" size="small" />
        <TableIcon status="amber" size="small" />
        <TableIcon status="green" size="small" />
        <TableIcon status="red" size="small" />
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
