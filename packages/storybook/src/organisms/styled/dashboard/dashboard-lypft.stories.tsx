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

import * as allergies from '../../clinical/allergies/allergy.fixtures'
import * as appointments from '../../clinical/appointments/appointment-summary.fixtures'
import * as carePlans from '../../clinical/care-plans/care-plan.fixtures'
import * as communityOrders from '../../clinical/community-treatment-orders/community-treatment-order.fixtures'
import * as episodeOfCares from '../../clinical/involved-teams/involved-team-summary.fixtures'
import * as flags from '../../clinical/flags/flag.fixtures'
import * as hospitalStays from '../../clinical/hospital-stays/hospital-stay-summary.fixtures'

import { Container, Column } from './dashboard'

const stories = storiesOf('Organisms-Styled|Dashboard', module)

stories.addWithJSX = JSXAddon.addWithJSX

stories.addParameters({
  showPanel: false,
})

stories.addWithJSX('Readonly Cards', () => (
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
      <AppointmentSummary title="Future Appointments" encounters={[]} />
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
