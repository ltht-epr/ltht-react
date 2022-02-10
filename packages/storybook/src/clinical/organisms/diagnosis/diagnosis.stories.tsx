import { Story } from '@storybook/react'

import DiagnosisSummary from '@ltht-react/diagnosis-summary'
import DiagnosisDetail from '@ltht-react/diagnosis-detail'
import Card from '@ltht-react/card'
import conditions from './diagnosis.fixtures'

const CODABLE_CONCEPT_LINK_MAP = {
  'Heel Pain': 'https://www.google.com',
  'Base of phalanx of foot': 'https://www.google.com',
  'Subcutaneous tissue of lateral border of sole of foot': 'https://www.google.com',
}

export const Summary: Story = () => (
  <Card>
    <Card.Header>
      <Card.Title>Problems & Diagnosis</Card.Title>
    </Card.Header>
    <Card.List>
      {conditions.map((condition) => (
        <Card.ListItem key={condition.id}>
          <DiagnosisSummary condition={condition} />
        </Card.ListItem>
      ))}
    </Card.List>
  </Card>
)

export const Redacted: Story = () => (
  <Card>
    <Card.Header>
      <Card.Title>Problems & Diagnosis</Card.Title>
    </Card.Header>
    <Card.List>
      <Card.ListItem>
        <DiagnosisSummary condition={conditions[0]} />
      </Card.ListItem>
    </Card.List>
  </Card>
)

export const LevelOneDetail: Story = () => (
  <Card>
    <Card.Header>
      <Card.Title style={{ textAlign: 'center' }}>Diagnosis</Card.Title>
    </Card.Header>
    <Card.Body>
      <DiagnosisDetail condition={conditions[1]} links={CODABLE_CONCEPT_LINK_MAP} />
    </Card.Body>
  </Card>
)

export const LevelTwoDetail: Story = () => (
  <Card>
    <Card.Header>
      <Card.Title style={{ textAlign: 'center' }}>Diagnosis</Card.Title>
    </Card.Header>
    <Card.Body>
      <DiagnosisDetail condition={conditions[0]} links={CODABLE_CONCEPT_LINK_MAP} />
    </Card.Body>
  </Card>
)

export default { title: 'Clinical/Organisms/Diagnosis' }
