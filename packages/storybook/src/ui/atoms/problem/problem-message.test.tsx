import { ProblemMessage } from '@ltht-react/problem'
import { render, screen } from '@testing-library/react'

describe('Problem Message', () => {
  it('Renders some error text', () => {
    render(<ProblemMessage text="Some mock error text" type="warning" />)

    expect(screen.getByText('Some mock error text')).toBeVisible()
  })

  it('Renders an amber symbol for warnings', () => {
    render(<ProblemMessage text="Some mock error text" type="warning" />)

    expect(screen.getByRole('img', { hidden: true })).toHaveClass('icon__exclamation')
    expect(screen.getByRole('img', { hidden: true })).toHaveStyle({ color: 'rgb(237, 139, 0)' })
  })

  it('Renders a red symbol for warnings', () => {
    render(<ProblemMessage text="Some mock error text" type="error" />)

    expect(screen.getByRole('img', { hidden: true })).toHaveClass('icon__exclamation')
    expect(screen.getByRole('img', { hidden: true })).toHaveStyle({ color: 'rgb(218, 41, 28)' })
  })
})
