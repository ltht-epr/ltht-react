/* eslint-disable no-console */
import { Meta, StoryObj } from '@storybook/react'
import { Daypicker } from '@ltht-react/input'
import Card from '@ltht-react/card'
import 'react-day-picker/dist/style.css'
import { FC } from 'react'

const meta: Meta = {
  component: Daypicker,
}

export default meta

export const DaypickerIconInput: StoryObj<typeof Daypicker> = {
  render: () => <DaypickerIconInputStory />,
}

export const DaypickerNoIconInput: StoryObj<typeof Daypicker> = {
  render: () => <DaypickerNoIconInputStory />,
}

const getOneYearBeforeDate = (date: Date) => {
  const newDate = new Date()
  newDate.setFullYear(date.getFullYear() - 1)

  return newDate
}

const changeHandler = (date: Date | undefined) => {
  console.log(`Handler change to :  ${date?.toDateString()}`)
}

const DaypickerIconInputStory: FC = () => {
  const initialDate = new Date()
  const maxDate = new Date()
  maxDate.setMonth(maxDate.getMonth() + 1)
  const minDate = getOneYearBeforeDate(new Date())

  return (
    <Card>
      <Card.Header>
        <Daypicker
          showIcon
          label="Correspondance Date"
          dayFormat="dd-MMM-yyyy"
          initialDate={initialDate}
          maxDate={maxDate}
          minDate={minDate}
          changeHandler={changeHandler}
        />
      </Card.Header>
    </Card>
  )
}

const DaypickerNoIconInputStory: FC = () => {
  const initialDate = new Date()
  const maxDate = new Date()
  maxDate.setMonth(maxDate.getMonth() + 1)
  const minDate = getOneYearBeforeDate(new Date())

  return (
    <Card>
      <Card.Header>
        <Daypicker
          showIcon={false}
          label="Correspondance Date"
          dayFormat="dd-MMM-yyyy"
          initialDate={initialDate}
          maxDate={maxDate}
          minDate={minDate}
          changeHandler={changeHandler}
        />
      </Card.Header>
    </Card>
  )
}
