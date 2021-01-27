import React from 'react'
import ReactDOM from 'react-dom'

import { ChevronCircleIcon } from '@ltht-react/icon'

describe('ChevronIcon', () => {
  const Icons: React.FC = () => {
    return (
      <>
        <ChevronCircleIcon direction="up" size="medium" />
        <ChevronCircleIcon direction="down" size="medium" />
        <ChevronCircleIcon direction="left" size="medium" />
        <ChevronCircleIcon direction="right" size="medium" />
      </>
    )
  }

  it('renders without crashing', () => {
    const div = document.createElement('div')
    ReactDOM.render(<Icons />, div)
  })
})
