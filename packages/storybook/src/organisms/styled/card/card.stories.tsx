import React from 'react'
import { storiesOf } from '@storybook/react'
import JSXAddon from 'storybook-addon-jsx'

import readme from '@ltht-react/card/README.md'
import { ListItem } from '@ltht-react/list'
import { MissingDataSummary, InfoSummary, WarningSummary, ErrorSummary } from '@ltht-react/summary'
import Card from '@ltht-react/card'
import AllergySummary from '@ltht-react/allergy-summary'
import allergies from '../../clinical/allergies/allergy.fixtures'

// eslint-disable-next-line @typescript-eslint/no-explicit-any
const stories = storiesOf('Organisms - Styled|Card', module) as any

stories.addWithJSX = JSXAddon.addWithJSX

stories.addParameters({
  readme: {
    sidebar: readme,
  },
})

const clickHandler = (): void => {
  // eslint-disable-next-line no-console
  console.log('Handler clicked')
}

stories.addWithJSX('Basic', () => (
  <>
    <Card>
      <Card.Header>
        <Card.Title>Header</Card.Title>
      </Card.Header>
      <Card.Body>
        <Card.Subtitle>Subtitle</Card.Subtitle>
        <Card.Text>Body Text</Card.Text>
      </Card.Body>
    </Card>
    <Card>
      <Card.Header>
        <Card.Title>Header</Card.Title>
      </Card.Header>
      <Card.List>
        <Card.ListItem>Item One</Card.ListItem>
        <Card.ListItem>Item Two</Card.ListItem>
        <Card.ListItem>Item Three</Card.ListItem>
      </Card.List>
    </Card>
    <Card>
      <Card.Header>
        <Card.Title>Header</Card.Title>
      </Card.Header>
      <Card.Alert>Default Alert</Card.Alert>
      <Card.List>
        <Card.ListItem>Item One</Card.ListItem>
        <Card.ListItem>Item Two</Card.ListItem>
        <Card.ListItem>Item Three</Card.ListItem>
      </Card.List>
    </Card>
    <Card>
      <Card.Header>
        <Card.Title>Header</Card.Title>
      </Card.Header>
      <Card.Alert status="info">Info Alert</Card.Alert>
      <Card.List>
        <Card.ListItem>Item One</Card.ListItem>
        <Card.ListItem>Item Two</Card.ListItem>
        <Card.ListItem>Item Three</Card.ListItem>
      </Card.List>
    </Card>
    <Card>
      <Card.Header>
        <Card.Title>Header</Card.Title>
      </Card.Header>
      <Card.Alert status="danger">Danger Alert</Card.Alert>
      <Card.Body>
        <Card.Text>Body Text</Card.Text>
      </Card.Body>
      <Card.List>
        <Card.ListItem>Item One</Card.ListItem>
        <Card.ListItem>Item Two</Card.ListItem>
        <Card.ListItem>Item Three</Card.ListItem>
      </Card.List>
    </Card>
    <Card>
      <Card.Header>
        <Card.Title>Header</Card.Title>
      </Card.Header>
      <Card.Alert status="warning">Warning Alert</Card.Alert>
      <Card.List>
        <Card.ListItem>Item One</Card.ListItem>
        <Card.ListItem>Item Two</Card.ListItem>
        <Card.ListItem>Item Three</Card.ListItem>
      </Card.List>
    </Card>
    <Card>
      <Card.List>
        <Card.ListItem>Item One</Card.ListItem>
        <Card.ListItem>Item Two</Card.ListItem>
        <Card.ListItem>Item Three</Card.ListItem>
      </Card.List>
    </Card>
    <Card>
      <Card.Body>
        <Card.Text>Text One</Card.Text>
        <Card.Text>Text Two</Card.Text>
        <Card.Text>Text Three</Card.Text>
      </Card.Body>
    </Card>
    <Card>
      <Card.Header>Header</Card.Header>
      <Card.Alert status="warning">This is an alert</Card.Alert>
      <Card.Body>Body</Card.Body>
      <Card.Footer>Footer</Card.Footer>
    </Card>
  </>
))

stories.addWithJSX('Footer', () => (
  <Card>
    <Card.Header>
      <Card.Title>Header</Card.Title>
    </Card.Header>
    <Card.Body>Body</Card.Body>
    <Card.Footer>Footer</Card.Footer>
  </Card>
))

stories.addWithJSX('List', () => (
  <div>
    <Card>
      <Card.Header>
        <Card.Title>Header</Card.Title>
      </Card.Header>
      <Card.Body>
        <Card.List>
          <Card.ListItem>Item 1</Card.ListItem>
          <Card.ListItem>Item 2</Card.ListItem>
        </Card.List>
      </Card.Body>
      <Card.Footer>Footer</Card.Footer>
    </Card>
  </div>
))

stories.addWithJSX('List (Clickable)', () => (
  <div>
    <Card>
      <Card.Header>
        <Card.Title>Header</Card.Title>
      </Card.Header>
      <Card.Body>
        <Card.List>
          <Card.ListItem>Item 1</Card.ListItem>
          <Card.ListItem>Item 2</Card.ListItem>
        </Card.List>
      </Card.Body>
      <Card.Footer>Footer</Card.Footer>
    </Card>
  </div>
))

stories.addWithJSX('Info Summary', () => (
  <div>
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
  </div>
))

stories.addWithJSX('Warning Summary', () => (
  <div>
    <Card>
      <Card.Header>
        <Card.Title>Allergies</Card.Title>
      </Card.Header>
      <WarningSummary clickHandler={clickHandler} />
      <Card.List>
        {allergies.map(allergy => (
          <AllergySummary allergy={allergy} />
        ))}
      </Card.List>
    </Card>
  </div>
))

stories.addWithJSX('Error Summary', () => (
  <div>
    <Card>
      <Card.Header>
        <Card.Title>Allergies</Card.Title>
      </Card.Header>
      <Card.Body>
        <Card.List>
          <ErrorSummary clickHandler={clickHandler} />
          <ListItem>No Data</ListItem>
        </Card.List>
      </Card.Body>
    </Card>
  </div>
))

stories.addWithJSX('Missing Data Summary', () => (
  <div>
    <Card>
      <Card.Header>
        <Card.Title>Allergies</Card.Title>
      </Card.Header>
      <Card.Body>
        <Card.List>
          <MissingDataSummary
            missingData={['Humber']}
            partialData={['York (2 missing)']}
            completeData={['Hull And East Yorkshire', 'Rotherham']}
            noData={['Bradford']}
          />
        </Card.List>
      </Card.Body>
    </Card>
  </div>
))

stories.addWithJSX('No Data', () => (
  <div>
    <Card>
      <Card.Header>
        <Card.Title>Allergies</Card.Title>
      </Card.Header>
    </Card>
  </div>
))
