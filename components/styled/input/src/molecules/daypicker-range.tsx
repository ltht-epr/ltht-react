import styled from '@emotion/styled'
import { FC, HTMLAttributes, useState } from 'react'
import { Daypicker, DaypickerProps } from '../atoms'

const RangeContainer = styled.div`
  display: flex;
`

const PickerContainer = styled.div`
  flex: 1;
`

const DaypickerRange: FC<Props> = ({ fromProps, toProps }) => {
  if (fromProps.minDate && toProps.maxDate && fromProps.minDate > toProps.maxDate) {
    throw new Error(
      `Cannot initialise DaypickerRange where the minDate: ${fromProps.minDate?.toDateString()} > maxDate: ${toProps.maxDate?.toDateString()} `
    )
  }

  const [toMinDate, setToMinDate] = useState(fromProps.minDate)
  const [fromMaxDate, setFromMaxDate] = useState(toProps.maxDate)
  const [fromPickerOpen, setFromPickerOpen] = useState(fromProps.pickerOpen ?? false)
  const [toPickerOpen, setToPickerOpen] = useState(toProps.pickerOpen ?? false)

  const fromChangeHandler = (date: Date | undefined) => {
    fromProps.changeHandler && fromProps.changeHandler(date)
    setToMinDate(date)
  }

  const toChangeHandler = (date: Date | undefined) => {
    toProps.changeHandler && toProps.changeHandler(date)
    setFromMaxDate(date)
  }

  const toButtonHandler = (toPickerOpen: boolean) => {
    if (toPickerOpen) {
      setFromPickerOpen(false)
    }
  }

  const fromButtonHandler = (fromPickerOpen: boolean) => {
    if (fromPickerOpen) {
      setToPickerOpen(false)
    }
  }

  return (
    <RangeContainer>
      <PickerContainer>
        <Daypicker
          initialDate={fromProps.initialDate}
          showIcon={fromProps.showIcon}
          pickerOpen={fromPickerOpen}
          dayFormat={fromProps.dayFormat}
          label={fromProps.label}
          minDate={fromProps.minDate}
          maxDate={fromMaxDate}
          navigationNumberOfMonths={fromProps.navigationNumberOfMonths}
          changeHandler={fromChangeHandler}
          buttonHandler={fromButtonHandler}
        />
      </PickerContainer>
      <PickerContainer>
        <Daypicker
          initialDate={toProps.initialDate}
          pickerOpen={toPickerOpen}
          showIcon={toProps.showIcon}
          dayFormat={toProps.dayFormat}
          label={toProps.label}
          minDate={toMinDate}
          maxDate={toProps.maxDate}
          navigationNumberOfMonths={toProps.navigationNumberOfMonths}
          changeHandler={toChangeHandler}
          buttonHandler={toButtonHandler}
        />
      </PickerContainer>
    </RangeContainer>
  )
}

export type fromDaypickerRangeProps = Omit<DaypickerProps, 'maxDate'>
export type toDaypickerRangeProps = Omit<DaypickerProps, 'minDate'>

interface Props extends HTMLAttributes<HTMLDivElement> {
  fromProps: fromDaypickerRangeProps
  toProps: toDaypickerRangeProps
}

export default DaypickerRange
