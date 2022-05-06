import { CodeableConcept } from '@ltht-react/types'
import { render, screen } from '@testing-library/react'
import { CodeableConceptListDetail } from '@ltht-react/type-detail'

import { codeableConcept } from './detail.fixtures'

describe('CodeableConceptListDetail', () => {
  const concepts: CodeableConcept[] = [
    codeableConcept,
    {
      text: 'Concept text 2',
      coding: [
        {
          code: '2345',
          display: 'Concept text 2 coding',
        },
      ],
    },
  ]

  it('shows title and value when available', async () => {
    render(<CodeableConceptListDetail term="Some concepts" concepts={concepts} />)

    await screen.findByText('Some concepts')
    await screen.findByText('GP')
    await screen.findByText('Concept text 2 coding')
  })

  it('shows nothing when there is no concept', () => {
    render(<CodeableConceptListDetail term="Some concepts" />)

    expect(screen.queryByText('Some concepts')).toBeNull()
  })

  it('shows nothing when the concept list is empty', () => {
    render(<CodeableConceptListDetail term="Some concepts" concepts={[]} />)

    expect(screen.queryByText('Some concepts')).toBeNull()
  })

  it('shows the term with no value if told to', async () => {
    render(<CodeableConceptListDetail term="Some concepts" showIfEmpty />)

    await screen.findByText('Some concepts')
  })

  // TODO: Tests for external links
})
