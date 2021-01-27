import React from 'react'
import { storiesOf } from '@storybook/react'
import JSXAddon from 'storybook-addon-jsx'
import InvolvedTeamSummary from '@ltht-react/involved-team-summary'
import readme from '@ltht-react/involved-team-summary/README.md'
import Card from '@ltht-react/card'
import episodes from './involved-team-summary.fixtures'

// eslint-disable-next-line @typescript-eslint/no-explicit-any
const stories = storiesOf('Organisms - Clinical|Involved Team', module) as any

stories.addWithJSX = JSXAddon.addWithJSX

stories.addParameters({
  readme: {
    sidebar: readme,
  },
})

stories.addWithJSX('Summary', () => (
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
))

stories.addWithJSX('Redacter', () => (
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
))
