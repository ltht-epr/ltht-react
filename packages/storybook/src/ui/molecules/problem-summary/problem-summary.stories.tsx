import Card from '@ltht-react/card'
import { ProblemSummary } from '@ltht-react/problem'
import { Story } from '@storybook/react'
import {
  ErrorMessageOne,
  SixWarningsAndErrors,
  StackTraceError,
  WarningMessageOne,
  WarningMessageThree,
  WarningMessageTwo,
} from './problem-summary.fixtures'

export const SingleError: Story = () => (
  <Card>
    <Card.Header>Example with a single error message</Card.Header>
    <Card.Body>
      <ProblemSummary problems={[ErrorMessageOne]} />
    </Card.Body>
  </Card>
)

export const SingleWarning: Story = () => (
  <Card>
    <Card.Header>Example with a single warning message</Card.Header>
    <Card.Body>
      <ProblemSummary problems={[WarningMessageTwo]} />
    </Card.Body>
  </Card>
)

export const MultipleErrorsAndWarnings: Story = () => (
  <Card>
    <Card.Header>Example with multiple warning/error messages</Card.Header>
    <Card.Body>
      <ProblemSummary problems={SixWarningsAndErrors} />
    </Card.Body>
  </Card>
)

export const MultipleWarnings: Story = () => (
  <Card>
    <Card.Header>Example with multiple warning/error messages</Card.Header>
    <Card.Body>
      <ProblemSummary problems={[WarningMessageOne, WarningMessageTwo, WarningMessageThree]} />
    </Card.Body>
  </Card>
)

export const StackTraceErrors: Story = () => (
  <Card>
    <Card.Header>Example with stack trace errors</Card.Header>
    <Card.Body>
      <ProblemSummary problems={[StackTraceError]} />
    </Card.Body>
  </Card>
)

export default { title: 'UI/Molecules/Problem Summary' }
