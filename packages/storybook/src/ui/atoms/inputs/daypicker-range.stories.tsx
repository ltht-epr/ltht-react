import { Story } from '@storybook/react'
import { DaypickerRange, fromDaypickerRangeProps, toDaypickerRangeProps } from '@ltht-react/input'
import Card from '@ltht-react/card'
// TODO figure out how to get css styles into functional comp.
import 'react-day-picker/dist/style.css'
import styled from '@emotion/styled'

const Container = styled.div`
  width: 300px;
`

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

const fromChangeHandler = (date: Date | undefined) => {
  // eslint-disable-next-line no-console
  console.log(`From Handler change to :  ${date?.toDateString()}`)
}

const toChangeHandler = (date: Date | undefined) => {
  // eslint-disable-next-line no-console
  console.log(`To Handler change to :  ${date?.toDateString()}`)
}

// eslint-disable-next-line import/prefer-default-export
export const DaypickerRangeIconInput: Story = () => {
  const fromDate = new Date()
  fromDate.setMonth(fromDate.getMonth() - 1)
  const toDate = new Date()
  toDate.setMonth(toDate.getMonth() + 1)

  const minDate = getOneYearBeforeDate(fromDate)
  const maxDate = getOneYearAfterDate(toDate)

  const fromProps: fromDaypickerRangeProps = {
    showIcon: true,
    label: 'From Date',
    dayFormat: 'dd-MMM-yyyy',
    initialDate: fromDate,
    minDate,
    changeHandler: fromChangeHandler,
  }

  const toProps: toDaypickerRangeProps = {
    showIcon: true,
    label: 'To Date',
    dayFormat: 'dd-MMM-yyyy',
    initialDate: toDate,
    maxDate,
    changeHandler: toChangeHandler,
  }

  return (
    <Card>
      <Card.Header>
        <Container>
          <DaypickerRange fromProps={fromProps} toProps={toProps} />
        </Container>
      </Card.Header>
    </Card>
  )
}

// eslint-disable-next-line import/prefer-default-export
export const DaypickerRangeNoIconInput: Story = () => {
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
    changeHandler: fromChangeHandler,
  }

  const toProps: toDaypickerRangeProps = {
    showIcon: false,
    label: 'To Date',
    dayFormat: 'dd-MMM-yyyy',
    initialDate: toDate,
    maxDate,
    changeHandler: toChangeHandler,
  }

  return (
    <Card>
      <Card.Header>
        <Container>
          <DaypickerRange fromProps={fromProps} toProps={toProps} />
        </Container>
      </Card.Header>
    </Card>
  )
}
