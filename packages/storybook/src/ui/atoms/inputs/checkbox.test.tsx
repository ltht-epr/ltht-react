import { Checkbox } from '@ltht-react/input'
import { render, screen } from '@testing-library/react'
import userEvent from '@testing-library/user-event'

describe('checkbox', () => {
  it('should show a label', async () => {
    render(
      <Checkbox onChange={jest.fn()} checked={false} id="checkbox-id">
        Checkbox label
      </Checkbox>
    )

    await screen.findByText('Checkbox label')
  })

  it('should call back with the opposite value when you click the label', async () => {
    const callback = jest.fn()

    render(
      <Checkbox onChange={callback} checked={false} id="checkbox-id">
        Checkbox label
      </Checkbox>
    )

    const label = await screen.findByText('Checkbox label')

    await userEvent.click(label)

    expect(callback).toHaveBeenLastCalledWith(expect.objectContaining({ target: expect.anything() }))
  })

  it('should call back with the opposite value when you click the checkbox', async () => {
    const callback = jest.fn()

    render(
      <Checkbox onChange={callback} checked={false} id="checkbox-id">
        Checkbox label
      </Checkbox>
    )

    const input = await screen.findByLabelText('Checkbox label')

    await userEvent.click(input)

    expect(callback).toHaveBeenLastCalledWith(
      expect.objectContaining({ target: expect.objectContaining({ checked: expect.anything() }) })
    )
  })

  it('should expose the checked state for assistive technology', async () => {
    render(
      <Checkbox onChange={jest.fn()} checked={false} id="checkbox-id">
        Checkbox label
      </Checkbox>
    )

    const input = await screen.findByLabelText('Checkbox label')

    expect(input).toHaveAttribute('aria-checked', 'false')
  })
})
