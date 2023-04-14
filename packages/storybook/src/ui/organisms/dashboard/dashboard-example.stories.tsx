import { Story } from '@storybook/react'

import AllergySummary from '@ltht-react/allergy-summary'
import AppointmentSummary from '@ltht-react/appointment-summary'
import CarePlanSummary from '@ltht-react/care-plan-summary'
import CommunityTreatmentOrderSummary from '@ltht-react/community-treatment-order-summary'
import FlagSummary from '@ltht-react/flag-summary'
import HospitalStaySummary from '@ltht-react/hospital-stay-summary'
import InvolvedTeamSummary from '@ltht-react/involved-team-summary'
import DiagnosisSummary from '@ltht-react/diagnosis-summary'
import MedicationSummary from '@ltht-react/medication-summary'

import DocumentSummary from '@ltht-react/document-summary'
import Card from '@ltht-react/card'
import allergies from '../../../clinical/organisms/allergies/allergies.fixtures'
import documents from '../../../clinical/organisms/documents/documents.fixture'
import appointments from '../../../clinical/organisms/appointments/appointments.fixtures'
import carePlans from '../../../clinical/organisms/care-plans/care-plans.fixtures'
import communityOrders from '../../../clinical/organisms/community-treatment-orders/community-treatment-orders.fixtures'
import episodeOfCares from '../../../clinical/organisms/involved-teams/involved-teams.fixtures'
import flags from '../../../clinical/organisms/flags/flags.fixtures'
import hospitalStays from '../../../clinical/organisms/hospital-stays/hospital-stays.fixtures'
import conditions from '../../../clinical/organisms/diagnosis/diagnosis.fixtures'
import medications from '../../../clinical/organisms/medications/medications.fixture'

import { Container, Column } from './dashboard'

export const ReadOnly: Story = () => (
  <Container>
    <Column>
      <Card>
        <Card.Header>
          <Card.Title>Alerts</Card.Title>
        </Card.Header>
        <Card.List>
          {flags.map((flag) => (
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
          {allergies.map((allergy) => (
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
          {communityOrders.map((order) => (
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
          {carePlans.map((carePlan) => (
            <Card.ListItem key={carePlan.id}>
              <CarePlanSummary carePlan={carePlan} />
            </Card.ListItem>
          ))}
        </Card.List>
      </Card>
      <Card>
        <Card.Header>
          <Card.Title>Medications</Card.Title>
        </Card.Header>
        <Card.List>
          <Card.ListItem>
            <MedicationSummary medication={medications[0]} />
          </Card.ListItem>
          <Card.ListItem>
            <MedicationSummary medication={medications[1]} />
          </Card.ListItem>
          <Card.ListItem>
            <MedicationSummary medication={medications[2]} />
          </Card.ListItem>
        </Card.List>
      </Card>
    </Column>
    <Column>
      <Card>
        <Card.Header>
          <Card.Title>Involved Teams</Card.Title>
        </Card.Header>
        <Card.List>
          {episodeOfCares.map((episode) => (
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
          {appointments.map((appointment) => (
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
          {documents.map((document) => (
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
          {hospitalStays.map((stay) => (
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
          {conditions.map((condition) => (
            <Card.ListItem key={condition.id}>
              <DiagnosisSummary condition={condition} />
            </Card.ListItem>
          ))}
        </Card.List>
      </Card>
    </Column>
  </Container>
)

export default { title: 'UI/Organisms/Dashboard' }
