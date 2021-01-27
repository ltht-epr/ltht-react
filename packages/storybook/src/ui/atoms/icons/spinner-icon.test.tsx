import React from 'react'
import ReactDOM from 'react-dom'

import { SpinnerIcon } from '@ltht-react/icon'

describe('SpinnerIcon', () => {
  it('renders without crashing', () => {
    const div = document.createElement('div')
    ReactDOM.render(<SpinnerIcon size="small" />, div)
  })
})
