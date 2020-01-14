import React from 'react'
import { storiesOf, addParameters } from '@storybook/react'
import { withInfo } from '@storybook/addon-info'
import AddonParameters from 'storybook-addon-jsx'

import { Wrap, Column, Widgets } from './components/dashboard'
import FlagSummary from '@ltht-react/flag-summary'
import AllergySummary from '@ltht-react/allergy-summary'
import CarePlanSummary from '@ltht-react/care-plan-summary'
import InvolvedTeamSummary from '@ltht-react/involved-team-summary'

import * as allergies from '@ltht-react/allergy-summary/src/fixtures'
import * as flags from '@ltht-react/flag-summary/src/fixtures'
import * as carePlans from '@ltht-react/care-plan-summary/src/fixtures'
import * as episodeOfCares from '@ltht-react/involved-team-summary/src/fixtures'

const stories = storiesOf('Dashboards|Basic|Examples', module)

stories.addParameters({
  showPanel: false,
})

stories.addWithJSX('Readonly Widgets', () => (
  <Wrap>
    <Column>
      <Widgets>
        <FlagSummary title="Alerts" flags={[flags.FlagOne, flags.FlagTwo]} />
        <AllergySummary allergies={[allergies.AllergyOne, allergies.AllergyTwo]} />
        <CarePlanSummary carePlans={[carePlans.CarePlanOne, carePlans.CarePlanTwo]} />
      </Widgets>
    </Column>
    <Column>
      <Widgets>
        <InvolvedTeamSummary episodeOfCares={[episodeOfCares.InvolvedTeamOne, episodeOfCares.InvolvedTeamTwo]} />
      </Widgets>
    </Column>
  </Wrap>
))
