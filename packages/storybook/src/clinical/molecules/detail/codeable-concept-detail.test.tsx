import { render, screen } from '@testing-library/react'

import { CodeableConceptDetail } from '@ltht-react/type-detail'

import { codeableConcept } from './detail.fixtures'

describe('CodeableConceptDetail', () => {
  it('shows title and value when available', async () => {
    render(<CodeableConceptDetail term="Some concepts" concept={codeableConcept} />)

    await screen.findByText('Some concepts')
    await screen.findByText('GP')
  })

  it('shows nothing when there is no concept', async () => {
    render(<CodeableConceptDetail term="Some concepts" />)

    expect(screen.queryAllByText('Some concepts').length).toBe(0)
  })

  it('shows the term with no value if told to do so', async () => {
    render(<CodeableConceptDetail term="Some concepts" showIfEmpty />)

    await screen.findByText('Some concepts')
  })
  // TODO: Tests for external links
})
