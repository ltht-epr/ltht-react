import { Meta, StoryObj } from '@storybook/react'
import { DaypickerRange, fromDaypickerRangeProps, toDaypickerRangeProps } from '@ltht-react/input'
import Card from '@ltht-react/card'
import 'react-day-picker/dist/style.css'
import styled from '@emotion/styled'
import { FC } from 'react'

const meta: Meta = {
  component: DaypickerRange,
}

export default meta

const Container = styled.div`
  width: 300px;
`

export const DaypickerRangeIconInput: StoryObj<typeof DaypickerRange> = {
  render: () => <DaypickerRangeIconInputStory />,
}
export const DaypickerRangeNoIconInput: StoryObj<typeof DaypickerRange> = {
  render: () => <DaypickerRangeNoIconInputStory />,
}

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

const DaypickerRangeIconInputStory: FC = () => {
  // const fromDate = new Date()
  // fromDate.setMonth(fromDate.getMonth() - 1)
  // const toDate = new Date()
  // toDate.setMonth(toDate.getMonth() + 1)

  const fromDate = new Date()
  fromDate.setDate(1)
  const toDate = new Date()
  toDate.setDate(28)

  // const minDate = getOneYearBeforeDate(fromDate)
  // const maxDate = getOneYearAfterDate(toDate)

  const fromProps: fromDaypickerRangeProps = {
    showIcon: true,
    label: 'From Date',
    dayFormat: 'dd-MMM-yyyy',
    initialDate: fromDate,
    minDate: fromDate,
    changeHandler: fromChangeHandler,
  }

  const toProps: toDaypickerRangeProps = {
    showIcon: true,
    label: 'To Date',
    dayFormat: 'dd-MMM-yyyy',
    initialDate: toDate,
    maxDate: toDate,
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

const DaypickerRangeNoIconInputStory: FC = () => {
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
