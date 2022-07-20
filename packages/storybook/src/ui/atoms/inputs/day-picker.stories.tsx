import { Story } from '@storybook/react'
import { DayPickerInput } from '@ltht-react/input'
import Card from '@ltht-react/card'
//TODO figure out how to get css styles into functional comp.
import 'react-day-picker/dist/style.css'

// const changeHandler = (day: Date) => {
//   console.log(day.toDateString)
// }

// const get2YearsBeforeDate = (date: Date) => {
//   const newDate = new Date()
//   newDate.setFullYear(date.getFullYear() - 2)

//   return newDate
// }

const DayPicker: Story = () => {
  // const initialDate = new Date()
  const maxDate = new Date()
  maxDate.setFullYear(maxDate.getFullYear() + 1)

  return (
    <Card>
      <Card.Header>
        <DayPickerInput dayFormat="" />
      </Card.Header>
    </Card>
  )
}

export default DayPicker
