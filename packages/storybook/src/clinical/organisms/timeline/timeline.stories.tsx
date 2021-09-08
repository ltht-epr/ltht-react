import { useState, MouseEvent } from 'react'
import { Story } from '@storybook/react'

import Timeline from '@ltht-react/timeline'
import Card from '@ltht-react/card'

export const Details: Story = () => (
  <Card>
    <Card.Header>
      <Card.Title>Timeline</Card.Title>
    </Card.Header>
    <Card.Body>
      <Timeline />
    </Card.Body>
  </Card>
)

export default { title: 'Clinical/Organisms/Timeline' }
