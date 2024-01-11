import { Button } from '@ltht-react/button'
import { render, screen } from '@testing-library/react'
import userEvent from '@testing-library/user-event'

describe('Buttons', () => {
  it('Is findable by role in the accessibility tree', () => {
    render(<Button type="button">Some Mock Text</Button>)

    expect(screen.getByRole('button', { name: /Some Mock Text/ })).toBeVisible()
  })

  it('Still spreads the value prop down as children for backwards compatibility', () => {
    render(<Button type="button" value="Some Mock Text" />)

    expect(screen.getByRole('button', { name: /Some Mock Text/ })).toBeVisible()
  })

  it('Extends the behaviour of a normal HTML Button', async () => {
    const mockOnClick = jest.fn()

    render(
      <Button type="button" onClick={mockOnClick} id="123abc">
        Some Mock Text
      </Button>
    )

    expect(screen.getByRole('button')).toHaveAttribute('id', '123abc')

    await userEvent.click(screen.getByRole('button'))

    expect(mockOnClick).toHaveBeenCalled()
  })
})
