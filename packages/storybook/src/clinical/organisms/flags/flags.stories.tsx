import React from 'react'
import { Story } from '@storybook/react'

import FlagDetail from '@ltht-react/flag-detail'
import FlagSummary from '@ltht-react/flag-summary'
import Card from '@ltht-react/card'

import flags from './flags.fixtures'

export const Detail: Story = () => (
  <Card>
    <Card.Header>
      <h3>Flag</h3>
    </Card.Header>
    <Card.Body>
      <FlagDetail flag={flags[0]} />
    </Card.Body>
  </Card>
)

export const Summary: Story = () => (
  <Card>
    <Card.Header>
      <h3>Flags</h3>
    </Card.Header>
    <Card.List>
      {flags.map(flag => (
        <Card.ListItem key={flag.id}>
          <FlagSummary flag={flag} />
        </Card.ListItem>
      ))}
    </Card.List>
  </Card>
)

export const Redacted: Story = () => (
  <Card>
    <Card.Header>
      <h3>Flag</h3>
    </Card.Header>
    <Card.List>
      <Card.ListItem>
        <FlagSummary flag={flags[0]} />
      </Card.ListItem>
    </Card.List>
  </Card>
)

export default { title: 'Clinical/Organisms/Flags' }
