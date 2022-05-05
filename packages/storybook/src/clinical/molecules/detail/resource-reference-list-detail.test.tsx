import { ResourceReference } from '@ltht-react/types'
import { render, screen } from '@testing-library/react'

import { ResourceReferenceListDetail } from '@ltht-react/type-detail'
import { resourceReference } from './detail.fixtures'

describe('ResourceReferenceDetailList', () => {
  const resourceReferences: ResourceReference[] = [
    resourceReference,
    { ...resourceReference, display: 'Doe, John (dr)', typeName: 'Doctor' },
  ]

  it('should show a term and details if available', async () => {
    render(<ResourceReferenceListDetail term="RRDL" resourceReferences={resourceReferences} />)

    await screen.findByText('RRDL')
    await screen.findByText('Smith, John (dr)')
    await screen.findByText('Doe, John (dr)')
  })

  it('should show nothing when no resource reference is provided', () => {
    render(<ResourceReferenceListDetail term="RRDL" />)

    expect(screen.queryByText('RRDL')).toBeNull()
    expect(screen.queryByText('Smith, John (dr)')).toBeNull()
    expect(screen.queryByText('Doe, John (dr)')).toBeNull()
  })
})
