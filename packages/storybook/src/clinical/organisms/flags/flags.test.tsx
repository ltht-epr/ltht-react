import React from 'react'
import { render } from '@testing-library/react'

import FlagSummary from '@ltht-react/flag-summary'
import flags from './flags.fixtures'

describe('Flags', () => {
  it('Renders', () => {
    render(<FlagSummary flag={flags[0]} />)
  })
})
