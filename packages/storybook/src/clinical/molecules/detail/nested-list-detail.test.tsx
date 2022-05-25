import { render, screen } from '@testing-library/react'
import { NestedListDetail } from '@ltht-react/type-detail'

describe('NarrativeDetail', () => {
  it('should show children if available', async () => {
    render(
      <NestedListDetail term="Nested list">
        <ul>
          <li>A list entry</li>
        </ul>
      </NestedListDetail>
    )

    await screen.findByText('Nested list')
    await screen.findByText('A list entry')
  })

  it('should still render term without children', async () => {
    render(<NestedListDetail term="Nested list" showIfEmpty />)

    await screen.findByText('Nested list')
  })

  it('should not render the term if no children and render if empty is false', () => {
    render(<NestedListDetail term="Nested list" showIfEmpty={false} />)

    expect(screen.queryByText('Nested list')).toBeNull()
  })

  it('should not wrap the children in a description definition if told not to', () => {
    const { container } = render(
      <NestedListDetail term="Nested list" wrapDescription={false}>
        Unwrapped children
      </NestedListDetail>
    )

    expect(container.querySelectorAll('dd').length).toBe(0)
  })

  it('should wrap children in description definition by default', async () => {
    const { container } = render(
      <NestedListDetail term="Nested list" showIfEmpty>
        <ul>
          <li>A list entry</li>
        </ul>
      </NestedListDetail>
    )

    expect(container.querySelectorAll('dd').length).toBe(1)
  })
})
