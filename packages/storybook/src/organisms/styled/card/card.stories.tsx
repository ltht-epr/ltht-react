import React from 'react'
import { storiesOf } from '@storybook/react'
import JSXAddon from 'storybook-addon-jsx'

import readme from '@ltht-react/card/README.md'
import Card from '@ltht-react/card'
import AllergySummary from '@ltht-react/allergy-summary'
import { InfoSummary, WarningSummary, ErrorSummary, MissingDataSummary } from '@ltht-react/summary'
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
  </>
))

stories.addWithJSX('With Footer', () => (
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
))

stories.addWithJSX('With List', () => (
  <div>
    <Card>
      <Card.Header>
        <Card.Title>Header</Card.Title>
      </Card.Header>
      <Card.List>
        <Card.ListItem>Item 1</Card.ListItem>
        <Card.ListItem>Item 2</Card.ListItem>
      </Card.List>
    </Card>
  </div>
))

stories.addWithJSX('List (Clickable)', () => (
  <div>
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
          <Card.ListItem>
            <AllergySummary allergy={allergy} />
          </Card.ListItem>
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
      <ErrorSummary clickHandler={clickHandler} />
      <Card.List>
        <Card.ListItem>No Data</Card.ListItem>
      </Card.List>
    </Card>
  </div>
))

stories.addWithJSX('Missing Data Summary', () => (
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
