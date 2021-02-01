import React from 'react'
import { render } from '@testing-library/react'

import { ColumnIcon } from '@ltht-react/icon'

describe('Column Icon', () => {
  it('Renders', () => {
    render(<ColumnIcon status="default" size="small" />)
  })
})
