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

import DocumentSummary from '@ltht-react/document-summary'
import Card from '@ltht-react/card'
import allergies from '../../clinical/allergies/allergy.fixtures'
import documents from '../../clinical/documents/document-summary.fixture'
import appointments from '../../clinical/appointments/appointment-summary.fixtures'
import carePlans from '../../clinical/care-plans/care-plan.fixtures'
import communityOrders from '../../clinical/community-treatment-orders/community-treatment-order.fixtures'
import episodeOfCares from '../../clinical/involved-teams/involved-team-summary.fixtures'
import flags from '../../clinical/flags/flag.fixtures'
import hospitalStays from '../../clinical/hospital-stays/hospital-stay.fixtures'

import { Container, Column } from './dashboard'

// eslint-disable-next-line @typescript-eslint/no-explicit-any
const stories = storiesOf('Organisms - Styled|Dashboard', module) as any

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
            <h3>Flags</h3>
          </Card.Header>
          <Card.Body>
            <Card.List>
              <FlagSummary flags={undefined} />
            </Card.List>
          </Card.Body>
        </Card>
        <Card>
          <Card.Header>
            <h3>Allergies</h3>
          </Card.Header>
          <Card.Body>
            <Card.List>
              <AllergySummary allergies={allergies} />
            </Card.List>
          </Card.Body>
        </Card>
        <Card>
          <Card.Header>
            <h3>Community Treatment Orders</h3>
          </Card.Header>
          <Card.Body>
            <Card.List>
              <CommunityTreatmentOrderSummary communityTreatmentOrders={communityOrders} />
            </Card.List>
          </Card.Body>
        </Card>
        <Card>
          <Card.Header>
            <h3>Care Plans</h3>
          </Card.Header>
          <Card.Body>
            <Card.List>
              <CarePlanSummary carePlans={carePlans} />
            </Card.List>
          </Card.Body>
        </Card>
        <Card>
          <Card.Header>
            <h3>Alerts</h3>
          </Card.Header>
          <Card.Body>
            <Card.List>
              <FlagSummary flags={flags} />
            </Card.List>
          </Card.Body>
        </Card>
      </Column>
      <Column>
        <Card>
          <Card.Header>
            <h3>Involved Teams</h3>
          </Card.Header>
          <Card.Body>
            <Card.List>
              <InvolvedTeamSummary episodeOfCares={episodeOfCares} />
            </Card.List>
          </Card.Body>
        </Card>
        <Card>
          <Card.Header>
            <h3>Appointments</h3>
          </Card.Header>
          <Card.Body>
            <Card.List>
              <AppointmentSummary encounters={appointments} />
            </Card.List>
          </Card.Body>
        </Card>
        <Card>
          <Card.Header>
            <h3>Documents</h3>
          </Card.Header>
          <Card.Body>
            <DocumentSummary documents={documents} />
          </Card.Body>
        </Card>
        <Card>
          <Card.Header>
            <h3>Hospital Stays</h3>
          </Card.Header>
          <Card.Body>
            <Card.List>
              <HospitalStaySummary hospitalStays={hospitalStays} />
            </Card.List>
          </Card.Body>
        </Card>
      </Column>
    </Container>
  )
})
