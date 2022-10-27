import styled from '@emotion/styled'
import { CalendarIcon } from '@ltht-react/icon'
import { render, screen } from '@testing-library/react'

describe('Calendar Icon', () => {
  it('Renders', () => {
    render(<CalendarIcon size="small" />)
  })

  it('Has the right class name', () => {
    render(<CalendarIcon size="small" />)

    expect(screen.getByRole('img', { hidden: true })).toHaveClass('icon__calendar')
  })

  it('Can be styled', () => {
    const StyledIcon = styled(CalendarIcon)`
      color: pink;
    `

    render(<StyledIcon size="small" data-testid="123abc" />)

    expect(screen.getByTestId('123abc')).toHaveStyle({ color: 'pink' })
  })

  it('Can be given html attributes', () => {
    render(<CalendarIcon size="small" data-testid="123abc" title="some-title" />)

    expect(screen.getByTestId('123abc')).toHaveAttribute('title', 'some-title')
  })
})
