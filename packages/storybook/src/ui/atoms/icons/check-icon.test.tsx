import styled from '@emotion/styled'
import { CheckIcon } from '@ltht-react/icon'
import { render, screen } from '@testing-library/react'

describe('Check Icon', () => {
  it('Renders', () => {
    render(<CheckIcon size="small" />)
  })

  it('Has the right class name', () => {
    render(<CheckIcon size="small" />)

    expect(screen.getByRole('img', { hidden: true })).toHaveClass('icon__check')
  })

  it('Can be styled', () => {
    const StyledIcon = styled(CheckIcon)`
      color: pink;
    `

    render(<StyledIcon size="small" data-testid="123abc" />)

    expect(screen.getByTestId('123abc')).toHaveStyle({ color: 'pink' })
  })

  it('Can be given html attributes', () => {
    render(<CheckIcon size="small" data-testid="123abc" title="some-title" />)

    expect(screen.getByTestId('123abc')).toHaveAttribute('title', 'some-title')
  })
})
