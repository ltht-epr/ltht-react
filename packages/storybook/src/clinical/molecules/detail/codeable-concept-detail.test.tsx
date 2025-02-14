import { render, screen } from '@testing-library/react'

import { CodeableConceptDetail } from '@ltht-react/type-detail'
import { CodeableConcept } from '@ltht-react/types'

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

  it('filters out coding with have a system that is listed in the systemExclusionsFilter', async () => {
    const systemExclusionsFilter = ['https://exclusion-system.test']

    const testCodeableConcept: CodeableConcept = {
      coding: [
        { display: 'Code with no system', system: undefined },
        { display: 'Code with regular system', system: 'http://snomed.info/sct' },
        { display: 'Code with exclusion system', system: 'https://exclusion-system.test' },
      ],
    }

    render(
      <CodeableConceptDetail
        term="Some concepts"
        concept={testCodeableConcept}
        systemExclusionsFilter={systemExclusionsFilter}
      />
    )

    expect(screen.getByText('Code with no system, Code with regular system')).toBeVisible()
  })
  // TODO: Tests for external links
})
