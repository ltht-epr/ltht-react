import { Story } from '@storybook/react'
import { Daypicker } from '@ltht-react/input'
import Card from '@ltht-react/card'
// TODO figure out how to get css styles into functional comp.
import 'react-day-picker/dist/style.css'

// eslint-disable-next-line import/prefer-default-export
export const DaypickerInput: Story = () => {
  // const initialDate = new Date()
  const maxDate = new Date()
  maxDate.setFullYear(maxDate.getFullYear() + 1)

  return (
    <Card>
      <Card.Header>
        <Daypicker dayFormat="" />
      </Card.Header>
    </Card>
  )
}
