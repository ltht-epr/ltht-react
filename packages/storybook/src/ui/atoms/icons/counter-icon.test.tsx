import { render } from '@testing-library/react'

import { CounterIcon } from '@ltht-react/icon'

describe('Counter Icon', () => {
  it('Renders', () => {
    render(<CounterIcon size="medium" status="secondary" value={1} />)
  })
})
