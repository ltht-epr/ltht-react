import React from 'react'
import { render } from '@testing-library/react'

import { InfoCircleIcon } from '@ltht-react/icon'

describe('Info Circle Icon', () => {
  it('Renders', () => {
    render(<InfoCircleIcon status="green" size="small" />)
  })
})
