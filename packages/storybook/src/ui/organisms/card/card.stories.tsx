import React from 'react'
import { Story } from '@storybook/react'

import Card from '@ltht-react/card'
import AllergySummary from '@ltht-react/allergy-summary'
import { InfoSummary, WarningSummary, ErrorSummary, MissingDataSummary } from '@ltht-react/summary'
import allergies from '../../../clinical/organisms/allergies/allergies.fixtures'

const clickHandler = (): void => {
  // eslint-disable-next-line no-console
  console.log('Handler clicked')
}

export const Basic: Story = () => (
  <Card>
    <Card.Header>
      <Card.Title>Header</Card.Title>
    </Card.Header>
    <Card.Body>
      <Card.Subtitle>Subtitle</Card.Subtitle>
      <Card.Text>Body Text</Card.Text>
    </Card.Body>
  </Card>
)

export const WithFooter: Story = () => (
  <Card>
    <Card.Header>
      <Card.Title>Header</Card.Title>
    </Card.Header>
    <Card.Body>
      <Card.Subtitle>Subtitle</Card.Subtitle>
      <Card.Text>Body Text</Card.Text>
    </Card.Body>
    <Card.Footer>Footer</Card.Footer>
  </Card>
)

export const WithList: Story = () => (
  <Card>
    <Card.Header>
      <Card.Title>Header</Card.Title>
    </Card.Header>
    <Card.List>
      <Card.ListItem>Item 1</Card.ListItem>
      <Card.ListItem>Item 2</Card.ListItem>
    </Card.List>
  </Card>
)

export const ClickableList: Story = () => (
  <Card>
    <Card.Header>
      <Card.Title>Header</Card.Title>
    </Card.Header>
    <Card.List>
      <Card.ListItem onClick={clickHandler}>
        <div>Item 1</div>
      </Card.ListItem>
      <Card.ListItem onClick={clickHandler}>
        <div>Item 2</div>
      </Card.ListItem>
    </Card.List>
  </Card>
)

export const InfoSummaryStory: Story = () => (
  <Card>
    <Card.Header>
      <Card.Title>Allergies</Card.Title>
    </Card.Header>
    <InfoSummary clickHandler={clickHandler} />
    <Card.List>
      {allergies.map(allergy => (
        <Card.ListItem>
          <AllergySummary allergy={allergy} />
        </Card.ListItem>
      ))}
    </Card.List>
    <InfoSummary clickHandler={clickHandler} />
    <Card.List>
      <Card.ListItem>Missing 10</Card.ListItem>
    </Card.List>
    <WarningSummary clickHandler={clickHandler} />
    <Card.List>
      <Card.ListItem>Missing 10</Card.ListItem>
      <Card.ListItem>Missing 10</Card.ListItem>
    </Card.List>
  </Card>
)
InfoSummaryStory.storyName = 'Info Summary'

export const WarningSummaryStory: Story = () => (
  <Card>
    <Card.Header>
      <Card.Title>Allergies</Card.Title>
    </Card.Header>
    <WarningSummary clickHandler={clickHandler} />
    <Card.List>
      {allergies.map(allergy => (
        <Card.ListItem>
          <AllergySummary allergy={allergy} />
        </Card.ListItem>
      ))}
    </Card.List>
  </Card>
)
WarningSummaryStory.storyName = 'Warning Summary'

export const ErrorSummaryStory: Story = () => (
  <Card>
    <Card.Header>
      <Card.Title>Allergies</Card.Title>
    </Card.Header>
    <ErrorSummary clickHandler={clickHandler} />
    <Card.List>
      <Card.ListItem>No Data</Card.ListItem>
    </Card.List>
  </Card>
)
ErrorSummaryStory.storyName = 'Error Summary'

export const MissingDataSummaryStory: Story = () => (
  <Card>
    <Card.Header>
      <Card.Title>Allergies</Card.Title>
    </Card.Header>
    <MissingDataSummary
      noData={['Item 1', 'Item 2']}
      missingData={['Item 1', 'Item 2']}
      partialData={['Item 1', 'Item 2']}
      completeData={['Item 1', 'Item 2']}
    />
  </Card>
)
MissingDataSummaryStory.storyName = 'Missing Data Summary'

export const NoData: Story = () => (
  <Card>
    <Card.Header>
      <Card.Title>Allergies</Card.Title>
    </Card.Header>
  </Card>
)

export default { title: 'UI/Organisms/Card' }
