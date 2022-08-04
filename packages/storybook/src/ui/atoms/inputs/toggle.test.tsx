/* eslint-disable jsx-a11y/label-has-associated-control */
import { Toggle } from '@ltht-react/input'
import { render, screen } from '@testing-library/react'
import userEvent from '@testing-library/user-event'
import { useState } from 'react'

const TestHarness = ({ disabled }: { disabled: boolean }) => {
  const [toggle, setToggle] = useState<boolean>(false)

  return (
    <>
      <Toggle
        checked={toggle}
        disabled={disabled}
        onChange={(e) => setToggle((e.target as HTMLInputElement).checked)}
        id="toggle-1"
      />
      <label htmlFor="toggle-1">Click me</label>
    </>
  )
}

describe('toggle input', () => {
  it('should start with a default value', () => {
    const { container } = render(<Toggle checked />)

    expect(container.querySelector(':checked')).not.toBeNull()
  })

  it('should change when clicked', async () => {
    const { container } = render(<TestHarness disabled={false} />)

    expect(container.querySelector(':checked')).toBeNull()

    const label = await screen.findByText('Click me')
    userEvent.click(label)

    expect(container.querySelector(':checked')).not.toBeNull()
  })

  it('should not let you change value when disabled', async () => {
    const { container } = render(<TestHarness disabled />)

    expect(container.querySelector(':checked')).toBeNull()

    const label = await screen.findByText('Click me')
    userEvent.click(label)

    expect(container.querySelector(':checked')).toBeNull()
  })
})
