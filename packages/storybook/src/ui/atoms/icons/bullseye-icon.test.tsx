import styled from '@emotion/styled'
import { BullseyeIcon } from '@ltht-react/icon'
import { render, screen } from '@testing-library/react'

describe('Bullseye Icon', () => {
  it('Renders', () => {
    render(<BullseyeIcon size="small" />)
  })

  it('Has the right class name', () => {
    render(<BullseyeIcon size="small" />)

    expect(screen.getByRole('img', { hidden: true })).toHaveClass('icon__bullseye')
  })

  it('Can be styled', () => {
    const StyledIcon = styled(BullseyeIcon)`
      color: pink;
    `

    render(<StyledIcon size="small" data-testid="123abc" />)

    expect(screen.getByTestId('123abc')).toHaveStyle({ color: 'pink' })
  })

  it('Can be given html attributes', () => {
    render(<BullseyeIcon size="small" data-testid="123abc" title="some-title" />)

    expect(screen.getByTestId('123abc')).toHaveAttribute('title', 'some-title')
  })
})
