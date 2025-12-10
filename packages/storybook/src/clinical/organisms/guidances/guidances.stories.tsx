/* eslint-disable no-console */
import GuidanceSummary from '@ltht-react/guidance-summary'
import Card from '@ltht-react/card'
import guidances, { guidanceWithActions } from './guidances.fixture'

export const Summary = () => (
  <Card>
    <Card.Header>
      <Card.Title>Guidance</Card.Title>
    </Card.Header>
    <Card.List>
      {guidances.map((guidance) => (
        <Card.ListItem key={guidance.id}>
          <GuidanceSummary guidance={guidance} />
        </Card.ListItem>
      ))}
    </Card.List>
  </Card>
)

export const Redacted = () => (
  <Card>
    <Card.Header>
      <Card.Title>Guidance</Card.Title>
    </Card.Header>
    <Card.List>
      <Card.ListItem>
        <GuidanceSummary guidance={guidances[1]} />
      </Card.ListItem>
    </Card.List>
  </Card>
)

export const WithActions = () => (
  <Card>
    <Card.Header>
      <Card.Title>Guidance</Card.Title>
    </Card.Header>
    <Card.List>
      <Card.ListItem>
        {guidanceWithActions.map((g) => (
          <GuidanceSummary guidance={g} onActionClick={console.log} />
        ))}
      </Card.ListItem>
    </Card.List>
  </Card>
)

export default { title: 'Clinical/Organisms/Guidances' }
