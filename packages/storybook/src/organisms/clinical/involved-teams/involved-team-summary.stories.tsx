/* eslint-disable @typescript-eslint/no-explicit-any */
import React from 'react'
import { storiesOf } from '@storybook/react'
import JSXAddon from 'storybook-addon-jsx'
import InvolvedTeamSummary from '@ltht-react/involved-team-summary'
import readme from '@ltht-react/involved-team-summary/README.md'
import { Card, CardHeader, CardBody, CardList } from '@ltht-react/card'
import episodes from './involved-team-summary.fixtures'

const stories = storiesOf('Organisms - Clinical|Involved Team', module) as any

stories.addWithJSX = JSXAddon.addWithJSX

stories.addParameters({
  readme: {
    sidebar: readme,
  },
})

stories.addWithJSX('Summary', () => (
  <Card noData={!episodes}>
    <CardHeader>
      <h3>Involved Teams</h3>
    </CardHeader>
    <CardBody>
      <CardList>
        <InvolvedTeamSummary episodeOfCares={episodes} />
      </CardList>
    </CardBody>
  </Card>
))
