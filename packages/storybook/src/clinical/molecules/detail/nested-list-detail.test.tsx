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
  it('should still render without children', async () => {
    render(<NestedListDetail term="Nested list" />)

    await screen.findByText('Nested list')
  })
})
