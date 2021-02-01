import React from 'react'
import { render } from '@testing-library/react'

import ConditionSummary from '@ltht-react/condition-summary'
import conditions from './conditions.fixtures'

describe('Conditions', () => {
  it('Renders', () => {
    render(<ConditionSummary condition={conditions[0]} />)
  })
})
