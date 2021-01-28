import React from 'react'
import ReactDOM from 'react-dom'

import { CircleIcon } from '@ltht-react/icon'

describe('CircleIcon', () => {
  const Icons: React.FC = () => {
    return (
      <>
        <CircleIcon status="default" size="small" />
        <CircleIcon status="green" size="small" />
      </>
    )
  }

  it('renders without crashing', () => {
    const div = document.createElement('div')
    ReactDOM.render(<Icons />, div)
  })
})