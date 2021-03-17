import { useState } from 'react'
import { Story } from '@storybook/react'
import styled from '@emotion/styled'

import AllergySummary from '@ltht-react/allergy-summary'
import AppointmentSummary from '@ltht-react/appointment-summary'
import DiagnosisSummary from '@ltht-react/diagnosis-summary'
import DiagnosisDetail from '@ltht-react/diagnosis-detail'
import FlagSummary from '@ltht-react/flag-summary'
import HospitalStaySummary from '@ltht-react/hospital-stay-summary'
import { ChevronIcon } from '@ltht-react/icon'
import { DESKTOP_MEDIA_QUERY, ICON_COLOURS } from '@ltht-react/styles'
import Card from '@ltht-react/card'
import conditions from './diagnosis.fixtures'

import allergies from '../../../clinical/organisms/allergies/allergies.fixtures'
import appointments from '../../../clinical/organisms/appointments/appointments.fixtures'
import flags from '../../../clinical/organisms/flags/flags.fixtures'
import hospitalStays from '../../../clinical/organisms/hospital-stays/hospital-stays.fixtures'

const Container = styled.div`
  display: flex;
  flex-direction: column;
  height: calc(100vh - 2rem);

  & > div:last-of-type {
    padding-right: 0 !important;
  }

  ${DESKTOP_MEDIA_QUERY} {
    flex-direction: row;

    & > div {
      padding-right: 1rem;
    }
  }
`

const Column = styled.div`
  ${DESKTOP_MEDIA_QUERY} {
    flex: 1;
    height: 100%;
    max-height: 100%;
    overflow-y: auto;
  }
`

const BackButton = styled.span`
  color: ${ICON_COLOURS.INFO};
  cursor: pointer;
  position: absolute;
  left: 0.75rem;
  top: 0.75rem;
`

const BackButtonText = styled.span`
  padding-left: 0.5rem;
`

export const Dashboard: Story = () => {
  const [view, setView] = useState('summary')
  const [selectedCondition, setSelectedCondition] = useState(conditions[0])

  const handleSetDetailView = (id: string) => {
    const selectedCondition = conditions.find(({ id: conditionId }) => id === conditionId) || conditions[0]

    setSelectedCondition(selectedCondition)
    setView('detail')
  }

  return (
    <Container>
      {view === 'summary' && (
        <>
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
          </Column>
          <Column>
            <Card>
              <Card.Header>
                <Card.Title>Problems & Diagnosis</Card.Title>
              </Card.Header>
              <Card.List>
                {conditions.map((condition) => (
                  <Card.ListItem key={condition.id} onClick={() => handleSetDetailView(condition.id)}>
                    <DiagnosisSummary condition={condition} />
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
          </Column>
        </>
      )}
      {view === 'detail' && (
        <>
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
          </Column>
          <Column>
            <Card>
              <Card.Header>
                <BackButton onClick={() => setView('summary')} title="Back to List View">
                  <ChevronIcon direction="left" size="large" />
                  <BackButtonText>List</BackButtonText>
                </BackButton>
                <Card.Title style={{ textAlign: 'center' }}>Diagnosis</Card.Title>
              </Card.Header>
              <Card.Body>
                <DiagnosisDetail condition={selectedCondition} />
              </Card.Body>
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
          </Column>
        </>
      )}
    </Container>
  )
}

export default { title: 'Demos/Diagnosis/Level 1-2 Data Example' }
