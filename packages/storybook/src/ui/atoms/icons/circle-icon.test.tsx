import { render, screen } from '@testing-library/react'

import { CircleIcon } from '@ltht-react/icon'
import styled from '@emotion/styled'

describe('Circle Icon', () => {
  it('Renders', () => {
    render(<CircleIcon status="default" size="small" />)
  })

  it('Has the right class name', () => {
    render(<CircleIcon status="default" size="small" />)

    expect(screen.getByRole('img', { hidden: true })).toHaveClass('icon__circle')
  })

  it('Can be styled', () => {
    const StyledIcon = styled(CircleIcon)`
      color: pink;
    `

    render(<StyledIcon status="default" size="small" data-testid="123abc" />)

    expect(screen.getByTestId('123abc')).toHaveStyle({ color: 'pink' })
  })

  it('Can be given html attributes', () => {
    render(<CircleIcon status="default" size="small" data-testid="123abc" title="some-title" />)

    expect(screen.getByTestId('123abc')).toHaveAttribute('title', 'some-title')
  })
})
