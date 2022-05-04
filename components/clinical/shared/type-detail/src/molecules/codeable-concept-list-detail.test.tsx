import { CodeableConcept } from '@ltht-react/types'
import { render, screen } from '@testing-library/react'
import CodeableConceptListDetail from './codeable-concept-list-detail'

describe('CodeableConceptListDetail', () => {
  const concepts: CodeableConcept[] = [
    {
      text: 'Concept text 1',
      coding: [
        {
          code: '1234',
          display: 'Concept text 1',
        },
      ],
    },
    {
      text: 'Concept text 2',
      coding: [
        {
          code: '2345',
          display: 'Concept text 2',
        },
      ],
    },
  ]

  it('shows title and value when available', async () => {
    render(<CodeableConceptListDetail term="Some concepts" concepts={concepts} />)

    await screen.findByText('Some concepts')
    await screen.findByText('Concept text 1')
    await screen.findByText('Concept text 2')
  })

  it('shows nothing when there is no concept', async () => {
    render(<CodeableConceptListDetail term="Some concepts" />)

    expect(screen.queryByText('Some concepts')).toBeNull()
  })
})
