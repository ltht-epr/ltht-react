import React from 'react'
import { render } from '@testing-library/react'

import { ChevronCircleIcon } from '@ltht-react/icon'

describe('Chevron Icon', () => {
  it('Renders', () => {
    render(<ChevronCircleIcon direction="up" size="medium" />)
  })
})
