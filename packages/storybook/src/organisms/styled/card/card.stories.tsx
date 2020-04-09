/** @jsx jsx */
import React from 'react'
import { css, jsx } from '@emotion/core'
import { storiesOf } from '@storybook/react'
import JSXAddon from 'storybook-addon-jsx'

import readme from '@ltht-react/card/README.md'
import { ListItem } from '@ltht-react/list'
import { Card, CardHeader, CardBody, CardFooter, CardList } from '@ltht-react/card'
import { WarningBanner } from '@ltht-react/banner'
import { ExclamationIcon, ChevronIcon } from '@ltht-react/icon'

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

const handleClick = (e: React.MouseEvent<HTMLElement, MouseEvent>): void => {
  e.preventDefault()
}

const styles = css`
  flex-grow: 1;
  padding-left: 0.5rem;
`

stories.addWithJSX('List With Missing Data', () => (
  <div>
    <Card>
      <CardHeader>
        <h3>Header</h3>
      </CardHeader>
      <CardBody>
        <CardList clickable>
          <WarningBanner clickHandler={handleClick}>
            <i>
              <ExclamationIcon size="large" status="amber" />
            </i>
            <div css={styles}>Missing Data</div>
            <i>
              <ChevronIcon size="large" direction="right" />
            </i>
          </WarningBanner>
          <ListItem>Item 1</ListItem>
          <ListItem>Item 2</ListItem>
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
