/* eslint-disable jsx-a11y/label-has-associated-control */
import { Toggle } from '@ltht-react/input'
import { render, screen } from '@testing-library/react'
import userEvent from '@testing-library/user-event'
import { FC, useState } from 'react'

const TestHarness: FC<ITestHarnessProps> = ({ disabled, checked }) => {
  const [toggle, setToggle] = useState<boolean>(checked ?? false)

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

interface ITestHarnessProps {
  disabled?: boolean
  checked?: boolean
}

describe('toggle input', () => {
  it('should start with a default value', async () => {
    render(<TestHarness checked />)

    expect(await screen.findByLabelText('Click me')).toBeChecked()
  })

  it('should change when clicked', async () => {
    render(<TestHarness disabled={false} />)

    const label = await screen.findByText('Click me')
    const input = await screen.findByLabelText('Click me')

    expect(input).not.toBeDisabled()
    expect(input).not.toBeChecked()

    userEvent.click(label)

    expect(input).toBeChecked()
  })

  it('should not let you change value when disabled', async () => {
    render(<TestHarness disabled />)

    const label = await screen.findByText('Click me')
    const input = await screen.findByLabelText('Click me')

    expect(input).toBeDisabled()

    userEvent.click(label)

    expect(input).not.toBeChecked()
  })

  it('should set a title attribute of "On" when it is checked', async () => {
    render(<TestHarness checked />)

    screen.debug()
    expect(await screen.findByLabelText('Click me')).toHaveAttribute('title', 'On')
  })

  it('should set a title attribute of "Off" when it is not checked', async () => {
    render(<TestHarness checked={false} />)

    expect(await screen.findByLabelText('Click me')).toHaveAttribute('title', 'Off')
  })
})
