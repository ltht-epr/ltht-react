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
import ConditionSummary from '@ltht-react/condition-summary'

import DocumentSummary from '@ltht-react/document-summary'
import Card from '@ltht-react/card'
import allergies from '../../../clinical/organisms/allergies/allergy.fixtures'
import documents from '../../../clinical/organisms/documents/document-summary.fixture'
import appointments from '../../../clinical/organisms/appointments/appointment-summary.fixtures'
import carePlans from '../../../clinical/organisms/care-plans/care-plan.fixtures'
import communityOrders from '../../../clinical/organisms/community-treatment-orders/community-treatment-order.fixtures'
import episodeOfCares from '../../../clinical/organisms/involved-teams/involved-team-summary.fixtures'
import flags from '../../../clinical/organisms/flags/flag.fixtures'
import hospitalStays from '../../../clinical/organisms/hospital-stays/hospital-stay.fixtures'
import conditions from '../../../clinical/organisms/conditions/condition-summary.fixtures'

import { Container, Column } from './dashboard'

// eslint-disable-next-line @typescript-eslint/no-explicit-any
const stories = storiesOf('UI|Organisms/Dashboard', module) as any

stories.addWithJSX = JSXAddon.addWithJSX

stories.addParameters({
  showPanel: false,
})

stories.addWithJSX('Readonly Cards', () => {
  return (
    <Container>
      <Column>
        <Card>
          <Card.Header>
            <Card.Title>Alerts</Card.Title>
          </Card.Header>
          <Card.List>
            {flags.map(flag => (
              <Card.ListItem key={flag.id}>
                <FlagSummary flag={flag} />
              </Card.ListItem>
            ))}
          </Card.List>
        </Card>
        <Card>
          <Card.Header>
            <Card.Title>Allergies</Card.Title>
          </Card.Header>
          <Card.List>
            {allergies.map(allergy => (
              <Card.ListItem key={allergy.id}>
                <AllergySummary allergy={allergy} />
              </Card.ListItem>
            ))}
          </Card.List>
        </Card>
        <Card>
          <Card.Header>
            <Card.Title>Community Treatment Orders</Card.Title>
          </Card.Header>
          <Card.List>
            {communityOrders.map(order => (
              <Card.ListItem key={order.id}>
                <CommunityTreatmentOrderSummary communityTreatmentOrder={order} />
              </Card.ListItem>
            ))}
          </Card.List>
        </Card>
        <Card>
          <Card.Header>
            <Card.Title>Care Plans</Card.Title>
          </Card.Header>
          <Card.List>
            {carePlans.map(carePlan => (
              <Card.ListItem key={carePlan.id}>
                <CarePlanSummary carePlan={carePlan} />
              </Card.ListItem>
            ))}
          </Card.List>
        </Card>
      </Column>
      <Column>
        <Card>
          <Card.Header>
            <Card.Title>Involved Teams</Card.Title>
          </Card.Header>
          <Card.List>
            {episodeOfCares.map(episode => (
              <Card.ListItem key={episode.id}>
                <InvolvedTeamSummary episodeOfCare={episode} />
              </Card.ListItem>
            ))}
          </Card.List>
        </Card>
        <Card>
          <Card.Header>
            <Card.Title>Appointments</Card.Title>
          </Card.Header>
          <Card.List>
            {appointments.map(appointment => (
              <Card.ListItem key={appointment.id}>
                <AppointmentSummary encounter={appointment} />
              </Card.ListItem>
            ))}
          </Card.List>
        </Card>
        <Card>
          <Card.Header>
            <Card.Title>Documents</Card.Title>
          </Card.Header>
          <Card.List>
            {documents.map(document => (
              <Card.ListItem key={document.id}>
                <DocumentSummary document={document} />
              </Card.ListItem>
            ))}
          </Card.List>
        </Card>
        <Card>
          <Card.Header>
            <Card.Title>Hospital Stays</Card.Title>
          </Card.Header>
          <Card.List>
            {hospitalStays.map(stay => (
              <Card.ListItem key={stay.id}>
                <HospitalStaySummary hospitalStay={stay} />
              </Card.ListItem>
            ))}
          </Card.List>
        </Card>
        <Card>
          <Card.Header>
            <Card.Title>Conditions</Card.Title>
          </Card.Header>
          <Card.List>
            {conditions.map(condition => (
              <Card.ListItem key={condition.id}>
                <ConditionSummary condition={condition} />
              </Card.ListItem>
            ))}
          </Card.List>
        </Card>
      </Column>
    </Container>
  )
})
