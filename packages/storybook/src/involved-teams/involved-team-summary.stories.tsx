import React from 'react'
import { storiesOf } from '@storybook/react'

import InvolvedTeamSummary from '@ltht-react/involved-team-summary'
import readme from '@ltht-react/involved-team-summary/README.md'
import * as fixtures from '@ltht-react/involved-team-summary/src/fixtures'

const stories = storiesOf('Components|Involved Team|Examples', module)

stories.addParameters({
  readme: {
    sidebar: readme,
  },
})

stories.addWithJSX('Involved Team Summary', () => (
  <InvolvedTeamSummary title="Involved Teams" episodeOfCares={[fixtures.InvolvedTeamOne, fixtures.InvolvedTeamTwo]} />
))
