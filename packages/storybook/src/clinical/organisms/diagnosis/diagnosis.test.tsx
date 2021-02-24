import { render } from '@testing-library/react'

import DiagnosisSummary from '@ltht-react/diagnosis-summary'
import conditions from './diagnosis.fixtures'

describe('Conditions', () => {
  it('Renders', () => {
    render(<DiagnosisSummary condition={conditions[0]} />)
  })
})
