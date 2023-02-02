import { render, screen } from '@testing-library/react'
import { SingleError } from '@ltht-react/root'

describe('Single Error', () => {
  it('Renders some error text', () => {
    render(<SingleError text="Some mock error text" type="warning" />)

    expect(screen.getByText('Some mock error text')).toBeVisible()
  })

  it('Renders an amber symbol for warnings', () => {
    render(<SingleError text="Some mock error text" type="warning" />)

    expect(screen.getByRole('img', { hidden: true })).toHaveClass('icon__exclamation')
    expect(screen.getByRole('img', { hidden: true })).toHaveStyle({ color: 'amber' })
  })

  it('Renders a red symbol for warnings', () => {
    render(<SingleError text="Some mock error text" type="error" />)

    expect(screen.getByRole('img', { hidden: true })).toHaveClass('icon__exclamation')
    expect(screen.getByRole('img', { hidden: true })).toHaveStyle({ color: 'red' })
  })
})
