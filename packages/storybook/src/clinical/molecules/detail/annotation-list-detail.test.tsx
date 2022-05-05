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

  it('shows nothing when there are no notes', async () => {
    render(<AnnotationListDetail term="Some annotations" notes={[]} />)

    expect(screen.queryAllByText('Some annotations').length).toBe(0)
  })
})
