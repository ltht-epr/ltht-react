import { render, screen } from '@testing-library/react'
import userEvent from '@testing-library/user-event'
import Select from '@ltht-react/select'

const mockOnClick1 = jest.fn()
const mockOnClick2 = jest.fn()
const mockOnClick3 = jest.fn()

const mockOptions = [
  {
    id: 'option-1',
    displayName: 'Option 1',
    onClick: () => mockOnClick1,
  },
  {
    id: 'option-2',
    displayName: 'Option 2',
    onClick: () => mockOnClick2,
  },
  {
    id: 'option-3',
    displayName: 'Option 3',
    onClick: () => mockOnClick3,
  },
]

describe('<Select />', () => {
  it('Renders', () => {
    render(
      <Select>
        {mockOptions.map(({ id, displayName, onClick }) => (
          <Select.Option key={`select-option-${id}`} id={id} onClick={onClick} active={false}>
            {displayName}
          </Select.Option>
        ))}
      </Select>
    )
  })

  it('Displays the active option when that option is clicked', () => {
    render(
      <Select>
        {mockOptions.map(({ id, displayName, onClick }) => (
          <Select.Option key={`select-option-${id}`} id={id} onClick={onClick} active={false}>
            {displayName}
          </Select.Option>
        ))}
      </Select>
    )
  })

  describe('Open/Close', () => {
    beforeEach(() => {
      render(
        <Select>
          {mockOptions.map(({ id, displayName, onClick }) => (
            <Select.Option key={`select-option-${id}`} id={id} onClick={onClick} active={false}>
              {displayName}
            </Select.Option>
          ))}
        </Select>
      )
    })

    it('Should open and close when the dropdown is clicked', () => {
      expect(screen.getByTestId('select-options')).not.toBeVisible()

      // Open dropdown
      userEvent.click(screen.getByTestId('select-trigger'))
      expect(screen.getByTestId('select-options')).toBeVisible()

      mockOptions.forEach(({ displayName }) => expect(screen.getByText(displayName)).toBeInTheDocument())

      // Close dropdown
      userEvent.click(screen.getByTestId('select-trigger'))
      expect(screen.getByTestId('select-options')).not.toBeVisible()
    })

    it('Should close the dropdown when an option is clicked', () => {
      // Open dropdown
      userEvent.click(screen.getByTestId('select-trigger'))
      expect(screen.getByTestId('select-options')).toBeVisible()

      userEvent.click(screen.getByText('Option 1'))
      expect(screen.getByTestId('select-options')).not.toBeVisible()
    })

    it('Should close the dropdown when the "Enter" key is pressed', () => {
      // Open dropdown
      userEvent.click(screen.getByTestId('select-trigger'))
      expect(screen.getByTestId('select-options')).toBeVisible()

      userEvent.type(screen.getByTestId('select-trigger'), '{esc}', { skipClick: true })

      expect(screen.getByTestId('select-options')).not.toBeVisible()
    })

    it('Should close the dropdown when the user clicks outside of the element', () => {
      // Open dropdown
      userEvent.click(screen.getByTestId('select-trigger'))
      expect(screen.getByTestId('select-options')).toBeVisible()

      userEvent.click(document.body)

      expect(screen.getByTestId('select-options')).not.toBeVisible()
    })
  })
})
