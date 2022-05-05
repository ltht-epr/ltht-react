import { render, screen } from '@testing-library/react'
import { ResourceReferenceDetail } from '@ltht-react/type-detail'

import { resourceReference } from './detail.fixtures'

describe('ResourceReferenceDetail', () => {
  it('should show a term and details if available', async () => {
    render(<ResourceReferenceDetail term="RRD" resourceReference={resourceReference} />)

    await screen.findByText('RRD')
    await screen.findByText(resourceReference.display)
    expect(screen.queryByText(resourceReference.typeName)).toBeNull()
  })

  it('should fall back to typeName if no term is provided', async () => {
    render(<ResourceReferenceDetail resourceReference={resourceReference} />)

    await screen.findByText(resourceReference.display)
    await screen.findByText(resourceReference.typeName)
  })

  it('should show nothing when no resource reference is provided', () => {
    render(<ResourceReferenceDetail />)

    expect(screen.queryByText(resourceReference.display)).toBeNull()
  })
})
