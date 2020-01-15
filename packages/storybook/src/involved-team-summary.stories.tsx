import React from 'react'
import { storiesOf } from '@storybook/react'

import InvolvedTeamSummary from '@ltht-react/involved-team-summary'
import readme from '@ltht-react/involved-team-summary/README.md'
import * as fixtures from '@ltht-react/involved-team-summary/src/fixtures'
import { EpisodeOfCare, EpisodeOfCareStatusCode } from '@ltht-react/types'

const stories = storiesOf('Components|Involved Team|Examples', module)

stories.addParameters({
  readme: {
    sidebar: readme,
  },
})

const handleClick = (episodeOfCare: EpisodeOfCare) => {
  console.log('item clicked ', episodeOfCare)
}

stories.addWithJSX('Involved Team Summary', () => (
  <InvolvedTeamSummary
    title="Involved Teams"
    episodeOfCares={[fixtures.InvolvedTeamOne, fixtures.InvolvedTeamTwo]}
    clickHandler={handleClick}
  />
))
