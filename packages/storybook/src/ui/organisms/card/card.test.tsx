import { render } from '@testing-library/react'

import Card from '@ltht-react/card'
import { createRef } from 'react'

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

  it('renders children correctly', () => {
    const { getByText } = render(
      <Card>
        <Card.Header>Header Content</Card.Header>
        <Card.Body>Body Content</Card.Body>
        <Card.Footer>Footer Content</Card.Footer>
      </Card>
    )
    expect(getByText('Header Content')).toBeInTheDocument()
    expect(getByText('Body Content')).toBeInTheDocument()
    expect(getByText('Footer Content')).toBeInTheDocument()
  })

  it('forwards ref to the root element', () => {
    const ref = createRef<HTMLDivElement>()
    render(
      <Card ref={ref}>
        <Card.Body>Body</Card.Body>
      </Card>
    )
    expect(ref.current).not.toBeNull()
    expect(ref.current?.nodeName).toBe('DIV')
  })

  it('forwards ref to Card.Body', () => {
    const ref = createRef<HTMLDivElement>()
    render(
      <Card>
        <Card.Body ref={ref}>Body</Card.Body>
      </Card>
    )
    expect(ref.current).not.toBeNull()
    expect(ref.current?.nodeName).toBe('DIV')
    expect(ref.current?.textContent).toBe('Body')
  })

  it('forwards ref to Card.Footer', () => {
    const ref = createRef<HTMLDivElement>()
    render(
      <Card>
        <Card.Footer ref={ref}>Footer</Card.Footer>
      </Card>
    )
    expect(ref.current).not.toBeNull()
    expect(ref.current?.nodeName).toBe('DIV')
    expect(ref.current?.textContent).toBe('Footer')
  })

  it('forwards ref to Card.Banner', () => {
    const ref = createRef<HTMLDivElement>()
    render(
      <Card>
        <Card.Banner ref={ref} status="warning">
          Banner
        </Card.Banner>
      </Card>
    )
    expect(ref.current).not.toBeNull()
    expect(ref.current?.nodeName).toBe('DIV')
    expect(ref.current?.textContent).toBe('Banner')
  })

  it('renders Card.Banner content', () => {
    const { getByText } = render(
      <Card>
        <Card.Banner status="warning">Banner Content</Card.Banner>
      </Card>
    )
    expect(getByText('Banner Content')).toBeInTheDocument()
  })

  it('forwards ref to Card.List', () => {
    const ref = createRef<HTMLUListElement>()
    render(
      <Card>
        <Card.List ref={ref}>
          <Card.ListItem>Item 1</Card.ListItem>
        </Card.List>
      </Card>
    )
    expect(ref.current).not.toBeNull()
    expect(ref.current?.nodeName).toBe('UL')
    expect(ref.current?.children.length).toBe(1)
    expect(ref.current?.children[0].textContent).toBe('Item 1')
  })

  it('forwards ref to Card.ListItem', () => {
    const ref = createRef<HTMLLIElement>()
    render(
      <Card>
        <Card.List>
          <Card.ListItem ref={ref}>List Item Ref</Card.ListItem>
        </Card.List>
      </Card>
    )
    expect(ref.current).not.toBeNull()
    expect(ref.current?.nodeName).toBe('LI')
    expect(ref.current?.textContent).toBe('List Item Ref')
  })

  it('renders Card.ListItem with correct classes', () => {
    const { container } = render(
      <Card>
        <Card.List>
          <Card.ListItem>List Item 1</Card.ListItem>
          <Card.ListItem>List Item 2</Card.ListItem>
        </Card.List>
      </Card>
    )
    const listItems = container.querySelectorAll('.card__list-item')
    expect(listItems.length).toBe(2)
    expect(listItems[0].textContent).toBe('List Item 1')
    expect(listItems[1].textContent).toBe('List Item 2')
  })
  it('renders Card.List with correct classes', () => {
    const { container } = render(
      <Card>
        <Card.List>
          <Card.ListItem>List Item 1</Card.ListItem>
          <Card.ListItem>List Item 2</Card.ListItem>
        </Card.List>
      </Card>
    )
    const list = container.querySelector('.card__list')
    expect(list).toBeInTheDocument()
    expect(list?.children.length).toBe(2)
    expect(list?.children[0].textContent).toBe('List Item 1')
    expect(list?.children[1].textContent).toBe('List Item 2')
  })
  it('renders Card.Subtitle', () => {
    const { getByText } = render(
      <Card>
        <Card.Subtitle>Subtitle Content</Card.Subtitle>
      </Card>
    )
    expect(getByText('Subtitle Content')).toBeInTheDocument()
  })
  it('renders Card.Text', () => {
    const { getByText } = render(
      <Card>
        <Card.Text>Text Content</Card.Text>
      </Card>
    )
    expect(getByText('Text Content')).toBeInTheDocument()
  })
  it('renders Card.Title', () => {
    const { getByText } = render(
      <Card>
        <Card.Title>Title Content</Card.Title>
      </Card>
    )
    expect(getByText('Title Content')).toBeInTheDocument()
  })
  it('applies custom classes', () => {
    const { container } = render(
      <Card classes="custom-class">
        <Card.Header>Header</Card.Header>
        <Card.Body>Body</Card.Body>
        <Card.Footer>Footer</Card.Footer>
      </Card>
    )
    const card = container.querySelector('.card.custom-class')
    expect(card).toBeInTheDocument()
    expect(card?.classList.contains('custom-class')).toBe(true)
  })
})
