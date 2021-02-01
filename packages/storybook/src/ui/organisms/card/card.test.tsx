import React from 'react'
import { render } from '@testing-library/react'

import Card from '@ltht-react/card'

describe('Card', () => {
  it('Renders', () => {
    render(
      <Card>
        <Card.Header>
          <Card.Header>Heading</Card.Header>
        </Card.Header>
        <Card.Body>Body</Card.Body>
        <Card.Footer>Footer</Card.Footer>
      </Card>
    )
  })
})
