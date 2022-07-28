import { fireEvent, render, screen } from '@testing-library/react'
import { Daypicker } from '@ltht-react/input'
import { format } from 'date-fns'
import Card from '@ltht-react/card'

const mockOnClick1 = jest.fn()

const dayFormat = 'dd-MMM-yyyy'
const initialDate = new Date()
initialDate.setDate(15)
const maxDate = new Date()
const minDate = new Date()
maxDate.setMonth(maxDate.getMonth() + 1)
minDate.setMonth(minDate.getMonth() - 1)

describe('<Daypicker showIcon/>', () => {
  beforeEach(() => {
    render(<Daypicker dayFormat={dayFormat} changeHandler={mockOnClick1} initialDate={initialDate} showIcon />)
  })

  it('Daypicker input should exist with initial text, not the mins or maxs', () => {
    const input = screen.getByDisplayValue(format(initialDate, dayFormat))

    expect(input).toBeInTheDocument()
    expect(screen.queryByDisplayValue(format(minDate, dayFormat))).toBeNull()
    expect(screen.queryByDisplayValue(format(maxDate, dayFormat))).toBeNull()
    expect(screen.queryByRole('dialog')).not.toBeInTheDocument()
  })

  it('Daypicker input clicked should NOT open datepicker dialog', () => {
    const input = screen.getByDisplayValue(format(initialDate, dayFormat))
    fireEvent.click(input)
    // console.log(prettyDOM(button))
    expect(screen.queryByRole('dialog')).not.toBeInTheDocument()
  })

  it('Daypicker button icon clicked should open datepicker dialog', async () => {
    const button = screen.getByRole('button')
    fireEvent.click(button)
    expect(screen.getByRole('dialog')).toBeInTheDocument()
  })

  it('Daypicker button icon double clicked should close datepicker dialog', () => {
    const button = screen.getByRole('button')
    fireEvent.dblClick(button)
    expect(screen.queryByRole('dialog')).not.toBeInTheDocument()
  })

  it('Daypicker button icon triple clicked should open datepicker dialog', () => {
    const button = screen.getByRole('button')
    fireEvent.dblClick(button)
    fireEvent.click(button)
    expect(screen.getByRole('dialog')).toBeInTheDocument()
  })

  it('Daypicker new date selected changes input text and value, and triggers changeHandler', () => {
    const input = screen.getByDisplayValue(format(initialDate, dayFormat))
    expect(input).toBeInTheDocument()
    expect(input).toHaveValue(format(initialDate, dayFormat))
    const button = screen.getByRole('button')
    fireEvent.click(button)
    const newDay = 16
    const newDate = screen.getByText(newDay)
    const cell = newDate.closest('button')
    if (cell) {
      expect(cell).not.toBeNull()
      fireEvent.click(cell)
      // console.log(prettyDOM(cell))
      expect(mockOnClick1).toBeCalledTimes(1)
      const newDate = new Date()
      newDate.setDate(newDay)
      const input = screen.getByDisplayValue(format(newDate, dayFormat))
      expect(input).toBeInTheDocument()
      expect(input).toHaveValue(format(newDate, dayFormat))
    } else {
      throw new Error('No button found')
    }
  })
})

describe('<Daypicker showIcon=false/>', () => {
  beforeEach(() => {
    render(
      <Card>
        <Card.Header>
          <Daypicker dayFormat={dayFormat} changeHandler={mockOnClick1} initialDate={initialDate} showIcon={false} />
        </Card.Header>
      </Card>
    )
  })

  it('Daypicker input should exist with initial text, not the mins or maxs', () => {
    const input = screen.getByDisplayValue(format(initialDate, dayFormat))

    expect(input).toBeInTheDocument()
    expect(screen.queryByDisplayValue(format(minDate, dayFormat))).toBeNull()
    expect(screen.queryByDisplayValue(format(maxDate, dayFormat))).toBeNull()
  })

  it('Daypicker input clicked should open datepicker dialog', () => {
    const button = screen.queryByRole('button')
    expect(button).toBeNull()
    const input = screen.getByDisplayValue(format(initialDate, dayFormat))
    fireEvent.click(input)
    expect(screen.getByRole('dialog')).toBeInTheDocument()
  })
})

describe('<Daypicker pickerOpen />', () => {
  beforeEach(() => {
    render(
      <Daypicker
        dayFormat={dayFormat}
        changeHandler={mockOnClick1}
        initialDate={initialDate}
        pickerOpen
        showIcon={false}
      />
    )
  })

  it('Daypicker input should exist with initial text, not the mins or maxs', () => {
    const input = screen.getByDisplayValue(format(initialDate, dayFormat))
    expect(input).toBeInTheDocument()
    expect(screen.queryByDisplayValue(format(minDate, dayFormat))).toBeNull()
    expect(screen.queryByDisplayValue(format(maxDate, dayFormat))).toBeNull()
  })

  it('Daypicker input clicked should open datepicker dialog', () => {
    expect(screen.getByRole('dialog')).toBeInTheDocument()
  })
})
