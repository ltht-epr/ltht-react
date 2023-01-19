import { useState } from 'react'
import { Story } from '@storybook/react'
import { Checkbox } from '@ltht-react/input'
import Card from '@ltht-react/card'

// eslint-disable-next-line import/prefer-default-export
export const CheckboxInput: Story = () => {
  const [checkbox, setCheckbox] = useState<boolean>(false)
  const [checkbox1, setCheckbox1] = useState<boolean>(false)

  return (
    <>
      <Card>
        <Card.Header>Checkbox with label</Card.Header>
        <Card.Body>
          <h4>Standard Checkbox</h4>
          <Checkbox onChange={(e) => setCheckbox(e.target.checked)} id="storyCheckbox" checked={checkbox}>
            Click me
          </Checkbox>
          <br />
          <h4>Customised Checkbox</h4>
          <Checkbox
            onChange={(e) => setCheckbox1(e.target.checked)}
            id="storyCheckbox"
            checked={checkbox1}
            parentDivAttributes={{
              id: 'parentDiv',
              style: { backgroundColor: 'lime', padding: '2px' },
            }}
            labelAttributes={{
              style: {
                color: 'red',
              },
            }}
          >
            Click me
          </Checkbox>
        </Card.Body>
      </Card>
    </>
  )
}
