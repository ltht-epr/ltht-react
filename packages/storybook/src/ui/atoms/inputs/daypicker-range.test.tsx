import { render, screen } from '@testing-library/react'
import { DaypickerRange, fromDaypickerRangeProps, toDaypickerRangeProps } from '@ltht-react/input'
import { format } from 'date-fns'
import userEvent from '@testing-library/user-event'

const mockOnClick1 = jest.fn()
const mockOnClick2 = jest.fn()

const getOneYearBeforeDate = (date: Date) => {
  const newDate = new Date()
  newDate.setFullYear(date.getFullYear() - 1)

  return newDate
}

const getOneYearAfterDate = (date: Date) => {
  const newDate = new Date()
  newDate.setFullYear(date.getFullYear() + 1)

  return newDate
}

const dayFormat = 'dd-MMM-yyyy'
const fromDate = new Date()
fromDate.setDate(1)
const toDate = new Date()
toDate.setDate(28)

const minDate = getOneYearBeforeDate(fromDate)
const maxDate = getOneYearAfterDate(toDate)

const fromProps: fromDaypickerRangeProps = {
  showIcon: true,
  label: 'From Date',
  dayFormat,
  initialDate: fromDate,
  minDate,
  changeHandler: mockOnClick1,
}

const toProps: toDaypickerRangeProps = {
  showIcon: true,
  label: 'To Date',
  dayFormat,
  initialDate: toDate,
  maxDate,
  changeHandler: mockOnClick2,
}

describe('<DaypickerRange showIcon/>', () => {
  beforeEach(() => {
    render(<DaypickerRange fromProps={fromProps} toProps={toProps} />)
  })

  it('Daypicker range two inputs should exist with initial text, not the mins or maxs', () => {
    const input1 = screen.getByDisplayValue(format(fromProps.initialDate ?? new Date(), fromProps.dayFormat))
    const input2 = screen.getByDisplayValue(format(toProps.initialDate ?? new Date(), toProps.dayFormat))

    expect(input1).toBeInTheDocument()
    expect(input2).toBeInTheDocument()
    expect(screen.queryByDisplayValue(format(minDate, fromProps.dayFormat))).toBeNull()
    expect(screen.queryByDisplayValue(format(maxDate, toProps.dayFormat))).toBeNull()
    expect(screen.queryByRole('dialog')).not.toBeInTheDocument()
  })

  it('Daypicker range first button clicked should open one datepicker dialog', async () => {
    const buttons = screen.getAllByRole('button')
    await userEvent.click(buttons[0])
    expect(screen.getByRole('dialog')).toBeInTheDocument()
    expect(screen.queryAllByRole('dialog')).toHaveLength(1)
  })

  it('Daypicker range from date selected changes input text and value, and changes minDate for ToPicker', async () => {
    const buttons = screen.getAllByRole('button')
    await userEvent.click(buttons[0])
    const newDay = 10

    const newDateText = screen.getByText(newDay)
    const cell = newDateText.closest('button')
    if (cell) {
      expect(cell).not.toBeNull()
      await userEvent.click(cell)
      expect(mockOnClick1).toBeCalledTimes(1)
      const newDate = new Date()
      newDate.setDate(newDay)
      const input = screen.getByDisplayValue(format(newDate, dayFormat))
      expect(input).toBeInTheDocument()
      expect(input).toHaveValue(format(newDate, dayFormat))

      // changed ToPicker...
      await userEvent.click(buttons[1])
      expect(screen.queryAllByRole('dialog')).toHaveLength(1)
      const disabledDay = 9
      const disabledDateText = screen.getByText(disabledDay)
      const disabledCell = disabledDateText.closest('button')
      if (disabledCell) {
        expect(disabledCell).toHaveAttribute('disabled')
        await userEvent.click(disabledCell)
        expect(mockOnClick2).toBeCalledTimes(0)
        const disabledDate = new Date()
        disabledDate.setDate(disabledDay)
        const input = screen.queryByDisplayValue(format(disabledDate, dayFormat))
        expect(input).toBeNull()
      }
    } else {
      throw new Error('No button found')
    }
  })
})
