import Card from '@ltht-react/card'
import { ErrorDescription } from '@ltht-react/error'
import { Story } from '@storybook/react'

export const SingleError: Story = () => (
  <Card>
    <Card.Header>Example with a single error message</Card.Header>
    <Card.Body>
      <ErrorDescription errors={[{ text: 'Error: Foobar went wrong.', type: 'error' }]} />
    </Card.Body>
  </Card>
)

export const SingleWarning: Story = () => (
  <Card>
    <Card.Header>Example with a single warning message</Card.Header>
    <Card.Body>
      <ErrorDescription errors={[{ text: 'Warning: Foobar might have gone wrong.', type: 'warning' }]} />
    </Card.Body>
  </Card>
)

export const MultipleErrors: Story = () => (
  <Card>
    <Card.Header>Example with multiple warning/error messages</Card.Header>
    <Card.Body>
      <ErrorDescription
        errors={[
          { text: 'Error: Foobar 1 went wrong.', type: 'error' },
          { text: 'Warning: Foobar 2 might have gone wrong.', type: 'warning' },
          { text: 'Error: Foobar 3 went wrong.', type: 'error' },
          { text: 'Error: Foobar 4 went wrong.', type: 'error' },
          { text: 'Error: Foobar 5 went wrong.', type: 'error' },
          { text: 'Error: Foobar 6 went wrong.', type: 'error' },
        ]}
      />
    </Card.Body>
  </Card>
)

export default { title: 'UI/Molecules/Error Description' }
