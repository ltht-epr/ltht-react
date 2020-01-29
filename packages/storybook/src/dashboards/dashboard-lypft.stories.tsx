import React from 'react'
import { storiesOf } from '@storybook/react'
import JSXAddon from 'storybook-addon-jsx'

import AllergySummary from '@ltht-react/allergy-summary'
import AppointmentSummary from '@ltht-react/appointment-summary'
import CarePlanSummary from '@ltht-react/care-plan-summary'
import CommunityTreatmentOrderSummary from '@ltht-react/community-treatment-order-summary'
import FlagSummary from '@ltht-react/flag-summary'
import HospitalStaySummary from '@ltht-react/hospital-stay-summary'
import InvolvedTeamSummary from '@ltht-react/involved-team-summary'

import * as episodeOfCares from '@ltht-react/involved-team-summary/src/fixtures'
import * as allergies from '../allergies/allergy-summary.fixtures'
import * as appointments from '../appointments/appointment-summary.fixtures'
import * as carePlans from '../care-plans/care-plan-summary.fixtures'
import * as communityOrders from '../community-treatment-orders/community-treatment-order-summary.fixtures'
import * as flags from '../flags/flag-summary.fixtures'
import * as hospitalStays from '../hospital-stays/hospital-stay-summary.fixtures'

import { Container, Column } from '../components/dashboard'

const stories = storiesOf('Dashboards|Basic|Examples', module)

stories.addWithJSX = JSXAddon.addWithJSX

stories.addParameters({
  showPanel: false,
})

stories.addWithJSX('Readonly Widgets', () => (
  <Container>
    <Column>
      <FlagSummary title="Alerts" flags={[flags.FlagOne, flags.FlagTwo]} />
      <AllergySummary allergies={[allergies.AllergyOne, allergies.AllergyTwo]} />
      <CommunityTreatmentOrderSummary
        communityTreatmentOrders={[
          communityOrders.CommunityTreatmentOrderOne,
          communityOrders.CommunityTreatmentOrderTwo,
        ]}
      />
      <CarePlanSummary carePlans={[carePlans.CarePlanOne, carePlans.CarePlanTwo]} />
    </Column>
    <Column>
      <InvolvedTeamSummary episodeOfCares={[episodeOfCares.InvolvedTeamOne, episodeOfCares.InvolvedTeamTwo]} />
      <AppointmentSummary
        title="Future Appointments"
        encounters={[appointments.AppointmentOne, appointments.AppointmentTwo]}
      />
      <AppointmentSummary
        title="Previous Appointments"
        encounters={[appointments.AppointmentOne, appointments.AppointmentTwo]}
      />
      <HospitalStaySummary hospitalStays={[hospitalStays.HospitalStayOne, hospitalStays.HospitalStayTwo]} />
    </Column>
  </Container>
))
