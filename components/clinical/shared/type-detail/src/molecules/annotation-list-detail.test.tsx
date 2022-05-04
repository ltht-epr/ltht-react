import { Annotation } from '@ltht-react/types'
import { render, screen } from '@testing-library/react'

import AnnotationListDetail from './annotation-list-detail'

describe('AnnotationListDetail', () => {
  const notes: Annotation[] = [{ text: 'First note' }]

  it('shows title and value when available', async () => {
    render(<AnnotationListDetail term="Some annotations" notes={notes} />)

    await screen.findByText('Some annotations')
    await screen.findByText('First note')
  })

  it('shows nothing when there are no notes', async () => {
    render(<AnnotationListDetail term="Some annotations" notes={[]} />)

    expect(screen.queryAllByText('Some annotations').length).toBe(0)
  })
})
