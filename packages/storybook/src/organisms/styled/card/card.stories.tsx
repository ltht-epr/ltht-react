import React from 'react'
import { storiesOf } from '@storybook/react'
import JSXAddon from 'storybook-addon-jsx'

import readme from '@ltht-react/card/README.md'
import { ListItem } from '@ltht-react/list'
import { MissingDataSummary, InfoSummary, WarningSummary, ErrorSummary } from '@ltht-react/summary'
import { Card, CardHeader, CardBody, CardFooter, CardList } from '@ltht-react/card'
import AllergySummary from '@ltht-react/allergy-summary'
import allergies from '../../clinical/allergies/allergy.fixtures'

const stories = storiesOf('Organisms - Styled|Card', module) as any

stories.addWithJSX = JSXAddon.addWithJSX

stories.addParameters({
  readme: {
    sidebar: readme,
  },
})

const clickHandler = (): void => {
  console.log('Handler clicked')
}

stories.addWithJSX('Basic', () => (
  <Card>
    <CardHeader>
      <h3>Header</h3>
    </CardHeader>
    <CardBody>Body</CardBody>
  </Card>
))

stories.addWithJSX('Footer', () => (
  <Card>
    <CardHeader>
      <h3>Header</h3>
    </CardHeader>
    <CardBody>Body</CardBody>
    <CardFooter>Footer</CardFooter>
  </Card>
))

stories.addWithJSX('List', () => (
  <div>
    <Card>
      <CardHeader>
        <h3>Header</h3>
      </CardHeader>
      <CardBody>
        <CardList>
          <ListItem>Item 1</ListItem>
          <ListItem>Item 2</ListItem>
        </CardList>
      </CardBody>
      <CardFooter>Footer</CardFooter>
    </Card>
  </div>
))

stories.addWithJSX('List (Clickable)', () => (
  <div>
    <Card>
      <CardHeader>
        <h3>Header</h3>
      </CardHeader>
      <CardBody>
        <CardList clickable>
          <ListItem>Item 1</ListItem>
          <ListItem>Item 2</ListItem>
        </CardList>
      </CardBody>
      <CardFooter>Footer</CardFooter>
    </Card>
  </div>
))

stories.addWithJSX('Info Summary', () => (
  <div>
    <Card>
      <CardHeader>
        <h3>Allergies</h3>
      </CardHeader>
      <CardBody>
        <CardList clickable>
          <InfoSummary clickHandler={clickHandler} />
          <AllergySummary allergies={allergies} />
        </CardList>
      </CardBody>
    </Card>    
  </div>
))

stories.addWithJSX('Warning Summary', () => (
  <div>
    <Card>
      <CardHeader>
        <h3>Allergies</h3>
      </CardHeader>
      <CardBody>
        <CardList clickable>
          <WarningSummary clickHandler={clickHandler} />
          <AllergySummary allergies={allergies} />
        </CardList>
      </CardBody>
    </Card>    
  </div>
))

stories.addWithJSX('Error Summary', () => (
  <div>
    <Card>
      <CardHeader>
        <h3>Allergies</h3>
      </CardHeader>
      <CardBody>
        <CardList clickable>
          <ErrorSummary clickHandler={clickHandler} />          
          <ListItem>No Data</ListItem>
        </CardList>
      </CardBody>
    </Card>    
  </div>
))

stories.addWithJSX('Missing Data Summary', () => (
  <div>
    <Card>
      <CardHeader position="center">
        <h3>Allergies</h3>
      </CardHeader>
      <CardBody>
        <CardList clickable>
          <MissingDataSummary
            missingData={['Humber']}
            partialData={['York (2 missing)']}
            completeData={['Hull And East Yorkshire', 'Rotherham']}
            noData={['Bradford']}
          />
        </CardList>
      </CardBody>
    </Card>
  </div>
))

stories.addWithJSX('No Data', () => (
  <div>
    <Card noData>
      <CardHeader>
        <h3>Header</h3>
      </CardHeader>
    </Card>
  </div>
))
