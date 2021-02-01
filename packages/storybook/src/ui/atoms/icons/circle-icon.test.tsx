import React from 'react'
import { render } from '@testing-library/react'

import { CircleIcon } from '@ltht-react/icon'

describe('Circle Icon', () => {
  it('Renders', () => {
    render(<CircleIcon status="default" size="small" />)
  })
})
