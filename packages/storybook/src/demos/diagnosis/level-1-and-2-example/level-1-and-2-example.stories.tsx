import { useState } from 'react'
import { Story } from '@storybook/react'
import styled from '@emotion/styled'

import AllergySummary from '@ltht-react/allergy-summary'
import AppointmentSummary from '@ltht-react/appointment-summary'
import DiagnosisSummary from '@ltht-react/diagnosis-summary'
import DiagnosisDetail from '@ltht-react/diagnosis-detail'
import FlagSummary from '@ltht-react/flag-summary'
import HospitalStaySummary from '@ltht-react/hospital-stay-summary'
import AdminActions from '@ltht-react/admin-actions'
import Icon from '@ltht-react/icon'
import { DESKTOP_MINIMUM_MEDIA_QUERY, ICON_COLOURS } from '@ltht-react/styles'
import Card from '@ltht-react/card'
import { DetailViewType } from '@ltht-react/types'

import conditions, { AdminActionsList } from './diagnosis.fixtures'

import allergies from '../../../clinical/organisms/allergies/allergies.fixtures'
import appointments from '../../../clinical/organisms/appointments/appointments.fixtures'
import flags from '../../../clinical/organisms/flags/flags.fixtures'
import hospitalStays from '../../../clinical/organisms/hospital-stays/hospital-stays.fixtures'

const CODABLE_CONCEPT_LINK_MAP = {
  'Heel Pain': 'https://www.google.com',
  'Base of phalanx of foot': 'https://www.google.com',
  'Subcutaneous tissue of lateral border of sole of foot': 'https://www.google.com',
}

const Container = styled.div`
  display: flex;
  flex-direction: column;
  height: calc(100vh - 2rem);

  & > div:last-of-type {
    padding-right: 0 !important;
  }

  ${DESKTOP_MINIMUM_MEDIA_QUERY} {
    flex-direction: row;

    & > div {
      padding-right: 1rem;
    }
  }
`

const Column = styled.div`
  ${DESKTOP_MINIMUM_MEDIA_QUERY} {
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

const StyledCard = styled(Card)`
  border: 2px solid red;
  border-style: outset;
`

const StyledCardListItem = styled(Card.ListItem)`
  border-color: red;
`

const StyledCardList = styled(Card.List)`
  border-color: red;
`

export const Dashboard: Story = () => {
  const [view, setView] = useState('summary')
  const [selectedCondition, setSelectedCondition] = useState(conditions[0])

  const handleSetDetailView = (id: string) => {
    const selectedCondition = conditions.find(({ id: conditionId }) => id === conditionId) || conditions[0]

    setSelectedCondition(selectedCondition)
    setView('detail')
  }

  // eslint-disable-next-line @typescript-eslint/no-empty-function
  const clickHandler = (): void => {}

  const delay = (ms: number | undefined) => new Promise((res) => setTimeout(res, ms))

  const yourFunction = async () => {
    await delay(1000)
    return true
  }

  return (
    <Container>
      {view === 'summary' && (
        <>
          <Column>
            <StyledCard>
              <Card.Header>
                <Card.Title>Admin Actions</Card.Title>
              </Card.Header>
              <StyledCardList>
                {AdminActionsList.map((task) => (
                  <StyledCardListItem>
                    <AdminActions task={task} actionClickHandler={yourFunction} />
                  </StyledCardListItem>
                ))}
              </StyledCardList>
            </StyledCard>
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
                    <DiagnosisSummary
                      condition={condition}
                      extensionTemplateDisplayName="Test"
                      extensionClickHandler={clickHandler}
                    />
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
                  <Icon type="chevron" direction="left" size="large" />
                  <BackButtonText>List</BackButtonText>
                </BackButton>
                <Card.Title style={{ textAlign: 'center' }}>Diagnosis</Card.Title>
              </Card.Header>
              <Card.Body>
                <DiagnosisDetail condition={selectedCondition} viewType={DetailViewType.Compact} />
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
            <Card>
              <Card.Header>
                <Card.Title style={{ textAlign: 'center' }}>Diagnosis</Card.Title>
              </Card.Header>
              <Card.Body>
                <DiagnosisDetail condition={conditions[3]} links={CODABLE_CONCEPT_LINK_MAP} />
              </Card.Body>
            </Card>
          </Column>
        </>
      )}
    </Container>
  )
}

export default { title: 'Demos/Diagnosis/Level 1-2 Data Example' }
