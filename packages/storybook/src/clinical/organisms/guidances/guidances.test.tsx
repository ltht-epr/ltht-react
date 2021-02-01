import React from 'react'
import { render } from '@testing-library/react'

import GuidanceSummary from '@ltht-react/guidance-summary'
import guidances from './guidances.fixture'

describe('Guidances', () => {
  it('Renders', () => {
    render(<GuidanceSummary guidance={guidances[0]} />)
  })
})
