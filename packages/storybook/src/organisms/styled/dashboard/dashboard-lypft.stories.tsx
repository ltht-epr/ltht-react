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
import { Card, CardHeader, CardBody, CardList } from '@ltht-react/card'
import allergies from '../../clinical/allergies/allergy.fixtures'
import documents from '../../clinical/documents/document-summary.fixture'
import appointments from '../../clinical/appointments/appointment-summary.fixtures'
import carePlans from '../../clinical/care-plans/care-plan.fixtures'
import communityOrders from '../../clinical/community-treatment-orders/community-treatment-order.fixtures'
import episodeOfCares from '../../clinical/involved-teams/involved-team-summary.fixtures'
import flags from '../../clinical/flags/flag.fixtures'
import hospitalStays from '../../clinical/hospital-stays/hospital-stay.fixtures'

import { Container, Column } from './dashboard'

const stories = storiesOf('Organisms - Styled|Dashboard', module)

stories.addWithJSX = JSXAddon.addWithJSX

stories.addParameters({
  showPanel: false,
})

stories.addWithJSX('Readonly Cards', () => {
  return (
    <Container>
      <Column>
        <Card noData={!flags}>
          <CardHeader>
            <h3>Flags</h3>
          </CardHeader>
          <CardBody>
            <CardList>
              <FlagSummary flags={flags} />
            </CardList>
          </CardBody>
        </Card>
        <Card noData={!allergies}>
          <CardHeader>
            <h3>Allergies</h3>
          </CardHeader>
          <CardBody>
            <CardList>
              <AllergySummary allergies={allergies} />
            </CardList>
          </CardBody>
        </Card>
        <Card noData={!communityOrders}>
          <CardHeader>
            <h3>Community Treatment Orders</h3>
          </CardHeader>
          <CardBody>
            <CardList>
              <CommunityTreatmentOrderSummary communityTreatmentOrders={communityOrders} />
            </CardList>
          </CardBody>
        </Card>
        <Card noData={!carePlans}>
          <CardHeader>
            <h3>Care Plans</h3>
          </CardHeader>
          <CardBody>
            <CardList>
              <CarePlanSummary carePlans={carePlans} />
            </CardList>
          </CardBody>
        </Card>
      </Column>
      <Column>
        <Card noData={!episodeOfCares}>
          <CardHeader>
            <h3>Involved Teams</h3>
          </CardHeader>
          <CardBody>
            <CardList>
              <InvolvedTeamSummary episodeOfCares={episodeOfCares} />
            </CardList>
          </CardBody>
        </Card>
        <Card noData={!appointments}>
          <CardHeader>
            <h3>Appointments</h3>
          </CardHeader>
          <CardBody>
            <CardList>
              <AppointmentSummary encounters={appointments} />
            </CardList>
          </CardBody>
        </Card>
        <Card noData={!documents}>
          <CardHeader>
            <h3>Documents</h3>
          </CardHeader>
          <CardBody>
            <DocumentSummary documents={documents} />
          </CardBody>
        </Card>
        <Card noData={!hospitalStays}>
          <CardHeader>
            <h3>Hospital Stays</h3>
          </CardHeader>
          <CardBody>
            <CardList>
              <HospitalStaySummary hospitalStays={hospitalStays} />
            </CardList>
          </CardBody>
        </Card>
      </Column>
    </Container>
  )
})
