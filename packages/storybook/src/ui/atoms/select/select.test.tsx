import { render, screen } from '@testing-library/react'
import userEvent from '@testing-library/user-event'
import Select from '@ltht-react/select'
import { FC, useState } from 'react'

const mockOptions = [
  {
    value: 'option-1',
    label: 'Option 1',
  },
  {
    value: 'option-2',
    label: 'Option 2',
  },
  {
    value: 'option-3',
    label: 'Option 3',
  },
]

const TestWrapper: FC<ITestWrapperProps> = ({ initialValue, onSelect }) => {
  const [value, setValue] = useState<string | undefined>(initialValue)

  return (
    <Select
      options={mockOptions}
      value={value}
      onChange={(e) => {
        setValue(e.target.value)
        onSelect && onSelect(e)
      }}
    />
  )
}
interface ITestWrapperProps {
  initialValue?: string
  onSelect?: (e: any) => void
}

describe('<Select />', () => {
  it('Renders', () => {
    render(<Select options={mockOptions} value="option-1" required={false} />)
  })

  it('Displays the active option when that option is clicked', async () => {
    render(<TestWrapper initialValue={mockOptions[0].value} />)

    userEvent.selectOptions(await screen.findByDisplayValue('Option 1'), 'Option 2')

    await screen.findByDisplayValue('Option 2')
  })

  it('Should call back when an option is clicked', async () => {
    const callbackMock = jest.fn()

    render(<TestWrapper initialValue={mockOptions[0].value} onSelect={callbackMock} />)

    userEvent.selectOptions(await screen.findByDisplayValue('Option 1'), 'Option 3')

    expect(callbackMock).toHaveBeenCalledWith(
      expect.objectContaining({ target: expect.objectContaining({ value: 'option-3' }) })
    )
  })
})
