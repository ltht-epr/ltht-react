import { Narrative } from '@ltht-react/types'
import { render, screen } from '@testing-library/react'
import NarrativeDetail from './narrative-detail'

describe('NarrativeDetail', () => {
  const narrative: Narrative = {
    text: 'The narrative text',
    div: '<div>The narrative xhtml</div>',
  }
  it('should show narrative text if available', async () => {
    render(<NarrativeDetail narrative={narrative} />)

    await screen.findByText('Text')
    await screen.findAllByText(narrative.text)
  })
  it('should not show the narrative xhtml', async () => {
    render(<NarrativeDetail narrative={narrative} />)

    await screen.findByText('Text')
    expect(screen.queryByText('The narrative xhtml')).toBeNull()
  })
  it('should show nothing if no narrative is provided', async () => {
    render(<NarrativeDetail />)

    expect(screen.queryByText('Text')).toBeNull()
  })
})
