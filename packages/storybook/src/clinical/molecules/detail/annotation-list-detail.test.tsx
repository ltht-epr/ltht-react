import { render, screen } from '@testing-library/react'
import { AnnotationListDetail } from '@ltht-react/type-detail'

import { annotations } from './detail.fixtures'

describe('AnnotationListDetail', () => {
  it('shows title and value when available', async () => {
    render(<AnnotationListDetail term="Some annotations" notes={annotations} />)

    await screen.findByText(annotations[0].text)
    await screen.findByText(annotations[1].text)
    await screen.findByText(annotations[1].author?.display || '')
  })

  it('shows nothing when passed an empty list of notes', async () => {
    render(<AnnotationListDetail term="Some annotations" notes={[]} />)

    expect(screen.queryByText('Some annotations')).toBeNull()
  })

  it('shows nothing when no notes are passed', async () => {
    render(<AnnotationListDetail term="Some annotations" />)

    expect(screen.queryByText('Some annotations')).toBeNull()
  })

  it('shows the term with no value if told to', async () => {
    const showIfEmpty = true
    render(<AnnotationListDetail term="Some annotations" showIfEmpty={showIfEmpty} />)

    await screen.findByText('Some annotations')
  })
})
