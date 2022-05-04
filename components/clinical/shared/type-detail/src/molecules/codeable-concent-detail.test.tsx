import { CodeableConcept } from '@ltht-react/types'
import { render, screen } from '@testing-library/react'
import CodeableConceptDetail from './codeable-concept-detail'

describe('CodeableConceptDetail', () => {
  const concept: CodeableConcept = {
    text: 'Concept text',
    coding: [
      {
        code: '1234',
        display: 'Concept text',
      },
    ],
  }

  it('shows title and value when available', async () => {
    render(<CodeableConceptDetail term="Some concepts" concept={concept} />)

    await screen.findByText('Some concepts')
    await screen.findByText('Concept text')
  })

  it('shows nothing when there is no concept', async () => {
    render(<CodeableConceptDetail term="Some concepts" />)

    expect(screen.queryAllByText('Some concepts').length).toBe(0)
  })
})
