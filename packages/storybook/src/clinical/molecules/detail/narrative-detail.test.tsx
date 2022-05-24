import { render, screen } from '@testing-library/react'
import { NarrativeDetail } from '@ltht-react/type-detail'

import { longNarrative, narrative, shortNarrative } from './detail.fixtures'

describe('NarrativeDetail', () => {
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

  it('should show the term with no value if told to', async () => {
    render(<NarrativeDetail showIfEmpty />)

    await screen.findByText('Text')
  })

  it('should not add full width class under 150 chars', () => {
    const { container } = render(<NarrativeDetail narrative={shortNarrative} />)

    expect(container.querySelector('dl')).not.toHaveClass('narrative-detail--full-width')
  })

  it('should add full width class over 150 chars', () => {
    const { container } = render(<NarrativeDetail narrative={longNarrative} />)

    expect(container.querySelector('dl')).toHaveClass('narrative-detail--full-width')
  })
})
