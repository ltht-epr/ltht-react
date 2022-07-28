import { render, screen } from '@testing-library/react'
import { DaypickerRange, fromDaypickerRangeProps, toDaypickerRangeProps } from '@ltht-react/input'
import { format } from 'date-fns'

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

const fromDate = new Date()
fromDate.setMonth(fromDate.getMonth() - 1)
const toDate = new Date()
toDate.setMonth(toDate.getMonth() + 1)

const minDate = getOneYearBeforeDate(fromDate)
const maxDate = getOneYearAfterDate(toDate)

const fromProps: fromDaypickerRangeProps = {
  showIcon: false,
  label: 'From Date',
  dayFormat: 'dd-MMM-yyyy',
  initialDate: fromDate,
  minDate,
  changeHandler: mockOnClick1,
}

const toProps: toDaypickerRangeProps = {
  showIcon: false,
  label: 'To Date',
  dayFormat: 'dd-MMM-yyyy',
  initialDate: toDate,
  maxDate,
  changeHandler: mockOnClick2,
}

// TODO issue with focusTrap and click events

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

  // it('Daypicker range button icon clicked should open datepicker dialog', () => {
  //   // const button1 = screen.getAllByRole('button')
  //   // console.log(prettyDOM(button1))
  //   // fireEvent.click(button1)
  //   expect(screen.queryAllByRole('dialog')).toBeInTheDocument()
  //   expect(screen.queryAllByRole('dialog')).toHaveLength(1)
  // })
})
