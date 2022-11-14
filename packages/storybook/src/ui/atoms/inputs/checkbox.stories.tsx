import { useState } from 'react'
import { Story } from '@storybook/react'
import { Checkbox } from '@ltht-react/input'
import Card from '@ltht-react/card'

// eslint-disable-next-line import/prefer-default-export
export const CheckboxInput: Story = () => {
  const [checkbox, setCheckbox] = useState(false)

  return (
    <>
      <Card>
        <Card.Header>Checkbox with label</Card.Header>
        <Card.Body>
          <Checkbox onChange={(e) => setCheckbox(e.target.checked)} id="storyCheckbox" checked={checkbox}>
            Click me
          </Checkbox>
        </Card.Body>
      </Card>
    </>
  )
}
