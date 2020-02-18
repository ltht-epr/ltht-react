import React from 'react'
import { mount } from 'enzyme'
import ReactDOM from 'react-dom'

import { Card, CardBody, CardHeader, CardFooter, CardList, CardListItem } from '@ltht-react/card'

const components = (
  <>
    <Card>
      <CardHeader>
        <h3>Heading</h3>
      </CardHeader>
      <CardBody>Body</CardBody>
      <CardFooter>Footer</CardFooter>
    </Card>
    <Card>
      <CardHeader>
        <h3>Heading</h3>
      </CardHeader>
      <CardList>
        <CardListItem>Item 1</CardListItem>
        <CardListItem>Item 2</CardListItem>
      </CardList>
      <CardFooter>Footer</CardFooter>
    </Card>
  </>
)

describe('Card', () => {
  it('renders without crashing', () => {
    const div = document.createElement('div')
    ReactDOM.render(components, div)
  })
  it('matches snapshot', () => {
    expect(mount(components)).toMatchSnapshot('wrapper mount')
  })
})
