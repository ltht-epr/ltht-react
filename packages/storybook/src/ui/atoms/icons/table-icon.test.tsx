import { render } from '@testing-library/react'

import { TableIcon } from '@ltht-react/icon'

describe('Table Icon', () => {
  it('Renders', () => {
    render(<TableIcon status="default" size="small" />)
  })
})
