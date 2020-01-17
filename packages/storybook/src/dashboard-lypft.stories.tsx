import React from 'react'
import { storiesOf, addParameters } from '@storybook/react'
import { withInfo } from '@storybook/addon-info'

import { Wrap, Column, Widgets } from './components/dashboard'
import AllergySummary from '@ltht-react/allergy-summary'
import AppointmentSummary from '@ltht-react/appointment-summary'
import CarePlanSummary from '@ltht-react/care-plan-summary'
import CommunityTreatmentOrderSummary from '@ltht-react/community-treatment-order-summary'
import FlagSummary from '@ltht-react/flag-summary'
import HospitalStaySummary from '@ltht-react/hospital-stay-summary'
import InvolvedTeamSummary from '@ltht-react/involved-team-summary'

import * as allergies from '@ltht-react/allergy-summary/src/fixtures'
import * as appointments from '@ltht-react/appointment-summary/src/fixtures'
import * as carePlans from '@ltht-react/care-plan-summary/src/fixtures'
import * as communityOrders from '@ltht-react/community-treatment-order-summary/src/fixtures'
import * as episodeOfCares from '@ltht-react/involved-team-summary/src/fixtures'
import * as flags from '@ltht-react/flag-summary/src/fixtures'
import * as hospitalStay from '@ltht-react/hospital-stay-summary/src/fixtures'

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
        <CommunityTreatmentOrderSummary
          communityTreatmentOrders={[
            communityOrders.CommunityTreatmentOrderOne,
            communityOrders.CommunityTreatmentOrderTwo,
          ]}
        />
        <CarePlanSummary carePlans={[carePlans.CarePlanOne, carePlans.CarePlanTwo]} />
      </Widgets>
    </Column>
    <Column>
      <Widgets>
        <InvolvedTeamSummary episodeOfCares={[episodeOfCares.InvolvedTeamOne, episodeOfCares.InvolvedTeamTwo]} />
        <AppointmentSummary
          title="Future Appointments"
          appointments={[appointments.AppointmentOne, appointments.AppointmentTwo]}
        />
        <AppointmentSummary
          title="Previous Appointments"
          appointments={[appointments.AppointmentOne, appointments.AppointmentTwo]}
        />
        <HospitalStaySummary hospitalStays={[hospitalStay.HospitalStayOne, hospitalStay.HospitalStayTwo]} />
      </Widgets>
    </Column>
  </Wrap>
))
