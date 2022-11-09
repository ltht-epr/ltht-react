import { Story } from '@storybook/react'
import { TextInput as Input } from '@ltht-react/input'
import Card from '@ltht-react/card'

// eslint-disable-next-line import/prefer-default-export
export const TextInput: Story = () => (
  <>
    <Card>
      <Card.Header>Search input</Card.Header>
      <Card.Body>
        <Input placeholder="Search" type="search" icon={{ size: 'medium', type: 'search' }} />
      </Card.Body>
    </Card>
    <Card>
      <Card.Header>No icon</Card.Header>
      <Card.Body>
        <Input placeholder="placeholder..." type="text" />
      </Card.Body>
    </Card>
  </>
)
