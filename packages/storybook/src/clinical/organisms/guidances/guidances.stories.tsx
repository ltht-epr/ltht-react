import { Story } from '@storybook/react'

import GuidanceSummary from '@ltht-react/guidance-summary'
import Card from '@ltht-react/card'
import guidances from './guidances.fixture'

export const Summary: Story = () => (
  <Card>
    <Card.Header>
      <Card.Title>Guidance</Card.Title>
    </Card.Header>
    <Card.List>
      {guidances.map(guidance => (
        <Card.ListItem key={guidance.id}>
          <GuidanceSummary guidance={guidance} />
        </Card.ListItem>
      ))}
    </Card.List>
  </Card>
)

export const Redacted: Story = () => (
  <Card>
    <Card.Header>
      <Card.Title>Guidance</Card.Title>
    </Card.Header>
    <Card.List>
      <Card.ListItem>
        <GuidanceSummary guidance={guidances[1]} />
      </Card.ListItem>
    </Card.List>
  </Card>
)

export default { title: 'Clinical/Organisms/Guidances' }
