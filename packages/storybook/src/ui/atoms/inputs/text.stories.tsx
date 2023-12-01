import { Meta, StoryObj } from '@storybook/react'
import { TextInput } from '@ltht-react/input'
import Card from '@ltht-react/card'
import { FC } from 'react'

const meta: Meta = {
  component: TextInput,
}

export default meta

export const Text: StoryObj<typeof TextInput> = {
  render: () => <TextInputStory />,
}

// eslint-disable-next-line import/prefer-default-export
export const TextInputStory: FC = () => (
  <>
    <Card>
      <Card.Header>Search input</Card.Header>
      <Card.Body>
        <TextInput placeholder="Search" type="search" icon={{ size: 'medium', type: 'search' }} />
      </Card.Body>
    </Card>
    <Card>
      <Card.Header>No icon</Card.Header>
      <Card.Body>
        <TextInput placeholder="placeholder..." type="text" />
      </Card.Body>
    </Card>
  </>
)
