import { Story } from '@storybook/react'

import InvolvedTeamSummary from '@ltht-react/involved-team-summary'
import Card from '@ltht-react/card'
import episodes from './involved-teams.fixtures'

export const Summary: Story = () => (
  <Card>
    <Card.Header>
      <Card.Title>Involved Teams</Card.Title>
    </Card.Header>
    <Card.List>
      {episodes.map(episode => (
        <Card.ListItem key={episode.id}>
          <InvolvedTeamSummary episodeOfCare={episode} />
        </Card.ListItem>
      ))}
    </Card.List>
  </Card>
)

export const Redacted: Story = () => (
  <Card>
    <Card.Header>
      <Card.Title>Involved Teams</Card.Title>
    </Card.Header>
    <Card.List>
      <Card.ListItem>
        <InvolvedTeamSummary episodeOfCare={episodes[0]} />
      </Card.ListItem>
    </Card.List>
  </Card>
)

export default { title: 'Clinical/Organisms/Involved Teams' }
