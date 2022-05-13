import { render, screen } from '@testing-library/react'
import { NarrativeDetail } from '@ltht-react/type-detail'

import { narrative } from './detail.fixtures'

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
})
