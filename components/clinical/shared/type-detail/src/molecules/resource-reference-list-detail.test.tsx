import { ResourceReference } from '@ltht-react/types'
import { render, screen } from '@testing-library/react'

import ResourceReferenceListDetail from './resource-reference-list-detail'

describe('ResourceReferenceDetailList', () => {
  const resourceReferences: ResourceReference[] = [
    {
      display: 'A resource reference',
      typeName: 'Patient',
    },
    {
      display: 'A second resource reference',
      typeName: 'Doctor',
    },
  ]

  it('should show a term and details if available', async () => {
    render(<ResourceReferenceListDetail term="RRDL" resourceReferences={resourceReferences} />)

    await screen.findByText('RRDL')
    await screen.findByText('A Resource Reference')
    expect(screen.queryByText(resourceReferences[0].typeName)).toBeNull()

    await screen.findByText('A Second Resource Reference')
    expect(screen.queryByText(resourceReferences[1].typeName)).toBeNull()
  })

  it('should show nothing when no resource reference is provided', () => {
    render(<ResourceReferenceListDetail term="RRDL" />)

    expect(screen.queryByText('RRDL')).toBeNull()
    expect(screen.queryByText('A Resource Reference')).toBeNull()
    expect(screen.queryByText('A Second Resource Reference')).toBeNull()
  })
})
