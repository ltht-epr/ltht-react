import React from 'react'
import { storiesOf } from '@storybook/react'
import JSXAddon from 'storybook-addon-jsx'

import readme from '@ltht-react/card/README.md'
import { ListItem } from '@ltht-react/list'
import { MissingDataSummary, MissingDataWarning } from '@ltht-react/summary'
import { Card, CardHeader, CardBody, CardFooter, CardList } from '@ltht-react/card'

const stories = storiesOf('Organisms - Styled|Card', module) as any

stories.addWithJSX = JSXAddon.addWithJSX

stories.addParameters({
  readme: {
    sidebar: readme,
  },
})

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

stories.addWithJSX('Missing Data Warning', () => (
  <div>
    <Card>
      <CardHeader>
        <h3>Header</h3>
      </CardHeader>
      <CardBody>
        <CardList clickable>
          <MissingDataWarning />
          <ListItem>Item 1</ListItem>
          <ListItem>Item 2</ListItem>
        </CardList>
      </CardBody>
      <CardFooter>Footer</CardFooter>
    </Card>
  </div>
))

stories.addWithJSX('Missing Data Summary', () => (
  <div>
    <Card>
      <CardHeader position="center">
        <h3>Header</h3>
      </CardHeader>
      <CardBody>
        <CardList clickable>
          <MissingDataSummary
            noData={['Item 1', 'Item 2']}
            partialData={['Item 3', 'Item 4']}
            allData={['Item 5', 'Item 6']}
          />
        </CardList>
      </CardBody>
      <CardFooter>Footer</CardFooter>
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
