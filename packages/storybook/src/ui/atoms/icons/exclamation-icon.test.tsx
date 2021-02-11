import { render } from '@testing-library/react'

import { ExclamationIcon } from '@ltht-react/icon'

describe('Exclamation Icon', () => {
  it('Renders', () => {
    render(<ExclamationIcon status="amber" size="small" />)
  })
})
