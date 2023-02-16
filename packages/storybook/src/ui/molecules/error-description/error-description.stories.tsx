import Card from '@ltht-react/card'
import { ErrorDescription } from '@ltht-react/error'
import { Story } from '@storybook/react'
import {
  ErrorMessageOne,
  SixWarningsAndErrors,
  StackTraceError,
  WarningMessageOne,
  WarningMessageThree,
  WarningMessageTwo,
} from './error-description.fixtures'

export const SingleError: Story = () => (
  <Card>
    <Card.Header>Example with a single error message</Card.Header>
    <Card.Body>
      <ErrorDescription errors={[ErrorMessageOne]} />
    </Card.Body>
  </Card>
)

export const SingleWarning: Story = () => (
  <Card>
    <Card.Header>Example with a single warning message</Card.Header>
    <Card.Body>
      <ErrorDescription errors={[WarningMessageTwo]} />
    </Card.Body>
  </Card>
)

export const MultipleErrorsAndWarnings: Story = () => (
  <Card>
    <Card.Header>Example with multiple warning/error messages</Card.Header>
    <Card.Body>
      <ErrorDescription errors={SixWarningsAndErrors} />
    </Card.Body>
  </Card>
)

export const MultipleWarnings: Story = () => (
  <Card>
    <Card.Header>Example with multiple warning/error messages</Card.Header>
    <Card.Body>
      <ErrorDescription errors={[WarningMessageOne, WarningMessageTwo, WarningMessageThree]} />
    </Card.Body>
  </Card>
)

export const StackTraceErrors: Story = () => (
  <Card>
    <Card.Header>Example with stack trace errors</Card.Header>
    <Card.Body>
      <ErrorDescription errors={[StackTraceError]} />
    </Card.Body>
  </Card>
)

export default { title: 'UI/Molecules/Error Description' }
