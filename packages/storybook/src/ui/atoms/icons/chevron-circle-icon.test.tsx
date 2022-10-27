import { render, screen } from '@testing-library/react'

import { ChevronCircleIcon } from '@ltht-react/icon'
import styled from '@emotion/styled'

describe('Chevron Icon', () => {
  it('Renders', () => {
    render(<ChevronCircleIcon direction="up" size="medium" />)
  })

  it('Has the right class name', () => {
    render(<ChevronCircleIcon direction="up" size="small" />)

    expect(screen.getByRole('img', { hidden: true })).toHaveClass('icon__chevron-circle')
  })

  it('Can be styled', () => {
    const StyledIcon = styled(ChevronCircleIcon)`
      color: pink;
    `

    render(<StyledIcon direction="up" size="small" data-testid="123abc" />)

    expect(screen.getByTestId('123abc')).toHaveStyle({ color: 'pink' })
  })

  it('Can be given html attributes', () => {
    render(<ChevronCircleIcon direction="up" size="small" data-testid="123abc" title="some-title" />)

    expect(screen.getByTestId('123abc')).toHaveAttribute('title', 'some-title')
  })
})
