import { Story } from '@storybook/react'
import { Daypicker } from '@ltht-react/input'
import Card from '@ltht-react/card'
// TODO figure out how to get css styles into functional comp.
import 'react-day-picker/dist/style.css'

const getOneYearBeforeDate = (date: Date) => {
  const newDate = new Date()
  newDate.setFullYear(date.getFullYear() - 1)

  return newDate
}

const changeHandler = (date: Date | undefined) => {
  // eslint-disable-next-line no-console
  console.log(`Handler change to :  ${date?.toDateString()}`)
}

// eslint-disable-next-line import/prefer-default-export
export const DaypickerIconInput: Story = () => {
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

// eslint-disable-next-line import/prefer-default-export
export const DaypickerNoIconInput: Story = () => {
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
