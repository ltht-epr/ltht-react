import React from 'react'
import { mount } from 'enzyme'
import ReactDOM from 'react-dom'

import Card from '@ltht-react/card'

const components = (
  <>
    <Card>
      <Card.Header>
        <Card.Header>Heading</Card.Header>
      </Card.Header>
      <Card.Body>Body</Card.Body>
      <Card.Footer>Footer</Card.Footer>
    </Card>
    <Card>
      <Card.Header>
        <Card.Header>Heading</Card.Header>
      </Card.Header>
      <Card.Body>
        <Card.Text>Body text</Card.Text>
      </Card.Body>
      <Card.List>
        <Card.ListItem>Item 1</Card.ListItem>
        <Card.ListItem>Item 2</Card.ListItem>
      </Card.List>
      <Card.Footer>Footer</Card.Footer>
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
