import React from 'react'
import { storiesOf } from '@storybook/react'
import JSXAddon from 'storybook-addon-jsx'

import readme from '@ltht-react/card/README.md'
import { Card, CardHeader, CardBody, CardFooter, CardList, CardListItem } from '@ltht-react/card'

const stories = storiesOf('Organisms - Styled|Card', module)

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
      <CardList>
        <CardListItem>Item 1</CardListItem>
        <CardListItem>Item 2</CardListItem>
      </CardList>
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
      <CardList clickable>
        <CardListItem>Item 1</CardListItem>
        <CardListItem>Item 2</CardListItem>
      </CardList>
      <CardFooter>Footer</CardFooter>
    </Card>
  </div>
))

stories.addWithJSX('No Data', () => (
  <Card noData>
    <CardHeader>
      <h3>Header</h3>
    </CardHeader>
  </Card>
))
