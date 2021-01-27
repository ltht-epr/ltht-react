import React from 'react'
import ReactDOM from 'react-dom'

import { ColumnIcon } from '@ltht-react/icon'

describe('ColumnIcon', () => {
  const Icons: React.FC = () => {
    return (
      <>
        <ColumnIcon status="default" size="small" />
        <ColumnIcon status="amber" size="small" />
        <ColumnIcon status="green" size="small" />
        <ColumnIcon status="red" size="small" />
      </>
    )
  }

  it('renders without crashing', () => {
    const div = document.createElement('div')
    ReactDOM.render(<Icons />, div)
  })
})
